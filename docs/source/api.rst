Application Programming Interfaces
==================================

The ORS API allows for programmatic access to our services. We offer a GET scheme for you to directly query the API which is described in the following section. Please note that the response currently follows the OpenLS standard.

-----

The query parameters are added to the end of the service endpoint with `query string encoding <https://en.wikipedia.org/wiki/Query_string>`__. Hence the pattern for parameter usage is:

.. centered:: **&**\ ``parameter``\ **=**\ ``value``

------

Sections:

- `Routing Service`_
- `Geocoding Service`_

    + `Geocoding`_
    + `Reverse Geocoding`_
- `Isochrones Service`_
- `Meta Information`_

-----

Routing Service
>>>>>>>>>>>>>>>

Query Parameters
++++++++++++++++

The routing endpoint is defined as follows::

	hostname/route?

.. centered:: This section is under construction



.. _r_response:

Response
++++++++

.. centered:: This section is under construction


.. .. _par-ref:

.. The query parameters are added to the end of the endpoint with `query string encoding <https://en.wikipedia.org/wiki/Query_string>`__. Hence the pattern for parameter usage is:

.. .. centered:: **&**\ ``parameter``\ **=**\ ``value``

.. We distinguish between two types of parameters:

.. :`Required parameters`_: These are required.
.. :`Optional parameters`_: These parameters are not necessary for a functional request.

.. .. _req-ref:

.. Required Parameters
.. +++++++++++++++++++

.. The following parameters are required for the routing service to respond. For a valid request we require at least a starting and an end point in the form ``long,lat`` as well as your API key. If no further parameters are defined the API will fall back on a default object. 

.. +-------------+------------------------------------------------------------------------------------+
.. | Parameter   | Description                                                                        |
.. +=============+====================================================================================+
.. | ``start``   | Pair of ``longitude,latitude`` coordinates used as the starting point of the route |
.. +-------------+------------------------------------------------------------------------------------+
.. | ``end``     | Pair of ``longitude,latitude`` coordinates used as the destination of the route    |
.. +-------------+------------------------------------------------------------------------------------+
.. | ``api_key`` | ``your_api_key`` is inserted in this parameter                                     |
.. +-------------+------------------------------------------------------------------------------------+

.. The Default Object
.. >>>>>>>>>>>>>>>>>>

.. If one of these Parameters isn't set, it will assume the below-mentioned default values.

.. +---------------+-------------+
.. | Parameter     | Value       |
.. +===============+=============+
.. | ``distunit``  | ``KM``      |
.. +---------------+-------------+
.. | ``routpref``  | ``Car``     |
.. +---------------+-------------+
.. | ``weighting`` | ``Fastest`` |
.. +---------------+-------------+

.. For further information regarding the specific routing profiles, distance units and weighting options please visit our :doc:`glossary </glossary>`.


.. Optional Parameters
.. +++++++++++++++++++

.. Parameters in this section are not required for a functional request, however these may contribute to the accuracy of your query. Some parameters only work with specific routing profiles. ``noSteps`` for example merely works with the **Pedestrian** or one of the **Bicycle** profiles. Please be aware which specific route preference you chose.


.. General Parameters
.. >>>>>>>>>>>>>>>>>>>>

.. +------------------+-----------------------------------------------------------------------------------------------------------+
.. | Parameter        | Description                                                                                               |
.. +==================+===========================================================================================================+
.. | ``via``          | Semicolon-separated list of ``longitude,latitude`` coordinate pairs visited in order                      |
.. +------------------+-----------------------------------------------------------------------------------------------------------+
.. | ``lang``         | Language for the route instructions. The default language is set to English ``en``.                       |
.. +------------------+-----------------------------------------------------------------------------------------------------------+
.. | ``distunit``     | Unit in which you want to view the distances in : ``km``\ (kilometers)\/``m``\ (meters)\/``mi``\ (miles). |
.. +------------------+-----------------------------------------------------------------------------------------------------------+
.. | ``routepref``    | Route profile for your course. Available profiles may be found in the `table`__ below.                    |
.. +------------------+-----------------------------------------------------------------------------------------------------------+
.. | ``instructions`` | For routing instructions in your chosen language set to ``True``.                                         |
.. +------------------+-----------------------------------------------------------------------------------------------------------+
.. | ``geometry``     | Set to ``False`` to exclude the route geometry from your response. Default is set to ``True``             |
.. +------------------+-----------------------------------------------------------------------------------------------------------+
.. | ``weighting``    | Type of route the algorithm chooses. Modes are ``Fastest`` (*default*), ``Shortest`` and ``Recommended``  |
.. +------------------+-----------------------------------------------------------------------------------------------------------+
.. | ``maxspeed``     | Maximum speed in km/h for the selected route profile e.g. ``maxspeed=10``.                                |
.. +------------------+-----------------------------------------------------------------------------------------------------------+

