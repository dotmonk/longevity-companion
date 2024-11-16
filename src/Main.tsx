import React, { Component, ReactElement } from 'react';
import { AppState, MainPage } from './App';
import Personal from './Personal';
import Nutrition from './Nutrition';
import Excersize from './Excersize';
import Habits from './Habits';

export interface MainProps {
    appState: AppState
}

type PageMap = {
    [page in MainPage]: {
        title: string,
        component: (props: MainProps) => ReactElement<MainProps>;
    }
};

const pageMap: PageMap = {
    "personal": {
        title: "Personal data",
        component: (props) => <Personal appState={props.appState} />
    },
    nutrition: {
        title: 'Nutrition',
        component: (props) => <Nutrition appState={props.appState} />
    },
    excersize: {
        title: 'Excersize',
        component: (props) => <Excersize appState={props.appState} />
    },
    habits: {
        title: 'Habits',
        component: (props) => <Habits appState={props.appState} />
    }
}

export default (props: MainProps) => {
    const { appState } = props;
    const { page } = appState;
    const Page = pageMap[page].component;
    return (
        <div>
            <div>
                {Object.keys(pageMap).map(page => (
                    <a key={page} onClick={() => appState.update({
                        page
                    })}>
                        {pageMap[page].title}
                    </a>
                ))}
            </div>
            <Page appState={appState} />
        </div>
    );
}
