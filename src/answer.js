'use strict';

import React from 'react';

export default class Answer extends React.Component {

    checkAnswer() {
        const ans = this.answerInput.value,
            correctAns = this.props.data[this.props.num]['ANSWER'];

        if (ans !== correctAns) {
            this.summaryDiv.value = 'INCORRECT: ' + correctAns
        } else {
            this.summaryDiv.value = 'CORRECT'
        }
        this.forceUpdate();
    }

    shouldComponentUpdate(newProps) {
        if (this.props.num !== newProps.num) {
            this.answerInput.value = '';
            this.summaryDiv.value = '';
        }
        return true;
    }

    render() {
        console.log('render**')
        return (
            <div>
                <div>
                    <input
                        ref={(input) => {
                            this.answerInput = input;
                        }}/>
                    <button
                        onClick={this.checkAnswer.bind(this)}
                    >CHECK
                    </button>
                </div>
                <input ref={(summary) => {
                    this.summaryDiv = summary;
                }}/>
            </div>
        );
    }
};

Answer.propTypes = {
    data: React.PropTypes.array,
    num: React.PropTypes.number,
};
Answer.defaultProps = {
    data: [],
    num: 0
};