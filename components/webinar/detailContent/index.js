import React, {Component} from 'react';
import HubSpot from "react-hubspot-form";
class detailContent extends Component {
    state = {
        err:null,
    };
    render() {
        let {webinar, tags} = this.props;
        let {err} = this.state;
        let category = [];
        webinar.selectTags.forEach((value)=>{
            tags&&tags.length!==0&&tags.forEach((valuee)=>{
              if(value === valuee._id){
                  category.push(valuee.title)
              }
            })
        });
        let { portal_id, form_id } = webinar;
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
                            {
                                (portal_id && form_id) &&
                                <div className="hubspot-forms">
                                    <HubSpot
                                        portalId={portal_id}
                                        formId={form_id}
                                        onSubmit={() => console.log('Submit!')}
                                        onReady={(form) => console.log('Form ready!')}
                                        loading={<div>Loading...</div>}
                                    />
                                </div>
                            }
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