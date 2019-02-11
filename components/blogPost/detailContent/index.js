import React, {Component} from 'react';


class detailContent extends Component {
    render() {
        let {post} = this.props;
        return post &&(
            <section className="content-dev">
                    <div className="container">
                        <div className="title-dev">
                            <p className="w-text">{post.title}</p>
                        </div>
                        <div className="description-dev">
                            <div className="publication-description"
                                 dangerouslySetInnerHTML={{__html: post.content}}/>

                            <div className="publication-description"
                                 dangerouslySetInnerHTML={{__html: post.moreContent}}/>


                            {/*<div className="authors-details-card">*/}
                                {/*<div className="card">*/}
                                    {/*<div className="card-body">*/}
                                        {/*{post.authorImage &&*/}
                                        {/*<img className="author-img-div" src={post.authorImage.url}/>}*/}
                                        {/*<div>*/}
                                            {/*<p className="author-name">{post.authors}</p>*/}
                                        {/*</div>*/}
                                        {/*{post.Bio && <div>*/}
                                            {/*<div className="author-bio"*/}
                                                 {/*dangerouslySetInnerHTML={{__html: post.bio && post.bio}}/>*/}
                                        {/*</div>}*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>
        );
    }
}
export default detailContent;