.. .. | ``useTMC``   | Set ``True`` to obtain traffic information from your route. |
.. .. +--------------+---------------------------------------------------------------------------+

.. .. TODO: Add languages

.. .. hint:: If you only want a route summary set ``geometry`` to ``false``. Instructions are still available when set to ``true``

.. __ routepref_

.. routepref
.. >>>>>>>>>

.. The parameter ``routepref`` points to the selected routing mode. Please note that there are additional route preferences for the ``Bicycle`` and a subtype list for the ``HeavyVehicle`` type.

.. +------------------+-------------------------------------------------------------------------------+
.. | Preference Value | Alternative Values                                                            |
.. +==================+===============================================================================+
.. | ``Car``          | \-                                                                            |
.. +------------------+-------------------------------------------------------------------------------+
.. | ``Pedestrian``   | \-                                                                            |
.. +------------------+-------------------------------------------------------------------------------+
.. | ``Bicycle``      | ``BicycleMTB``\/\ ``BicycleRacer``\/\ ``BicycleTouring``\/\ ``BicycleSafety`` |
.. +------------------+-------------------------------------------------------------------------------+
.. | ``Wheelchair``   | \-                                                                            |
.. +------------------+-------------------------------------------------------------------------------+
.. | ``HeavyVehicle`` | There is a subtype list for the HeavyVehicle profile                          |
.. +------------------+-------------------------------------------------------------------------------+
			

.. Avoidable Features Parameters 
.. >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

.. The following feature types provide means to avoid certain objects along your route. Please be aware that these may be specific to your chosen route preference. Please note that avoidable parameters for alternative route preferences correspond to their parent profile. The default value is set to `False`. 

.. +--------------------+--------------------------------------------------------+
.. | Parameter          | Profiles                                               |
.. +====================+========================================================+
.. | ``noMotorways``    | ``Car``, ``HeavyVehicle``                              |
.. +--------------------+--------------------------------------------------------+
.. | ``noTollways``     | ``Car``, ``HeavyVehicle``                              |
.. +--------------------+--------------------------------------------------------+
.. | ``noTunnels``      | ``Car``, ``HeavyVehicle``                              |
.. +--------------------+--------------------------------------------------------+
.. | ``noPavedroads``   | ``Bicycle``                                            |
.. +--------------------+--------------------------------------------------------+
.. | ``noUnpavedroads`` | ``Car``, ``Bicycle``, ``HeavyVehicle``                 |
.. +--------------------+--------------------------------------------------------+
.. | ``noTracks``       | ``Car``, ``HeavyVehicle``                              |
.. +--------------------+--------------------------------------------------------+
.. | ``noFerries``      | ``Car``, ``Bicycle``, ``Pedestrian``, ``HeavyVehicle`` |
.. +--------------------+--------------------------------------------------------+
.. | ``noFords``        | ``Car``, ``Bicycle``, ``Pedestrian``, ``HeavyVehicle`` |
.. +--------------------+--------------------------------------------------------+
.. | ``noSteps``        | ``Bicycle``, ``Pedestrian``                            |
.. +--------------------+--------------------------------------------------------+


.. Bicycle Specific Parameters
.. >>>>>>>>>>>>>>>>>>>>>>>>>>>

.. For the ``Bicycle`` profiles we offer additional filters to finetune your route.

.. +---------------+------------------------------------------------------------------------------------------------------------+
.. | Parameter     | Description                                                                                                |
.. +===============+============================================================================================================+
.. | ``elevation`` | ``True`` to retrieve elevation information for each returned point in the response.                        |
.. +---------------+------------------------------------------------------------------------------------------------------------+
.. | ``surface``   | ``True`` to retrieve way surface information for your route.                                               |
.. +---------------+------------------------------------------------------------------------------------------------------------+
.. | ``noHills``   | ``True`` to avoid steep gradients. You may either set this option or set the ``level`` parameter.          |
.. +---------------+------------------------------------------------------------------------------------------------------------+
.. | ``level``     | Corresponds to the fitness level. ``0`` = Novice, ``1`` = Moderate, ``2`` = Amateur, ``3`` = Pro.          |
.. +---------------+------------------------------------------------------------------------------------------------------------+
.. | ``steep``     | Which relates to the maximum steepness given as a percentage. The range of values is from ``1`` to ``15``. |
.. +---------------+------------------------------------------------------------------------------------------------------------+

