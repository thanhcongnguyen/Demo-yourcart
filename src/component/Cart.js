import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import Banner from './Banner.js'
import Product from './Product.js'

class Cart extends React.Component{

    render(){
       
        return(
            <div className="cart-div">
                <Banner/>
                <Product/>
            </div>
        )
    }
}









module.exports = Cart