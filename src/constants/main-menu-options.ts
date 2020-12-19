import { MenuOptionModel } from "../model/menu.model";

export const MainMenuOptions = (action: Function): MenuOptionModel[] => {

    function mainMenuAction(menu: string) {
        if (action) {
            action(menu);
        }
    }

    return [{
        label: 'Option 1',
        action: () => mainMenuAction('Option 1')
      },
      {
        label: 'Option 2',
        action: () => mainMenuAction('Option 2')
      }];
}