.. The surface parameter provides decoded values for the surfacetype and the waytype.

.. .. attention:: The ``steep`` parameter can only be set if ``noHills`` or ``level`` is defined. Also you can only use ``noHills`` or ``level`` at a time.

.. Wheelchair Specific Parameters
.. >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

.. For the ``Wheelchair`` profile we offer additional filters to finetune your route.

.. +-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
.. | Parameter   | Description                                                                                                                                                        |
.. +=============+====================================================================================================================================================================+
.. | ``surtype`` | Corresponds to the surface type. Ranges from type ``1`` which only uses smooth surface types to ``5`` which uses all traversable surfaces. Default is set to ``2`` |
.. +-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
.. | ``incline`` | Relates to the maximum incline as a percentage. ``3``, ``6``\ (*default*), ``10``, ``15`` or ``any``                                                               |
.. +-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+
.. | ``curb``    | Corresponds to the maximum height of the sloped curb in centimeter. ``3``, ``6``\ (*default*), ``10`` or ``any``                                                   |
.. +-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. surtype Encoding
.. <<<<<<<<<<<<<<<<

.. This is the encoding for the ``surtype`` values which refer to a specific surface type.

.. +-------+----------------------------------+
.. | Value | Description                      |
.. +=======+==================================+
.. | ``1`` | concrete, asphalt                |
.. +-------+----------------------------------+
.. | ``2`` | flattened cobblestone and better |
.. +-------+----------------------------------+
.. | ``3`` | cobblestone and better           |
.. +-------+----------------------------------+
.. | ``4`` | compacted                        |
.. +-------+----------------------------------+
.. | ``5`` | all traversable surfaces         |
.. +-------+----------------------------------+

.. HeavyVehicle Specific Parameters
.. >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

.. For the ``HeavyVehicle`` profiles we offer additional filters to finetune your route according to specific vehicle options.

.. +--------------------+--------------------------------------------------------------------------------------------------------------------------+
.. | Parameter          | Description                                                                                                              |
.. +====================+==========================================================================================================================+
.. | ``haz``            | ``True`` for an appropriate routing while delivering hazardous goods and avoiding water protected areas.                 |
.. +--------------------+--------------------------------------------------------------------------------------------------------------------------+
.. | ``value_weight``   | Maximum weight restriction in tons.                                                                                      |
.. +--------------------+--------------------------------------------------------------------------------------------------------------------------+
.. | ``value_height``   | Maximum height restriction in meters.                                                                                    |
.. +--------------------+--------------------------------------------------------------------------------------------------------------------------+
.. | ``value_width``    | Maximum width restriction in meters.                                                                                     |
.. +--------------------+--------------------------------------------------------------------------------------------------------------------------+
.. | ``value_length``   | Maximum length restriction in meters.                                                                                    |
.. +--------------------+--------------------------------------------------------------------------------------------------------------------------+
.. | ``value_axleload`` | Maximum axeload restriction in tons.                                                                                     |
.. +--------------------+--------------------------------------------------------------------------------------------------------------------------+
.. | ``subtype``        | Defines a HeavyVehicle subtype. ``hgv``\ (*default*), ``Agricultural``, ``Bus``, ``Delivery``, ``Foresty`` or ``Goods``. |
.. +--------------------+--------------------------------------------------------------------------------------------------------------------------+


.. .. _example-ref:

.. Examples
.. ++++++++

.. The shortest version of a full functioning `query <http://openls.geog.uni-heidelberg.de/route?start=9.258506,49.240011&end=9.2556609,49.2397316&api_key=api-key>`__ would comprise the following parameters::

..   http://openls.geog.uni-heidelberg.de/route?start=9.258506,49.240011&end=9.2556609,49.2397316&api_key=api-key	

.. .. needs revision

.. This example corresponds to a route for the route preference Car from a starting point to a destination with no direction-instructions. The distance values will be returned in kilometers and the route weight is set to `Shortest`. The response will be in the following format:

.. .. highlight:: xml

.. ::

