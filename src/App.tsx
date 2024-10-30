// import { useState } from 'react'
import data from '../backend/data.json';
import './assets/styles/style.scss';
import Text from './components/01-atoms/Text/Text';
import Input from './components/02-molecules/Input/Input';
import Sidebar from './components/03-organisms/Sidebar/Sidebar';
import FolderList from './components/03-organisms/FolderList/FolderList';
import { useContext, useState } from 'react';
import { FolderContext } from './hooks/useFolder';
import { ThemeContext } from './hooks/useTheme';
import ThemeSwitcher from './components/02-molecules/ThemeSwitcher/ThemeSwitcher';

function App() {
  const handleChange = (e) => {
    console.log(e);
  }

  const [theme, setTheme] = useState('coco');
  const value = { theme, setTheme };
  console.log('current theme:', value.theme);


  const [selectedFolder, setSelectedFolder] = useState({});
  const folderCtx = { selectedFolder, setSelectedFolder };
  console.log('current folder', folderCtx.selectedFolder);


  return (
    <>
      <ThemeContext.Provider value={value}>
        <Sidebar>
          <Text variant='body-3'>Folders</Text>
          <FolderList folders={data.children} />
        </Sidebar>
        <main>
          <ThemeSwitcher />
          <header>
            <Input icon='search' placeholder='Search' onChange={() => handleChange} />
          </header>
          <FolderContext.Provider value={folderCtx}>
            {JSON.stringify(folderCtx.selectedFolder)}
          </FolderContext.Provider>
        </main>
        <Sidebar>
          Coucou
          {value.theme}
        </Sidebar>
      </ThemeContext.Provider>
    </>
  )
}

export default App
