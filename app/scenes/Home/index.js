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
        backgroundPosition: "bottom right",
        backgroundSize: "45px 45px",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('img/corner.png')",
        backgroundColor: "black"
    },
    header: {
        fontSize: "33px",
        lineHeight: "40px",
        letterSpacing: "1px"
    },
    span: {
        //color: "#35998F"
    },
    selectContainer: {
        position: "relative",
        marginTop: "35px",
        width: "fit-content"
    },
    button: {
        minWidth: "169px",
        lineHeight: "56px",
        height: "56p6x",
        textAlign: "left",
        background: "#35998F",
        backgroundImage: "url('/img/gradient.png')",
        backgroundPosition: "left",
        animation: "backgroundmove 5s infinite",
        animationTimingFunction: "ease-in-out",
        borderRadius: "28px",
        paddingLeft: "26px",
        paddingRight: "69px",
        fontSize: "23px",
        cursor: "pointer",
    },
    selectDown: {
        position: "absolute",
        right: 10,
        top: 4,
        width: "51px",
        cursor: "pointer",
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
        ];

        this.countries = [
            "Afghanistan",
            "Albania",
            "Algeria",
            "American Samoa",
            "Andorra",
            "Angola",
            "Anguilla",
            "Antarctica",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Aruba",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bermuda",
            "Bhutan",
            "Bolivia",
            "Bonaire, Sint Eustatius and Saba",
            "Bosnia and Herzegovina",
            "Botswana",
            "Bouvet Island",
            "Brazil",
            "British Indian Ocean Territory",
            "Brunei Darussalam",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Cabo Verde",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cayman Islands",
            "Central African Republic",
            "Chad",
            "Chile",
            "China",
            "Christmas Island",
            "Cocos Islands",
            "Colombia",
            "Comoros",
            "Congo",
            "Cook Islands",
            "Costa Rica",
            "Croatia",
            "Cuba",
            "Curaçao",
            "Cyprus",
            "Czechia",
            "Côte d'Ivoire",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Eswatini",
            "Ethiopia",
            "Falkland Islands",
            "Faroe Islands",
            "Fiji",
            "Finland",
            "France",
            "French Guiana",
            "French Polynesia",
            "French Southern Territories",
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Gibraltar",
            "Greece",
            "Greenland",
            "Grenada",
            "Guadeloupe",
            "Guam",
            "Guatemala",
            "Guernsey",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Heard Island and McDonald Islands",
            "Holy See",
            "Honduras",
            "Hong Kong",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran",
            "Iraq",
            "Ireland",
            "Isle of Man",
            "Israel",
            "Italy",
            "Jamaica",
            "Japan",
            "Jersey",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            "North Korea",
            "South Korea",
            "Kuwait",
            "Kyrgyzstan",
            "Lao People's Democratic Republic",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macao",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands",
            "Martinique",
            "Mauritania",
            "Mauritius",
            "Mayotte",
            "Mexico",
            "Micronesia",
            "Moldova",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Montserrat",
            "Morocco",
            "Mozambique",
            "Myanmar",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands",
            "New Caledonia",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Niue",
            "Norfolk Island",
            "Northern Mariana Islands",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Palestine, State of",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Pitcairn",
            "Poland",
            "Portugal",
            "Puerto Rico",
            "Qatar",
            "Republic of North Macedonia",
            "Romania",
            "Russia",
            "Rwanda",
            "Réunion",
            "Saint Barthélemy",
            "Saint Helena, Ascension and Tristan da Cunha",
            "Saint Kitts and Nevis",
            "Saint Lucia",
            "Saint Martin",
            "Saint Pierre and Miquelon",
            "Saint Vincent and the Grenadines",
            "Samoa",
            "San Marino",
            "Sao Tome and Principe",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Sint Maarten",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South Georgia and the South Sandwich Islands",
            "South Sudan",
            "Spain",
            "Sri Lanka",
            "Sudan",
            "Suriname",
            "Svalbard and Jan Mayen",
            "Sweden",
            "Switzerland",
            "Syrian Arab Republic",
            "Taiwan",
            "Tajikistan",
            "Tanzania, United Republic of",
            "Thailand",
            "Timor-Leste",
            "Togo",
            "Tokelau",
            "Tonga",
            "Trinidad and Tobago",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Turks and Caicos Islands",
            "Tuvalu",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom of Great Britain and Northern Ireland",
            "United States Minor Outlying Islands",
            "US",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Venezuela",
            "Viet Nam",
            "Virgin Islands",
            "Wallis and Futuna",
            "Western Sahara",
            "Yemen",
            "Zambia",
            "Zimbabwe",
            "Åland Islands"
        ];

        this.state = {
            option: localStorage.option || "s"
        }
    }
    componentDidMount() {
        window.screenTop = 0;
    }

    render() {

        let { classes } = this.props;

        let list = this.state.option === "s" ? this.states : this.countries;

        return (<div className={classes.container}>
            <div className={classes.boxContainer}>
                <div className={classes.header}>
                    Track <span className={classes.span}>COVID-19</span> News by
                </div>
                <div className={classes.selectContainer} onClick={() => {
                    localStorage.option =  this.state.option === "s" ? "c" : "s";
                    this.setState({option: this.state.option === "s" ? "c" : "s"});
                }
                }>
                    <div className={classes.button}>
                        {this.state.option === "s" ? "State" : "Country"}
                    </div>
                    <img className={classes.selectDown} src={"/img/select-down.png"} />
                </div>
            </div>
            <div>
                {list.map((state) => {
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