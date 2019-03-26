import React, { Component } from 'react'
import { Player } from 'video-react';
import Scroll from 'react-bscroll'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import '../../../../node_modules/_video-react@0.13.2@video-react/dist/video-react.css'
import '../../../static/css/tuijian.css'
import ImgSrc from '../../../static/img/videoImg.jpg'
import store from '../../../store'


class Tuijian extends Component {
   constructor(props) {
      super(props)
      this.state = {
         list: []
      }
      
   }
   componentDidMount() {
      axios({
         method: 'get',
         url: '/api/list'
      }).then((res) => {
         this.setState({
            list: res.data
         },()=>{
            // this.props.dispatch({
            //    type:'GET_LIST',
            //    list:this.state.list
            // })
            // 更改数据
            store.dispatch({
               type:'GET_LIST',
               list:this.state.list
            })
         })
         
      })
   }
   render() {
      const { list } = this.state;
      // 获取数据
      // console.log(store.getState())
      return (
         // <Scroll>
         <div className="section">
            <div className="tuijian_header">
               <div>
                  <Player
                     playsInline
                     poster={ImgSrc}
                     src="http://o3.xiaohongshu.com/video/red15s.mp4"
                  />
               </div>
            </div>
            <ul>
           
                {
                  list.map((ite, ind) => {
                     return <li key={ind}>
                        <dl>
                           <dt><img src={ite.img} alt="" /></dt>
                           <dd>
                              <h3>{ite.nm}<span>{ite.version}</span></h3>
                              <h5>观众影评<span className='sc'>{ite.sc}</span></h5>
                              <h5>{ite.star}</h5>
                              <h5>{ite.showInfo}</h5>

                           </dd>
                           <button className='button'>购票</button>
                        </dl>
                     </li>
                  })
               }
            </ul>
         </div>
         // </Scroll>
      )
   }
}
function mapStateToProps(state){
   if(state){
      // console.log('mapstate:',state)
      return {
         list:state
      }
   }
}
// 需要触发什么行为
function mapDispatchToProps(dispatch){
      return {
         list:()=>dispatch({type:'GET_LIST'})
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tuijian)
// export default connect((state)=>state)(Tuijian)
// export default Tuijian;