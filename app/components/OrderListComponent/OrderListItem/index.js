import React, {Component} from 'react';
import './index.less';
export default class OrderListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentState: props.data.commentState
        }
    }

    render() {
        let {id, img, commentState, count, title, price} = this.props.data;
        return (
            <div>
                <div className="order-list-item">
                    <img src={img} alt=""/>
                    <div className="list-context">
                        <h4>商户：{title}</h4>
                        <span>数量：{count}</span>
                        <span>价格：{price}</span>
                    </div>
                    <div className="list-btn">
                        {this.state.commentState === 0 ? <button onClick={this.changeCommentState.bind(this)}>评价</button> : this.state.commentState === 1 ? '' :
                                <button className="unselect">已评价</button>}
                    </div>
                </div>
                {this.state.commentState === 1 ? <div className="comment-area">
                        <textarea ref={ref=>(this.comment=ref)}></textarea>
                        <div>
                            <button className="btn-left" onClick={this.sureCommit.bind(this)}>确认评价</button>
                            <button className="btn-right" onClick={this.cancel.bind(this)}>取消</button></div>
                    </div> : ''}
            </div>
        )
    }
    changeState(){
        this.setState({commentState:2});
    }
    sureCommit(){
        this.props.commitComment(this.props.data.id,this.comment.value,this.changeState.bind(this));
    }
    changeCommentState(){
        this.setState({commentState:1});
    }
    cancel(){
        this.setState({commentState:0});
    }
}