import React from 'react'
import {connect} from 'react-redux'


class SelectProduct extends React.Component{
    addProduct(){
        console.log("them san pham")
    }

    render(){
        return(
            <div>
                    <select>
                        <option >--SelectProduct--</option>
                        <option value="123">123</option>
                        <option value="abc">abc</option>
                    </select>
                    <button onClick={this.addProduct}>add product</button>
        </div>
        )
    }
}

module.exports = SelectProduct