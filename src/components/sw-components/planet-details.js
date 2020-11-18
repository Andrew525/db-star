import { Record } from "../item-details/item-details";
import ItemDetails from "../item-details";
import React from "react";
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
    return (
        <ItemDetails { ...props }>
            <Record field="population" label="Population"/>
        </ItemDetails>);
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanetById,
        getImageUrl: swapiService.getPlanetImageUrl
    }
};

export default withSwapiService(mapMethodToProps)(PlanetDetails);