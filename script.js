const fetchInfo = () => {
   let input = userInput.value
   let apiKey = `a761011a1d2c2da7166b4426485c4a56`
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`
   userInput.value =""
   
   fetch(url)
   .then(response=>response.json())
   .then((result)=>{
      description.innerHTML = `${result.weather[0].description}`
      cityName.innerHTML = `<img width="28" height="28" src="https://img.icons8.com/color/48/visit.png" alt="visit"/> ${result.name}`
      temp.innerHTML =`${result.main.temp}°C`
      windSpeed.innerHTML = `Wind Speed: ${result.wind.speed}km/h`
      humidity.innerHTML = `Humidity: ${result.main.humidity}`
      country.innerHTML = `Country: ${result.sys.country}`

      let imago = `http://openweathermap.org/img/w/${result.weather[0].icon}.png`
      icon.src = imago 
      console.log(result)
   })
   .catch((err)=>{
      console.log(err);
   })
}

navigator.geolocation.getCurrentPosition((pos)=>{
   console.log(pos);
   let lat = pos.coords.latitude
   let lon = pos.coords.longitude
   let endPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a761011a1d2c2da7166b4426485c4a56&units=metric`


   fetch(endPoint)
   .then(resp=>resp.json())
   .then((res)=>{
      description.innerHTML = `${res.weather[0].description}`
      cityName.innerHTML = `<img width="28" height="28" src="https://img.icons8.com/color/48/visit.png" alt="visit"/> ${res.name}`
      temp.innerHTML =`${res.main.temp}°C`
      windSpeed.innerHTML = `Wind Speed: ${res.wind.speed}km/h`
      humidity.innerHTML = `Humidity: ${res.main.humidity}%`
      country.innerHTML = `Country: ${res.sys.country}`
      let imago = `http://openweathermap.org/img/w/${res.weather[0].icon}.png`
      icon.src = imago 
      console.log(res);
   })
   .catch((error)=>{
      console.log(error);
   })
})

// `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`