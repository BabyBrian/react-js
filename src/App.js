/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import defaultPicture from './components/img/default.jpg'

const Materialize = window.Materialize


const APP_TITLE = 'Awesome App'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS } from './utils/api'

//components

var titl=' Enter year(YYYY) & Month(M from 1 to 12) in order to get informations about a New York Time article';

class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            weather: undefined,
            city: '',


        }
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{ APP_TITLE }</h1>
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>

                <div className="App-content">
                    <div className="center-align">

                        <form onSubmit={ this.fetchWeather }>
							<p id="title"> </p>
                            <div className="row" style={ { marginBottom: 0 } }>
                                <div className="input-field col s6 offset-s3">
                                    <input id="yearInput" type="text" value={ this.state.year } onChange={ this.handleChange1 } />
									<label htmlFor="yearInput">Year</label>
                                </div>
								<div className="input-field col s6 offset-s3">
								<input id="monthInput" type="text" value={ this.state.month } onChange={ this.handleChange2 } />
                                    <label htmlFor="monthInput">Month</label>
								 </div>
                            </div>

                            <button type="submit" className="waves-effect waves-light btn" >
                                Link?
                            </button>

                        </form>

                    </div>

                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m6 offset-m3">
						<p id="line1"> </p>
                        <p id="line2"> </p>
						<p id="line3"> </p>						   
                        </div>
                    </div>
                </div>

            </div>
        )
    }



    handleChange1 = ( event ) => {
        this.setState( {
            year: event.target.value
        } )
		document.getElementById("title").innerHTML=titl;
    }
	
	handleChange2 = ( event ) => {
        this.setState( {
            month: event.target.value
        } )
		
    }
	

    //method triggered by onSubmit event of the form or by onClick event of the "Weather?" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchWeather = async ( event ) => {

        event.preventDefault()
		
		var request = require("request-promise");

		var options = {
			headers: { 'X-Auth-Token': '32a0ea4466f84f76ad2e93e70a67d643'},
			url : 'https://api.nytimes.com/svc/archive/v1/1995/2.json',
			datatype: 'json',
			type: 'GET',
		};

		var url = "https://api.nytimes.com/svc/archive/v1/1995/2.json";
		url += '?api-key=32a0ea4466f84f76ad2e93e70a67d643'

		request.get(url).then(function(body){
			
		var json =JSON.parse(body);
		console.log(json);
		
		//Here we print in the webpage
		document.getElementById("line1").innerHTML=json.response.docs[0].pub_date;
		document.getElementById("line2").innerHTML=json.response.docs[0].news_desk;
		document.getElementById("line3").innerHTML=json.response.docs[0].web_url;

		});
		
    }

}

export default App
