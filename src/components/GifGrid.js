import React from 'react'
import { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+morty&limit=10&api_key=fo6VwZbA3ifriPSpcNAnsXUdA3hjsTcb';

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img =>
            ({ id: img.id, title: img.title, url: img.images?.downsized_medium.url }));

        setImages(gifs);
    };

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(img => <GifGridItem key={img.id} {...img} />)
                }
            </div>
        </>
    )
}
