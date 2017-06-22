import React, {Component} from 'react';
import RouterMap from '../routes/index';
export default class App extends Component {
    constructor() {
        super();
        this.state = {done: false}
    };

    componentDidMount() {
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