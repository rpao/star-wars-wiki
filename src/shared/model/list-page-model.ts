import { SWAPIEndpoint } from "./controller-model";

export interface ListPageModel {
    controller: SWAPIEndpoint;
    page?: number;
}