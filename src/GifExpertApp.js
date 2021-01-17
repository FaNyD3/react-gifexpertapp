import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
// import PropTypes from 'prop-types'

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Kirby'])

    /*
    const handleAdd = () => {
        // se mantiene el arreglo y se agrega un nuevo elemento
        // setCategories( [...categories, 'HunterXHunter'] );
        // si quiero que 'HunterXHunter este como el primer elemento:
        // hace que el elemento se agrege primero en la lista
        // setCategories( ['HunterXHunter',...categories ] );
        // otra alternativa
        setCategories( cats => [ 'HunterXHunter',...cats ] );
    }
    */

    return (
        <div>
            <h1>GifExpertApp</h1>
            {/* si se borra esto setCategories ={ setCategories } sale la validacion de props isRequired */}
            <AddCategory setCategories ={ setCategories } />
            <hr />
            {/*<button onClick={handleAdd}>Add</button>*/}
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category ={ category } 
                        />
                    ))
                }
            </ol>
        </div>
    )
}

/*
GifExpertApp.propTypes = {

}
*/

export default GifExpertApp
