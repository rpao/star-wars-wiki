import { SWAPIEndpoint } from "./controller-model";

export interface MenuOptionModel {
    id: number;
    controller: SWAPIEndpoint // controller of menu
    label: string;  // text displayed on menu
    info?: string;  // if exists, is the text displayed on menu tooltip
    action: Function    // action executed after clicking on menu option
}

export interface MenuModel {
    menuOptions: MenuOptionModel[];
}