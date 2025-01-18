import React from "react";

const Cards = ({ data }) => {
  console.log(data);

  const readMore = (url) => {
    window.open(url);
  };
  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-12 mb-4 col-sm-6 col-md-4">
    //       {data.map((curItem, index) => {
    //         if (!curItem.urlToImage) {
    //           return null;
    //         } else {
    //           return (
    //             <div className="card">
    //               <img src={curItem.urlToImage} className="card-img" />
    //               <div className="content">
    //                 <a
    //                   className="title"
    //                   onClick={() => window.open(curItem.url)}
    //                 >
    //                   {curItem.title}
    //                 </a>
    //                 <p>{curItem.description}</p>
    //                 <button onClick={() => window.open(curItem.url)}>
    //                   Read More
    //                 </button>
    //               </div>
    //             </div>
    //           );
    //         }
    //       })}
    //     </div>
    //   </div>
    // </div>

    <div className="container">
      <div className="row">
        {data.map((curItem, index) => {
          if (!curItem.urlToImage) return null;
          return (
            <div key={index} className="col-12 mb-4 col-sm-6 col-md-4 col-xl-3">
              <div className="card">
                <img src={curItem.urlToImage} className="card-img" alt="News" />
                <div className="content">
                  <a className="title" onClick={() => window.open(curItem.url)}>
                    {curItem.title}
                  </a>
                  <p>{curItem.description}</p>
                  <button onClick={() => window.open(curItem.url)}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
