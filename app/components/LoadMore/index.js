import React, {Component} from 'react';
import './index.less';
export default class LoadMore extends Component {
    componentDidMount(){
        this.fn=()=>{
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                // 先判断是否正在加载
                if(this.props.isLoading){
                    return;
                }
                // 判断按钮距离屏幕顶端的高度 和 屏幕可视窗口的高度
                let screen = window.screen.height;
                console.log(this.refs.hasMore);
                let top = this.refs.hasMore.getBoundingClientRect().top; // 获取当前元素的位置
                if (top<screen){
                    this.props.loadMore();
                }
            },50)
        };
        // 绑定滚动事件
        window.addEventListener('scroll',this.fn)
    }

    componentWillUnmount(){
        // 移除滚动事件
        window.removeEventListener('scroll',this.fn)
    }

    loadMore(){ // 调用父级传过来的加载更多函数
        if(this.props.isLoading){
            return;
        }
        this.props.loadMore();
    }

    render() {
        return (
            <div className="has-more">
                {this.props.hasMove ? <div ref="hasMore" onClick={this.loadMore.bind(this)}>加载更多</div> : <div>我是有底线的</div>}
            </div>
        )
    }
}
