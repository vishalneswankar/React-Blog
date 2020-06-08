import React, { Component } from "react";
import ReactImageFallback from "react-image-fallback";
import fallbackImg from "../images/no_img.jpg";

class News extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://gnews.io/api/v3/top-news?&token=6ab2fb742c4bdfa485c32467f029b98c"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      });
  }

  render() {
    return (
      <div>
        <h2 className="pb-5 pt-5 title_head">
          News <span>API</span>
        </h2>
        <div className="row">
          {this.state.news.map((newsAll) => (
            <div className="col-md-4 mb-3" key={newsAll.title}>
              <div className="card img_height_news">
                <ReactImageFallback
                  src={newsAll.urlToImage}
                  fallbackImage={fallbackImg}
                  className="card-img-top"
                  alt="Missing Photos"
                />
                <div className="card-body">
                  <h5 className="card-title">{newsAll.title}</h5>
                  <p className="card-text">{newsAll.description}</p>
                  <a
                    href={newsAll.url}
                    target="_blank"
                    className="btn btn-info"
                  >
                    Read More
                  </a>
                  <p className="btn btn-success float-right">
                    {newsAll.publishedAt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
