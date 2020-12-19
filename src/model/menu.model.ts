export interface MenuOptionModel {
    label: string;      // text displayed on menu
    infoText?: string;  // if exists, is the text displayed on menu tooltip
    action: Function;   // action executed in onClick
}

export interface MenuModel {
    menuOptions: MenuOptionModel[];
}