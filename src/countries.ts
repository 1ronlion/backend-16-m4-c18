const API_BASE_URL = `https://restcountries.com/v3.1/region/europe`;

interface Country {
    name: {
        common: string;
        official: string,
        nativeName: Object
    },
    population: number;
}


function newData(data: Country) {
    let newCountry: Country = {
        name: data.name,
        population: data.population,
    }
    return newCountry
}


function getAveragePopulation(data: Country[]): number {

    const averagePopulation: Array<number> = []

    data.map((element) => averagePopulation.push(element.population))

    const addition = averagePopulation.reduce((acumulador, currentValue) => acumulador + currentValue, 0)

    const average = Math.round(addition / averagePopulation.length)

    return average

}


async function fetchData()  {

    try {

        const response = await fetch(API_BASE_URL)
        const data = await response.json()

        let result: Country[] = []

        data.forEach((country: Country) => {

            result.push(newData(country))
        })

        let averagePopulation = getAveragePopulation(result)

        return averagePopulation


    } catch (error) {

        return { message: `${error}` }
    }

}


fetchData();

export default fetchData;