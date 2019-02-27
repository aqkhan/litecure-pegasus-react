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
                leadText: action.payLoad.leadText,
                toggle:action.payLoad.toggle
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
        case 'pages':
            return {
                ...state, pages: action.payLoad.pages
            }; 
        case 'products':
        return {
            ...state, products: action.payLoad.products
            };
        case 'stories':
            return {
                ...state, stories: action.payLoad.stories
            };

        case 'advisoryTeamMembers':
            return {
                ...state, advisoryTeamMembers: action.payLoad.advisoryTeamMembers
            };

        case 'publications':
            return {
                ...state, publications: action.payLoad.publications
            };
        case 'webinars':
            return {
                ...state, webinars: action.payLoad.webinars
            };
        case 'posts':
            return {
                ...state, posts: action.payLoad.posts
            };

        case 'tags':
            return {
                ...state, tags: action.payLoad.tags
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
        leadText: null,
        pages: null,
        products:null,
        publications:null,
        stories:null,
        posts:null,
        webinars:null,
        tags:null,
        advisoryTeamMembers:null,
        gtag:`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-134138528-1');`,
        translator:`function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
        }`
    };

    render() {
        const {state, props: {children}} = this;
        return <Context.Provider value={state}>{children}</Context.Provider>
    }
}

export const PegasusConsumer = Context.Consumer;