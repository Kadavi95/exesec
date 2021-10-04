import React from 'react';
import { SimpleButton } from './SimpleButton.js';

export function CallbackButton(props) {
    let {theme, ...childProps } = props;

    return (
        <>
            {/* <button className={`btn btn-${props.theme} btn-sm m-1`} onClick={props.callback}>
                {props.text}

            </button> */}

            <SimpleButton {...childProps} className={`btn btn-${props.theme} btn-sm m-1`}></SimpleButton>

            
        </>
    )
}