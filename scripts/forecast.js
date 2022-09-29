const apiKey = 'Tbq3Ki4r0TDWE0BfkkZaYfhtDxyruvAd';

const getWeather = async (key) => {
    const base = ('http://dataservice.accuweather.com/currentconditions/v1/');
    const query = `${key}?apikey=${apiKey}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

getCity('Oslo')
    .then(data => {
        return getWeather(data.Key);
    }).then(data => {
        console.log(data);
    }).catch(err => console.log(err));