import React from 'react';
import { Box, Heading, Grommet } from 'grommet';
import NavBar from './Components/NavBar';
import LoadFile from './Components/LoadFile';

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

const onSelectFile = (file : any) => {
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
        console.log(reader.result);
    };
    reader.readAsBinaryString(file);
};

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
                        <LoadFile onSelectFile={onSelectFile} />
                    </Box>
                </Box>
            </Box>
        </Grommet>
    );
};

export default App;
