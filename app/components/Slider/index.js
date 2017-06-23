import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';
export default class Slider extends Component{
    constructor(peops){
        super(peops);
        this.state={index:0}
    }
    render(){
        let opts = {
            continuous: true,
            callback:(index)=>{
                this.setState({index})
            }
        };
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index==0?"active":""}></li>
                    <li className={this.state.index==1?"active":""}></li>
                    <li className={this.state.index==2?"active":""}></li>
                </ul>
            </div>
        )
    }
}