import SwapiMapper from "./swapi-mapper";

export default class SwapiService {

    /**
     * origin base url -> https://swapi.dev
     * See src/setupProxy.js file or property proxy in package.json
     */
    _apiBaseUrl = '';
    _imageBaseUrl = `https://starwars-visualguide.com/assets/img`;

    swapiMapper = new SwapiMapper();

    getResource = async (path) => {
        const res = await fetch(`${ this._apiBaseUrl }${ path }`);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${ path }, received ${ res.status }`)
        }
        return await res.json();
    };

    getAllPeople = async () => {
        const body = await this.getResource(`/api/people/`);
        return body.results.map(this.swapiMapper.mapPerson).slice(0, 6);
    };

    getPersonById = async (id) => {
        const person = await this.getResource(`/api/people/${ id }`);
        return this.swapiMapper.mapPerson(person);
    };

    getAllPlanets = async () => {
        const body = await this.getResource(`/api/planets/`);
        return body.results.map(this.swapiMapper.mapPlanet).slice(0, 6);
    };

    getPlanetById = async (id) => {
        const planet = await this.getResource(`/api/planets/${ id }`);
        return this.swapiMapper.mapPlanet(planet);
    };

    getAllStarships = async () => {
        const body = await this.getResource(`/api/starships/`);
        return body.results.map(this.swapiMapper.mapStarship).slice(0, 6);
    };

    getStarshipById = async (id) => {
        const starship = await this.getResource(`/api/starships/${ id }`);
        return this.swapiMapper.mapStarship(starship);
    };


    getPersonImageUrl = (person) => {
        return `${ this._imageBaseUrl }/characters/${ person.id }.jpg`;
    };

    getStarshipImageUrl = (starhip) => {
        return `${ this._imageBaseUrl }/starships/${ starhip.id }.jpg`;
    };

    getPlanetImageUrl = (planet) => {
        return `${ this._imageBaseUrl }/planets/${ planet.id }.jpg`;
    };
}