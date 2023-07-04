// import ProfileCard from "./ProfileCard";
// import BuzoImg from "./img/buzo.jpg";
// import CamisetaImg from "./img/camiseta.jpg";
// import PantalonImg from "./img/pantalon.jpg";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./NavBar/NavBar"
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";
//import ItemCount from "./ItemCount/ItemCount";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";


function App(){
    return(
        <div className="App">
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element = {<ItemListContainer />}/>
            <Route path='/category/:categoryId' element = {<ItemListContainer />}/>
            <Route path='/item/:itemId' element = {<ItemDetailContainer />}/>
            <Route path='*' element = {<h1>404 error not found</h1>}/>
        </Routes>
        </BrowserRouter>
    </div>
    )
}

export default App;