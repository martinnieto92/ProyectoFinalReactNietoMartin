import { useState, useEffect } from 'react';
//import { getProducts, getProductsByCategory } from '../data';
import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router-dom';

import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../config/firebase'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    //const [loading, setLoading] = useState(false)
    
    const {categoryId} = useParams()

    useEffect(() => {
        //setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'Items'), where('category', '==', categoryId))
            : collection(db, 'Items')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            
        }, [categoryId])
        return (
            <>
                <ItemList products={products} />
            </>
        )
}

export default ItemListContainer;