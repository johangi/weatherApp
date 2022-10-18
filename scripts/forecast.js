class Forecast{
    constructor(){
        this.apiKey = 'Tbq3Ki4r0TDWE0BfkkZaYfhtDxyruvAd'
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }

    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
    
        return {cityDets, weather};
    }
    async getCity(city){
        const query = `?apikey=${this.apiKey}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();

        return data[0];
    }
    async getWeather(key){
        const query = `${key}?apikey=${this.apiKey}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
    
        return data[0];
    }
}