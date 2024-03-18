import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = '59e174ca8e575365c48d7631a1848526';

    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('Город не найден');
            }
            const data = await response.json();
            setWeatherData(data);
            setError(null);
        } catch (error) {
            setError(error.message);
            setWeatherData(null);
        }
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData();
    };

    return (
        <div>
            <h1>Погодное приложение</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Введите название города"
                    value={city}
                    onChange={handleCityChange}
                />
                <button type="submit">Получить погоду</button>
            </form>
            {error && <p>{error}</p>}
            {weatherData && (
                <div>
                    <h2>Погода в {weatherData.name}</h2>
                    <p>Температура: {weatherData.main.temp}°C</p>
                    <p>Описание: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}