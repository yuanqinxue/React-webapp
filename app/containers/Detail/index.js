import React, {Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';
import Buy from '../../components/Buy/index';
import Info from './subpage/Info';
import Comment from './subpage/Comment';
import {connect} from 'react-redux';
import * as StoreActions from '../../actions/store';
import {bindActionCreators} from 'redux';
class Detail extends Component{
    constructor(){
        super();
        this.state={
            isStore : false
        }
    }
    render(){
        return (
            <div>
                {/*头部*/}
                <HeaderComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
                {/*购买和收藏*/}
                <Buy isStore={this.state.isStore} buy={this.buy.bind(this)} store={this.store.bind(this)}/>
                {/*评论*/}
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        let flag = this.props.store.some(item=>item===id);
        if (flag){
            this.setState({isStore:flag});
        }
    }
    checkLogin(){
        if (this.props.userInfo.username) {
            return true;
        }
        return false
    }
    buy(){
        let flag = this.checkLogin();
        if (flag) {
            this.props.history.push('/user');
        }else {
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id));
        }
    };
    store(){
        let flag = this.checkLogin();
        if (!flag) {
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id));
        }
        if (this.state.isStore){
            this.props.storeActions.remove(this.props.match.params.id);
        }else {
            this.props.storeActions.add(this.props.match.params.id)
        }
        this.setState({isStore:!this.state.isStore})
    }
}

export default connect(
    store=>{
        return {
            userInfo:store.userInfo,
            store:store.store
        }
    },
    dispatch=>{
        return {
            storeActions:bindActionCreators(StoreActions,dispatch)
        }
    }
)(Detail);