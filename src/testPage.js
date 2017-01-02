'use strict';

import React from 'react';

export default class TestPage extends React.Component {

    render() {
        return (
            <div>AAAAA</div>
        );
    }
};
TestPage.propTypes = {
    data: React.PropTypes.array,
};
TestPage.defaultProps = {
    data: [],
};