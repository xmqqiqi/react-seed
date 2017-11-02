import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

// 引入单个页面（包括嵌套的子页面）
import Init from './main';
import Home from './pages/home';
import Classify from './pages/classify';
import Cart from './pages/cart';
import Person from './pages/person';

// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render(
    <Router history={browserHistory} >        
        <Route path="/" component={Init} >
            <IndexRoute component={Home}/>
            <Route path="classify" component={Classify}/>
            <Route path="cart" component={Cart}/>
            <Route path="person" component={Person}/>
        </Route>
    </Router>
    , document.querySelector('#init')
)