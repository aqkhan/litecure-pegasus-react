import React, { Component } from 'react';
import {PegasusConsumer} from "../store/context";
import Test from "./index";
class HeaderContainer extends Component{
    render() {
        return(
            <div>
                <PegasusConsumer>
                    {
                        ({value, header ,data, dispatch}) => (
                            <Test value={value} header={header} data={data} dispatch={dispatch} />
                        )
                    }
                </PegasusConsumer>
            </div>
        )
    }

}

export default HeaderContainer;
