import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../../spinner/spinner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 10000
    };

    static propTypes = {
        updateInterval: (props, propName, componentName) => {
            const value = props[propName];
            if (typeof value === "number" && !isNaN(value)) {
                return null;
            }
            return new TypeError(`${ componentName } : ${ propName } must be number`);
        }
    };

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false,
        interval: null
    };

    componentDidMount() {
        this.updatePlanet();
        const updateInterval = this.props.updateInterval;
        this.interval = setInterval(this.updatePlanet, updateInterval);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    };

    onPlanetLoad = (planet) => {
        this.setState({ planet, loading: false });
    };

    onError = (error) => {
        this.setState({ error, loading: false });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 20) + 1;
        this.swapiService
            .getPlanetById(id)
            .then(this.onPlanetLoad)
            .catch(this.onError);
    };

    render() {
        const { planet, loading, error } = this.state;

        const content = loading ? <Spinner/> :
            (error ? <ErrorIndicator/> : <PlanetView planet={ planet }/>);

        return (
            <div className="random-planet jumbotron rounded">
                { content }
            </div>
        );
    }
}

// RandomPlanet.defaultProps = {
//     updateInterval: 10000
// };

const PlanetView = ({ planet }) => {
    const { id, name, diameter, population, rotationPeriod } = planet;

    //React.Fragment
    return (
        <>
            <img className="planet-image"
                 src={ `https://starwars-visualguide.com/assets/img/planets/${ id }.jpg` }/>

            <div>
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{ population }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{ rotationPeriod }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{ diameter }</span>
                    </li>
                </ul>
            </div>
        </>
    );
};