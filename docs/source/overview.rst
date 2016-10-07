Overview
========

Routing services are probably the most important application for street data - apart from visualizing them on a map. While there are a range of desktop (or even mobile) applications that can provide such functionalities also in combination with OSM data, we focus here on an approach based on the concept of interoperable Service Oriented Architectures (SOA). These are regarded as an important concept for forthcoming software architectures in general, and more and more being applied also in the GI (geographic information) sector. While SOA offer many benefits they are not the solution to all problems.

A remaining issue is the question of interoperability between different web services from different vendors offering the same or similar services but with different technical programming interfaces. This is the reason why standards are becoming more and more important for a range of applications - in particular in the institutional and governmental sector, but also beyond. Within the geographical information community here the Open Geospatial Consortium (OGC) has developed a range of standards for different GI related functionalities. This is why we choose to develop and set up a routing service that uses OSM data and provides those through the standardized interface specified by the OGC within the Open Location Services initiative (OpenLS or OLS) as one of 3 services:  



Routing
-------
The Route Service [RS] determines travel routes and navigation information according to diverse criteria.


Geocoding
---------

The Geocoder transforms a description of a location, such as a place name, street address or postal code, into a normalized description of the location with a Point geometry usually placed using Cartesian coordinates, often latitude and longitude.

..There are two modes of operation for this tool. 
..	# You can input an adress/ and will receive the geographical coordinates for this location. In case of ambiguity you will get multiple points.
..	# You can input a coordinate and will receive adresses related to this position.


Accessibility Analysis
----------------------

Provides a maximum reachability service from any given point or route for a set time duration.