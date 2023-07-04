const products = [
    {
    id: "1",
    name: "Buzo",
    price: 300,
    category: "buzos",
    marca: "adidas",
    img: "./img/buzo.jpg",
    stock: 10,
    description: "Hermoso buzo",
    },
    {
    id: "2",
    name: "Camiseta",
    price: 200,
    category: "camiseta",
    marca: "adidas",
    img: "./img/camiseta.jpg",
    stock: 10,
    description: "Hermosa camiseta",
    },
    {
    id: "3",
    name: "Pantalon",
    price: 100,
    category: "pantalon",
    marca: "adidas",
    img: "./img/pantalon.jpg",
    description: "Hermoso pantalon",
    stock: 10,
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    }) 
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}