import React, {Component} from 'react';
import './index.less';
export default class Buy extends Component{
    render(){
        return (
            <div className="buy">
                <button onClick={this.store.bind(this)}>{this.props.isStore?'已加入购物车':'加入购物车'}</button>
                <button onClick={this.buy.bind(this)}>购买</button>
            </div>
        )
    }
    buy(){
        this.props.buy();
    }
    store(){
        this.props.store();
    }
}