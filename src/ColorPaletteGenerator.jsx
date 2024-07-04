import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const ColorPaletteGenerator = () => {

    const [query, setQuery] = useState('');
    const [colors, setColors] = useState([]);
    const [container, setContainer] = useState(document.querySelector(".container"));

    const createColorBoxes = () => {
      container.innerHTML = "";

      for(const color of colors) {
        const div = document.createElement('div');
        div.classList.add("color");
        div.style.backgroundColor = color;
        div.style.width = `calc(100%/${colors.length})`;

        div.addEventListener("click", () => {
          navigator.clipboard.writeText(color);
        });

        const span = document.createElement("span");
        span.innerHTML = color;
        div.appendChild(span);
        container.appendChild(div);
      }
    }

    const getColors = async (query) => {
        await fetch('http://127.0.0.1:5000/palette', {
           method: 'POST',
           body: JSON.stringify({
              query: query,
              userId: Math.random().toString(36).slice(2),
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        })
           .then((response) => response.json())
           .then((data) => {
              setColors(data.colors);
              setContainer(document.querySelector(".container"));
              createColorBoxes();
              //setContainer("");
           })
           .catch((err) => {
              console.log(err.message);
           });
     };

     const handleSubmit = (e) => {
        e.preventDefault();
        getColors(query);
     };

    return (
        <>
        <div className="container" value={container} onSubmit={createColorBoxes}></div>
        <form id="form" onSubmit={handleSubmit}>
            <input type="text" name="query" className="form-control" value={query}
               onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn" type="submit">Get Colors</button>
         </form>
        </>
    );
}
