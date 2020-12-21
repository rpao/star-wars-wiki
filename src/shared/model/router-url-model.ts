import { SWAPIEndpoint } from "./controller-model";

export interface RouterURLModel {
    controller: SWAPIEndpoint | undefined;
    page?: string | undefined;
    id?: string | undefined;
}