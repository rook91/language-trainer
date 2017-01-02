'use strict';

import React from 'react';
import Question from './question.js'
import Answer from './answer.js'

export default class TestPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            qNum: 0
        }
    }

    onNextClick() {
        let newNum = ++this.state.qNum;
        if(newNum === this.props.data.length){
            alert('MAX VALUE achieved');
            newNum = 0;
        }
        this.setState({
            qNum: newNum
        })
    }

    render() {
        const status = `Question ${this.state.qNum + 1} of ${this.props.data.length}`;
        return (
            <div>
                <div>{status}</div>
                <Question data={this.props.data} num={this.state.qNum}/>
                <Answer data={this.props.data} num={this.state.qNum}/>
                <div>
                    <button id="start" onClick={this.onNextClick.bind(this)}>NEXT</button>
                </div>
            </div>
        );
    }
};
TestPage.propTypes = {
    data: React.PropTypes.array,
};
TestPage.defaultProps = {
    data: [],
};