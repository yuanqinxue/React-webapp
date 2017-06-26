import React, {Component} from 'react';
import Star from '../Star/index';
import './index.less'
export default class InfoComponent extends Component{
    render(){
        let {img,title,star,price,subTitle,desc} = this.props.data;
        return (
            <div className="info-component">
                <div className="info-list">
                    <img src={img} alt=""/>
                    <div>
                        <h3>{title}</h3>
                        <div className="info-star">
                            <Star count={star}/> <span>￥{price}</span>
                        </div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                <hr/>
                {/*将内容转化为html插入到页面中*/}
                <div dangerouslySetInnerHTML={{__html:desc}}></div>
            </div>
        )
    }
}