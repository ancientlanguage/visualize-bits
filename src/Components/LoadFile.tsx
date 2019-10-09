import React, { createRef, useState } from 'react';
import { Button } from 'grommet';
import { Upload } from 'grommet-icons';

export default function LoadFile(props: any) {
    const inputRef: any = createRef();
    let [file, setFile] = useState({});

    const handleClickEvent = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        setFile((file = event.target.files[0]));
        console.log(file);
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
        </form>
    );
}
