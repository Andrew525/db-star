import { Record } from "../item-details/item-details";
import ItemDetails from "../item-details";
import React from "react";
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {
    return (
        <ItemDetails { ...props }>
            <Record field="model" label="Model"/>
            <Record field="length" label="Eye Color"/>
            <Record field="costInCredits" label="Cost"/>
        </ItemDetails>
    );
};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getStarshipById,
        getImageUrl: swapiService.getStarshipImageUrl
    }
};

export default withSwapiService(mapMethodToProps)(StarshipDetails);