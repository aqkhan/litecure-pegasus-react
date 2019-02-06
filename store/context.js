import React, {Component} from "react";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                navigations: action.payLoad.navigations,
                navigationChilds: action.payLoad.navigationChilds,
                image: action.payLoad.image,
                leadText: action.payLoad.leadText
            };
        case 'toggle':
            return{
              ...state, toggle: !state.toggle
            };
        case 'imageAndHeader':
            return{
                ...state, image:action.payLoad.image, leadText:action.payLoad.leadText
            };
        case 'togglef':
            return {
                ...state, toggle:false
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
        navigationChilds: null,
        image: null,
        leadText: null
    };

    render() {
        const {state, props: {children}} = this;
        return <Context.Provider value={state}>{children}</Context.Provider>
    }
}

export const PegasusConsumer = Context.Consumer;