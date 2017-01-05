# _Trip Planner_

#### _A web application to view flight prices and information for climbing destinations. JavaScript Week 1 Project for Epicodus 1/5/2017_

#### By _**Tracie Weitzman and Jonathan Thom**_

## Specifications

#### 1. User can enter Departure Airport, choose Destination, specify Passengers, and enter Dates.

#### 2. Users can view first 20 cheapest flights meeting search parameters, with airline webpage links.

#### 3. Users can view images of Destination.

## Setup/Installation Requirements

* _In the Command Line, run:_
```
git clone https://github.com/JonathanWThom/flights
cd flights
npm install
bower install
touch .env
```
* _Create API Keys_
For QPX Express Airfare API:
* https://console.developers.google.com/
* sign in
* click library
* search for QPX Express Airfare API
* click Enable
* click Credentials, view API Key
* copy API Key into .env file with this formatting: exports.apiKey = {"YOUR-KEY-HERE"};
For Flickr API:
* sign in at https://www.flickr.com
* navigate to https://www.flickr.com/services/apps/create/noncommercial/
* fill information and Submit
* find API Key at App Garden > Apps by You
* copy API Key into .env file with this formatting: exports.flickrKey = {"YOUR-KEY-HERE"};

* _Then, command line:_
```
gulp serve
```

## Support and contact details

_Contact us on Github at [weitzwoman](https://github.com/weitzwoman), [JonathanWThom](https://github.com/JonathanWThom)_

## Technologies Used

* _HTML_
* _CSS_
  * _Materialize_
  * _Bootstrap_
  * _SASS_
* _JavaScript_
  * _JQuery_
  * _NodeJS_

### License

Trip Planner is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

Trip Planner is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with the Trip Planner. If not, see http://www.gnu.org/licenses/.

Copyright (c) 2016 **_Tracie Weitzman, Jonathan Thom_**