.. 	<xls:XLS version="1.1" xsi:schemaLocation="http://www.opengis.net/xls http://schemas.opengis.net/ols/1.1.0/RouteService.xsd">
.. 	 <xls:ResponseHeader xsi:type="xls:ResponseHeaderType"/>
.. 	 <xls:Response xsi:type="xls:ResponseType" requestID="123456789" version="1.1" numberOfResponses="1">
.. 	  <xls:DetermineRouteResponse xsi:type="xls:DetermineRouteResponseType">
.. 	   <xls:RouteSummary>
.. 	    <xls:TotalTime>PT16S</xls:TotalTime>
.. 	    <xls:TotalDistance uom="KM" value="0.2"/>
..         <xls:ActualDistance uom="KM" value="0.0"/>
.. 	    <xls:BoundingBox srsName="EPSG:4326">
.. 	     <gml:pos>9.2556609 49.2396869</gml:pos>
.. 	     <gml:pos>9.2585339 49.2399278</gml:pos>
.. 	    </xls:BoundingBox>
.. 	   </xls:RouteSummary>
.. 	   <xls:RouteGeometry>
.. 	    <gml:LineString srsName="EPSG:4326">
.. 	     <gml:pos>9.2585339 49.2399278</gml:pos>
.. 	     <gml:pos>9.2583569 49.2399026</gml:pos>
.. 	     <gml:pos>9.2581138 49.239894</gml:pos>
.. 	     <gml:pos>9.2578367 49.2398938</gml:pos>
.. 	     <gml:pos>9.2575036 49.2398741</gml:pos>
.. 	     <gml:pos>9.2571842 49.2398199</gml:pos>
.. 	     <gml:pos>9.2568038 49.2397191</gml:pos>
.. 	     <gml:pos>9.2565134 49.2396869</gml:pos>
.. 	     <gml:pos>9.2556609 49.2397316</gml:pos>
.. 	     <gml:pos>9.2556609 49.2397316</gml:pos>
.. 	    </gml:LineString>
.. 	   </xls:RouteGeometry>
.. 	  </xls:DetermineRouteResponse>
.. 	 </xls:Response>
.. 	</xls:XLS>

.. .. highlight:: none

.. ..
..  Further examples (without response):


.. .. attention:: Parameters as well as values are `case sensitive`. The input order doesn't matter though. 

.. Response Values
.. +++++++++++++++

.. This is the encoding for the Surface and Waytype you will encounter in your response file if ``surface`` is set to ``True``.
 
.. Response Surfacetype List
.. >>>>>>>>>>>>>>>>>>>>>>>>>

.. +--------+------------------+
.. | Value  | Encoding         |
.. +========+==================+
.. | ``0``  | Unknown          |
.. +--------+------------------+
.. | ``1``  | Paved            |
.. +--------+------------------+
.. | ``2``  | Unpaved          |
.. +--------+------------------+
.. | ``3``  | Asphalt          |
.. +--------+------------------+
.. | ``4``  | Concrete         |
.. +--------+------------------+
.. | ``5``  | Cobblestone      |
.. +--------+------------------+
.. | ``6``  | Metal            |
.. +--------+------------------+
.. | ``7``  | Wood             |
.. +--------+------------------+
.. | ``8``  | Compacted Gravel |
.. +--------+------------------+
.. | ``9``  | Fine Gravel      |
.. +--------+------------------+
.. | ``10`` | Gravel           |
.. +--------+------------------+
.. | ``11`` | Dirt             |
.. +--------+------------------+
.. | ``12`` | Ground           |
.. +--------+------------------+
.. | ``13`` | Ice              |
.. +--------+------------------+
.. | ``14`` | Salt             |
.. +--------+------------------+
.. | ``15`` | Sand             |
.. +--------+------------------+
.. | ``16`` | Woodchips        |
.. +--------+------------------+
.. | ``17`` | Grass            |
.. +--------+------------------+
.. | ``18`` | Grass Paver      |
.. +--------+------------------+

.. Response Waytype List
.. >>>>>>>>>>>>>>>>>>>>>

.. +--------+--------------+
.. | Value  | Encoding     |
.. +========+==============+
.. | ``0``  | Unknown      |
.. +--------+--------------+
.. | ``1``  | State Road   |
.. +--------+--------------+
.. | ``2``  | Road         |
.. +--------+--------------+
.. | ``3``  | Street       |
.. +--------+--------------+
.. | ``4``  | Path         |
.. +--------+--------------+
.. | ``5``  | Track        |
.. +--------+--------------+
.. | ``6``  | Cycleway     |
.. +--------+--------------+
.. | ``7``  | Footway      |
.. +--------+--------------+
.. | ``8``  | Steps        |
.. +--------+--------------+
.. | ``9``  | Ferry        |
.. +--------+--------------+
.. | ``10`` | Construction |
.. +--------+--------------+

