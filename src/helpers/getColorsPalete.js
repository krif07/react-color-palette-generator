export const getColorsPalete = async( query ) => {
    const url = 'http://127.0.0.1:5000/palette';
    const response = await fetch( url, {
       method: 'POST',
       body: JSON.stringify({
          query: query,
          userId: Math.random().toString(36).slice(2),
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    });
    const {colors} = await response.json();
    return colors;
 };
