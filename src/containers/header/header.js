import React, { Component } from 'react'
require('./header.scss')
export default class Header extends Component {
     constructor(props) {
       super(props);
   
       this.state = {
         val: ''
       };
     }

    render() {
        return (
            <div className="head">
                <div className="head-left">
                    <span>北京</span>
                    <i></i>
                </div>
                <div className="head-right">
                    <i></i>
                    <input type="text" placeholder="搜索电影/电视剧/影人" value={this.state.val} onChange={this.changeInput.bind(this)} />
                </div>
            </div>
        )
    }
    changeInput(e){
     
        this.setState({val:e.target.value})
    }
}
