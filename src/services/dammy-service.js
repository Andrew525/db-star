export default class DummyService {

    /**
     * Created for testing purpose.
     */

    _baseImageUrl = 'https://picsum.photos/200/300';

    getAllPeople = async () => {
       return [
           {
               id: 1,
               name: 'TEST',
               gender: 'TEST',
               birthYear: 1290,
               eyeColor: 'TEST'
           },
           {
               id: 2,
               name: 'TEST',
               gender: 'TEST',
               birthYear: 1290,
               eyeColor: 'TEST'
           },
           {
               id: 3,
               name: 'TEST',
               gender: 'TEST',
               birthYear: 1290,
               eyeColor: 'TEST'
           }
       ];
    };


    getPersonById = async (id) => {
        return  {
            id: 3,
            name: 'TEST',
            gender: 'TEST',
            birthYear: 1290,
            eyeColor: 'TEST'
        }
    };

    getAllPlanets = async () => {
        return [
            {
                id: 1,
                name: 'TEST',
                population: 'TEST',
                rotationPeriod: 12,
                diameter: 1
            },
            {
                id: 2,
                name: 'TEST2',
                population: 'TEST2',
                rotationPeriod: 12,
                diameter: 2
            },
            {
                id: 3,
                name: 'TEST3',
                population: 'TEST3',
                rotationPeriod: 12,
                diameter: 3
            }
        ]
    };

    getPlanetById = async (id) => {
        return {
            id: 3,
            name: 'TEST3',
            population: 'TEST3',
            rotationPeriod: 12,
            diameter: 3
        };
    };

    getAllStarships = async () => {
        return [
            {
                id: 1,
                name: 'TEST',
                model: 'TEST',
                manufacturer: 'TEST',
                costInCredits: 123,
                length: 100,
                passengers: 100,
                cargoCapacity: 'TEST'
            },
            {
                id: 2,
                name: 'TEST',
                model: 'TEST',
                manufacturer: 'TEST',
                costInCredits: 123,
                length: 100,
                passengers: 100,
                cargoCapacity: 'TEST'
            },
            {
                id: 3,
                name: 'TEST',
                model: 'TEST',
                manufacturer: 'TEST',
                costInCredits: 123,
                length: 100,
                passengers: 100,
                cargoCapacity: 'TEST'
            }
        ]
    };

    getStarshipById = async (id) => {
        return {
            id: 3,
            name: 'TEST',
            model: 'TEST',
            manufacturer: 'TEST',
            costInCredits: 123,
            length: 100,
            passengers: 100,
            cargoCapacity: 'TEST'
        }
    };


    getPersonImageUrl = (person) => {
        return this._baseImageUrl;
    };

    getStarshipImageUrl = (starhip) => {
        return this._baseImageUrl;
    };

    getPlanetImageUrl = (planet) => {
        return this._baseImageUrl;
    };
}