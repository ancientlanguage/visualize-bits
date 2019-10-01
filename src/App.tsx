import React from 'react';
import { Box, Button, Heading, Grommet } from 'grommet';
import NavBar from './Components/NavBar';

const theme = {
    global: {
        colors: {
            brand: '#228BE6'
        },
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px'
        }
    }
};

// const NavBar = (props: any) => (
//     <Box
//         tag="header"
//         direction="row"
//         align="center"
//         justify="between"
//         background="brand"
//         pad={{ left: 'medium', right: 'small', vertical: 'small' }}
//         elevation="medium"
//         style={{ zIndex: '1' }}
//         {...props}
//     />
// );

const App: React.FC = () => {
    return (
        <Grommet theme={theme} full>
            <Box fill>
                <NavBar>
                    <Heading level="3" margin="none">
                        Visualize Bits and Bytes
                    </Heading>
                </NavBar>
                <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                    <Box flex align="center" justify="center">
                        app body
                    </Box>
                </Box>
            </Box>
        </Grommet>
    );
};

export default App;
