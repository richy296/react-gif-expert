import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Shingeki no Kyojin']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //categories.push('Valorant');
        setCategories([newCategory, ...categories]);
        //setCategories(categories => [...categories, 'Valorant']);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory 
               /*  setCategories={setCategories} */
               onNewCategory={onAddCategory}
            />

            {
                categories.map( category => (
                    <GifGrid 
                        key={category} 
                        category={category}/>
                ))
            }
        </>
    )
}
