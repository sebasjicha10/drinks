import React,{ useContext } from 'react'
import Recipe from './Recipe'
import { ContextRecipes } from '../context/ContextRecipes'


const RecipesList = () => {

    // Get Recipes
    const { recipe } = useContext(ContextRecipes)

    // Avoid rendering without Category
    if(!recipe) {
        return (
                <h1 className="mt-3 lead" style={{color: "#EC3A49"}}>&#x2191; Category needed</h1>
        )
    }

    return ( 
        <div className="row mt-5">
            {recipe.map(r => (
                <Recipe 
                    key={r.idDrink}
                    recipe={r}
                />
            ))}
        </div>
    )
}
 
export default RecipesList