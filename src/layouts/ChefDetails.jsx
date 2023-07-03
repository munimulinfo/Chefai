import React from 'react';
import Header from './Header';
import Fotter from './Fotter';
import { AiFillLike } from "react-icons/ai";


import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import LazyLoad from 'react-lazyload';


const ChefDetails = () => {

  const chef = useLoaderData();

   const { _id, name, image, exprience, likes, description, recipes  } = chef;

    return (
        <div>
            

            <div className="chef-area grid grid-cols-2 mx-auto gap-6 items-center mt-8">
                <div className="chef-image">
            <LazyLoad height={500}>
              <img className='h-4/6 w-3/6 rounded' src={image} alt="" />
                    </LazyLoad>
                </div>
                 <div className="chef-details ">
            <h3 className='text-2xl'>Chef Name: {name}</h3>
             <h4 className='text-xl'>{ likes}+ Liked</h4>
            <p className='text-xl'>{description }</p>
           
                        <h4 className='text-xl mt-4'>{chef.recipes.length } Recipes</h4>
                        <h4 className='text-xl'>{exprience} Exprience</h4>
                    </div>
            </div>
            <div className="details mx-auto text-center mt-8">
                <h2 className='text-4xl mb-4'>Chef's Recipes</h2>
                <hr className='mb-8'/>
            </div>
            <div className="recipe grid lg:grid-cols-3">
             
              {
            chef.recipes.map(recipes => <RecipeCard
              key={recipes.id}
              recipes={recipes}
            ></RecipeCard>)
              }
          
          
            </div>

        </div>
    );
};

export default ChefDetails;