import React from "react";
import { useHistory, useParams } from 'react-router-dom';
import { PageError } from "../../containers/access-page-error/access-page-error";
import { ListPage } from "../../containers/list-page/list-page";
import { RouterModel } from "../../shared/model/router-model";
import { ErrorMessageEnum } from "../../shared/constants/error-messages";
import { ErroCodesEnum } from "../../shared/enums/erro-codes-enum";
import { SWAPIEndpointEnum } from "../../shared/enums/sw-api-endpoint-enum";
import { RouterURLModel } from "../../shared/model/router-url-model";
import { DetailsPage } from "../../containers/details-page/details-page";
import { stringToNumber } from "../../utils/number-utils";

export const Router = (props: RouterModel) => {
    const {controller, page, id} = useParams<RouterURLModel>();
    const {list} = props;
    
    if (!controller) { 
        console.log(ErrorMessageEnum.noControllerFound);
        return <PageError errorCode={ErroCodesEnum.pageNotFound} errorMessage={ErrorMessageEnum.pageNotFound} />; 
    }

    switch(controller) {
        case SWAPIEndpointEnum.films:
            return list ?
                <ListPage controller={SWAPIEndpointEnum.films} page={stringToNumber(page)}/>
                :
                <DetailsPage controller={SWAPIEndpointEnum.films} id={stringToNumber(id)}/>;
        case SWAPIEndpointEnum.people:
            return list ?
                <ListPage controller={SWAPIEndpointEnum.people} page={stringToNumber(page)}/>
                :
                <DetailsPage controller={SWAPIEndpointEnum.people} id={stringToNumber(id)}/>;
        case SWAPIEndpointEnum.planets:
            return list ?
                <ListPage controller={SWAPIEndpointEnum.planets} page={stringToNumber(page)}/>
                :
                <DetailsPage controller={SWAPIEndpointEnum.planets} id={stringToNumber(id)}/>;
        case SWAPIEndpointEnum.species:
            return list ?
                <ListPage controller={SWAPIEndpointEnum.species} page={stringToNumber(page)}/>
                :
                <DetailsPage controller={SWAPIEndpointEnum.species} id={stringToNumber(id)}/>;
        case SWAPIEndpointEnum.starships:
            return list ?
                <ListPage controller={SWAPIEndpointEnum.starships} page={stringToNumber(page)}/>
                :
                <DetailsPage controller={SWAPIEndpointEnum.films} id={stringToNumber(id)}/>;
        case SWAPIEndpointEnum.vehicles:
            return list ?
                <ListPage controller={SWAPIEndpointEnum.vehicles} page={stringToNumber(page)}/>
                :
                <DetailsPage controller={SWAPIEndpointEnum.vehicles} id={stringToNumber(id)}/>;
        default:
            console.log(`ERROR: controller ${controller} not recognized.`);
            return <PageError errorCode={ErroCodesEnum.pageNotFound} errorMessage={`${ErrorMessageEnum.pageNotFound}`}/>
    }

}