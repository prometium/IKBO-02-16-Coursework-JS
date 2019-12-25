import React, { useState, useEffect, useRef } from 'react';
import AppBar from 'src/components/AppBar';
import Footer from "react-footer-comp";
//Optional include of the default css styles
import './JustalgitPage.css';

function fetchWeather(cityName) {
    return fetch("http://api.openweathermap.org/data/2.5/weather?q=" + 
                cityName + "&units=metric&APPID=c4c5932f1c7a72395d515bba8e831179")
    .then(function(response) {
        if (response.ok)
            return response.json();
    }).then(function(json) {
        return json;
    });
}

function JustalgitPage() {

    const cityInputRef = useRef(null);
    const tempInfoRef = useRef(null);
    const feelsLikeInfoRef = useRef(null);
    const windInfoRef = useRef(null);
    const humidityInfoRef = useRef(null);

    useEffect(() => {
        //alert("Hello from JustalgitPage");
    });

    return (
        <>
        <body>
            <div class="content">
                <AppBar title="Ларин"/>
                <div className="outerDiv">
                    <input type="text" className="input" ref={cityInputRef} placeholder="Введите название города"/>
                    <button className="button" onClick={getCityWeather}>Получить данные о погоде</button>
                    <p className="weatherParamInfo" ref={tempInfoRef}></p>
                    <p className="weatherParamInfo" ref={feelsLikeInfoRef}></p>
                    <p className="weatherParamInfo" ref={windInfoRef}></p>
                    <p className="weatherParamInfo" ref={humidityInfoRef}></p>
                </div>
            </div>
            <Footer
                id = "footer"
                copyrightIcon
                year={[2019]}
                height={100}
                bgColor={"white"}
                copyrightText
                copyrightIconStyle={{ color: "#006c78", fontSize: 20, marginRight: 10 }}
                copyrightTextStyle={{ color: "#006c78", fontSize: 20, marginRight: 10 }}
                textStyle={{ color: "#006c78", fontSize: 20, marginRight: 10 }}
                text={"Justalgit Вся представленная погодная информация получена с сервиса https://openweathermap.org/"}
            />
        </body>
        </>
    );

    function getCityWeather() {
        let cityInput = cityInputRef.current.value;
        let tempInfo = tempInfoRef.current;
        let feelsLikeInfo = feelsLikeInfoRef.current;
        let windInfo = windInfoRef.current;
        let humidityInfo = humidityInfoRef.current;
   
        fetchWeather(cityInput).then(function(result) {
            if (result != undefined) {
                tempInfo.textContent = "Температура - от " + result.main.temp_min + " до " + result.main.temp_max + " градусов";
                feelsLikeInfo.textContent = "Ощущается как " + result.main.feels_like + " градусов";
                windInfo.textContent = "Скорость ветра - " + result.wind.speed + " метров в секунду";
                humidityInfo.textContent = "Влажность - " + result.main.humidity + " процентов";
            }
            else
                alert("Ошибка - проверьте, что Вы вводите название города корректно;\nпримечание: иностранные города следует вводить на латинице.");
        });
    }
 }

 export default JustalgitPage;