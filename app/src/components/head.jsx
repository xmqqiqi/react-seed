import React from 'react'
import { browserHistory } from 'react-router';
import back from '../images/back.png'
import './head.less'

export default class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dataSouce:props.dataSouce        
        }  
        this.back=this.back.bind(this)     
    }

    back(){
      browserHistory.push('/')
    }
    
    render() {
      console.log(this.state.dataSouce)  
      const { dataSouce }=this.state; 
      return (
        <div className="head">
            <p className="back" onClick={this.back}><img src={back} /></p>
            <p className="head-title">{dataSouce.text}</p>
        </div>           
      )
    }       
}