import React, { Component } from 'react';
import PropTypes from 'prop-types'
class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }
    //组件优化，防止浪费资源
    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false

        }
    }
    render() {

        console.log(1);

        return (
            <li onClick={this.handleClick}>
                {this.props.avname}为你服务-
                {this.props.content}</li>
        );
    }
    handleClick() {
        this.props.deleteItem(this.props.index)

    }
}
XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    avname: PropTypes.string.isRequired,
    deleteItem: PropTypes.func
}
XiaojiejieItem.defaultProps = {
    avname: '哈哈'
}
export default XiaojiejieItem;