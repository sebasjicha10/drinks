import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'


export const ContextRecipes = createContext()

const ProviderRecipes = (props) => {

    const [recipe, setRecipe] = useState([])
    const [recipeSearch, setRecipeSearch] = useState({
        name: "",
        category: ""
    })
    const [consult, setConsult] = useState(false)

    const { name, category } = recipeSearch

    useEffect(() => {
        if(consult) {
            const obtainRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
                const result = await axios.get(url)
                setRecipe(result.data.drinks)
            }
            obtainRecipes()
        }

    }, [recipeSearch])

    return (
        <ContextRecipes.Provider
            value={{
                recipe,
                setRecipeSearch, 
                setConsult
            }}
        >
            {props.children}
        </ContextRecipes.Provider>
    )
}
 
export default ProviderRecipes