import React, { useContext, useState } from 'react'
import { ContextCategories } from '../context/ContextCategories'
import { ContextRecipes } from '../context/ContextRecipes'


const Form = () => {

    const { categories } = useContext(ContextCategories)
    const { setRecipeSearch, setConsult } = useContext(ContextRecipes)

    const [search, setSearch] = useState({
        name: "",
        category: ""
    })

    // Read Content
    const obtainRecipeData = e => {
        setSearch({
            ...search,
            [e.target.name]: [e.target.value]
        })
    }

    return (  
        <form
            className='col-12'
            onSubmit={e => {
                e.preventDefault()
                setRecipeSearch(search)
                setConsult(true)
            }}
        >
            <fieldset className='text-center'>
                <legend>
                    Browse for Drinks by Category or Ingredients
                </legend>
            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input 
                        name='name'
                        className='form-control'
                        type='text'
                        placeholder='Browse by Ingredient'
                        onChange={obtainRecipeData}
                    />
                </div>
                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='category'
                        onChange={obtainRecipeData}
                    >
                        <option value=''>-- Select a Category --</option>
                        {categories.map(category => (
                            <option 
                                key={category.strCategory} 
                                value={category.strCategory}
                            >{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className='col-md-4'>
                    <input 
                        type='submit'
                        className='btn btn-block btn-primary'
                        value='Search Drinks'
                    />
                </div>
            </div>
        </form>
    )
}
 
export default Form