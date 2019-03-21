import React, { Component } from 'react'
import { Player } from 'video-react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import axios from 'axios'

import Hot from './hot'
import '../../../../node_modules/_video-react@0.13.2@video-react/dist/video-react.css'
import '../../../static/css/tuijian.css'
import ImgSrc from '../../../static/img/videoImg.jpg'
export default class Tuijian extends Component {
   constructor(props){
      super(props)
      this.state={
         recommendDate:[]
      }
   }
   componentDidMount(){
      axios({
         method:'get',
         url:'/api/recommend'
      }).then((res)=>{
         this.setState({
            recommendDate:res.data
         })
      })
   }
   render() {
      const {recommendDate} = this.state;
      return (
         <div>
            <header className="tuijian_header">
               <div>
                  <Player
                     playsInline
                     poster={ImgSrc}
                     src="http://o3.xiaohongshu.com/video/red15s.mp4"
                  />
               </div>
            </header>
            <div className="section">
               <h3 data-v-66f2c2f7="" className="title">热门品牌
               <a href='javascript:;'>查看更多></a>
                </h3>
                <div className='content recommend-pages'>
                  <ul>
                     {
                        recommendDate.map(v=>{
                           return <li key={v.id}>
                              <div className='page-image cube-image bg-image'>
                                 <img src='../../../static/img/'  alt=""/>
                              </div>
                              <div className='page-info'>
                                 <h4 className='page-name'>{v.tit}</h4>
                                 <p className='page-sub-title'>{v.des}</p>
                              </div>
                           </li>
                        })
                     }
                  </ul>
                </div>
            </div>
         </div >
      )
   }
}