Overview
========

The OpenRouteService is ...
Currently we are supporting three Tools

- `Routing`_
- `Geocoding`_
- `Accessibility Analysis`_

--------

Routing
-------
The Route Service [RS] determines travel routes and navigation information according to diverse criteria.


Geocoding
---------

The Geocoder transforms a description of a location, such as a place name, street address or postal code, into a normalized description of the location with a Point geometry usually placed using Cartesian coordinates, often latitude and longitude.

..
	There are two modes of operation for this tool. 
	# You can input an adress/ and will receive the geographical coordinates for this location. In case of ambiguity you will get multiple points.
	# You can input a coordinate and will receive adresses related to this position.


Accessibility Analysis
----------------------

Provides a maximum reachability service from any given point or route for a set time duration.