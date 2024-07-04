import { useState } from "react";

export const AddColor = ({ onNewColor }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChage = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputValue.trim().length <= 3) return;

        onNewColor( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form id="form" onSubmit={ onSubmit }>
            <input 
                type="text" 
                name="query" 
                className="form-control" 
                value={ inputValue }
                onChange={ onInputChage }
            />
         </form>
    );
}