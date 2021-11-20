import React from "react";
import {Link} from "react-router-dom";

const Principal = () => {
  
  return (
    
    <div>
    <div className={'container'}>
      <title>Ivan Barcia</title>
        <br></br>
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
          <div class="container-fluid">
              <Link class="navbar-brand"  to={'/'}>Ivan Barcia</Link>
   
            <button
             
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
             
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link active"  to={'/about'}>Sobre mi</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active"  to={'/Misproyectos'}>Mis proyectos</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active"  to={'/contactame'}>Contactame</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br></br>

<h1>Ivan Barcia</h1>
<p>Hola soy Ivan Nahuel Barcia Golato y te vengo a contar un poco sobre mi sitio web. Podes clickear en los boton de arriba para saber mas acerca de mí. </p>


    </div>
        <footer>
          <div class="container">
            <center>
            <div class="row">
              <div class="col">
                <a href="#">
                  <img src= {"https://cdn-icons-png.flaticon.com/512/1384/1384005.png"} width= {30} height= {30}/>
                </a>
                <a href="#">
               
                </a>
                <a href="#">
                <img src= {"https://cdn-icons-png.flaticon.com/512/1384/1384023.png"} width= {30} height= {30}/>
                </a>
              </div>
            </div>
            <p class="textoblanco">Ivan Nahuel Barcia Golato</p>
            </center>
          </div>
        </footer>
</div>
  );
};

export default Principal;