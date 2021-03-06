import React, {Component} from "react";
import ExchangeViewBase from "@/components/ExchangeViewBase";
import Nav from '../Nav'
import OrderQb from './component/OrderQb'
// import OrderOtc from './component/OrderOtc'
// import OrderFund from './component/OrderFund'

import './stylus/order.styl'


import {
  resolveOrderPath
} from "@/config/UrlConfig"


export default class Exchange extends ExchangeViewBase {
  constructor(props) {
    super(props);
    this.state = {
      pairIdMsg: {},
      renderFlag: false,
      orderNavItems: [
        {name: this.intl.get("order-currency"), address: '/qb'},
        {name: this.intl.get("order-digital"), address: '/otc'},
        {name: this.intl.get("order-fund"), address: '/fund'},
      ]
    };
    // const {controller} = this.props;
    //绑定view
    // controller.setView(this);
    //初始化数据，数据来源即store里面的state
    // this.state = Object.assign(this.state, controller.initState);
  }
  
  componentWillMount() {
  
  }
  
  async componentDidMount() {
    // let pairIdMsg =await this.props.controller.marketController.store.getPairMsg();
    // this.setState(
    //     {
    //       pairIdMsg,
    //       renderFlag: true
    //     }
    // )
  }
  
  render() {
    // const {match} = this.props;
    return (
        <div className="qb clearfix">
            <Nav/>
            <div className='order-content fr'>
              <OrderQb controller={this.props.controller} pairIdMsg={this.state.pairIdMsg}/>
              {/*<Switch>*/}
                {/*<Route path={resolveOrderPath('/qb')} component={({match}) => (*/}
                    {/*<OrderQb controller={this.props.controller} pairIdMsg={this.state.pairIdMsg}/>*/}
                {/*)}/>*/}
                {/*/!*<Route path={resolveOrderPath('/otc')} component={({match}) => (*!/*/}
                    {/*/!*<OrderOtc controller={this.props.controller}/>*!/*/}
                {/*/!*)}/>*!/*/}
                {/*/!*<Route path={resolveOrderPath('/fund')} component={({match}) => (*!/*/}
                    {/*/!*<OrderFund controller={this.props.controller}/>*!/*/}
                {/*/!*)}/>*!/*/}
                {/*<Redirect to={resolveOrderPath('/qb')}/>*/}
              {/*</Switch>*/}
            </div>
          </div>
    )
  }
}

// export default Translate(Order, OrderLang)