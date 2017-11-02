import React from 'react'
import Head from '../components/head'

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // idx: []            
        }       
    }

    // componentDidMount() {
    //     $.ajax({
    //         url:'getProfile'
    //     })
    //     .done(function(res) {
    //         let data = JSON.parse(res);
    //         // 需要绑定this
    //         this.setState({idx:data.idx})
    //     }.bind(this))
    // }
    
    render() {       
        const headText={
            type:'cart',
            text:'购物车'
        }   
        return (
            <div>
                <Head dataSouce={headText}/>
                购物车           
            </div>
        )
    }       
}