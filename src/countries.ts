const API_BASE_URL = `https://restcountries.com/v3.1/region/europe`;

interface Country {
    name: {
        common: string;
        official: string,
        nativeName: Object
    },
    population: number;
}

function getAveragePopulation(): number {
    // Completar esta función.

    return 0;
}

async function fetchData() {
	
}

fetchData();

export default fetchData;