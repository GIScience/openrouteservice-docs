Application Programming Interfaces
==================================

End point:
In this Section we will let the user know what the :term:`API` is for.
Instead of using the ORS website you can also request the Data in the form of an .gml file.
Therefore you have to directly contact the respective API of the tool you would like to use.


API Keys
--------

Before you can use the APIs of the OpenRouteService you need an :term:`API-Key` .


------------

Routing API
------------

To do a direkt routing request via GET you need to open up your URL with
`http://openls.geog.uni-heidelberg.de/route?` .
After the **?** you have to add parameters. 
Except for the first parameter, every parameter has to be added with a **&**. The pattern for Parameter Usage is "*parameter*=*value*"


Required Parameters
++++++++++++++++++++



.. note:: The parameters as well as values are case sensitive. The input order doesn't matter though.

+-----------------+--------------------------------+--------------------------+
| Parameters      | Description                    | Values                   |
+=================+================================+==========================+
| start           | Set the starting Point of      | *latitude*,\ *longitude* |
|                 |                                |                          |
|                 | your route in form of          |                          |
|                 |                                |                          |
|                 | geographic coordinates         |                          |
+-----------------+--------------------------------+--------------------------+
| end             | Set the end Point of your route| *latitude*,\ *longitude* |
|                 |                                |                          |
|                 | in lat,lon form                |                          |
+-----------------+--------------------------------+--------------------------+
| via             | Set a stopover Point           |                          |
+-----------------+--------------------------------+--------------------------+
| instructions    | Set True if you want step by   | True/False               |
|                 | step by step instructions      |                          |
+-----------------+--------------------------------+--------------------------+
| lang            | Set the language for the       | de,en                    |
+-----------------+--------------------------------+--------------------------+
| distunit        | Set the unit in which you want | KM  ``distunit=KM``      |
|                 |                                +--------------------------+
|                 | to view the distances in       | M   ``distunit=M``       |
|                 |                                +--------------------------+
|                 |                                | MI  ``distunit=MI``      |
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
| api_key         | Input your API-Key here        | `your_api_key`           |
+-----------------+--------------------------------+--------------------------+
| weighting       | Set the route type             | Fastest                  |
|                 |                                +--------------------------+
|                 |                                | Shortest                 |
|                 |                                +--------------------------+
|                 |                                | Recommended              |
+-----------------+--------------------------------+--------------------------+
| noMotorways     | Set True to avoid motorways    | True/False               |
+-----------------+--------------------------------+--------------------------+
| noTollways      | Set True to avoid tollways     | True/False               |
+-----------------+--------------------------------+--------------------------+
| noUnpavedroads  | Set True to avoid unpaved roads| True/False               |
+-----------------+--------------------------------+--------------------------+
| noSteps         | Set True to avoid steps        | True/False               |
+-----------------+--------------------------------+--------------------------+
| noFerries       | Set True to avoid ferries      | True/False               |
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
