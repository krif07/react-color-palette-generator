import { useState, useEffect } from 'react';
import { getColorsPalete  } from '../helpers/getColorsPalete';

export const usefectColors = ( { query } ) => {
    const [colors, setColors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getColors = async() => {
        const newColors = await getColorsPalete( query );
        setColors( newColors );
        setIsLoading( false );
    }

     useEffect( () => {
         getColors();
     }, []);

    return {
        colors,
        isLoading
    }
}