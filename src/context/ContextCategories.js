import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'


// Context
export const ContextCategories = createContext()

// Provider
const ProviderCategories = (props) => {

    // State
    const [categories, setCategories] = useState([])

    // Call the API
    useEffect(() => {
        const obtainCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const categories = await axios.get(url)

            setCategories(categories.data.drinks)
        }
        obtainCategories()
    }, [])
    
    return (
        <ContextCategories.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </ContextCategories.Provider>
    )
}

export default ProviderCategories