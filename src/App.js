import ProfileCard from "./ProfileCard";
import BuzoImg from "./img/buzo.jpg";
import CamisetaImg from "./img/camiseta.jpg";
import PantalonImg from "./img/pantalon.jpg";
import NavBar from "./NavBar/NavBar"
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";

function App(){
    return(
        <div>
        <NavBar/>
        <ItemListContainer greeting='Bienvenidos'/>
        <div className="columns">
            <div className= "column is-4">
                <ProfileCard titulo="Buzo" img={BuzoImg}/>
            </div>
            <div className= "column is-4">
                <ProfileCard titulo="Camiseta" img={CamisetaImg}/>
            </div>
            <div className= "column is-4">
                <ProfileCard titulo="Pantalon" img={PantalonImg}/>
            </div>
            
            
        </div>
    </div>
    )
}

export default App;