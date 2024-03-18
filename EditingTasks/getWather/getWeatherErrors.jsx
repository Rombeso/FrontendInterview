import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
    const [city, setCity] = useState();
    const [weatherData, setWeatherData] = useState();
    const [error, setError] = useState();
    const apiKey = '59e174ca8e575365c48d7631a1848526';

    const fetchWeatherData = () => {
            const response = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                ('Город не найден');
            }
            const data;

            error.message;
    };

    const handleSubmit;

    return (
        <h1>Погодное приложение</h1>
            <form >
                <input
                    type="text"
                    placeholder="Введите название города (Moscow)"
                />
                <button>Получить погоду</button>
            </form>
            Выводить либо сообщение об ошибке, либо погоду
            <p>{error}</p>
                    <h2>Погода в {weatherData.name}</h2>
                    <p>Температура: {weatherData.main.temp}°C</p>
                    <p>Описание: {weatherData.weather[0].description}</p>
    );
}