import React from 'react';
import {Link, Route, Switch, useHistory} from "react-router-dom";
import {RightCircleFilled} from "@ant-design/icons";
import bem from "easy-bem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useDispatch} from "react-redux";
import {addIdCinema} from "../../redux/infoCinemaSlice";
import {Spin} from "antd";

// const responsive = {
//     superLargeDesktop: {
//         breakpoint: { max: 3000, min: 1600 },
//         items: 8
//     },
//     desktop: {
//         breakpoint: { max: 2100, min: 1400 },
//         items: 7
//     },
//     tablet: {
//         breakpoint: { max: 1400, min: 1100 },
//         items: 4
//     },
//     mobile: {
//         breakpoint: { max: 1100, min: 700 },
//         items: 3
//     }
// };

const CarouselImages = ({title, data, link}) => {
    const b = bem("scroll");
    const {push} = useHistory();
    const dispatch = useDispatch();
    const btnInfo = (id) => {
        push(`/infoCinema:${id}`)
        dispatch(addIdCinema({id: id}))
    }

    if (data.length) {
        return  <div className={b("container")}>
            <div className="text-font">
                <h2>
                    <Link to={link}>
                        <p>{title}</p> <p className="mx"><RightCircleFilled /> </p>
                    </Link>
                </h2>
            </div>

            <div className="flex_carousel">
                    {/*<Carousel*/}
                    {/*    responsive={responsive}>*/}
                        {data.map((item) => <div className={b("move")} key={item.url_id} onClick={() => btnInfo(item.url_id)}>
                            <img src={item.poster_link}/>
                        </div>)}

                    {/*</Carousel>*/}
            </div>

        </div>
    }
    return  <div className="example">
        <Spin />
    </div>

    ;
};

export default CarouselImages;