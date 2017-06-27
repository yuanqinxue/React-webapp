import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
// 主页头部组件
export default class HomeHeader extends Component {
    render() {
        return (
            <div className="home-header back">
                <div className="city">
                    <Link to="/city">
                        {this.props.cityName}
                        <i className="iconfont icon-unfold"></i>
                    </Link>
                </div>
                <div className="search">
                    <i className="iconfont icon-search"></i>
                    <input type="text"/>
                </div>
                <div className="profile">
                    <Link to='/login'>
                        <i className="iconfont icon-people_fill"></i>
                    </Link>
                </div>
            </div>
        )
    }
}