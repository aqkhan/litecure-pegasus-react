import React, {Component} from 'react';
import HubSpot from "react-hubspot-form";
class Subscribe extends Component {
    render(){
        let { item } = this.props;
        let { portal_id, form_id } = item;
        return <section className="employees">
            <div className="container">
                <div className="detail-emp">
                    <div className="description-text" dangerouslySetInnerHTML={{__html: item.content}}/>
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
        </section>
    }
}
export default Subscribe;