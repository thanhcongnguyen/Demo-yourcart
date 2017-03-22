var defaultState = [
    {id:1, nameProduct:"Laptop Dell", price:5000, quantity:4},
    {id:2, nameProduct:"Laptop Asus", price:3000, quantity:10},
    {id:3, nameProduct:"Laptop Hp", price:2500, quantity:5},
    {id:4, nameProduct:"Laptop Toshiba", price:2000, quantity:5},
    {id:5, nameProduct:"Apple", price:7000, quantity:10}
];

var Reducer = (state=defaultState, action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
            return 0;
        case 'REMOVE_PRODUCT':
            return 1;
        case 'UP':
            return
        case 'DOWN':
            return 2;
        default:
            return state;
    }
}


module.exports = Reducer;