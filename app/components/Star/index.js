import React, {Component} from 'react';
export default class Star extends Component{
    constructor(props){
        super(props);
        let arr = [];
        for(let i=1;i<=5;i++){
            if(i<=props.count){
                arr.push(true);
            }else {
                arr.push(false);
            }
        }
        this.state = {arr};
    };
    render(){
        return (
            <div>
                {this.state.arr.map((item,index)=>(
                    item?<i key={index} className="iconfont icon-g font"></i>:<i key={index} className="iconfont icon-pingjia font"></i>
                    )
                )}
            </div>
        )
    }
}