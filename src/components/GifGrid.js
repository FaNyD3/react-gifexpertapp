import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    // data: nombre nuevo que se le quiere asignar
    // data:NuevoNombre
    const { data:images, loading } = useFetchGifs( category );

    /*    

    // hace que se dispare una vez nada más
    useEffect(() => {
        // solo se ejecuta getGifs una sola vez, cuando el componente es renderizado por primera vez
        getGifs( category )
            // esto es igual a lo de abajo
            // .then( imgs => setImages( imgs ) )
            .then( setImages );
    }, [ category ])
    */

    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            {/* == true hace sino no */}
            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div> 
            
        </>
    )
}

/*
GifGrid.propTypes = {

}
*/

export default GifGrid
