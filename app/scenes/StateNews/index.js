import React from "react";

import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import {Query, withApollo} from 'react-apollo';
import {gql} from "apollo-boost";

const Styles = {
    container: {
        background: "#F3EFEC",
        minHeight: "100%",
        padding: "20px 23px",
    },
    boxContainer: {
        fontFamily: "'Barlow', sans-serif",
        fontWeight: 800,
        background: "black",
        height: "234px",
        color: "white",
        padding: "27px 31px",
        paddingRight: "0px",
        textTransform: "uppercase"
    },
    header: {
        fontSize: "33px",
        lineHeight: "40px",
    },
    span: {
        color: "#35998F"
    },
    button: {
        marginTop: "35px",
        minWidth: "169px",
        width: "fit-content",
        lineHeight: "56px",
        height: "56p6x",
        textAlign: "center",
        background: "#35998F",
        borderRadius: "28px",
        fontSize: "23px",
        padding: "0 37px"
    },
    title: {
        background: "#D8D8D8",
        width: "fit-content",
        padding: "0 9px",
        height: "22px",
        lineHeight: "22px",
        borderRadius: "11px",
        color: "black",
        marginBottom: "18px",
        fontFamily: "'Roboto Mono', monospace",
        textDecoration: "underline",
        marginTop: "22px"
    },
    descr: {
        paddingLeft: "9px",
        fontFamily: "'Roboto Mono', monospace",
    }
};

class StateNews extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let { classes } = this.props;
        const { state } = this.props.match.params;

        return (<div className={classes.container}>
            <div className={classes.boxContainer}>
                <div className={classes.header}>
                    Tracking <br/><span className={classes.span}>COVID-19</span> News In
                </div>
                <div className={classes.button}>
                    {state}
                </div>
            </div>
            <Query query={NewsQuery} variables={{state}}>
                {({ loading, error, data, refetch }) => {

                    if (loading) return (<div className={classes.descr} style={{marginTop: "22px"}}>
                        Loading News
                    </div>);

                    if (error) return <p>Error Loading Page</p>;

                    return <div>{data.news.map((news) => {
                        return (<div key={news.link}>
                            <div className={classes.title}>
                                <a style={{color: "black"}} target={"_blank"} href={news.link}>{news.publisher}</a>
                            </div>
                            <div className={classes.descr}>
                                {news.title}
                            </div>
                        </div>)
                    })}</div>
                }}
            </Query>
        </div>);
    }

}

const NewsQuery = gql`
    query News($state: String){
        news(input: {state: $state}) {
            link
            title
            publisher
            date
        }
    }
`;

export default withRouter(injectSheet(Styles)(StateNews))