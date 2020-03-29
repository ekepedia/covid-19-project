import React from "react";

import injectSheet from 'react-jss';
import { withRouter, Link } from 'react-router-dom';
const Styles = {
    container: {
        background: "#F3EFEC",
        minHeight: "100%",
        //padding: "20px 23px",
        paddingBottom: "100px"
    },
    boxContainer: {
        fontFamily: "'Barlow', sans-serif",
        fontWeight: 800,
        height: "234px",
        color: "white",
        padding: "27px 31px",
        // paddingRight: "0px",
        textTransform: "uppercase",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('img/corner-background-2.png')"
    },
    header: {
        fontSize: "33px",
        lineHeight: "40px",
        letterSpacing: "1px"
    },
    span: {
        //color: "#35998F"
    },
    button: {
        marginTop: "35px",
        width: "169px",
        lineHeight: "56px",
        height: "56p6x",
        textAlign: "center",
        background: "#35998F",
        backgroundImage: "url('/img/gradient.png')",
        backgroundPosition: "left",
        animation: "backgroundmove 5s infinite",
        animationTimingFunction: "ease-in-out",
        borderRadius: "28px",
        fontSize: "23px"
    },
    title: {
        color: "black",
        fontFamily: "'Roboto Mono', monospace",
        textDecoration: "underline",
        marginTop: "33px",
        fontSize: "33px",
        marginLeft: "35px"
    },
};

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'DC',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ]
    }

    render() {

        let { classes } = this.props;

        return (<div className={classes.container}>
            <div className={classes.boxContainer}>
                <div className={classes.header}>
                    Track <span className={classes.span}>COVID-19</span> News by
                </div>
                <div className={classes.button}>
                    State
                </div>
            </div>
            <div>
                {this.states.map((state) => {
                    return (<div key={state} className={classes.title}>
                        <Link to={`/${state}`} style={{color: "black"}}>
                            {state}
                        </Link>
                    </div>)
                })}
            </div>
        </div>);
    }

}

export default withRouter(injectSheet(Styles)(Home))