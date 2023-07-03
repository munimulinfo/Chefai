import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
    Typography,
  Button
} from "@material-tailwind/react";
import { AiFillLike } from "react-icons/ai";
import { Rating } from '@mui/material';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const RecipeCard = ({ recipes }) => {

    const [fav, setFav] = useState(false);

    const handleFav = () => {
        setFav(true);
        toast('Added To favourite');
        
    }

    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    
    const {recipe_name, recipe_img, ingredients, rating } = recipes;
    return (
        <div className="recipe-list">

                    <div className="recipes">
                       <div className="cardsArea grid lg:grid-cols-1 grid-cols-1 items-center p-5">
            <div className="cards">
                 <Card className="w-96">
      <CardHeader color="blue" className="relative h-56">
        <img
          src={recipe_img}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {recipe_name}
        </Typography>
        <Typography>
                                    <h3>Ingredients :{ingredients}</h3>
                                    <div className="rating flex justify-center mt-6 gap-4">
                                        <div className="text-rat ">
                                            <h3>Rating: {rating}   </h3>
                                        </div> 
                                        <div className="icon">
                                            <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
                                        </div>
                                        
            </div>
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center flex-col justify-between py-3 gap-6">
        <Typography variant="small">     
        {
                !fav ?   <Button onClick={handleFav} variant="outlined" className="flex items-center gap-3" >
                                        Add to Favourite
                                            <MdFavoriteBorder className="h-5 w-5" />
                                            <Toaster />
                                        </Button> :
                                  <Button onClick={handleFav} variant="outlined" className="flex items-center gap-3" disabled>
                                        Add to Favourite
                            <MdFavorite className="h-5 w-5" />
                                        </Button>          
        }                     
                                    
                                    
                                    
        </Typography>
                                <Button color="green" onClick={() => handleClickOpen(recipes.id)}>cooking method</Button>
                                
<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Cooking Method of {recipe_name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
                {
                       recipes.cookingMethod.map(cook => <ul>
                        
                           <li>{cook?.part1}</li>
                           <li>{cook?.part2}</li>
                           <li>{cook?.part3}</li>
                           <li>{cook?.part4}</li>
                           <li>{cook?.part5}</li>
                           <li>{cook?.part6}</li>
                       </ul> 
                           
                        
                        )                         
                }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

                                        
      </CardFooter>
        </Card>
            </div>
            
        </div>
                    </div>
              </div>
    );
};

export default RecipeCard;