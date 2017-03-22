import React from 'react'
import {connect} from 'react-redux'

class OneProduct extends React.Component{
    Up(){
        console.log("ban dang tang so luong san pham")
    }
    Down(){
        console.log("ban dang giam so luong san pham")
    }

    Delete(){
        console.log("ban xoa san pham")
    }
    render(){
        var arr=this.props.mang.map((i,e)=>{
                return(
                        <tr key={e}>
                            <td>{i.id}</td>
                            <td>{i.nameProduct}</td>
                            <td>{i.price}</td>
                            <td>
                                <button onClick={this.Down}>-</button>
                                {i.quantity}
                                <button onClick={this.Up}>+</button>
                            </td>
                            <td>{i.quantity*i.price}</td>
                            <td><button onClick={this.Delete}>X</button></td>
                        </tr>
                )
            }
        )
        
        return(
            <tbody>
                       {arr}
            </tbody>
            
        )
    }
}

function mapStateToProps(state){
    return{mang: state}
}


module.exports = connect(mapStateToProps)(OneProduct)