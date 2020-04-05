import React from "react";

import injectSheet from 'react-jss';
import moment from "moment";
import { withRouter, Link } from 'react-router-dom';
import {Query, withApollo} from 'react-apollo';
import {gql} from "apollo-boost";

const Styles = {
    container: {
        background: "#F3EFEC",
        minHeight: "100%",
        // padding: "20px 23px",
    },
    boxContainer: {
        fontFamily: "'Barlow', sans-serif",
        fontWeight: 800,
        height: "250px",
        color: "white",
        padding: "26px 43px",
        paddingRight: "0px",
        textTransform: "uppercase",
        backgroundPosition: "bottom right",
        backgroundSize: "45px 45px",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('img/corner.png')",
        backgroundColor: "black",
        marginBottom: "15px"
    },
    backContainer: {
        fontWeight: 500,
        fontSize: "12px",
        textTransform: "initial",
        marginBottom: "20px",
        lineHeight: "15px",
        color: "white",
        cursor: "pointer"
    },
    backButton: {
        height: "15px",
        marginTop: "-1px",
        marginRight: "10px"
    },
    header: {
        fontSize: "33px",
        lineHeight: "40px",
        letterSpacing: "1px"
    },
    span: {
        color: "#F4AE3D"
    },
    button: {
        marginTop: "21px",
        minWidth: "169px",
        width: "fit-content",
        textAlign: "center",
        background: "#35998F",
        backgroundImage: "url('/img/gradient.png')",
        backgroundPosition: "left",
        animation: "backgroundmove 5s infinite",
        animationTimingFunction: "ease-in-out",
        borderRadius: "28px",
        fontSize: "23px",
        padding: "12px 10px",
    },
    card: {
        borderBottom: "1px solid #D8D5D2",
        margin: "auto 16px",
        fontFamily: "'Roboto', san-serif",
        fontSize: "14px",
        padding: "11 18px",
        paddingBottom: "19px",
    },
    title: {
        color: "black",
        fontFamily: "'Roboto Mono', monospace",
        fontWeight: "800",
        lineHeight: "30px"
    },
    descr: {
        lineHeight: "18px",
        marginTop: "-4px"
    },
    time: {
        fontSize: "12px",
        color: "#6D7278",
        lineHeight: "18px",
        marginTop: "9px"
    }
};

class StateNews extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.setFetchmore = this.setFetchmore.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.screenTop = 0;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;
        let height = document.getElementById("news-holder").clientHeight;
        let pos = height - window.innerHeight - scrollTop + 249;
        if (pos < 300 ) {
            this.loadMore()
        }
    }

    setFetchmore(fn, offset) {
        this.fetchMore = fn;
        this.offset = offset;
    }

    loadMore() {
        const { state } = this.props.match.params;

        if (!this.loading && !this.no_more) {
            this.loading = true;
            console.log("LOADING", this.offset);
            this.setState({loading: true});
            this.fetchMore({
                variables: {
                    state, limit: 10, offset: this.offset
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    this.loading = false;
                    this.setState({loading: false});

                    console.log(prev, fetchMoreResult);
                    if (fetchMoreResult && fetchMoreResult.news && !fetchMoreResult.news.length) {
                        this.no_more = true;
                    }
                    return Object.assign({}, prev, {
                        news: [...prev.news, ...fetchMoreResult.news]
                    });
                }
            })
        }
    }

    render() {

        let { classes } = this.props;
        const { state } = this.props.match.params;

        const isState = window.location.pathname.indexOf("/c/") === -1;

        return (<div className={classes.container}>
            <div className={classes.boxContainer}>
                <Link to={"/"}>
                    <div className={classes.backContainer}>
                        <img className={classes.backButton} src={"/img/back-button.png"} />
                        Back to {isState ? "State" : "Country"}</div>
                </Link>
                <div className={classes.header}>
                    Tracking <br/><span className={classes.span}>COVID-19</span> News In
                </div>
                <div className={classes.button}>
                    {state}
                </div>
            </div>
            <Query query={NewsQuery} variables={{state, limit: 10, offset: 0}}>
                {({ loading, error, data, refetch, fetchMore }) => {

                    this.setFetchmore(fetchMore, data && data.news ? data.news.length : 0);

                    if (loading) return (<div className={classes.card} style={{marginTop: "22px"}}>
                        <div className={classes.title}>
                            Loading News . . .
                        </div>
                    </div>);

                    if (error) return <p>Error Loading Page</p>;

                    return <div>
                            <div id={"news-holder"}>{data.news && data.news.length ? data.news.map((news) => {
                                return (<div key={news.link} className={classes.card}>
                                    <div className={classes.title}>
                                        <a style={{color: "black"}} target={"_blank"} href={news.link}>{news.publisher}</a>
                                    </div>
                                    <div className={classes.descr}>
                                        <a style={{color: "black"}} target={"_blank"} href={news.link}>{news.title}</a>
                                    </div>
                                    <div className={classes.time}>
                                        {moment(news.date).fromNow()}
                                    </div>
                                </div>)
                            }) : <div className={classes.card} style={{marginTop: "22px"}}>
                                <div className={classes.title}>
                                    No Articles Found
                                </div>
                            </div>}</div>
                            <div>
                                {this.state.loading &&
                                <div className={classes.card} style={{marginTop: "22px"}}>
                                    <div className={classes.title}>
                                        Loading More News . . .
                                    </div>
                                </div>}
                            </div>
                    </div>
                }}
            </Query>
        </div>);
    }

}

const NewsQuery = gql`
    query News($state: String, $offset: Int, $limit: Int){
        news(input: {state: $state, offset: $offset, limit: $limit}) {
            link
            title
            publisher
            date
        }
    }
`;

export default withRouter(injectSheet(Styles)(StateNews))