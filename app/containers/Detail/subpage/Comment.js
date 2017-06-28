import React, {Component} from 'react';
import {getComment} from '../../../fetch/detail';
import CommentComponent from '../../../components/CommentComponent';
import LoadMore from '../../../components/LoadMore/index';
export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            data: [],
            hasMore: true,
            isLoading: true
        }
    }

    componentDidMount() {
        this.processData(getComment(this.props.id, 0));
    }

    processData(result) {
        result.then(res => res.json()).then(({hasMore, data}) => {
            this.setState({
                hasMore,
                data: this.state.data.concat(data),
                isLoading: false
            })
        })
    }

    loadMore() {
        this.setState({
            isLoading: true,
            page: this.state.page + 1
        }, () => {
            this.processData(getComment(this.props.id, this.state.page));
        })
    }

    render() {
        return (
            <div>
                {this.state.data.length ? <CommentComponent data={this.state.data}/> : <div>正在加载中...</div>}
                <LoadMore isLoading={this.state.isLoading} loadMore={this.loadMore.bind(this)}
                          hasMore={this.state.hasMore}/>
            </div>
        )
    }
}