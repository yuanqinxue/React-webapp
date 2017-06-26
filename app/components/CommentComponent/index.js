import React, {Component} from 'react';
import CommentItem from './CommentItem/index';
import './index.less';
export default class CommentComponent extends Component{
    render(){
        return (
            <div>
                <h3>用户评价</h3>
                {this.props.data.map((item,index)=>(
                    <CommentItem key={index} data={item}/>
                ))}
            </div>
        )
    }
}