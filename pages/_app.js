import React from 'react';
import {PegsusProvider} from "../store/context";
import App, { Container } from 'next/app';

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }


    render () {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <PegsusProvider>
                    <Component {...pageProps}/>
                </PegsusProvider>
            </Container>
        )
    }
}