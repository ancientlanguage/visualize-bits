import React from 'react';

export default function ViewBytes({ bytes }: any) {
    const listItems = Array.from(bytes).map((byte : any) => (<div>{byte}</div>));
    return (
        <div>
          {listItems}
        </div>
    );
}
