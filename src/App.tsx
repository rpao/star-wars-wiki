import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { MenuOptionModel } from './shared/model/menu-model';
import { Router } from './components/router/router';
import { SideNav } from './components/sidenav/sidenav';
import { VerticalMenu } from './components/menus/vertical-menu/vertical-menu';
import { MainMenuOptions } from './shared/constants/main-menu-options';
import { SWAPIEndpoint } from './shared/model/controller-model';

function App() {
  
  const mainMenu: MenuOptionModel[] = MainMenuOptions((menuController: SWAPIEndpoint) => mainMenuAction(menuController));
  const history = useHistory();

  function mainMenuAction(menuController: SWAPIEndpoint) {
    console.log(`mainMenuAction - received ${menuController}`);
    history.push(`/${menuController}/list/1`);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            Star Wars Wiki
          </p>
        </header>
        <div className="App-body">
          <SideNav left>
            <VerticalMenu menuOptions={mainMenu}></VerticalMenu>
          </SideNav>
          <div className='body-content right'>
            <Switch>
              <Route path={'/:controller/list/:page'} render={() => <Router list/>} />
              <Route path={'/:controller/detail/:id'} render={() => <Router/>} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
