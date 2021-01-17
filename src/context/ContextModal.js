import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'


// Context
export const ContextModal = createContext()

// Provider
const ProviderModal = (props) => {

    // Provider State
    const [idRecipe, setIdRecipe] = useState(null)
    const [information, setInformation] = useState({})

    // Call API once recipe is defined
    useEffect(() => {
        const obtainRecipe = async () => {

            if(!idRecipe) return
        
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`

            const result = await axios.get(url)

            setInformation(result.data.drinks[0])

        }
        obtainRecipe()
    }, [idRecipe])

    return (  
        <ContextModal.Provider
            value={{
                information,
                setIdRecipe,
                setInformation
            }}
        >
            {props.children}
        </ContextModal.Provider>
    )
}
 
export default ProviderModal



