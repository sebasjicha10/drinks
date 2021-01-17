import React, { useContext, useState } from 'react'
import { ContextModal } from '../context/ContextModal'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'


const getModalStyle = () => {
    const top = 50 
    const left = 50
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    }
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}))

const Recipe = ({recipe}) => {

    // COnfigurate Material-ui Modal
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)

    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    // Get values from Context
    const { information, setIdRecipe, setInformation } = useContext(ContextModal)

    // Show and format ingredients
    const showIngredients = information => {
        let ingredients = []
        for(let i = 1; i < 16; i++) {
            if(information[`strIngredient${i}`]) {
                const ingredient = information[`strIngredient${i}`]
                ingredients.push(
                    <li key={ ingredient }>{ ingredient } { information[`strMeasure${i}`] }</li>
                )
            }
        }
        return ingredients
    }

    return (  
       <div className="col-md-4 mb-3">
           <div className="card">
               <h2 className="card-header">{recipe.strDrink}</h2>

               <img className="card-img-top" src={recipe.strDrinkThumb} alt={`Image of ${recipe.strDrink}`} />

               <div className="card-body">
                   <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdRecipe(recipe.idDrink)
                            handleOpen()
                        }}
                   >
                       Check Recipe
                   </button>
                   <Modal
                        open={open}  
                        onClose={() => {
                            setIdRecipe(null)
                            setInformation({})
                            handleClose()
                        }}
                   >
                       <div style={modalStyle} className={classes.paper}>
                            <h2>{information.strDrink}</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>
                                {information.strInstructions}
                            </p>
                            <img className="img-fluid m-4" src={information.strDrinkThumb} />
                            <h3>Ingredients and Quantities</h3>
                            <ul>
                                { showIngredients(information) }
                            </ul>

                       </div>
                   </Modal>
               </div>
           </div>
       </div>
    )
}
 
export default Recipe