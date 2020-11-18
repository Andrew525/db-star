import { Record } from "../item-details/item-details";
import ItemDetails from "../item-details";
import React from "react";
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => {
    return (
        <ItemDetails { ...props }>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
            <Record field="birthYear" label="Birth Year"/>
        </ItemDetails>
    );

};

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPersonById,
        getImageUrl: swapiService.getPersonImageUrl
    }
};

export default withSwapiService(mapMethodToProps)(PersonDetails);