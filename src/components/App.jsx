import React, { useEffect, useState } from "react";
import getData from "../utils/getData";

const App = () => {
    const [count, setCount] = useState('0 Respuestas del Backend [La Rasp]');

    useEffect(()=>{
        const fetchCount = async () => {
            const data = await getData();
            setCount(data);
        };
        fetchCount();
    },[]);

    const handleClick = async () => {
        const data = await getData();
        setCount(data);
    }
    return (
        <div className="container">
            <button className="button" onClick={handleClick}>Nueva Petición</button>
            <h1>Respuestas del Backend: {count}</h1>
        </div>
    );
};

export default App;