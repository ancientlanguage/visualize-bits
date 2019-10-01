import React, { Component } from 'react';
import { Box } from 'grommet';

export default class NavBar extends Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <Box
                tag="header"
                direction="row"
                align="center"
                justify="between"
                background="brand"
                pad={{ left: 'medium', right: 'small', vertical: 'small' }}
                elevation="medium"
                style={{ zIndex: 1 }}
                {...this.props}
            />
        );
    }
}
