import React, { useState, useEffect } from "react";

function Show() {
    const [inputVal, setInputVal] = useState("");
    const [showData, setShowData] = useState([]);

    let dataUrl = "";
    if (inputVal.length > 0) {
        dataUrl = `https://api.tvmaze.com/search/shows?q=${inputVal}`;
    } 
    else {
      dataUrl = `https://api.tvmaze.com/search/shows?q=friends`;
    }
    
   

    const getShowData = async () => {
        try {
            let response = await fetch(dataUrl);
            let resData = await response.json();
            setShowData(resData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getShowData();
    }, [inputVal]);
    // console.log(showData);
    return (
        <>
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <input
                                type="text"
                                value={inputVal}
                                onChange={(e) => setInputVal(e.target.value)}
                                className="form-control"
                                placeholder="Enter Show name...."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-4">
                    <div className="row">
                        {showData.map((element) => {
                            return (
                              <div className="col-md-3 mb-3">
                                <div className="card">
                                  <a href={element.show.url}>
                                  {element.show.image ? (
                                    <img
                                      src={element.show.image.medium}
                                        style={{
                                        width: "255px",
                                        height: "325px",
                                        }}
                                      alt={
                                        element.show.name != null
                                          ? element.show.name
                                          : "Not found"
                                      }
                                    />
                                  ) : (
                                    <div
                                      className="poster"
                                      style={{ height: "325px" }}
                                    >
                                      <img
                                        src="https://imgc.allpostersimages.com/img/posters/canadian-pacific-hunt-big-game-poster_u-L-F194F30.jpg?artHeight=550&artPerspective=n&artWidth=550&background=ffffff"
                                        style={{
                                        width: "270px",
                                        height: "325px",
                                        }}
                                        alt = {element.show.name}
                                      />
                                    </div>
                                  )}
                                  </a>
                                  <div className="card-body">
                                 
                                    <span>
                                      <i
                                        class="fa fa-star text-dark"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      {element.show.rating.average}
                                    </span>
                                    <p className='fifty-chars'>{element.show.summary}</p>
                                  </div>

                                  <h5 className="text-success text-center">
                                    {element.show.name}
                                  </h5>
                                </div>
                              </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Show;
