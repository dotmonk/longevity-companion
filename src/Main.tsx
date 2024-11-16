import React, { Component, ReactElement } from 'react';
import { AppState, MainPage } from './App';
import Personal from './Personal';
import Nutrition from './Nutrition';
import Excersize from './Excersize';
import Habits from './Habits';
import {Navbar, Nav, Container} from "react-bootstrap";
import Indicators from './Indicators';

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
    indicators: {
        title: 'Indicators',
        component: (props) => <Indicators appState={props.appState} />
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
        <Container fluid>
            <Navbar expand="lg" className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbar-main-app-state" />
                    <Navbar.Collapse id="navbar-main-app-state">
                    <Nav className="me-auto">
                        {Object.keys(pageMap).map(page => (
                            <Nav.Link key={page} onClick={() => appState.update({
                                page
                            })}>
                                {pageMap[page].title}
                            </Nav.Link>
                        ))}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Page appState={appState} />
        </Container>
    );
}
