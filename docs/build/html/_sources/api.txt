Application Programming Interfaces
==================================

Instead of using the `ORS website <http://www.openrouteservice.org>`__ you can also request the Data via GET in the form of an .gml file.
Therefore you have to directly contact the respective :term:`API` of the tool you would like to use.


------------

Routing API
------------

To do a direct routing request via GET you need to open up your URL with::

 http://openls.geog.uni-heidelberg.de/route?

After the **"?"** you have to add parameters with **"&"**. For the first parameter the **"&"** can be omitted. The value of the parameter is defined with a **"="**. Therefore the pattern for parameter usage is:

.. centered:: **&**\ ``parameter``\ **=**\ ``value``

If you don't get the picture, you can look at the `Example`_ below.

There are two types of parameters:

:`Required Parameters`_: They are required for the API to work.
:`Optional Parameters`_: These parameters are not necessary to get a functional request. But you can fine-tune your request through these.

.. _req-ref:

Required Parameters
+++++++++++++++++++

The following parameters are required for the api to work. For a valid request you need **every single parameter** of this table in your request-URL. You can omit the value if the parameter has a default value. The parameter will then be set to this default value which can be identified by **bold characters** in the `Value` column. In the case of `via` there is no default value. If you don't want a stopover point just leave the parameter empty.

