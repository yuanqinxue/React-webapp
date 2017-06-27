import React, {Component} from 'react';
import './index.less';
export default class ChooseCity extends Component{
    render(){
        return (
            <div className="cities">
                <h3>选择城市</h3>
                <ul>
                    <li onClick={this.props.changeCity.bind(this,'北京')}>北京</li>
                    <li onClick={this.props.changeCity.bind(this,'上海')}>上海</li>
                    <li onClick={this.props.changeCity.bind(this,'杭州')}>杭州</li>
                    <li onClick={this.props.changeCity.bind(this,'天津')}>天津</li>
                    <li onClick={this.props.changeCity.bind(this,'武汉')}>武汉</li>
                    <li onClick={this.props.changeCity.bind(this,'重庆')}>重庆</li>
                    <li onClick={this.props.changeCity.bind(this,'成都')}>成都</li>
                    <li onClick={this.props.changeCity.bind(this,'广州')}>广州</li>
                    <li onClick={this.props.changeCity.bind(this,'深圳')}>深圳</li>
                    <li onClick={this.props.changeCity.bind(this,'厦门')}>厦门</li>
                    <li onClick={this.props.changeCity.bind(this,'珠海')}>珠海</li>
                    <li onClick={this.props.changeCity.bind(this,'南京')}>南京</li>
                    <li onClick={this.props.changeCity.bind(this,'西安')}>西安</li>
                    <li onClick={this.props.changeCity.bind(this,'太原')}>太原</li>
                    <li onClick={this.props.changeCity.bind(this,'石家庄')}>石家庄</li>
                    <li onClick={this.props.changeCity.bind(this,'大连')}>大连</li>
                    <li onClick={this.props.changeCity.bind(this,'济南')}>济南</li>
                    <li onClick={this.props.changeCity.bind(this,'郑州')}>郑州</li>
                </ul>
            </div>
        )
    }
}