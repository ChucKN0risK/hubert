import Text from '../../01-atoms/Text/Text';
import Stack from '../../01-atoms/Stack/Stack';
import FormField from '../FormField/FormField';
import { useAssetContext } from '../../../hooks/useAsset';
import './AssetInfo.scss';
import TagList from '../TagList/TagList';
import { useEffect, useState } from 'react';

function Folder() {
  const { selectedAsset } = useAssetContext();

  const getAssetSize = () => {
    if (selectedAsset!.size! < 1000000) return `${Math.round(selectedAsset!.size! / 1000)} KB`;
    if (selectedAsset!.size! > 1000000 && selectedAsset!.size! < 1000000000) return `${(Math.round(selectedAsset!.size!) / 1000000).toFixed(1)} MB`;
  }

  const getAssetLastUpdateDate = () => new Date(selectedAsset!.lastModified!).toDateString();

  const getAssetNameWithoutExt = (name: string) => {
    return name.replace(/\.[^/.]+$/, '');
  }
  const setAssetName = (value: string) => {
    console.log('new name:', value.trim());
  }

  const [inputValue, setInputValue] = useState('');
  const [existingTags, setExistingTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTags = async () => {
    try {
      const response = await fetch('http://localhost:3000/tags');
      if (!response.ok) throw new Error('Failed to fetch tags');
      const data = await response.json();
      setExistingTags(data.tags);
    } catch (err) {
      setError('Failed to load tags');
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, [])

  const createTag = async (tag: string) => {
    try {
      const response = await fetch('http://localhost:3000/tags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: tag.toLowerCase() }),
      });
      if (!response.ok) throw new Error('Failed to save tag App.tsx');
      const newTag = await response.json();
      console.log(newTag);

      // setExistingTags(prev => [...prev, newTag]);
      // setInputValue('');
    } catch (err) {
      setError('Failed to load tags');
      console.log(err);
    }
  };

  const deleteTag = async (tag: string) => {
    console.log(tag);

    try {
      const response = await fetch('http://localhost:3000/tags', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: tag }),
      });
      if (!response.ok) throw new Error('Failed to delete tag App.tsx');
      const resp = await response.json();
      console.log(resp);

      // setExistingTags(prev => [...prev, newTag]);
      // setInputValue('');
    } catch (err) {
      setError('Failed to load tags');
      console.log(err);
    }
  };

  const addTag = (tag: string) => {
    console.log('tag to add', tag);
  };

  // const deleteTag = (tag: string) => {
  //   console.log('tag to delete', tag);
  // };

  if (selectedAsset) {
    return (
      <Stack className='m-asset-info' gap={4}>
        <img src={`http://localhost:3000/assets/${selectedAsset.path}`} alt='' />
        <div className='m-asset-info__section'>
          <form action='post'>
            <FormField
              defaultValue={getAssetNameWithoutExt(selectedAsset.name)}
              name='Name'
              onChange={() => setAssetName}
            />
          </form>
        </div>
        <div className='m-asset-info__section'>
          <Text>Tags</Text>
          <TagList
            tags={selectedAsset.tags}
            existingTags={existingTags}
            onTagCreation={(tag) => createTag(tag)}
            onTagAddition={(tag) => addTag(tag)}
            onTagDeletion={(tag) => deleteTag(tag)}
          />
        </div>
        <Stack className='m-asset-info__section' gap={2}>
          <Text>Properties</Text>
          <ul className='u-list-reset'>
            <Stack as='li' axis='x'>
              <Text as='span' variant='body-3'>Dimensions</Text>
              <Text as='span' variant='body-3'>1600 x 1200</Text>
            </Stack>
            <Stack as='li' axis='x'>
              <Text as='span' variant='body-3'>Size</Text>
              <Text as='span' variant='body-3'>{getAssetSize()}</Text>
            </Stack>
            <Stack as='li' axis='x'>
              <Text as='span' variant='body-3'>Last updated</Text>
              <Text as='span' variant='body-3'>{getAssetLastUpdateDate()}</Text>
            </Stack>
          </ul>
        </Stack>
      </Stack>
    )
  } else {
    return (
      <div className="m-asset-info">
        <Text variant='body-3' className='m-asset-info__placeholder'>Please select an asset</Text>
      </div>
    )
  }
}

export default Folder