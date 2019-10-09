import React from 'react';
import { Box, Heading, Grommet } from 'grommet';
import NavBar from './Components/NavBar';
import LoadFile from './Components/LoadFile';
import ViewBytes from './Components/ViewBytes';

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

const App: React.FC = () => {
    let [bytes, setBytes] = React.useState({});

    const onSelectFile = (file : any) => {
        const reader = new FileReader();
        reader.onload = () => {
            const arrayBuffer : any = reader.result;
            if (arrayBuffer) {
                setBytes(new Uint8Array(arrayBuffer));
            }
        };
        reader.readAsArrayBuffer(file);
    };
    
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
                        <ViewBytes bytes={bytes} />
                    </Box>
                </Box>
            </Box>
        </Grommet>
    );
};

export default App;
