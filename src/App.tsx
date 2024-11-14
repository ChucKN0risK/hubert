import data from '../api/data.json';
import './assets/styles/style.scss';
import Text from './components/01-atoms/Text/Text';
import Input from './components/02-molecules/Input/Input';
import Sidebar from './components/03-organisms/Sidebar/Sidebar';
import AssetList from './components/02-molecules/AssetList/AssetList';
import AssetInfo from './components/02-molecules/AssetInfo/AssetInfo';
import FolderList from './components/03-organisms/FolderList/FolderList';
import { FolderProvider } from './hooks/useFolder';
import { AssetProvider } from './hooks/useAsset';
import { ThemeProvider } from './hooks/useTheme';
// import ThemeSwitcher from './components/02-molecules/ThemeSwitcher/ThemeSwitcher';

function App() {
  const handleChange = (e: React.ChangeEventHandler<HTMLInputElement>) => {
    console.log(e);
  }

  return (
    <>
      <ThemeProvider>
        <FolderProvider>
          <AssetProvider>
            <Sidebar>
              <form action='post' className="search">
                <label htmlFor="search" className='u-visually-hidden'></label>
                <Input id='search' icon='search' placeholder='Search' onChange={() => handleChange} />
              </form>
              <Text>Folders</Text>
              <FolderList folders={data.children} />
            </Sidebar>
            <main>
              {/* <header>
                <ThemeSwitcher />
              </header> */}
              <AssetList />
            </main>
            <Sidebar>
              <AssetInfo />
            </Sidebar>
          </AssetProvider>
        </FolderProvider>
      </ThemeProvider>
    </>
  )
}

export default App
