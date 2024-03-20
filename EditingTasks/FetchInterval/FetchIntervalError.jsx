import React, { useEffect, useState } from 'react';

export default function App() {
    let data
    const interval = setInterval(() => {
        data = fetchData(); // Assume this function fetches data from an API
    }, 1000);

    return (
            {data.map((item) => (
                <p>{item.name}</p>
            ))}
    );
};
