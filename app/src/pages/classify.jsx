import React from 'react'
import Head from '../components/head'

export default class Classify extends React.Component {
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
            type:'classify',
            text:'商品分类'
        }        
        return (
            <div className="classify">
                <Head dataSouce={headText}/>
                分类           
            </div>
        )
    }       
}