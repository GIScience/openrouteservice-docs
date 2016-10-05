Application Programming Interfaces
==================================

Instead of using the ORS website you can also request the Data in the form of an .gml file.
Therefore you have to directly contact the respective :term:`API` of the tool you would like to use.




API Keys
--------

Before you can use the APIs of the OpenRouteService you need an :term:`API-Key`. This is a token which relates the request to the user. In case of miss- or overuse (see license) of the APIs it is a lot easier for us to maintain order.


------------

Routing API
------------

To do a direkt routing request via GET you need to open up your URL with::

 http://openls.geog.uni-heidelberg.de/route?

After the **"?"** you have to add parameters with **"&"**. For the first parameter the **"&"** can be omitted. The pattern for parameter usage is "*parameter=value*". If you don't get the picture, you can look at the `Example`_ below.

There are two types of parameters:

:`Required Parameters`_: They are required for the API to work.
:`Optional Parameters`_: These parameters are not necessary to get a functional request. But you can fine-tune you request through these.



Required Parameters
+++++++++++++++++++

The following parameters are required for the api to work. For a valid request you need **every single parameter** of this table in your request-URL. You can omit the value if the parameter has a default value. The parameter will then be set to this default value which can be identified by **bold characters** in the `Value` column. In the case of `via` there is no default value. If you don't want a stopover point just leave the parameter empty.

