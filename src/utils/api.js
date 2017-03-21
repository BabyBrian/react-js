import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */

/* WEATHER: https://www.apixu.com/api-explorer.aspx */

/* IMAGES: https://pixabay.com/api/docs/ */

export const ENDPOINTS = {

    WEATHER_API_URL: 'http://api.apixu.com/v1/current.json',
    PIXABAY_API_URL: 'https://pixabay.com/api/',
	NY_URL: 'https://api.nytimes.com/svc/archive/v1/1995/2.json'
}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    })
}