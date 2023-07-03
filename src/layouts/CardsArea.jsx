import React, { useEffect, useState } from 'react';

import ChefCards from '../pages/ChefCards';


const CardsArea = () => {

  const [chef, setChef] = useState([])

  useEffect(() => {
    fetch('https://chefai-server.vercel.app/chef')
      .then(res => res.json())
      .then(data => setChef(data));
  },[])


    return (
      

        <div className="cardsArea grid lg:grid-cols-3 grid-cols-3 gap-6 items-center p-5">
          
        {
          chef.map(chef => <ChefCards
           key={chef.id}
            chef={chef}
          >
          </ChefCards>)
        }
            
        </div>
    );
};

export default CardsArea;