import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon Ball']);
    

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />            
            <ol>
                {
                    categories.map(category => 
                        <li key={category}>{category}</li>)
                }
            </ol>
        </>
    );
};
