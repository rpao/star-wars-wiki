import { MenuOptionModel } from "../model/menu-model";
import { SWAPIEndpointEnum } from "../enums/sw-api-endpoint-enum";
import { SWAPIEndpoint } from "../model/controller-model";

export const MainMenuOptions = (menuOptionAction?: Function): MenuOptionModel[] => {
  
  function heandleAction(menuController: SWAPIEndpoint) {
    if (menuOptionAction) {
      console.log('executing menuOptionAction');
      menuOptionAction(menuController);
    }
  }

  return [
    {
      id: 1,
      controller: SWAPIEndpointEnum.films,
      label: SWAPIEndpointEnum.films,
      info: `Access ${SWAPIEndpointEnum.films}`,
      action: () => heandleAction(SWAPIEndpointEnum.films)
    },
    {
      id: 2,
      controller: SWAPIEndpointEnum.people,
      label: SWAPIEndpointEnum.people,
      info: `Access ${SWAPIEndpointEnum.people}`,
      action: () => heandleAction(SWAPIEndpointEnum.people)
    },
    {
      id: 3,
      controller: SWAPIEndpointEnum.planets,
      label: SWAPIEndpointEnum.planets,
      info: `Access ${SWAPIEndpointEnum.planets}`,
      action: () => heandleAction(SWAPIEndpointEnum.planets)
    },
    {
      id: 4,
      controller: SWAPIEndpointEnum.species,
      label: SWAPIEndpointEnum.species,
      info: `Access ${SWAPIEndpointEnum.species}`,
      action: () => heandleAction(SWAPIEndpointEnum.species)
    },
    {
      id: 5,
      controller: SWAPIEndpointEnum.starships,
      label: SWAPIEndpointEnum.starships,
      info: `Access ${SWAPIEndpointEnum.starships}`,
      action: () => heandleAction(SWAPIEndpointEnum.starships)
    },
    {
      id: 6,
      controller: SWAPIEndpointEnum.vehicles,
      label: SWAPIEndpointEnum.vehicles,
      info: `Access ${SWAPIEndpointEnum.vehicles}`,
      action: () => heandleAction(SWAPIEndpointEnum.vehicles)
    }
  ];
}
