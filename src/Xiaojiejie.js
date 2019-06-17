import React, { Component, Fragment } from 'react'
import './style.css'
import axios from 'axios'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'loveyou',
            list: ['头部按摩', '精油推背', '精油推背']
        }
    }
    render() {
        return (
            <Fragment>
                {/* 第一次注释 */}
                <div>
                    <label htmlFor="haha">222</label>
                    <input
                        id="haha"
                        className="box"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={input => { this.input = input }}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <XiaojiejieItem
                                    key={index + item}
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                    list={this.state.list}
                                >
                                </XiaojiejieItem>
                            )
                        })
                    }
                </ul>
                <Boss></Boss>
            </Fragment>
        )
    }

    componentDidMount() {
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda').then(res => {
            console.log('获取数据成功' + JSON.stringify(res));

        }).catch(error => console.log(error)
        )
    }
    inputChange(e) {
        this.setState({
            // inputValue: e.target.value
            inputValue: this.input.value
        })

    }
    //增加列表
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    //删除列表项
    deleteItem(index) {
        console.log(index);
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list
        })
    }
}

// console.log(this.state.inputValue);

export default Xiaojiejie