.. Response Steepness List
.. >>>>>>>>>>>>>>>>>>>>>>>

.. +--------+----------+
.. | Value  | Encoding |
.. +========+==========+
.. | ``-5`` | >16%     |
.. +--------+----------+
.. | ``-4`` | 12-15%   |
.. +--------+----------+
.. | ``-3`` | 7-11%    |
.. +--------+----------+
.. | ``-2`` | 4-6%     |
.. +--------+----------+
.. | ``-1`` | 1-3%     |
.. +--------+----------+
.. | ``0``  | 0%       |
.. +--------+----------+
.. | ``1``  | 1-3%     |
.. +--------+----------+
.. | ``2``  | 4-6%     |
.. +--------+----------+
.. | ``3``  | 7-11%    |
.. +--------+----------+
.. | ``4``  | 12-15%   |
.. +--------+----------+
.. | ``5``  | >16%     |
.. +--------+----------+


.. Errors
.. ++++++

.. Currently we are not supporting an error coding. If your route could't be rendered the xml file will contain an error Message similar to this: ::

..  <xls:ErrorList>
..   <xls:Error errorCode="Unknown" severity="Error" locationPath="OpenLS Route Service - RSListener, Message: " message="Internal Service Exception: java.lang.Exception Internal Service Exception Message: Cannot find point 0: 20.38325080173755,14.721679687500002 ..."/>
..  </xls:ErrorList>

.. In that case there aren't any roads in the vicinity of the start and endpoint. Please try to place your points closer to the road network.

.. Restful Webservice
.. ++++++++++++++++++++++++++++++++++

.. This `Link <http://openls.geog.uni-heidelberg.de/routing&help>`__ contains a testclient with meta information and schema file in which an example for a routing request can be viewed.

------

.. _gc:

Geocoding Service
>>>>>>>>>>>>>>>>>

The geocoding endpoint is defined as follows:

.. centered:: hostname/geocode?

We distinguish between geocoding and reverse geocoding depending on your input. 

Geocoding
+++++++++

A geocoding request returns a list of coordinates matching your search input.

Query Parameters
----------------

+-------------+----------------------------------------------------------------------------------------+
| Parameter   | Description                                                                            |
+=============+========================================================================================+
| ``query``   | Name of location, street address or postal code.                                       |
+-------------+----------------------------------------------------------------------------------------+
| ``lang``    | Language of the response. Available are ``de``, ``en``\ *(default)*, ``fr`` and ``it`` |
+-------------+----------------------------------------------------------------------------------------+
| ``limit``   | Maximum number of responses. Default is ``20``.                                        |
+-------------+----------------------------------------------------------------------------------------+
| ``api_key`` | ``your_api_key`` is placed within this parameter                                       |
+-------------+----------------------------------------------------------------------------------------+

 
.. _gc_response:

Response
--------

The geocoding result contains as many features (if existing) as the ``limit`` parameter was set to.

:geometry: holds the coordinates and the geometry ``type`` which is ``Point``
:type: declares the feature as a feature
:properties: holds the tag information of the point

The following geocoding request searches for ``Berlin`` with a maximum of ``5`` response objects::

	hostname/geocoding-test?format=json&query=Berlin&limit=5&api_key=api-key

As a response you will obtain the following JSON file with exactly 5 matches:

.. code-block:: json

	{
	  "features": [
	    {
	      "geometry": {
	        "coordinates": [
	          13.38886,
	          52.517037
	        ],
	        "type": "Point"
	      },
	      "type": "Feature",
	      "properties": {
	        "country": "Germany",
	        "name": "Berlin",
	        "state": "Berlin"
	      }
	    },
	    {
	      "geometry": {
	        "coordinates": [
	          13.438596,
	          52.519854
	        ],
	        "type": "Point"
	      },
	      "type": "Feature",
	      "properties": {
	        "country": "Germany",
	        "name": "Berlin",
	        "state": "Berlin"
	      }
	    },
	    {
	      "geometry": {
	        "coordinates": [
	          13.239515,
	          52.514679
	        ],
	        "type": "Point"
	      },
	      "type": "Feature",
	      "properties": {
	        "country": "Germany",
	        "street": "Olympischer Platz",
	        "name": "Berlin Olympic Stadium",
	        "house_number": "3",
	        "state": "Berlin",
	        "postal_code": "14053"
	      }
	    },
	    {
	      "geometry": {
	        "coordinates": [
	          13.392906,
	          52.518591
	        ],
	        "type": "Point"
	      },
	      "type": "Feature",
	      "properties": {
	        "country": "Germany",
	        "street": "Unter den Linden",
	        "name": "Humboldt University in Berlin Mitte Campus",
	        "house_number": "6",
	        "state": "Berlin",
	        "postal_code": "10117"
	      }
	    },
	    {
	      "geometry": {
	        "coordinates": [
	          13.393584,
	          52.518522
	        ],
	        "type": "Point"
	      },
	      "type": "Feature",
	      "properties": {
	        "country": "Germany",
	        "street": "Dorotheenstraße",
	        "name": "Humboldt University in Berlin Mitte Campus",
	        "state": "Berlin",
	        "postal_code": "10117"
	      }
	    }
	  ],
	  "bbox": [
	    13.239515,
	    52.514679,
	    13.438596,
	    52.519854
	  ],
	  "type": "FeatureCollection",
	  "info": {
	    "service": "geocoding",
	    "query": {
	      "query": "Berlin",
	      "limit": 5
	    },
	    "attribution": "openrouteservice.org",
	    "version": "0.1",
	    "timestamp": 1484660045947
	  }
	}

