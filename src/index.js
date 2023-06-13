//importamos las librerias react y react dom
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// obtener una referencia al div con id root
const el = document.getElementById("root");

// le deciamos a react que tome el control del elemento

const root = ReactDOM.createRoot(el);

// creamo un componente y mostramos contenido dinamico 



//mostrar el contenido en la pantalla

root.render(<App/>)