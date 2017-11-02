import React from 'react'
import { browserHistory } from 'react-router';
import '../less/home.less'

const tabsText=[{
    key:'home',
    text:'首页'
},{
    key:'classify',
    text:'分类'
},{
    key:'cart',
    text:'购物车'
},{
    key:'person',
    text:'我的'
}];          
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // idx: []
              
        }  
    }

    componentDidMount() {
        // $.ajax({
        //     url:'getProfile'
        // })
        // .done(function(res) {
        //     let data = JSON.parse(res);
        //     // 需要绑定this
        //     this.setState({idx:data.idx})
        // }.bind(this))
    }

    changePage(type){
        if(type==='home'){
            return
        }
        if(type==='classify'){
            browserHistory.push('/classify')
        }
        if(type==='cart'){
            browserHistory.push('/cart')
        }
        if(type==='person'){
            browserHistory.push('/person')
        }
    }

    //底部tabs
    tabs(tabsText){
        const setData=[];
        tabsText.map((item,i)=>{
            setData.push(
                <li className="tabs-list" key={item.key} onClick={this.changePage.bind(this,item.key)}>{item.text}</li>
            )
        })
        return setData
    }
    
    render() {  
             
        return (
            <div className="home">
                <div>首页</div>
                <ul className="tabs">
                {
                    this.tabs(tabsText)  
                }   
                </ul>       
            </div>
        )
    }       
}