import React, { useState } from "react";
import { AddCategory, GifGrid } from './components'; //importación realizada desde el componente barril index.js


export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [ 'Futurama' ] );

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;

        //categories.push( newCategory );

        setCategories([ newCategory, ...categories]);
        //setCategories( cat => [ 'Valorant', ...cat ] );
    }

    return (
        <>
           <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ (event) => onAddCategory(event) }
            />

            {
                categories.map( ( category ) => (
                        <GifGrid 
                        key={ category }
                        category={ category }
                        />
                    ))
    
            }
        </>
    )
};