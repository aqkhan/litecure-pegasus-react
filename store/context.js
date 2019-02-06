import React, {Component} from "react";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                navigations: action.payLoad.navigations,
                navigationchilds: action.payLoad.certs,
                image: action.payLoad.image,
                leadText: action.payLoad.leadText
            };
        default:
            return state;

    }
};

export class PegsusProvider extends Component {

    state = {
        dispatch: (action) => {
            this.setState(state => reducer(state, action));
        },
        toggle: false,
        navigations: null,
        navigatoionchilds: null,
        image: null,
        leadText: null
    };

    render() {
        const {state, props: {children}} = this;
        return <Context.Provider value={state}>{children}</Context.Provider>
    }
}

export const PegasusConsumer = Context.Consumer;