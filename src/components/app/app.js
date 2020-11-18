import React, { Component } from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import './app.css';
import ErrorIndicator from "../error-indicator";
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import DummyService from "../../services/dammy-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";

export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummyService : SwapiService;
            return { swapiService: new Service() };
        });
    };

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={ this.state.swapiService }>
                    <div className="stardb-app">
                        <Header onServiceChange={ this.onServiceChange }/>
                        <RandomPlanet/>

                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}