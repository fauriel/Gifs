import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    const onAddCategory = (newCategory) =>{

        if( categories.includes(newCategory)) return;
        setCategories( [ newCategory, ...categories,  ] ) 
    }
    // Handles the onChange event of search input field.
return(

    <>
    {/**Titulo de la APP */}
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={ (value) => onAddCategory(value)} />
        { 
          categories.map((category) => (
            <GifGrid key={ category }  
            category={category}/>
          ))
        }
   

    </>
)
}