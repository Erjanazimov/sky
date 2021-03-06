import React, {useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import Rek from "../pages/rek/Rek";
import New from "../pages/new/New";
import {useDispatch, useSelector} from "react-redux";
import {fetchMove, fetchMoveCinema, fetchRek} from "../redux/carouselSlice";
import InfoCinema from "../component/InfoCinema/InfoCinema";
import Loading from "../component/loading/Loading";
import About from "../pages/about/About";
import Cinema from "../component/cinema/Cinema";

const Router = () => {
    const stateImagesTop = useSelector((state) => state.carousel);
    const dispatch = useDispatch();
    const stateMove = useSelector(state => state.infoCinema.info_cinema);

    useEffect(() => {
        dispatch(fetchMove({id: 1}))
        dispatch(fetchRek())
        dispatch(fetchMoveCinema())
    },[])


    return (
        <div>
            <div className="loading">
            {stateImagesTop.rekCinema.length|| stateMove.length ? null : <Loading/>}
            </div>
            <Switch>
                <Route exact path='/' component={Rek}/>
                <Route exact path='/new'>
                    <Cinema dataMove={stateImagesTop.moveCinema} title="Топ новинки"/>
                </Route>
                <Route exact path='/rek'>
                    <Cinema dataMove={stateImagesTop.rekCinema} title="Рекомендуем вам посмотреть"/>
                </Route>
                <Route exact path='/about' component={About}/>
                {stateImagesTop.moveCinema.map(item =>  <Route key={item.url_id} exact path={`/infoCinema:${item.url_id}`}>
                    <InfoCinema id={item.url_id} title={item.title} poster_link={item.poster_link}/>
                    </Route>
                    )}

                {stateImagesTop.rekCinema.map(item =>  <Route key={item.url_id} exact path={`/infoCinema:${item.url_id}`}>
                        <InfoCinema id={item.url_id} title={item.title} poster_link={item.poster_link}/>
                    </Route>
                )}
            </Switch>
        </div>
    );
};

export default Router;