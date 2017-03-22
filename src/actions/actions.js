function addProduct(id){
    return{
        type:"ADD_PRODUCT",
        id:id
    }
}


function removeProduct(){
    return {
        type:"REMOVE_PRODUCT",
        id:id
    }
}

function Up(quantity){
    return{
        type:"UP",
        quantity:quantity
    }

}


function Down(quantity){
    return{
        type:"DOWN",
        quantity:quantity
    }

}



module.exports= {addProduct, removeProduct, Up, Down}