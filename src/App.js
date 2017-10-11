import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {
    AppBar,
    Button,
    Paper,
    Typography,
    Toolbar,
} from 'material-ui';
import { GridList, GridListTile } from 'material-ui/GridList';

import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import img0 from './img/0.png';
import View5b from "./img/View5b.jpg";
import segmentation_view from "./img/segmentation_view.png";
import HighlightImage from "./img/HighlightImage.png";
import View8 from "./img/View8.png";
import xrayimgs from "./img/xrayimgs-fig2ab.png";
import Segmentation_CNN_Figure from "./img/Segmentation_CNN_Figure.png";
import multiscale_em_xray from "./img/multiscale_em_xray.png";
import boss_logo from "./img/boss-logo.png";


const style = {
    page: {
        width: "100%",
        maxWidth: "60em",
        margin: "auto"
    }
};

class Hero extends Component {
    render() {
        return (
            <Carousel autoPlay={true}>
                <div><img src={img0} alt="0" /></div>
                <div><img src={View5b} alt="View5b" /></div>
                <div><img src={segmentation_view} alt="segmentation_view" /></div>
                <div><img src={HighlightImage} alt="HighlightImage" /></div>
                <div><img src={View8} alt="View8" /></div>
                <div><img src={xrayimgs} alt="xrayimgs" /></div>
                <div><img src={Segmentation_CNN_Figure} alt="Segmentation_CNN_Figure" /></div>
                <div><img src={multiscale_em_xray} alt="multiscale_em_xray" /></div>
            </Carousel>
        );
    }
}


class Home extends Component {
    render() {
        return (
            <div>
                <Paper style={style.page}>
                    <Hero />
                    <Typography style={{
                        textAlign: "center",
                        fontSize: "3em"
                    }} href="/" type="title" color="inherit">
                        xbrain
                    </Typography>
                </Paper>
            </div>
        );
    }
}

class Tools extends Component {
    render() {

        const tools = [{
            title: "Intern",
            img: segmentation_view,
            href: "#"
        }, {
            title: "Boss",
            img: boss_logo,
            href: "https://theboss.io"
        }, {
            title: "TomoPy",
            img: "https://tomopy.readthedocs.io/en/latest/_images/tomopy-logo.png",
            href: "https://tomopy.readthedocs.io"
        }];

        return (
            <div>
                <Paper style={style.page}>
                    <Typography style={{
                        textAlign: "center",
                        fontSize: "3em"
                    }} href="/" type="title" color="inherit">
                        xbrain: Tools
                    </Typography>

                    <GridList cellHeight={160} cols={3}>
                        {tools.map(tile => (
                            <GridListTile
                                key={tile.img}
                                cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Paper>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <AppBar position="static">
                            <Toolbar  style={{
                                width: "100%",
                                maxWidth: "60em",
                                margin: "auto"
                            }}>
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <Typography type="title" color="secondary" style={{ textDecoration: "none" }}>
                                    xbrain
                                    </Typography>
                                </Link>
                                <div style={{
                                    textAlign: "right",
                                    width: "100%",
                                    marginLeft: "auto",
                                    marginRight: 0
                                }}>
                                    <Button href="https://github.com/nerdslab/xbrain" color="contrast">Code</Button>
                                    <Button href="https://doi.org/10.1523/ENEURO.0195-17.2017" color="contrast">Manuscript</Button>
                                    <Button href="https://nerdslab.github.io/#/tools" color="contrast">Tools</Button>
                                    <Button href="https://github.com/nerdslab/xbrain/data" color="contrast">Data</Button>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </div>


                    <Route path="/" component={Home}/>
                    <Route path="tools" component={Tools}/>
                </div>
            </Router>
        );
    }
}

export default App;
