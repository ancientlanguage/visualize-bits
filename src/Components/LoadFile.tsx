import React, { createRef, useState } from 'react';
import { Button } from 'grommet';
import { Upload } from 'grommet-icons';

export default function LoadFile({ onSelectFile }: any) {
    const inputRef: any = createRef();
    let [file, setFile] = useState();

    const handleClickEvent = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        setFile((file = event.target.files[0]));
        onSelectFile(file);
    };

    const getFileInfo = () => {
        if (file) {
            return (<div><div>{file.name}</div><div>{file.size} bytes</div></div>);
        } else {
            return (<div />);
        }
    };

    return (
        <form>
            <input
                ref={inputRef}
                type="file"
                style={{ display: 'none' }}
                onChange={handleClickEvent}
            ></input>
            <Button
                icon={<Upload />}
                label="Upload File"
                onClick={() => {
                    inputRef.current.click();
                }}
            />
            {getFileInfo()}
        </form>
    );
}
