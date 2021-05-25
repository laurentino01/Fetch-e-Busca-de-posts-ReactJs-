import {Component} from 'react'

import './style.css'

export class BtnNext extends Component {
    render(){
        const {text, onClick, disabled} = this.props
        return(
             <button disabled={disabled} className="btn-next" onClick={onClick}>{text}</button>
        )
    }
   
}