# Travel Route and Weather
This is a simple web application created as a part of my journey in learning web development.
This application utilizes 2 APIs:
 - The Weather API from Rapid API. 
 - Bing Maps API.
The application has the ability to use the Weather API to display the weather of a particular location. Additionally, it is capable of using the [Bing maps API](https://learn.microsoft.com/en-us/bingmaps/rest-services/) coupled with [Bing Maps V8 interactive SDK](https://www.bing.com/api/maps/sdkrelease/mapcontrol/isdk)  along with the Bing Maps V8 Interactive SDK to obtain a route between 2 locations.
The return route method generates a static map using [Bing Maps Imagery API](https://learn.microsoft.com/en-us/bingmaps/rest-services/imagery/), while the Bing Maps SDK directions module is utilized to retrieve a dynamic map.
One major flaw in this application is the visibility of the API keys to the client. Therefore, security measures must be implemented.
This application has not been implemented in the most efficient way, nor has it received top-of-the-line styling.

## Disclaimers
As this repository was created as a part of my learning journey, it will no longer receive any further updates or changes.

## Installation
1. Clone this Repository.
2. Create a .env file containing your Bing Maps API Key, as well as your Rapid API Key.
3. Run `npm i` to install all the required node modules.
4. Run `node app.js` to start the server.
5. Navigate to [localhost:3000](http://localhost:3000/);

## Sample Images

### Images of the Application running on a Mobile Phone
<pictures>
  <img src="https://github.com/EtheriousKing/travel-route-and-weather/assets/82433285/0d6217bb-4462-4de8-a6fe-c88c3a7fd4d2" height=1000px/>
  <img src = "https://github.com/EtheriousKing/travel-route-and-weather/assets/82433285/cc279017-ee9e-4c24-92e9-1e90c85c47d6" height= 1000px/> 
</pictures>

### Images of the Application Running on a Desktop
<pictures>
  <img src="https://github.com/EtheriousKing/travel-route-and-weather/assets/82433285/0566152a-5d96-429d-ac68-9879a9876fcf"/>
  <img src="https://github.com/EtheriousKing/travel-route-and-weather/assets/82433285/0ec070e6-63fa-4ef4-a79d-fd432c9cc54a"/>
</pictures>
