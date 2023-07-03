import React from 'react';
import Hero from './Hero';
import CardsArea from './CardsArea';
import Contact from './Contact';
import Explore from './Explore';


const Main = () => {
    return (
        <div>
            <Hero></Hero>
            <CardsArea></CardsArea>
            <Explore></Explore>
            <Contact></Contact>
        </div>
    );
};

export default Main;