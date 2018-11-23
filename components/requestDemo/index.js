import React , {Component} from 'react';

class RequestDemo extends Component{

    render() {
        return (
            <div>
                <section className="section-four">
                    <div className="section-four-background"></div>
                    <div className="container">
                        <div className="row flex requestitbro">
                            <p> REQUEST <span> A DEMO</span></p>
                        </div>
                        <div className="small-upper-line flex">
                            <div className="line"></div>
                        </div>
                        <div className="row flex">
                            <div className="taketheflowbro">
                                <p>
                                    See what makes Pegasus equine lasers different from anything else
                                    on the market today.<br/> Schedule a demo at your offices, or come pay us a visit.
                                    Either way, we know you'll like what you see.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 flex-custom ">
                                <p className="form-top-text">Set up your demonstration today!</p>
                                <input type="text" placeholder="Your Name"/>
                                <input type="email" placeholder="Your E-mail"/>
                                <input type="number" placeholder="Work Phone"/>
                                <input type="text" placeholder="Business Name "/>
                                <input type="text" placeholder="City and State"/>
                                <a href="#">
                                    SEND
                                </a>
                            </div>
                        </div>

                    </div>


                </section>
                <section className="section-five">
                    <div className="custom-container container">
                        <div className="row flex">

                            <p>
                                Stay up to date. Subscribe to the Pegasus feed :)
                            </p>
                            <a href="#">
                                SUBSCRIBE
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default RequestDemo;
