import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import '../static/css/style.css'

export default class NavBar extends Component {
   render() {
      return (
         <ul id="maincate" className="maincate">
            <li>
               <NavLink to='/tuijian' activeClassName="selected">推荐</NavLink>
            </li>
            <li>
               <NavLink activeClassName="selected" to='/shishang'>时尚</NavLink>
            </li>
            <li>
               <NavLink activeClassName="selected" to='/meizhuang'>美妆</NavLink>
            </li>
            <li>
               <NavLink activeClassName="selected" to='/meishi'>美食</NavLink>
            </li>
            <li>
               <NavLink activeClassName="selected" to='/yundong'>运动</NavLink>
            </li>
            <li>
               <NavLink activeClassName="selected" to='/yingyin'>影音</NavLink>
            </li>
            <li>
               <NavLink activeClassName="selected" to='/lvxing'>旅行</NavLink>
            </li>
            <li>
               <NavLink activeClassName="selected" to='/jujia'>居家</NavLink>
            </li>
            <li>
               <NavLink activeClassName="selected" to='/muying'>母婴</NavLink>
            </li>
            <li>
               <NavLink activeClassName="selected" to='/shuma'>数码</NavLink>
            </li>
            <li>
               <NavLink activeClassName="selected" to='/nanshi'>时尚男士</NavLink>
            </li>
         </ul>
      )
   }
}
