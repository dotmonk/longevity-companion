import React, { Component } from 'react';
import { AppState } from './App';

interface MainProps {
    appState: AppState
}

export default (props: MainProps) => {
    const { appState } = props;
    return (
        <div>
            {appState.placeholder1}
            {appState.placeholder2}
            <a onClick={() => appState.update({
                placeholder1: "OK"
            })}>Change</a>
        </div >
    );
}
