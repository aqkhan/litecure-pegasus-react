import React, {Component} from 'react';

// Create context
const Context = React.createContext();

// Create reducer that will contain all global methods that need to iterate global state
const reducer = (state, action) => {
    switch (action.type){
        case 'menu':
            return { ...state, value: !state.value };
        case 'header':
            return { ...state, header: action.payLoad };
        case 'data':
            return { ...state, data: action.payLoad };
        default:
            return state;
    }
};

// Provider component
export class PegasusProvider extends Component {
    // Global state initialize:
    state = {
        dispatch: action => {
            this.setState(state => reducer(state, action));
        },
        value: false,
        header:null,
        data: null
         };
    render() {
        const { state, props: { children } } = this;
        return <Context.Provider value={ state } >{children}</Context.Provider>;
    }
}

// Declare consumer component
export const PegasusConsumer = Context.Consumer;
