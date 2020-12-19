import './vertical-menu.css';
import { Button } from "@material-ui/core";
import { MenuModel, MenuOptionModel } from "../../model/menu.model";

const VerticalMenu = (props: MenuModel) => {
    const {menuOptions} = props;

    function handleMenuClick(menuOption: MenuOptionModel) {
        if (menuOption.action) {
            menuOption.action();
        }
    }

    return (
        <div className={'vertical-menu'}>
            { menuOptions
                .map((menuOption: MenuOptionModel) => {
                    return (
                        <Button key={menuOption.label} onClick={() => handleMenuClick(menuOption)}>
                        {menuOption.label}
                        </Button>
                    );
                })
            }
        </div>
    );
}

export default VerticalMenu;