.. _rgc:

Reverse Geocoding
+++++++++++++++++

Query Parameters
----------------

As a result of a reverse geocoding request you will get one match, namely the next enclosing object with an address tag which surrounds the given coordinate.

+--------------+-----------------------------------------------------------------------------------------------+
| Parameter    | Description                                                                                   |
+==============+===============================================================================================+
| ``location`` | ``Longitude,Latitude`` of the coordinate.                                                     |
+--------------+-----------------------------------------------------------------------------------------------+
| ``lang``     | Language of the response. Available are ``de``, ``en``\ *(default)*, ``fr`` and ``it``        |
+--------------+-----------------------------------------------------------------------------------------------+
| ``limit``    | Maximum number of responses. Fixed to ``1`` for now                                           |
+--------------+-----------------------------------------------------------------------------------------------+
| ``api_key``  | ``your_api_key`` is placed within this parameter                                              |
+--------------+-----------------------------------------------------------------------------------------------+

.. _rgc_response:

Response
--------

The reverse geocoding result contains one feature (if existing).

:geometry: holds the coordinate and the geometry ``type`` which is ``Point``
:type: declares the feature as a feature
:properties: contains the ``distance`` between the input location and the result point, the ``accuracy_score`` depending on the ``distance``\ (``1`` is a perfect score with less than 0.1?m distance) as well as the tag information of the point


The following example examines the location ``13.239515,52.514679``::

	hostname/geocoding-test?format=json&location=13.239515,52.514679&api_key=key

Resulting in one feature response:

.. code-block:: json

	{
	  "features": [
	    {
	      "geometry": {
	        "coordinates": [
	          13.239515,
	          52.514679
	        ],
	        "type": "Point"
	      },
	      "type": "Feature",
	      "properties": {
	        "country": "Germany",
	        "distance": 0.05,
	        "street": "Olympischer Platz",
	        "name": "Berlin Olympic Stadium",
	        "accuracy_score": 1,
	        "house_number": "3",
	        "state": "Berlin",
	        "postal_code": "14053"
	      }
	    }
	  ]
	}



--------

Isochrones Service
>>>>>>>>>>>>>>>>>>

The accessibility analysis endpoint is defined as follows::

 hostname/analyse?

Query Parameters
++++++++++++++++

The Isochrone Service supports time and distance analyses with multiple start or end points. Additionally you can specify the line interval or give multiple exact range values and output some extra attributes for the polygons in the :ref:`response <aa_response>`.

+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter         | Description                                                                                                                                                                                     |
+===================+=================================================================================================================================================================================================+
| ``locations``     | List of ``longitude,latitude`` coordinates delimited with vertical bar                                                                                                                          |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``range_type``    | ``time``\ *(default)* for isochrones or ``distance`` for equidistants                                                                                                                           |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``range``         | Maximum range ``value`` of the analysis in *seconds* for time and *meters* for distance. Alternatively a comma seperated list of specific single range values                                   |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``interval``      | Interval of isochrones or equidistants for one ``range`` value. ``value`` in *seconds* for time and *meters* for distance                                                                       |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``units``         | Unit format. ``m``\ *(default)*, ``km`` or ``mi`` for ``distance``. ``s`` for ``time``                                                                                                          |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``location_type`` | ``start`` treats the location(s) as starting point, ``destination`` as goal                                                                                                                     |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``profile``       | Profile used for the analysis. ``driving-car``\ *(default)*, ``driving-hgv``, ``cycling-road`` , ``cycling-mountain``, ``cycling-tour``, ``cycling-safe``, ``foot-walking`` and ``foot-hiking`` |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``attributes``    | Values are ``area`` and ``reachfactor``. Delimit with vertical bar for both.                                                                                                                    |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``api_key``       | ``your_api_key`` is inserted within this parameter.                                                                                                                                             |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. | ``calcmethod``    | Method of generating the Isochrones. At the moment: ``default`` or ``empty``                                                                                                                    |
.. +-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

