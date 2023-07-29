import {db} from "./config/firebase";
import {getDocs, collection} from "firebase/firestore";
import { useState, useEffect } from "react";
//import BuzoImg from "./img/buzo.jpg";
// import CamisetaImg from "./img/camiseta.jpg";
// import PantalonImg from "./img/pantalon.jpg";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./NavBar/NavBar"
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import "bulma/css/bulma.css";
//import ItemCount from "./ItemCount/ItemCount";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
//import ProfileCard from './ProfileCard';
import Cart from './Cart/Cart'
import { CartProvider } from './context/CartContext';
import Checkout from "./Checkout/Checkout";


function App(){
    //const [itemList, setItemList] = useState([]);

  //  const itemsCollectionRef=collection(db, "Items");

    // useEffect(() => {
    //     const getItemList = async () => {
    //         const data = await getDocs(itemsCollectionRef);
    //         const filteredData = data.docs.map( ( doc ) => ({ ...doc.data(), id:doc.id}))
    //         console.log(filteredData);
    //         setItemList(filteredData);
    //     }
    //     getItemList();
    // }, [])

    return(
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element = {<ItemListContainer />}/>
                        <Route path='/category/:categoryId' element = {<ItemListContainer/>}/>
                        <Route path='/item/:itemId' element = {<ItemDetailContainer />}/>
                        <Route path='/cart' element = {<Cart/>}/>
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path='*' element = {<h1>404 error not found</h1>}/>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;