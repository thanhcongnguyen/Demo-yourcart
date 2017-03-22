import React from 'react'
import OneProduct from './OneProduct.js'
import SelectProduct from './SeclectProduct'

class Product extends React.Component{
    render(){
        return(

        <table>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Name product</td>
                        <td>gia product</td>
                        <td>soluong</td>
                        <td>total</td>
                        <td>huy</td>
                    </tr>
                </thead>
                    <OneProduct/>
                <tfoot>
                    <tr>
                    <td></td>
                    <td>
                        <SelectProduct/>
                    </td>
                    <td></td>
                    <td></td>
                    <td>total</td>
                    <td></td>
                    </tr>
                </tfoot>
        </table>
        )
            
        
    }
}

module.exports = Product
