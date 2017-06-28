import React, {Component} from 'react';
import SearchHeader from '../../components/SearchHeader/index';
export default class Search extends Component{
    render(){
        return (
            <div>
                <SearchHeader fn={this.toSearch.bind(this)} history={this.props.history} value={this.props.match.params.keyword || ''}/>
            </div>
        )
    }
    toSearch(value){
        this.props.history.push('/search/all/'+value);
    }
}