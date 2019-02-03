import React from 'react';

const defaultComponent = (props) =>{
    return(
        <section className="new-media-detail-containers">
            <section className="second-section hours-img" style={props.featuredImage && {
                background: `linear-gradient(rgba(8, 7, 7, 0.90), rgba(10, 9, 9, 0.8)), url(${props.featuredImage && props.featuredImage.url})`,
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "cover",
                "backgroundPosition": "center"
            }}>
                <div className="fourth-row text-area">
                    <div className="container custom-container">
                        <div className="row flex">
                            <div className="BENEFITS">
                                <h2>{props.headerImageLabel}</h2>
                            </div>
                        </div>
                    </div>
                    <div className=" container">
                        <div className="row ">
                            <div className="col-sm-4 p-0">
                                <div className="LASER-THREAT">
                                    <h1>{props.metaTitle}</h1>
                                    <p>{props.leadText}</p></div>
                            </div>
                            <div className="col-sm-8 ">
                                <div className=" learnmore-header"
                                     dangerouslySetInnerHTML={{__html: props.content}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
};
export default defaultComponent;