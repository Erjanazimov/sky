import React, {useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import {Alert, Spin} from "antd";
import {useDispatch} from "react-redux";
import {fetchMove, fetchMoveCinema} from "../../redux/carouselSlice";

let count = 1;
const Cinema = ({dataMove, title}) => {
    const dispatch = useDispatch()

    function removeDuplicates(originalArray, prop) {
        let newArray = [];
        let lookupObject  = {};

        for(let i in originalArray) {
            lookupObject[originalArray[i][prop]] = originalArray[i];
        }

        for(let i in lookupObject) {
            newArray.push(lookupObject[i]);
        }
        return newArray;
    }

    let contentDuplicates = removeDuplicates(dataMove, "url_id");

    const mapCinema = dataMove.map((item, i) => {
       return <div key={i}>
            <img src={item.poster_link} alt={item.id}/>
        </div>
    })


    return (
        <div className="container">
            <div className="blockCinema">
            <h1 className="text-white">{title}</h1>
                        <div className="block_card_cinema">
                    {mapCinema}
                        </div>
            </div>
        </div>
    );
};

export default Cinema;
