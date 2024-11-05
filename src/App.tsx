import React, { Component } from 'react';
import Main from './Main';

export interface AppProps { }

export interface AppState {
    placeholder1: string;
    placeholder2: string;
    update: Function;
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            placeholder1: "FIXME1",
            placeholder2: "FIXME2",
            update: (state, callback) => this.setState(state, callback)
        }
    }
    render() {
        return (
            <Main appState={this.state} />
        );
    }
}

export default App;