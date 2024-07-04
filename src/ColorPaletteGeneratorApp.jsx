import { useState } from "react";
import { AddColor, ColorGrid } from "./components";

export const ColorPaletteGeneratorApp = () => {
    
    const [query, setQuery] = useState("colombia");

    const onAddQuery = ( newQuery ) => {
        setQuery( newQuery );
    }

    return (
        <>
            <AddColor
                onNewColor={ onAddQuery }
            />
            <ColorGrid
                key = { query }
                query= { query }
            />
        </>
    );
}