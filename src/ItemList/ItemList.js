import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div className='ListGroup columns mt-4 is-8 is-variable'>
            {products.map( prod =>  <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList