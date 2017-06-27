import React, {Component} from 'react';
import { getOrderList,postComment } from '../../../fetch/orderList/index';
import OrderListComponent from '../../../components/OrderListComponent/index';
export default class OrderList extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        getOrderList(this.props.username).then(res=>res.json()
        ).then(data=>{
            this.setState({data});
        });
    }
    commitComment(id,comment,callback){
        console.log(id,comment);
        postComment({id,comment}).then(res=>res.json()
        ).then(data=>{
            callback();
        });
    }
    render(){
        return (
            <div>
                {this.state.data.length?<OrderListComponent commitComment={this.commitComment.bind(this)} data={this.state.data}/>:<div>正在加载中...</div>}
            </div>
        )
    }
}