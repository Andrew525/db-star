export default class SwapiMapper {

    mapPlanet = (planet) => {
        const id = this._extractId(planet);

        return {
            id,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    mapStarship = (starship) => {
        const id = this._extractId(starship);

        return {
            id,
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };

    mapPerson = (person) => {
        const id = this._extractId(person);

        return {
            id,
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };

    _extractId(item) {
        const idRegex = /\/([0-9]*)\/$/;
        return item.url.match(idRegex)[1];
    }
}