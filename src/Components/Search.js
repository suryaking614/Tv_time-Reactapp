import React, { useState } from 'react'
import Actor from './Actors';
import Show from './Show';
const Search = () => {

    const [actor, setActor] = useState(false);
    const [show, setShow] = useState(false);

    const setActorFilter = () => {
        setShow(false);
        setActor(true);
    }

    const setShowFilter = () => {
        setActor(false);
        setShow(true);
       
    }
    return (
        <>
            <section className="mt-5">
                <div className="container">
                        <div className="row mt-4">
                        <div className="col-md-7">
                        <h3>Search Your Favorite Shows</h3>
                        
                            <input type="radio" name="movie" onChange={() => setActorFilter()} /> <strong>ACTOR </strong>
                            <input type="radio" name="movie" onChange={() => setShowFilter()}  /> <strong>  SHOWS </strong>
                        
                        </div>
                    </div>
                   
                </div>
            </section>
            {actor ? <Actor /> : ""}
            {show ? <Show /> : ""}
        </>
    )
}

export default Search