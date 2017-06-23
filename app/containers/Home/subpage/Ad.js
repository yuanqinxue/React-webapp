import React, {Component} from 'react';
import {getAd} from '../../../fetch/home/index';
import './Ad.less';
export default class Ad extends Component {
    constructor(peops) {
        super(peops);
        this.state = {data: []};
    };

    componentWillMount() {
        getAd().then(res => res.json()).then(data => {
            this.setState({data});
        });
    }

    render() {
        return (
            <div className="ad-area">
                <h3>超值特惠</h3>
                <div className="ads">
                    {this.state.data.length ? this.state.data.map((item, index) => (
                            <a className="ad" href={item.link} key={index}>
                                <img src={item.img} title={item.title}/>
                            </a>
                        )) : <div>正在加载中...</div>}
                </div>
            </div>
        )
    }
}