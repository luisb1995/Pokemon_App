import React from "react";
import { useEffect, useState } from "react";
import cards from "../../assets/rick-y-morty3.jpg";
import "../../App.css";
import Nav from "./Nav";

function GetDatos({text}) {

  const [user, setUser] = useState([]);
  const [numPages, setNumpages] = useState(0);
  const [next, setNext] = useState("");
  const [previus, setPrevius] = useState("");
  const [url, setUrl] = useState(1);
  const [loading,setLoading]=useState(false);
  

  const getUser = async () => {

        setLoading(true)
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${url}`);
        const listaDatos = await response.json();
        setNumpages(listaDatos.info.pages);
        const { results} = listaDatos;
        const {info}=listaDatos
        setUser(results);
        setPrevius(!info.prev ? "" : info.prev)
        setNext(!info.next ? "":info.next)

        setLoading(false)      
         
        
  };

  
  
  useEffect(() => {    
    getUser();
  }, [url]);
  
      
  const filteredUsers = user.filter((userss) =>
  userss.name.toLowerCase().includes(text.toLowerCase())
);      
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
        {
            filteredUsers.length===0 &&
            <h2>No hay resultados</h2>
        }
          
          { 
              filteredUsers.length>0 &&
              loading ?  <p className="carga">Cargando...</p>  :
                  filteredUsers.map((dato, index) => (
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
                ))   
                
          }
        
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
