import React, {Component} from 'react';

class detailContent extends Component {
    state = {
        err:null,
    };
    render() {
        let {webinar, tags} = this.props;
        let {err} = this.state;
        let category = [];
        webinar.selectTags.forEach((value)=>{
            tags.forEach((valuee)=>{
              if(value === valuee._id){
                  category.push(valuee.title)
              }
            })
        });
        console.log(category)
        return (
            <div>
                {webinar &&<section className="content-dev">
                    <div className="container">
                        {category.length !== 0 && category && <h1 className="color-yellow">Categories</h1>}
                        {
                            category.length !== 0 && category.map((item,index)=>{
                                return(
                                    <div className="publication-description" key={index}>
                                        {
                                            item
                                    }
                                    </div>
                                )
                            })
                        }
                        <div className="title-dev">
                            <p className="w-text">{webinar.title}</p>
                        </div>
                        <div>
                            {
                                webinar.instructors.map((item, index)=>{
                                    return(
                                        <div className="publication-description" key={index}>
                                            by {
                                                item
                                            }

                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="description-dev">
                            <div className="publication-description"
                                 dangerouslySetInnerHTML={{__html: webinar.description}}/>

                            <div className="publication-description"
                                 dangerouslySetInnerHTML={{__html: webinar.form}}/>
                            {/*<div className="authors-details-card">*/}
                            {/*<div className="card">*/}
                            {/*<div className="card-body">*/}
                            {/*{webinar.authorImage &&*/}
                            {/*<img className="author-img-div" src={webinar.authorImage.url}/>}*/}
                            {/*<div>*/}
                            {/*<p className="author-name">{webinar.authors}</p>*/}
                            {/*</div>*/}
                            {/*{webinar.Bio && <div>*/}
                            {/*<div className="author-bio"*/}
                            {/*dangerouslySetInnerHTML={{__html: webinar.bio && webinar.bio}}/>*/}
                            {/*</div>}*/}
                            {/*</div>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>}
                {
                    err && <section className="content-dev">
                        <div className="container">
                            <div className="title-dev">
                                <h1><b>Invalid webinar Link</b></h1>
                            </div>
                        </div>
                    </section>
                }
            </div>
        );
    }
}
export default detailContent;