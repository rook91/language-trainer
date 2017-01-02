'use strict';

import React from 'react';

export default class Answer extends React.Component {

    shouldComponentUpdate(newProps) {
        if (this.props.num !== newProps.num) {
            this.answerInput.value = '';
            this.summaryDiv.value = '';
        }
        return true;
    }

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

    inputKeyup(e) {
        if (e.keyCode === 13) {
            this.checkAnswer();
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        ref={(input) => {
                            this.answerInput = input;
                        }}
                        onKeyUp={this.inputKeyup.bind(this)}
                    />
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