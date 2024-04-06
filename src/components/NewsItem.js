import React from "react";

const NewsItem=(props)=>{
    let { title, description, imageUrl,newsUrl,author,publishedAt } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://images.news18.com/ibnlive/uploads/2023/11/sd-12-2023-11-8d3bedd24a431f1415055d2df0187ae9-16x9.png?impolicy=website&width=1200&height=675":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text text-danger">By {author} on {new Date(publishedAt).toGMTString()}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
