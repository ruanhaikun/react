import React, { Component } from 'react';
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }
    render() {
        return (
            <div>
                <div className={this.state.isShow ? 'show' : 'hide'}>boss级人物-孙悟空</div>
                <div>
                    <button onClick={this.handleZhaohuan.bind(this)}>召唤Boss</button>
                </div>
                <div>{this.format('xiaoming')}</div>
                <li dangerouslySetInnerHTML={{ __html: "<i>打我呀</i>" }}></li>
                <div style={{ color: 'red', fontSize: '30px', backgroundColor: 'yellow' }}>颜色haohao</div>
            </div>
        );
    }
    handleZhaohuan() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
    format(msg) {
        return '111' + msg
    }
}

export default Boss;