range
-----

There are three ways to use the range parameter:

:single range:  returns one linear ring with the given range. ``range=value``
:with interval: gives back linear rings in interval gap with range as outmost ring. ``range=value&interval=smaller_value``
:range list: returns linear rings at the specified ranges. ``range=value1,value2,...``

units
-----

+---------------+------------------------------------------------------------------+
| ``rangetype`` | ``units``                                                        |
+===============+==================================================================+
| ``time``      | ``m``\(meters *default*), ``km``\(kilometers) and ``mi``\(miles) |
+---------------+------------------------------------------------------------------+
| ``distance``  | ``s``\(seconds)                                                  |
+---------------+------------------------------------------------------------------+

attributes
----------

:area:  displays the area of each polygon in the feature attributes
:reachfactor:  displays reachability score between ``1`` and ``0``

.. note:: As the maximum reachfactor would be achieved by traveling the direct distance at maximum speed in a vacuum without obstacles, naturally it can never be ``1``. The availability of motorways however produces a higher score over normal roads.

.. _aa_response:

Response
++++++++

Every Isochrone/Equidistant will result in an object in the features-block. They will be sorted in groups for each location analysed (see ``group_index``) as well as from closest to furthest range within each group.

:geometry: holds the coordinates and the geometry ``type`` which is ``Polygon``
:type: declares the feature as a feature
:properties: contains the ``center``, ``group_index`` and ``value`` parameter

+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------+
| Properties      | Description                                                                                                                             |
+=================+=========================================================================================================================================+
| ``center``      | coordinates of the associated analysis location                                                                                         |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------+
| ``group_index`` | refers to the number of the point coordinate in the ``loctaions`` query-parameter. For every location there is an own group of Polygons |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------+
| ``value``       | contains the range value of this isochrone/equidistant in seconds/meters                                                                |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------+


This analysis request for the location ``8.6984954,49.38092`` uses the ``driving-car`` profile and searches for accessibility in range ``500`` seconds with interval ``200`` seconds::

	hostname/analysis-test?format=json&range=500&interval=200&locations=8.6984954,49.38092&profile=driving-car&api_key=api-key

The result supplies linear rings at ``200``, ``400`` seconds and ends with the ``500`` seconds as outter ring:

