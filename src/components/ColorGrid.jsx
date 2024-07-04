import { ColorItem  } from "./ColorItem";
import { usefectColors } from "../hooks/useFetchColors";

export const ColorGrid = ( query ) => {

    const { colors, isLoading } = usefectColors( query );

    return (
        <>
            {
                isLoading && ( <h2>Loading ...</h2> )
            }
            <div className="container">
                {   
                    colors.map( ( c )  => (
                        <ColorItem
                            key={ c }
                            color={ c }
                            totalColors={ colors.length }
                        />
                    ))
                }
            </div>
        </>
    );
}