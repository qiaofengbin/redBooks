import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import NavBar from '../../components/navBar'
import Tuijian from './components/tuijian'
import Shishang from './components/shishang'
import Meizhuang from './components/meizhuang'
import Meishi from './components/meishi'
import Yundong from './components/yundong'
import Yingyin from './components/yingyin'
import Lvxing from './components/lvxing'
import Jujia from './components/jujia'
import Muying from './components/muying'
import Shuma from './components/shuma'
import Nanshi from './components/nanshi'
import '../../static/css/style.css'

class Home extends Component {
   constructor(props) {
      super(props)
   }
   render() {
      return (
         <Router>
            <Fragment>
               <header>
                  <NavBar />
               </header>
               <Switch>
                  {/* Qfb07192026 */}
                  <Route exact path='/tuijian' component={Tuijian} />
                  <Route path='/shishang' component={Shishang} />
                  <Route path='/meizhuang' component={Meizhuang} />
                  <Route path='/meishi' component={Meishi} />
                  <Route path='/yundong' component={Yundong} />
                  <Route path='/yingyin' component={Yingyin} />
                  <Route path='/lvxing' component={Lvxing} />
                  <Route path='/jujia' component={Jujia} />
                  <Route path='/muying' component={Muying} />
                  <Route path='/shuma' component={Shuma} />
                  <Route path='/nanshi' component={Nanshi} />
                  <Redirect to="/tuijian"></Redirect>
               </Switch>
            </Fragment>
         </Router>
      )
   }
}
export default Home;