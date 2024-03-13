import { useState, useEffect } from "react";

const url="https://example-apis.vercel.app/api/weather/"

export default function Weather( {isWeatherGood }) {

    async function loadWeather() {
        const response = await fetch(url);
        const data = await response.json();
        const isGoodWeather = data.isGoodWeather;
        const emoji = data.condition;
        const temperature = data.temperature;
        console.log(data);
        console.log(isGoodWeather);
        isWeatherGood(isGoodWeather);
    }

    useEffect(() => {
        loadWeather()
    }, [])


}