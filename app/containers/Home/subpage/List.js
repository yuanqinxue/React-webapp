import React, {Component} from 'react';
import {getList} from '../../../fetch/home/index';
import ListComponent from '../../../components/ListComponent/index';
import LoadMore from '../../../components/LoadMore/index';
export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMore: true,
            data: [],
            page:0,
            isLoading:true
        }
    }

    componentDidMount() {
        this.processData(getList(this.props.cityName, 0));
    }

    // 处理请求成功后的逻辑
    processData(result) {
        result.then(res => res.json()).then(({hasMore, data}) => {
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            })
        })
    }

    // 需要在当前写一个加载更多的函数，传递给loadMore,当点击时，触发我们传递的函数
    loadMore(){
        this.setState({
            page:this.state.page+1,
            isLoading:true
        },()=>{ // 此回调函数可以获取到最新的页码状态
            this.processData(getList(this.props.cityName, this.state.page));
        });
    }

    render() {
        return (
            <div>
                {this.state.data.length ?
                    <ListComponent data={this.state.data}/>
                    : <div>正在加载中...</div>}
                <LoadMore isloading={this.state.isLoading} loadMore={this.loadMore.bind(this)} hasMove={this.state.hasMore}/>
            </div>
        )
    }
}