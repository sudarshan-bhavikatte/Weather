
async function weatherChecker() {
    let city = document.querySelector('.city-search').value;
    const apiKey = 'f6348bbbe9a125abc4e2d84a41d0bfa4';
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    document.querySelector('.city-name').innerHTML =data.name;
    document.querySelector('.temp').innerHTML = `${data.main.temp}°C`
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed}Km/hr`;

    if(data.weather[0].main === 'Clear'){
        document.querySelector('.weather-icon').setAttribute('src','clear.png');
    }
    else if(data.weather[0].main === 'Rain'){
        document.querySelector('.weather-icon').setAttribute('src','rain.png');
    }
    else if(data.weather[0].main === 'Clouds'){
        document.querySelector('.weather-icon').setAttribute('src','clouds.png');
    }
    else if(data.weather[0].main === 'Snow'){
        document.querySelector('.weather-icon').setAttribute('src','snow.png');
    }
    
}