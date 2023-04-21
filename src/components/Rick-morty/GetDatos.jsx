import React from "react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import cards from "../../assets/rick-y-morty3.jpg";
import "../../App.css";

function GetDatos() {
  const [user, setUser] = useState([]);
  const [numPages, setNumpages] = useState(0);
  const [next, setNext] = useState("");
  const [previus, setPrevius] = useState("");
  const [url, setUrl] = useState(1);




    useEffect(() => {
      const getUser = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${url}`);
        const listaDatos = await response.json();
        setNumpages(listaDatos.info.pages);
        const { results} = listaDatos;
        const {info}=listaDatos
        setUser(results);
        setPrevius(!info.prev ? "" : info.prev)
        setNext(!info.next ? "":info.next)
      };
      getUser(url);
     
    }, [url]);
  
  
  return (
    <>
   
      <div className="contenedor">
        <div className="botones">
          <button
            className="btn btn-secondary ant"
            disabled={previus ? "" : true}
            onClick={()=>setUrl(url-1)}

          >
            Anterior
          </button>
          <button
            className="btn btn-success sig"
            disabled={next ? "" : true}
            onClick={()=>setUrl(url+1)}

          >
            Siguiente
          </button>
        </div>

        <div className="Container-cards">
          {user.map((dato, index) => (
            <div key={dato.id} className="card">
              <p className="c-name">{dato.name}</p>
              <img src={dato.image} alt="" className="c-img" />
              <p className={dato.status}>Status: {dato.status}</p>
              <p className="c-gender">
                <span>Gender: </span>
                {dato.gender}
              </p>
              <p className="c-species">
                <span>Species:</span>
                {dato.species}
              </p>
              <p className="c-location">
                <span>Location:</span> {dato.location.name}
              </p>
            </div>
          ))}
        </div>

        <div className="botones btnabajo">
          <button
            className="btn btn-secondary ant"
            disabled={previus ? "" : true}
            onClick={()=>setUrl(url-1)}

          >
            Anterior
          </button>
          <button
            className="btn btn-success sig"
            disabled={next ? "" : true}
            onClick={()=>setUrl(url+1)}

          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
}

export default GetDatos;