+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| Parameter      | Description                                                            | Value                                              | Example                                                          |
+================+========================================================================+====================================================+==================================================================+
| start          | Set the starting Point of your route in form of geographic coordinates | *latitude*,\ *longitude*                           | ``9.3785,47.2250``                                               |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| end            | Set the end Point of your route in geographic coordinates              | *latitude*,\ *longitude*                           | ``9.505250,47``                                                  |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| via            | Set a stopover Point                                                   | *latitude*,\ *longitude*                           | ``via`` ``via=9.43,47.1``                                        |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| lang           | Set the language for the instructions                                  | de\/en                                             | ``lang=en``                                                      |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| distunit       | Set the unit in which you want to view the distances in                | KM(kilometers)\R/(meters)\/MI(miles)               | ``distunit=KM/M/MI``                                             |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| `routepref`_   | Set the way you are taveling                                           | :term:`Car`\/:term:`Pedestrian`\/:term:`Bicycle`\/:term:`Wheelchair`\/:term:`HeavyVehicle` | ``routepref=Bicycle/Pedestrian/Bicycle/Wheelchair/HeavyVehicle`` |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| instructions   | Set True if you want step by step by step instructions                 | True/**False**                                     | ``instructions=True/False``                                      |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| `weighting`_   | Set the route type                                                     | **:term:`Fastest`**\/:term:`Shortest`\/:term:`Recommended`                 | ``wighting=Fastest/Shortest/Recommended``                        |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| noMotorways    | Set True to avoid motorways                                            | True\/**False**                                    | ``noMotorways=True/False``                                       |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| noTollways     | Set True to avoid tollways                                             | True\/**False**                                    | ``noTollways=True/False``                                        |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| noUnpavedroads | Set True to avoid unpaved roads                                        | True\/**False**                                    | ``noUnpavedroads=True/False``                                    |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| noSteps        | Set True to avoid steps                                                | True\/**False**                                    | ``noSteps=True/False``                                           |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| noFerries      | Set True to avoid ferries                                              | True\/**False**                                    | ``noFerries=True/False``                                         |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+
| api_key        | Input your :term:`API-Key` here                                        | `your_api_key`                                     | ``api_key=eb85f2a6a61aafaebe7e2f2a89b102f5``                     |
+----------------+------------------------------------------------------------------------+----------------------------------------------------+------------------------------------------------------------------+

routepref
>>>>>>>>>

The parameter routepref contains the main routepreferences. There are `additional routepreferences`_ for the Bicycle and the HeavyVehicle type. 

+--------------+--------------------------------------------------------------------------------------------------------------+
| Value        | Description                                                                                                  |
+==============+==============================================================================================================+
| Car          | This pathing will avoid footways and bicycle lanes and uses highways, streets and ways cars are allowed on   |
+--------------+--------------------------------------------------------------------------------------------------------------+
| Pedestrian   | this routing algorithm uses footways and tries to avoid highways                                             |
+--------------+--------------------------------------------------------------------------------------------------------------+
| Bicycle      | Uses bicycle ways if available, can also use footpaths where bicycle is allowed and streets                  |
+--------------+--------------------------------------------------------------------------------------------------------------+
| Wheelchair   | This algorithm uses footways and tries to use the smothest surface type. In addition stairs will be avoided. |
+--------------+--------------------------------------------------------------------------------------------------------------+
| HeavyVehicle | i dont know what kind of road this uses                                                                      |
+--------------+--------------------------------------------------------------------------------------------------------------+

.. note:: in the newer version there are only english and german. There are other languages available that are too difficult to maintain. You can request them and implement them yourself if you feel like it.


..
	weighting
	>>>>>>>>>
	+-------------+------------------------------------------------------------+
	| Value       | Description                                                |
	+=============+============================================================+
	| Fastest     | The fastest route uses speed limits etc.....               |
	+-------------+------------------------------------------------------------+
	| Shortest    | The shortest route ...                                     |
	+-------------+------------------------------------------------------------+
	| Recommended | This mode will include POIs to give you a trip to remember |
	+-------------+------------------------------------------------------------+


Optional Parameters
+++++++++++++++++++

textblock

+-----------+----------------------------------------+----------------+-----------------------+
| Parameter | Description                            | Value          | Example               |
+===========+========================================+================+=======================+
| useTMC    | Set a stopover Point                   | True/**False** | ``useTMC=True/False`` |
+-----------+----------------------------------------+----------------+-----------------------+
| maxspeed  | Set a maximum speed in km/h for what ? | True/**False** | ``maxspeed=10``       |
+-----------+----------------------------------------+----------------+-----------------------+


Additional Routepreferences
>>>>>>>>>>>>>>>>>>>>>>>>>>>

There are additional profiles for the `routepref`_  parameter for different Bicycle and Heavyvehicle Types. For each of these special route profiles you can set specific parameters.

Bicycle-type
<<<<<<<<<<<<

+----------------+-----------------------+
| Value          | Description           |
+================+=======================+
| BicycleMTB     | Mountainbike profile  |
+----------------+-----------------------+
| BicycleRacer   | Racing profile        |
+----------------+-----------------------+
| BicycleTouring | Touring profile       |
+----------------+-----------------------+
| BicycleSafety  | Safety profile        |
+----------------+-----------------------+

HeavyVehicle-type
<<<<<<<<<<<<<<<<<

+--------------+----------------------+
| Value        | Description          |
+==============+======================+
| Goods        | Goods profile        |
+--------------+----------------------+
| Bus          | Bus profile          |
+--------------+----------------------+
| Agricultural | Agricultural profile |
+--------------+----------------------+
| Foresty      | Foresty profile      |
+--------------+----------------------+
| Delivery     | Delivery profile     |
+--------------+----------------------+


Example
+++++++

The shortest version of a full functioning routing URL would look like this::

  http://openls.geog.uni-heidelberg.de/route?start=9.258506,49.240011&via&end=9.156506,49.230011&lang=en&distunit=KM&routepref=Car&weighting&noMotorways&noTollways&noUnpavedroads&noSteps&noFerries&instructions&api_key=eb85f2a6a61aafaebe7e2f2a89b102f5

It is a simple route for a car from A to B with no direction-instructions. The distances will be in kilometers, the weighting is `shortest` and 	

.. attention:: Parameters as well as values are `case sensitive`. The input order doesn't matter though. 

-----------

Geocoding API
-------------






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
