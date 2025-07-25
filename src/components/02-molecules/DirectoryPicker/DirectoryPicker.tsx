import { useEffect, useState } from 'react';

// Define types for directory structure
interface DirectoryItem {
  id: string;
  name: string;
  path: string;
  type?: 'file' | 'directory';
  lastModified?: string;
  size?: number;
  children?: DirectoryItem[];
}

function DirectoryPicker() {
  const [directoryHandle, setDirectoryHandle] = useState<FileSystemDirectoryHandle | null>(null);
  const [directoryStructure, setDirectoryStructure] = useState<DirectoryItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'info' | null; message: string }>({
    type: null,
    message: ''
  });
  const [shouldSave, setShouldSave] = useState<boolean>(false); // Control when to trigger the save

  // Check if File System Access API is supported
  const isFileSystemAccessSupported = 'showDirectoryPicker' in window;

  const handleSelectDirectory = async () => {
    if (!isFileSystemAccessSupported) {
      setStatus({
        type: 'error',
        message: 'File System Access API is not supported in your browser.'
      });
      return;
    }

    try {
      // Show directory picker
      const directoryHandle = await window.showDirectoryPicker();
      setDirectoryHandle(directoryHandle);
      setStatus({
        type: 'info',
        message: `Selected directory: ${directoryHandle.name}`
      });

      // Process the directory content
      await processDirectory(directoryHandle);
      // Set the flag to trigger saving after processing
      setShouldSave(true);
    } catch (error) {
      console.error('Error selecting directory:', error);
      if ((error as Error).name === 'AbortError') {
        setStatus({
          type: 'info',
          message: 'Directory selection was cancelled.'
        });
      } else {
        setStatus({
          type: 'error',
          message: `Error selecting directory: ${(error as Error).message}`
        });
      }
    }
  };

  const processDirectory = async (directoryHandle: FileSystemDirectoryHandle) => {
    setIsLoading(true);
    setDirectoryStructure(null);
    try {
      const fileList: File[] = [];

      // Create root directory structure
      const rootDir: DirectoryItem = {
        id: crypto.randomUUID(),
        name: directoryHandle.name,
        path: directoryHandle.name,
        type: 'directory',
        children: []
      };

      // Function to recursively process directories
      const processEntry = async (
        entry: FileSystemDirectoryHandle,
        path: string = '',
        parentDir: DirectoryItem
      ) => {
        for await (const [name, handle] of entry.entries()) {
          const entryPath = path ? `${path}/${name}` : name;

          if (handle.kind === 'file') {
            try {
              const fileHandle = handle as FileSystemFileHandle;
              const file = await fileHandle.getFile();

              // Add to directory structure
              if (parentDir.children) {
                parentDir.children.push({
                  id: crypto.randomUUID(),
                  name,
                  path: entryPath,
                  type: 'file',
                  size: file.size,
                  lastModified: new Date(file.lastModified).toISOString()
                });
              }
            } catch (error) {
              console.error(`Error processing file ${name}:`, error);
            }
          } else if (handle.kind === 'directory') {
            // Create directory item
            const dirItem: DirectoryItem = {
              id: crypto.randomUUID(),
              name,
              path: entryPath,
              type: 'directory',
              children: []
            };

            // Add to parent's children
            if (parentDir.children) {
              parentDir.children.push(dirItem);
            }

            // Process this directory's contents
            if ('entries' in handle) {
              await processEntry(handle as FileSystemDirectoryHandle, entryPath, dirItem);
            }
          }
        }
      };

      await processEntry(directoryHandle, directoryHandle.name, rootDir);
      setDirectoryStructure(rootDir);
      console.log('Directory structure:', rootDir);

      setStatus({
        type: 'success',
        message: `Successfully processed ${fileList.length} files.`
      });

    } catch (error) {
      console.error('Error processing directory:', error);
      setStatus({
        type: 'error',
        message: `Error processing directory: ${(error as Error).message}`
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveToServer = async () => {
    if (!directoryStructure) {
      setStatus({
        type: 'error',
        message: 'No files to save. Please select a directory first.'
      });
      return;
    }

    setIsLoading(true);
    setStatus({
      type: 'info',
      message: 'Saving directory content to server...'
    });

    try {
      // Prepare the directory content for saving
      const directoryContent = directoryStructure;

      // Send the directory content to the server
      const response = await fetch('http://localhost:3000/api/save-directory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ directoryContent }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: `Directory content saved successfully. File saved at: ${result.filePath}`
        });
      } else {
        throw new Error(result.error || 'Failed to save directory content');
      }
    } catch (error) {
      console.error('Error saving to server:', error);
      setStatus({
        type: 'error',
        message: `Error saving to server: ${(error as Error).message}`
      });
    } finally {
      setIsLoading(false);
      // Reset the flag after saving
      setShouldSave(false);
    }
  };

  // useEffect to trigger saveToServer when files are updated and shouldSave is true
  useEffect(() => {
    // Only call saveToServer if shouldSave is true AND files has content
    if (
      shouldSave &&
      directoryStructure &&
      Array.isArray(directoryStructure.children) &&
      directoryStructure.children.length > 0
    ) {
      saveToServer();
    }
  }, [shouldSave, directoryStructure]);

  return (
    <>
      <button type="button" onClick={handleSelectDirectory} disabled={isLoading}>Open directory</button>
      {status.type && (
        <div className={`p-4 rounded-md flex items-start ${status.type === 'success' ? 'bg-green-50 text-green-700' :
          status.type === 'error' ? 'bg-red-50 text-red-700' :
            'bg-blue-50 text-blue-700'
          }`}>
          {status.type === 'success' ? "ok" :
            status.type === 'error' ? "pacool" :
              'Pas OK 🚫'}
          <p>{status.message}</p>
        </div>
      )}
    </>
  );
}

export default DirectoryPicker;