+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter          | Description                                                            | Value                                                                                                                                                                                                                                                       |
+====================+========================================================================+=============================================================================================================================================================================================================================================================+
| ``start``          | Set the starting Point of your route in form of geographic coordinates | *latitude*,\ *longitude*                                                                                                                                                                                                                                    |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``end``            | Set the end Point of your route in geographic coordinates              | *latitude*,\ *longitude*                                                                                                                                                                                                                                    |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``via``            | Ampersand-separated list of `longitude,latitude` coord pairs vis i o   | *latitude*,\ *longitude*                                                                                                                                                                                                                                    |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``lang``           | Set the language for the instructions                                  | de\/en                                                                                                                                                                                                                                                      |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``distunit``       | Set the unit in which you want to view the distances in                | KM(kilometers)\/M(meters)\/MI(miles)                                                                                                                                                                                                                        |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``routepref``      | Set the way you are taveling                                           | :term:`Car`/:term:`Pedestrian`/:term:`Bicycle`/:term:`BicycleMTB`/:term:`BicycleRacer`/:term:`BicycleTouring`/:term:`BicycleSafety`/:term:`Wheelchair`/:term:`HeavyVehicle`/:term:`Goods`/:term:`Agricultural`/:term:`Bus`/:term:`Foresty`/:term:`Delivery` |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``instructions``   | Set True if you want step by step by step instructions                 | True\/**False**                                                                                                                                                                                                                                             |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``weighting``      | Set the route type                                                     | :term:`Fastest`\/:term:`Shortest`/:term:`Recommended`                                                                                                                                                                                                       |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``noMotorways``    | Set True to avoid motorways                                            | True\/**False**                                                                                                                                                                                                                                             |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``noTollways``     | Set True to avoid tollways                                             | True\/**False**                                                                                                                                                                                                                                             |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``noUnpavedroads`` | Set True to avoid unpaved roads                                        | True\/**False**                                                                                                                                                                                                                                             |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``noSteps``        | Set True to avoid steps                                                | True\/**False**                                                                                                                                                                                                                                             |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``noFerries``      | Set True to avoid ferries                                              | True\/**False**                                                                                                                                                                                                                                             |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``api_key``        | Input your :term:`API-Key` here                                        | `your_api_key`                                                                                                                                                                                                                                              |
+--------------------+------------------------------------------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

..
	routepref
	>>>>>>>>>
..
	The parameter routepref contains the main routepreferences. There are `additional routepreferences`_ for the Bicycle and the HeavyVehicle type. 
..
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



+---------------+----------------------------------------+-------------------+-----------------------+
| Parameter     | Description                            | Value             | Example               |
+===============+========================================+===================+=======================+
| ``useTMC``    | Use traffic information for your route | True\|\ **False** | ``useTMC=True/False`` |
+---------------+----------------------------------------+-------------------+-----------------------+
| ``maxspeed``  | Set a maximum speed in km/h for what ? | True\|\ **False** | ``maxspeed=10``       |
+---------------+----------------------------------------+-------------------+-----------------------+

..
	Additional Routepreferences
	>>>>>>>>>>>>>>>>>>>>>>>>>>>
	There are additional profiles for the `routepref` parameter for different Bicycle and Heavyvehicle Types. For each of these special route profiles you can set specific parameters.
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

.. _example-ref:

Example
+++++++



The shortest version of a full functioning routing URL would look like this::

  http://openls.geog.uni-heidelberg.de/route?start=9.258506,49.240011&via&end=9.2556609,49.2397316&lang=en&distunit=KM&routepref=Car&weighting&noMotorways&noTollways&noUnpavedroads&noSteps&noFerries&instructions&api_key=eb85f2a6a61aafaebe7e2f2a89b102f5	

.. needs revision

It is a simple route for a car from A to B with no direction-instructions. The distances will be in kilometers, the weighting is `shortest` and ferries, motorways, tollways, unpavedroads and steps will be considered. The result will be the following:

.. highlight:: xml

::

	<xls:XLS version="1.1" xsi:schemaLocation="http://www.opengis.net/xls http://schemas.opengis.net/ols/1.1.0/RouteService.xsd">
	 <xls:ResponseHeader xsi:type="xls:ResponseHeaderType"/>
	 <xls:Response xsi:type="xls:ResponseType" requestID="123456789" version="1.1" numberOfResponses="1">
	  <xls:DetermineRouteResponse xsi:type="xls:DetermineRouteResponseType">
	   <xls:RouteSummary>
	    <xls:TotalTime>PT16S</xls:TotalTime>
	    <xls:TotalDistance uom="KM" value="0.2"/><xls:ActualDistance uom="KM" value="0.0"/>
	    <xls:BoundingBox srsName="EPSG:4326">
	     <gml:pos>9.2556609 49.2396869</gml:pos>
	     <gml:pos>9.2585339 49.2399278</gml:pos>
	    </xls:BoundingBox>
	   </xls:RouteSummary>
	   <xls:RouteGeometry>
	    <gml:LineString srsName="EPSG:4326">
	     <gml:pos>9.2585339 49.2399278</gml:pos>
	     <gml:pos>9.2583569 49.2399026</gml:pos>
	     <gml:pos>9.2581138 49.239894</gml:pos>
	     <gml:pos>9.2578367 49.2398938</gml:pos>
	     <gml:pos>9.2575036 49.2398741</gml:pos>
	     <gml:pos>9.2571842 49.2398199</gml:pos>
	     <gml:pos>9.2568038 49.2397191</gml:pos>
	     <gml:pos>9.2565134 49.2396869</gml:pos>
	     <gml:pos>9.2556609 49.2397316</gml:pos>
	     <gml:pos>9.2556609 49.2397316</gml:pos>
	    </gml:LineString>
	   </xls:RouteGeometry>
	  </xls:DetermineRouteResponse>
	 </xls:Response>
	</xls:XLS>

.. attention:: Parameters as well as values are `case sensitive`. The input order doesn't matter though. 

-----------

Geocoding API
-------------

Normal Geocoding
++++++++++++++++

+--------------------+--------------------------------+
| Query Parameters   | Description                    |
+====================+================================+
| ``FreeFormAdress`` | this is for parameting         |
+--------------------+--------------------------------+
| ``MaxResponse``    | etcetera                       |
+--------------------+--------------------------------+


Reverse Geocoding
+++++++++++++++++

+--------------------+--------------------------------+
| Query Parameters   | Description                    |
+====================+================================+
| ``lat``            | this is for parameting         |
+--------------------+--------------------------------+
| ``lon``            | etcetera                       |
+--------------------+--------------------------------+
| ``MaxResponse``    | etcetera                       |
+--------------------+--------------------------------+

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

..
	------------
	Response Type
	--------------
	response type text
