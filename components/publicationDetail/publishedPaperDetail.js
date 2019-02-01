    /**
     * Created by FaZi on 12/10/2018.
     */
    import  React , { Component } from 'react';
    import RequestDemo from '../requestDemo';
    import PublicationHeader from '../publication/publicationHeader/index';
    import DetailContent from '../publicationDetail/detailcontent/index';
    import axios from "axios";
    import {API_PATH} from "../apiconfig";
    // import DetailCard from '../publicationDetail/detailCard';

    class  PublishedPaperDetail extends Component{
        state={
            slug:null
        };
        componentWillMount() {
            let {slug} = this.props;
            this.setState({ slug:slug })
            axios.get(API_PATH + 'pages')
                .then((res)=>{
                    res.data.pages.forEach((val) => {
                        if (val.type === "publication") {
                            this.setState({page: val})
                        }
                    });
                })
                .catch(err => console.log(err));
        };
        render() {
            let {slug, page} = this.state;
                return(<div>
                    {page && <PublicationHeader publicationCategory={"Published Paper"} headerImg={page && page.featuredImage && page.featuredImage.url} heading={"PUBLICATIONS"}/>}
                    <DetailContent slug={slug}/>
                    {/*<DetailCard/>*/}
                    <RequestDemo/>
                </div>)
        }
    }
    export default PublishedPaperDetail;
