// import { useState } from 'react'
import data from '../backend/data.json';
import './assets/styles/style.scss';
import Text from './components/01-atoms/Text/Text';
import Input from './components/02-molecules/Input/Input';
import Sidebar from './components/03-organisms/Sidebar/Sidebar';
import FolderList from './components/03-organisms/FolderList/FolderList';
import AssetList from './components/03-organisms/AssetList/AssetList';
import { FolderProvider } from './hooks/useFolder';
import { ThemeProvider } from './hooks/useTheme';
import ThemeSwitcher from './components/02-molecules/ThemeSwitcher/ThemeSwitcher';

function App() {
  const handleChange = (e) => {
    console.log(e);
  }

  return (
    <>
      <ThemeProvider>
        <FolderProvider>
          <Sidebar>
            <Text variant='body-3'>Folders</Text>
            <FolderList folders={data.children} />
          </Sidebar>
          <main>
            <ThemeSwitcher />
            <header>
              <Input icon='search' placeholder='Search' onChange={() => handleChange} />
            </header>
            <AssetList />
          </main>
          <Sidebar>
            Coucou
          </Sidebar>
        </FolderProvider>
      </ThemeProvider>
    </>
  )
}

export default App
