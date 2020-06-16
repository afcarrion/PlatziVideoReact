/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import "../assets/styles/app.scss";
import Header from '../components/Header';
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

const App = () => {
    const API = "http://localhost:3000/initalState";
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);
    return (
        <div className='App'>
            <Header />
            <Search />
            {videos.mylist.length > 0 &&
            <Categories title="Mi Lista">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>}

            <Categories title="Tendencias">
                <Carousel>
                    {videos.trends.map(video => 
                        <CarouselItem key={video.id} {...video} />
                    )}
                </Carousel>
            </Categories>
            <Categories title="Originales de platzi video">
                <Carousel>
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Footer />
        </div>
    );
};
export default App;
