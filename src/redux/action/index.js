// For Add Item to Cart

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// For Delete Item Cart

export const delCArt = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}