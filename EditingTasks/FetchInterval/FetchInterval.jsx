import React, { useEffect, useState } from 'react';

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData()
                .then((newData) => setData([...data, newData]))
                .catch((error) => console.error(error));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            {data.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
        </div>


    );
};
