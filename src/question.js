'use strict';

import React from 'react';

export default class Question extends React.Component {
    render() {
        return (
            <div>{this.props.data[this.props.num]['QUESTION']}</div>
        );
    }
};

Question.propTypes = {
    data: React.PropTypes.array,
    num: React.PropTypes.number,
};
Question.defaultProps = {
    data: [],
    num: 0
};