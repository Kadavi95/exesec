import React from 'react';

export function Summary(props){
    return (
        <>
        <td>{props.index + 1}</td>
        <td>{props.item}</td>
        <td>{props.item.length}</td>
        </>
    )

}