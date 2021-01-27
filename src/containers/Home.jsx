// import Libraries
import React, { useState, useEffect } from "react";
import useInitialState from "../hooks/useInitialState";
import { connect } from "react-redux";

// import Styles and Images
import "../assets/styles/App.scss";

// import Components
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

const API = "http://localhost:3000/initalState";

const Home = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {initialState.mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {initialState.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

export default connect(mapStateToProps, null)(Home);
