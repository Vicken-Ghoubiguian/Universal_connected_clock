// Import the 'express' module (for more informations: https://www.npmjs.com/package/express)...
var express = require('express');

// Import the 'serve-favicon' module (for more informations: https://www.npmjs.com/package/serve-favicon)...
var favicon = require('serve-favicon');

// Import the 'negotiator' module (for more informations: https://www.npmjs.com/package/negotiator)...
var Negotiator = require('negotiator');

// Import the 'olsonTZNPMmodule' module (for more informations: https://github.com/Vicken-Ghoubiguian/olsonTZNPMmodule)...
var olsonTZNPMmodule = require('@wicken/olsonTZNPMmodule');

// Import the 'openWeather' module (for more informations: https://github.com/Vicken-Ghoubiguian/openWeather)...
var openWeather = require('@wicken/openweather');

// Declaration of all required variables for the 'node_world_server' app with their default values...
var app = express();
/* var negotiator;
var currentLocale = null;
var currentDateAndTimeFormat = "X";
var currentCountryCode = olsonTZNPMmodule.getCountryCodeFromOneTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
var currentTemperatureUnit = "Kelvin";
var currentTemperatureUnitSymbol = "";
var currentPressureUnit = "hectoPascal";
var currentPressureUnitSymbol = "hPa";
var currentWindSpeedUnit = "meter_per_second";
var currentWindSpeedUnitSymbol = "m/s"; */
//var currentFontFamily = fontFamilies.getFontFamilyFromId(23); ===>>> Develop an independant NPM module for font families...
