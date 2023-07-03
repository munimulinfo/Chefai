import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
    Typography,
  Button
} from "@material-tailwind/react";
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const ChefCards = ({ chef }) => {
    
    const { _id, name, image, exprience, likes } = chef;

    return (
        <div className="cards w-40 lg:col-span-4 mb-8">
                 <Card className="w-96">
          <CardHeader color="blue" className="relative h-56">
            <LazyLoad height={500} offset={100}>
 <img
          src={image}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
            </LazyLoad>
       
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {name}
        </Typography>
        <Typography>
            <h2>Exprience: {exprience}</h2>
                        <h2>Number Of Recipe: {chef.recipes.length }</h2>
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">
                            <div className="like flex items-center ">
                                <div className="icons">
                                    <AiFillLike />
                                </div>
                                <div className="likes ">
                                <h4 className='mr-4'>{likes }</h4>
                                </div>
                            </div>       
        </Typography>
        <Button color="green"><Link to={`/chef/${_id}`}>View Recipes</Link></Button>
      </CardFooter>
        </Card>
            </div>
    );
};

export default ChefCards;