Overview
========

OpenRouteService.org offers spatial services by using user-generated, collaboratively collected free geographic data from OpenStreetMap.org. This service is based on open standards by the Open Geospatial Consortium (OGC). Currently the following services have been implemented within the frame of OpenRouteService.org, which allow you to include maps, geocoding and routing in your web pages or applications. By accessing, requesting and using OpenRouteService (ORS) and the provided API, you are agreeing to our terms of use. 

Routing
-------

The route service determines travel routes and navigation information according to diverse criteria.

.. image:: _images/routing2.png
	:width: 700px
	:alt: Routing Image

Geocoding
---------

The geocoding service transforms a description of a location, such as a place name, street address or postal code, into a normalized description of the location with a Point geometry usually placed using Cartesian coordinates, often latitude and longitude.

The reverse geocoding service does exactly the opposite. It transforms the coordinate of a Point into the description of the next enclosing object which surrounds the given coordinate

.. image:: _images/geocode.png
	:width: 700px
	:alt: Geocoding Image

..
	There are two modes of operation for this service. 
		# You may input an address/ and will receive the geographical coordinates for this location. In case of ambiguity you will get multiple points.
		# You may input a coordinate and will receive addresses related to this position.

Accessibility Analysis
----------------------

The isochrone service provides a maximum reachability area from any given point for a set duration. You may specify intervals to return a list of isochrones.

.. image:: _images/analysis.png
	:width: 700px
	:alt: Accessibility Analysis Image