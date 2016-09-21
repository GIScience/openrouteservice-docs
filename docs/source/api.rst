Application Programming Interfaces
==================================

End point:
In this Section we will let the user know what the API is for.
Instead of using the ORS website you can also request the Data in the form of an .gml file.
Therefore you have to directly contact the respective API of the tool you would like to use.


API Keys
--------

Before you can use the APIs of the OpenRouteService you need an `API-Key`_ .

__ API_Key_

------------

Routing API
------------

To do a direkt routing request via GET you need to open up your URL with
`http://openls.geog.uni-heidelberg.de/route?` .
Except for the first parameter, every parameter has to be added with a **&**. The pattern for Parameter Usage is "*parameter*=*value*"


Required Parameters
++++++++++++++++++++


.. note:: The parameters as well as values are case sensitive. The input order doesn't matter though.

+-----------------+--------------------------------+--------------------------+
| Query Parameters| Description                    | Values                   |
+=================+================================+==========================+
| start           | Set the starting Point of      | *latitude*, *longitude*  |
|                 | your route in lat,lon form     |                          |
|                 |                                |                          |
+-----------------+--------------------------------+--------------------------+
| end             | Set the end Point of your route|                          |
|                 | in lat,lon form                |                          |
+-----------------+--------------------------------+--------------------------+
| via             | Set a stopover Point           |                          |
+-----------------+--------------------------------+--------------------------+
| instructions    |                                | True/False               |
+-----------------+--------------------------------+--------------------------+
| lang            | Set the language for the       | de,en                    |
+-----------------+--------------------------------+--------------------------+
| distunit        | Set the unit in which you want | KM                       |
|                 | to view the distances          +--------------------------+
|                 |                                | M                        |
|                 |                                +--------------------------+
|                 |                                | MI                       |
+-----------------+--------------------------------+--------------------------+
| routepref       | Set the way you are taveling   | Car                      |
|                 |                                +--------------------------+
|                 |                                | Pedestrian               |
|                 |                                +--------------------------+
|                 |                                | Bicycle                  |
|                 |                                +--------------------------+
|                 |                                | Wheelchair               |
|                 |                                +--------------------------+
|                 |                                | HeavyVehicle             |
+-----------------+--------------------------------+--------------------------+
| weighting       | Set the route type             | Fastest                  |
|                 |                                +--------------------------+
|                 |                                | Shortest                 |
|                 |                                +--------------------------+
|                 |                                | Recommended              |
+-----------------+--------------------------------+--------------------------+
| noMotorways     |                                | True/False               |
+-----------------+--------------------------------+--------------------------+
| noTollways      |                                | True/False               |
+-----------------+--------------------------------+--------------------------+
| noUnpavedroads  |                                | True/False               |
+-----------------+--------------------------------+--------------------------+
| noSteps         |                                | True/False               |
+-----------------+--------------------------------+--------------------------+
| noFerries       |                                | True/False               |
+-----------------+--------------------------------+--------------------------+
| api_key         | Input your API-Key here        |                          |
+-----------------+--------------------------------+--------------------------+

Optional Parameters
+++++++++++++++++++

here will be the optionals

-----------

Geocoding API
-------------

here comes the geocoding api 

Required Parameters
++++++++++++++++++++


Here will be the required Parameters

+------------------+--------------------------------+
| Query Parameters | Description                    |
+==================+================================+
| parameter 1      | this is for parameting         |
+------------------+--------------------------------+
| parameter 2      | etcetera                       |
+------------------+--------------------------------+


--------

Accessibility Analysis API
--------------------------

aaaaand the aa api

Required Parameters
++++++++++++++++++++


+------------------+--------------------------------+
| Query Parameters | Description                    |
+==================+================================+
| parameter 1      | this is for parameting         |
+------------------+--------------------------------+
| parameter 2      | etcetera                       |
+------------------+--------------------------------+


------------

Response Type
--------------

response type text
