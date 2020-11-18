import React from "react";
import { compose, withData, withRenderFunction, withSwapiService } from "../hoc-helpers";
import ItemList from "../item-list";

const renderName = (i) => `${ i.name }`;
const mapPersonMethodToProps = (swapiService) => {
    return { getData: swapiService.getAllPeople }
};
const mapPlanetMethodToProps = ({ getAllPlanets }) => {
    return { getData: getAllPlanets }
};
const mapStarshipMethodToProps = ({ getAllStarships }) => {
    return { getData: getAllStarships }
};

const PersonList = compose(
    withSwapiService(mapPersonMethodToProps),
    withData,
    withRenderFunction(renderName))
(ItemList);

const PlanetList = compose(
    withSwapiService(mapPlanetMethodToProps),
    withData,
    withRenderFunction(renderName))
(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodToProps),
    withData,
    withRenderFunction(renderName))
(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};