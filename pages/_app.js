import React from 'react';
import {PegsusProvider} from "../store/context";
import App, { Container } from 'next/app';
import Router from "next/router";
import withGA from "next-ga";

class MyApp extends App {
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

export default withGA('UA-134138528-1', Router)(MyApp);