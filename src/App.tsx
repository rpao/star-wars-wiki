import React from 'react';
import './App.css';
import VerticalMenu from './components/vertical-menu/vertical-menu';
import SideNav from './components/sidenav/sidenav';
import { MenuModel, MenuOptionModel } from './model/menu.model';
import { PageErrorModel } from './model/page-error-model';
import * as errorMessages from './constants/error-messages'
import { MainMenuOptions } from './constants/main-menu-options';

function App() {
  const initialPageError: PageErrorModel = {errorCode: 0, errorMessage: errorMessages.noErrorMessage}
  const sidebarChildren: InnerHTML = {innerHTML: ''}
  const mainMenu: MenuOptionModel[] = MainMenuOptions((menu: string) => {mainMenuAction(menu)});

  function mainMenuAction(menu: string) {
    console.log(`received ${menu}`);
  }

  // const [pageError, setPageErrorCode] = useState<PageErrorModel>(initialPageError);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Star Wars Wiki
        </p>
      </header>
      <div>
        <SideNav left>
          <VerticalMenu menuOptions={mainMenu}></VerticalMenu>
        </SideNav>
        {/* <PageError errorCode={pageError.errorCode} errorMessage={pageError.errorMessage}/> */}
      </div>
    </div>
  );
}

export default App;
