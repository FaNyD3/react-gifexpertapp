import PropTypes from 'prop-types'
import { useState } from 'react'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // string vacio
    const handleInputChange = ( e ) => {
        // console.log(e.target.value)
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // trim() : borra los espacios antes y despues
        if( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats ] );
            // para evitar un doble posteo se pone un string vacio
            setInputValue('');
        }

        // console.log('submit hecho')
        // setCategories se esta llamando por un callback = cats
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
