// SELECT ELEMENTS
let lat,lon;
const icon=document.querySelector('.weather-icon');
const tempv=document.querySelector('.temperature-value P');
const desc=document.querySelector('.temperature-description p');
const glocation=document.querySelector('.location');
const notify=document.querySelector('.notification');
const wcontainer=document.querySelector('weather-container');
// App data
const weather={};

weather.temperature={
    unit:"celsius"
}
// APP CONSTS AND VARS
const kelvin=273;
// API KEY
//const key = "82005d27a116c2880c8f0fcb866998a0";
// CHECK IF BROWSER SUPPORTS GEOLOCATION
//navigator.geolocation.getCurrentPosition(showPosition);
console.log(navigator);
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(setpositon,seterror);
}
function setpositon(position){
     lat=position.coords.latitude;
     lon=position.coords.longitude;
   // console.log("x:"+ x + "\ny:" + y);
   // API KEY
const apikey="1a96563a87865e8638b88c3c21b9d230";
//appi url
const apiurl=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=1a96563a87865e8638b88c3c21b9d230`;
fetch(apiurl).then((response) =>{return response.json()})
.then((data)=>{
    console.log(data);
    tempv.textContent=Math.floor((data.main.temp-kelvin))+"° C";
    desc.textContent=data.weather[0].description;
    glocation.textContent=data.name + ","+ data.sys.country;
    let ic=data.weather[0].icon
   // console.log(ic);
   notify.textContent=data.weather[0].main;
    icon.innerHTML=`<img src="icons/${ic}.png" alt="" srcset="">`
})
}
function seterror(){
    let ermsg="This website does not support geoposition";
    console.log(ermsg);
    //wcontainer.textContent=ermsg;
    notify.textContent=ermsg;

}
