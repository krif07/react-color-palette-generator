export const ColorItem = ( { color, totalColors } ) => {
    return (
        <div 
            className="color" 
            style={
                {
                    backgroundColor:`${ color }`,
                    width: `calc(100%/${ totalColors })`
                }
            }>
            <span>{ color }</span>
        </div>
    )
}