.. code-block:: json

	{
	  "features": [
	    {
	      "geometry": {
	        "coordinates": [
	          [
	            [
	              8.69426,
	              49.382367
	            ],
	            [
	              8.694372,
	              49.381591
	            ],
	            [
	              8.696803,
	              49.377774
	            ],
	            [
	              8.70053,
	              49.376973
	            ],
	            [
	              8.700662,
	              49.377036
	            ],
	            [
	              8.702821,
	              49.378865
	            ],
	            [
	              8.703981,
	              49.381551
	            ],
	            [
	              8.703705,
	              49.384995
	            ],
	            [
	              8.702402,
	              49.388013
	            ],
	            [
	              8.700544,
	              49.387879
	            ],
	            [
	              8.69716,
	              49.384927
	            ],
	            [
	              8.694991,
	              49.383061
	            ],
	            [
	              8.69426,
	              49.382367
	            ]
	          ]
	        ],
	        "type": "Polygon"
	      },
	      "type": "Feature",
	      "properties": {
	        "center": [
	          8.698495,
	          49.38092
	        ],
	        "group_index": 0,
	        "value": 200
	      }
	    },
	    {
	      "geometry": {
	        "coordinates": [
	          [
	            [
	              8.692611,
	              49.388018
	            ],
	            [
	              8.693073,
	              49.384858
	            ],
	            [
	              8.694372,
	              49.381591
	            ],
	            [
	              8.697501,
	              49.375415
	            ],
	            [
	              8.704463,
	              49.3743
	            ],
	            [
	              8.708623,
	              49.377393
	            ],
	            [
	              8.714081,
	              49.38723
	            ],
	            [
	              8.714451,
	              49.390018
	            ],
	            [
	              8.714369,
	              49.390475
	            ],
	            [
	              8.713471,
	              49.392169
	            ],
	            [
	              8.709755,
	              49.399126
	            ],
	            [
	              8.709744,
	              49.399145
	            ],
	            [
	              8.698255,
	              49.398519
	            ],
	            [
	              8.694863,
	              49.397527
	            ],
	            [
	              8.692611,
	              49.388018
	            ]
	          ]
	        ],
	        "type": "Polygon"
	      },
	      "type": "Feature",
	      "properties": {
	        "center": [
	          8.698495,
	          49.38092
	        ],
	        "group_index": 0,
	        "value": 400
	      }
	    },
	    {
	      "geometry": {
	        "coordinates": [
	          [
	            [
	              8.690228,
	              49.400878
	            ],
	            [
	              8.691253,
	              49.398248
	            ],
	            [
	              8.692611,
	              49.388018
	            ],
	            [
	              8.693073,
	              49.384858
	            ],
	            [
	              8.695052,
	              49.375567
	            ],
	            [
	              8.697151,
	              49.370614
	            ],
	            [
	              8.697893,
	              49.369815
	            ],
	            [
	              8.698756,
	              49.36912
	            ],
	            [
	              8.701019,
	              49.368275
	            ],
	            [
	              8.701427,
	              49.36819
	            ],
	            [
	              8.702866,
	              49.368126
	            ],
	            [
	              8.705924,
	              49.368181
	            ],
	            [
	              8.70603,
	              49.36821
	            ],
	            [
	              8.71147,
	              49.374762
	            ],
	            [
	              8.71618,
	              49.383764
	            ],
	            [
	              8.717923,
	              49.384906
	            ],
	            [
	              8.713309,
	              49.394881
	            ],
	            [
	              8.709744,
	              49.399145
	            ],
	            [
	              8.706848,
	              49.400034
	            ],
	            [
	              8.701117,
	              49.401655
	            ],
	            [
	              8.692159,
	              49.401869
	            ],
	            [
	              8.691849,
	              49.401799
	            ],
	            [
	              8.690228,
	              49.400878
	            ]
	          ]
	        ],
	        "type": "Polygon"
	      },
	      "type": "Feature",
	      "properties": {
	        "center": [
	          8.698495,
	          49.38092
	        ],
	        "group_index": 0,
	        "value": 500
	      }
	    }
	  ],
	  "bbox": [
	    8.690228,
	    49.368126,
	    8.717923,
	    49.401869
	  ],
	  "type": "FeatureCollection",
	  "info": {
	    "service": "accessibility",
	    "query": {
	      "ranges": "200.0,400.0,500.0",
	      "profile": "driving-car",
	      "locations": [
	        [
	          8.698495,
	          49.38092
	        ]
	      ],
	      "range_type": "time"
	    },
	    "attribution": "openrouteservice.org",
	    "version": "0.1",
	    "timestamp": 1485260015371
	  }
	}


-----

Meta Information
>>>>>>>>>>>>>>>>


The format of your response is `GeoJSON <http://geojson.org/geojson-spec.html>`__. 

Bbox
++++

The Bbox-block shows the values of the `minimum bounding box <https://en.wikipedia.org/wiki/Minimum_bounding_box>`__ surrounding all feature results as follows:


.. code-block:: json

	"bbox": [
		minimum longitude,
		minimum latitude,
		maximum longitude,
		maximum latitude
	]


------

Info
++++

The Info-block displays facts about your query.

+-------------+---------------------------------------------------------------+
| About       | Description                                                   |
+=============+===============================================================+
| service     | API endpoint used. ``geocoding``, ``analysis`` or ``routing`` |
+-------------+---------------------------------------------------------------+
| query       | Parameters that were specified in the query                   |
+-------------+---------------------------------------------------------------+
| attribution | Attribution for using our service                             |
+-------------+---------------------------------------------------------------+
| version     | Version of our backend server used for the request            |
+-------------+---------------------------------------------------------------+
| timestamp   | Unix timestamp of the precise request date                    |
+-------------+---------------------------------------------------------------+

Example:

.. code-block:: json

	{
		"info": {
		    "service": "geocoding",
		    "query": {
		      "limit": 1,
		      "location": [
		        13.239515,
		        52.514679
		      ]
		    },
		    "attribution": "openrouteservice.org",
		    "version": "0.1",
		    "timestamp": 1484660155896
		}
	}

.. substitutions
.. hostname replace::
.. api-key  replace::