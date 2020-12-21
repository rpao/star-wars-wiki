import './vertical-menu.css';
import { Button } from "@material-ui/core";
import { MenuModel, MenuOptionModel } from "../../../shared/model/menu-model";
import { useState } from 'react';

const ACTIVE_OPTION= 'active-option';

export const VerticalMenu = (props: MenuModel) => {
    const {menuOptions} = props;
    const [selectedMenuOption, setSelectedMenuOption] = useState<MenuOptionModel>();
    
    function handleMenuClick(menu: MenuOptionModel) {
        if (menu.action) { 
            setSelectedMenuOption(menu)
            menu.action();
        }
    }

    function isSelectedMenu(menu: MenuOptionModel): string {
        return selectedMenuOption && menu.id === selectedMenuOption.id ? ACTIVE_OPTION : '';
    }

    return (
        <div className={'vertical-menu'}>
            { menuOptions
                .map((menuOption: MenuOptionModel) => {
                    return (
                        <Button className={`menu-button ${isSelectedMenu(menuOption)}`} key={menuOption.label} onClick={() => handleMenuClick(menuOption)}>
                        {menuOption.label}
                        </Button>
                    );
                })
            }
        </div>
    );
}