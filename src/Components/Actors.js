import React, { useState, useEffect } from "react";

function Actors() {
  const [inputVal, setInputVal] = useState("");
  const [actorsData, setActorsData] = useState([]);

  let dataUrl = "";
  if (inputVal.length > 0) {
    dataUrl = `https://api.tvmaze.com/search/people?q=${inputVal}`;
  }
  else {
    dataUrl = `https://api.tvmaze.com/search/people?q=friends`;
  } 
 

  const getActorsData = async () => {
    try {
      let response = await fetch(dataUrl);
      let resData = await response.json();
      setActorsData(resData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getActorsData();
  }, [inputVal]);
  // console.log(actorsData);
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
                placeholder="Enter Actors name...."
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4">
          <div className="row">
            {actorsData.map((element) => {
              return (
                <div className="col-md-3 mb-3">
                  <div className="card">
                    <a href={element.person.url} >
                    {element.person.image ? (
                      <img
                        src={element.person.image.medium}
                        className="poster"
                        style={{ width: "255px", height: "325px" }}
                        alt={
                          element.person.name != null
                            ? element.person.name
                            : "Not found"
                        }
                      />
                    ) : (
                      <div className="poster" style={{ height: "325px" }}>
                        <img
                          src="https://imgc.allpostersimages.com/img/posters/canadian-pacific-hunt-big-game-poster_u-L-F194F30.jpg?artHeight=550&artPerspective=n&artWidth=550&background=ffffff"
                          style={{ width: "250px", height: "325px" }}
                          alt = "Not Found"
                        />
                      </div>
                    )}
                    </a>
                    <div className="card-body">
                      <p
                        className="card-text overflow-hidden"
                        style={{ height: "90px" }}
                      >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      </p>
                    </div>
                    <h5 className="text-success text-center">
                      {element.person.name}
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

export default Actors;
