import React, { Component } from 'react';
import Main from './Main';

export interface AppProps { }

export interface DataEvent<T> {
    timestamp: number;
    data: T;
}

export type MainPage = "personal"|"nutrition"|"excersize"|"habits";

export type Gender = "male" | "female" | undefined;

export interface AppState {
    weightKilograms: DataEvent<number>[];
    dateOfBirthTimestamp: number;
    gender: Gender;
    page: MainPage;
    update: Function;
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        const savedState = localStorage.getItem("state");
        let currentState: AppState = {
            update: (state, callback) => { },
            weightKilograms: [],
            dateOfBirthTimestamp: -1,
            gender: undefined,
            page: 'personal'
        };
        if (savedState) {
            try{
                currentState = JSON.parse(savedState);
            } catch(e) {}
        }
        currentState.update = (state, callback) => {
            this.setState(state, () => {
                const updatelessCopy = Object.keys(this.state).reduce((copy, key) => {
                    if(key === "update") {
                        return copy;
                    }
                    copy[key]=structuredClone(this.state[key]);
                    return copy;
                }, {});
                localStorage.setItem("state", JSON.stringify(updatelessCopy));
                if (callback) {
                    callback();
                }
            });
        }
        // @ts-ignore
        this.state = currentState;
    }
    render() {
        return (
            <Main appState={this.state} />
        );
    }
}

export default App;