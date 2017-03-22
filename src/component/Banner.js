import React from 'react'


class Banner extends React.Component{
    render(){
        return(
            <div className="banner-div">
                <span className="title">Your Cart</span>
                <span className="total">Total:10$</span>
            </div>
        )
    }
}


module.exports = Banner;