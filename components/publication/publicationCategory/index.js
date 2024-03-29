import React, { Component } from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { RestructorData } from "../../functions";
import ContentLoader from "react-content-loader";
import ScrollableAnchor, {
  goToAnchor,
  configureAnchors
} from "react-scrollable-anchor";
class PublicationCategoty extends Component {
  state = {
    categoryList: [],
    publications: null,
    publicationDestructure: null,
    totalPages: null,
    final: null
  };
  componentDidMount() {
    let { publications, categoryList } = this.props;
    this.setState(
      { publications: [...publications], categoryList: [...categoryList] },
      function() {
        this.setDisplay();
      }
    );
  }
  setDisplay() {
    let { publications } = this.state;
    let newCheck = true;
    let temp = [];
    let restructured = null;
    this.state.categoryList.forEach(tag => {
      if (tag.check === true) {
        newCheck = false;
      }
    });

    if (newCheck) {
      restructured = RestructorData(publications, 10);
    } else {
      this.state.publications &&
        this.state.publications.forEach(val => {
          let check = 0;
          val.selectTags.forEach(data => {
            if (check === 0) {
              this.state.categoryList.forEach(tag => {
                if (data === tag.id && tag.check === true) {
                  temp.push(val);
                  check = 1;
                }
              });
            }
          });
        });
      restructured = RestructorData(temp, 10);
    }
    this.setState({
      publicationDestructure: restructured,
      final: restructured[0],
      totalPages: restructured.length
    });
  }

    returnData = index => {
    this.setState({ final: this.state.publicationDestructure[index.selected] });
    configureAnchors({ offset: -60, scrollDuration: 1000 });
    goToAnchor("scroll");
  };

  checkChange = value => {
    let temp = [...this.state.categoryList];
    let change = temp[value].check;
    temp[value].check = !change;
    this.setState({ categoryList: temp });
    this.setDisplay();
  };

  render() {
    let { categoryList, final, totalPages } = this.state;
    let { publicationCategory, page } = this.props;
    let cards = null;
    let categories = null;
    if (categoryList) {
      categories = categoryList.map((value, index) => (
        <li key={index} onClick={() => this.checkChange(index)}>
          <input type="checkbox" checked={value.check} />
          <span>{value.name}</span>
        </li>
      ));
    }
      if (final) {
        cards = final.map((value, index) => {
              return(
            <div key={index} className="post-casestudy">
              <div className="img-dev">
                <Link href={page + value.slug}>
                  <a>
                    <img
                      src={
                        value.featuredImage
                          ? value.featuredImage.url
                          : "/static/images/placeholder.png"
                      }
                    />
                  </a>
                </Link>
              </div>
              <div>
                <Link href={page + value.slug}>
                  <a>{value.title}</a>
                </Link>
                <Link href={page + value.slug}>
                  <a>Read More</a>
                </Link>
              </div>
            </div>
          );
        } );
    }
    return (
      cards && (
        <section className="casestudy">
          <ScrollableAnchor id={"scroll"}>
            <div />
          </ScrollableAnchor>
          <div className="container">
            <div className="casestudy-primary">
              <div>
                <div className="casestudy-text">
                  <span>{publicationCategory}</span>
                  <span>Filter by topic categories</span>
                  <div className="list-dev">
                    <ul>{categories && categories}</ul>
                  </div>
                </div>
              </div>
              <div>
                {cards ? (
                  cards
                ) : (
                  <div className="loading-publications">
                    <ContentLoader
                      height={160}
                      width={550}
                      speed={2}
                      primaryColor="#f3f3f3"
                      secondaryColor="#ecebeb"
                    >
                      <rect
                        x="81"
                        y="12"
                        rx="3"
                        ry="3"
                        width="350"
                        height="6.4"
                      />
                      <rect
                        x="81"
                        y="30"
                        rx="3"
                        ry="3"
                        width="380"
                        height="6.4"
                      />
                      <rect
                        x="81"
                        y="48"
                        rx="3"
                        ry="3"
                        width="201"
                        height="6.4"
                      />
                      <rect
                        x="79.5"
                        y="49.27"
                        rx="0"
                        ry="0"
                        width="0"
                        height="0"
                      />
                      <rect
                        x="11.5"
                        y="10.27"
                        rx="0"
                        ry="0"
                        width="61"
                        height="51"
                      />
                      <rect
                        x="81"
                        y="12"
                        rx="3"
                        ry="3"
                        width="350"
                        height="6.4"
                      />
                      <rect
                        x="81"
                        y="30"
                        rx="3"
                        ry="3"
                        width="380"
                        height="6.4"
                      />
                      <rect
                        x="81"
                        y="48"
                        rx="3"
                        ry="3"
                        width="201"
                        height="6.4"
                      />
                      <rect
                        x="79.5"
                        y="49.27"
                        rx="0"
                        ry="0"
                        width="0"
                        height="0"
                      />
                      <rect
                        x="11.5"
                        y="10.27"
                        rx="0"
                        ry="0"
                        width="61"
                        height="51"
                      />
                    </ContentLoader>
                  </div>
                )}
                <ReactPaginate
                  previousLabel={<i className="fa fa-chevron-left "> </i>}
                  nextLabel={<i className="fa fa-chevron-right "> </i>}
                  breakLabel={". . ."}
                  breakClassName={"break-me"}
                  pageCount={totalPages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.returnData}
                  containerClassName={"digit-icons main"}
                  subContainerClassName={"container column"}
                  activeClassName={"p-one"}
                />
              </div>
            </div>
          </div>
        </section>
      )
    );
  }
}
export default PublicationCategoty;
