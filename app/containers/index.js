import React, {Component} from 'react';
import RouterMap from '../routes/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/userInfo';
import {getStorage} from '../local/index';

class App extends Component {
    constructor() {
        super();
        this.state = {done: false}
    };

    componentDidMount() {
        // 先去本地查找是否存储过localStorage名字叫cityName
        // 1没有cityName 赋予一个默认值 北京
        let cityName = getStorage('cityName');
        if(cityName == null){
            cityName = '武汉';
        }
        this.props.userActions.update({cityName});
        this.setState({done: true});
    };

    render() {
        return (
            <div>
                {this.state.done ? <RouterMap/> : <div>正在加载...</div>}
            </div>
        )
    }
}

export default connect(
    state => { // mapStateToProps
        return {}
    },
    dispatch => { // mapDispacthToProps
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App);