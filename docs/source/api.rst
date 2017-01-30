Application Programming Interfaces
==================================

The ORS API allows for programmatic access to our services. We offer a GET scheme for you to directly query the API which is described in the following section. Please note that the response currently follows the OpenLS standard.

-----

The query parameters are added to the end of the service endpoint with `query string encoding <https://en.wikipedia.org/wiki/Query_string>`__. Hence the pattern for parameter usage is:

.. centered:: **&**\ ``parameter``\ **=**\ ``value``

------

Sections:

- :ref:`Routing Service <routings>`
- :ref:`Geocoding Service <geocodings>`

    + :ref:`Geocoding <gc>`
    + :ref:`Reverse Geocoding <rgc>`
- :ref:`Isochrones Service <isos>`
- :ref:`Meta Information <meta_info>`

-----

.. _routings:

-----

Routing Service
>>>>>>>>>>>>>>>

.. centered:: This section is under construction

Routing text :ref:`Response <r_response>`

-----

Query Parameters
++++++++++++++++

The routing endpoint is defined as follows::

	hostname/route?

.. centered:: This section is under construction

.. _routing_param:

For further information regarding the specific routing profiles, distance units and weighting options please visit our :doc:`glossary </glossary>`.


.. Optional Parameters
.. +++++++++++++++++++

.. Parameters in this section are not required for a functional request, however these may contribute to the accuracy of your query. Some parameters only work with specific routing profiles. ``noSteps`` for example merely works with the **Pedestrian** or one of the **cycling-regular** profiles. Please be aware which specific route preference you chose.


.. General Parameters
.. >>>>>>>>>>>>>>>>>>>>

+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter                             | Description                                                                                                                                                                                                                        |
+=======================================+====================================================================================================================================================================================================================================+
| ``profile``                           | Specifies the routing profile. Values are ``driving-car``, ``driving-hgv``, ``cycling-regular``, ``cycling-road``, ``cycling-safe``, ``cycling-mountain``, ``cycling-tour``, ``foot-walking``, ``foot-hiking`` and ``wheelchair``. |
+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``coordinates``                       | Vertical bar separated List of ``longitude,latitude`` coordinates visited in order.                                                                                                                                                |
+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``units``                             | Specifies the distance unit . Values are ``m``\ (meters)\ (*default*)\/``km``\ (kilometers)\/``mi``\ (miles).                                                                                                                      |
+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``language``                          | Language for the route instructions. ``en``\ (*default*),``de`` , ``ru``.. .                                                                                                                                                       |
+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``geometry``                          | Specifies whether to return geometry or not. Default is ``True``.                                                                                                                                                                  |
+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``geometry_format``                   | Sets the format of a returned geometry. `polyline <link>`__ , `encodedpolyline <link>`__\ (*default*) or `geojson <http://geojson.org/geojson-spec.html#linestring>`__\.                                                           |
+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``instructions``                      | Specifies whether to return instructions or not. Default is ``True``.                                                                                                                                                              |
+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``prettify_instructions``             | Specifies whether to returen more verbose instructions or not. Default is ``False``.                                                                                                                                               |
+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``elevation``                         | Specifies whether to return elevation values for points or not. Default is ``False``.                                                                                                                                              |
+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``extra_info`` :ref:`\# <extra_info>` | Vertical bar separated List of desired additional information. Values are ``gradients``, ``surface`` and ``waytypes``.                                                                                                             |
+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``options`` :ref:`\# <options>`       | Sets advanced options in `json schema <http://json-schema.org/>`_\. Add json as string: ``"{...}"``.                                                                                                                               |
+---------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+



.. routepref
.. >>>>>>>>>

.. The parameter ``routepref`` points to the selected routing mode. Please note that there are additional route preferences for the ``Bicycle`` and a subtype list for the ``HeavyVehicle`` type.

.. +------------------+-------------------------------------------------------------------------------+
.. | Preference Value | Alternative Values                                                            |
.. +==================+===============================================================================+
.. | ``driving-car``          | \-                                                                            |
.. +------------------+-------------------------------------------------------------------------------+
.. | ``Pedestrian``   | \-                                                                            |
.. +------------------+-------------------------------------------------------------------------------+
.. | ``Bicycle``      | ``BicycleMTB``\/\ ``BicycleRacer``\/\ ``BicycleTouring``\/\ ``BicycleSafety`` |
.. +------------------+-------------------------------------------------------------------------------+
.. | ``Wheelchair``   | \-                                                                            |
.. +------------------+-------------------------------------------------------------------------------+
.. | ``driving-hgv`` | There is a subtype list for the driving-hgv profile                          |
.. +------------------+-------------------------------------------------------------------------------+

.. _

.. _extra_info:

-----

Extra Info
----------

+-----------+-----------------------------------------------+
| Value     | Description                                   |
+===========+===============================================+
| gradients | Returns steepneess information for each step. |
+-----------+-----------------------------------------------+
| surface   | Returns surface information for each step.    |
+-----------+-----------------------------------------------+
| waytypes  | Returns waytype information for each step.    |
+-----------+-----------------------------------------------+



.. _options:		

-----

Options
-------

These additional settings can be made in `json schema <http://json-schema.org/>`_ :

+--------------------------------------+-------------------------------------------------------------------------------------+
| Options                              | Descriptions                                                                        |
+======================================+=====================================================================================+
| "maximumSpeed"                       | Sets the maximum travel speed.                                                      |
+--------------------------------------+-------------------------------------------------------------------------------------+
| "avoidFeatures" :ref:`\# <avoid>`    | Array of features to avoid. ["feat1", "feat2", ..]                                  |
+--------------------------------------+-------------------------------------------------------------------------------------+
| "modeType" :ref:`\# <mode>`          | Specifies the heavy vehicle mode. Values are "hgv" and "bus".                       |
+--------------------------------------+-------------------------------------------------------------------------------------+
| "vehicleParams" :ref:`\# <vehparam>` | Specifies hgv or wheelchair vehicle parameters.                                     |
+--------------------------------------+-------------------------------------------------------------------------------------+
| "fitnessParams" :ref:`\# <fitparam>` | Specifies fitness parameters for bicycle.                                           |
+--------------------------------------+-------------------------------------------------------------------------------------+
| "avoidPolygons"                      | Sets areas to be avoided as `geojson polygon <link>`__ or `Multipolygon <link>`__\. |
+--------------------------------------+-------------------------------------------------------------------------------------+


.. _avoid:

-----

Avoid Features
<<<<<<<<<<<<<<

.. centered:: under construction

.. The following feature types provide means to avoid certain objects along your route. Please be aware that these may be specific to your chosen route preference. Please note that avoidable parameters for alternative route preferences correspond to their parent profile. The default value is set to `False`. 

.. +--------------------+--------------------------------------------------------+
.. | Parameter          | Profiles                                               |
.. +====================+========================================================+
.. | "motorways"    | ``driving-car``, ``driving-hgv``                              |
.. +--------------------+--------------------------------------------------------+
.. | "tollways"     | ``driving-car``, ``driving-hgv``                              |
.. +--------------------+--------------------------------------------------------+
.. | "tunnels"      | ``driving-car``, ``driving-hgv``                              |
.. +--------------------+--------------------------------------------------------+
.. | "pavedroads"   | ``cycling-regular``                                            |
.. +--------------------+--------------------------------------------------------+
.. | "unpavedroads" | ``driving-car``, ``cycling-regular``, ``driving-hgv``                 |
.. +--------------------+--------------------------------------------------------+
.. | "tracks"       | ``driving-car``, ``driving-hgv``                              |
.. +--------------------+--------------------------------------------------------+
.. | "ferry"      | ``driving-car``, ``cycling-regular``, ``Pedestrian``, ``driving-hgv`` |
.. +--------------------+--------------------------------------------------------+
.. | "ford"        | ``driving-car``, ``cycling-regular``, ``Pedestrian``, ``driving-hgv`` |
.. +--------------------+--------------------------------------------------------+
.. | "steps"        | ``cycling-regular``, ``Pedestrian``                            |
.. +--------------------+--------------------------------------------------------+

.. _mode:

-----

Mode
<<<<

.. centered:: under construction

.. _vehparam:

-----

Vehicle Parameter
<<<<<<<<<<<<<<<<<


For the ``driving-hgv`` profile we offer additional filters to finetune your route according to specific vehicle options.

+-------------+---------------------------------------------------------------------------------------------------------------------------------------+
| Parameter   | Description                                                                                                                           |
+=============+=======================================================================================================================================+
| "length"    | Specifies length restriction in meters.                                                                                               |
+-------------+---------------------------------------------------------------------------------------------------------------------------------------+
| "width"     | Specifies width restriction in meters.                                                                                                |
+-------------+---------------------------------------------------------------------------------------------------------------------------------------+
| "height"    | Specifies height restriction in meters.                                                                                               |
+-------------+---------------------------------------------------------------------------------------------------------------------------------------+
| "axleload"  | Specifies axeload restriction in tons.                                                                                                |
+-------------+---------------------------------------------------------------------------------------------------------------------------------------+
| "weight"    | Specifies weight restriction in tons.                                                                                                 |
+-------------+---------------------------------------------------------------------------------------------------------------------------------------+
| "hazardous" | Specifies whether to use appropriate routing for delivering hazardous goods and avoiding water protected areas. Default is ``False``. |
+-------------+---------------------------------------------------------------------------------------------------------------------------------------+

.. _fitparam:

-----

Fitness Parameter
<<<<<<<<<<<<<<<<<

For the ``cycling`` profiles we offer additional filters to finetune your route.

+---------------------+----------------------------------------------------------------------------------------------+
| Value               | Description                                                                                  |
+=====================+==============================================================================================+
| ``level``           | Specifies the fitness level. ``0`` = Novice, ``1`` = Moderate, ``2`` = Amateur, ``3`` = Pro. |
+---------------------+----------------------------------------------------------------------------------------------+
| ``maximumGradient`` | Specifies the maximum steepness as a percentage. Values from ``1`` to ``15``.                |
+---------------------+----------------------------------------------------------------------------------------------+

.. .. attention:: The ``maximumGradient`` parameter can only be set if ``hills`` are avoided or ``level`` is defined. Also you can only use ``level`` OR avoid ``hills`` at a time.


.. _r_response:

-----

Response
++++++++

.. centered:: This section is under construction

The routing result is structured into *summary*, *geometry*, *segments* and *way_points* for each route. It also includes the standard :ref:`meta information<meta_info>`\.

.. _routes:

------

routes
------

:summary: Contains total duration\ *(in seconds)*, route distance\ *(in* ``units`` *)* and actual distance\ *(in meters)* of the route.
:geometry_format: Contains the selected :ref:`geometry format <routing_param>`.
:bbox:  Contains the `minimum bounding box <https://en.wikipedia.org/wiki/Minimum_bounding_box>`__ of the route.
:geometry: Contains the geometry in defined :ref:`geometry format<routings>`.
:segments: Array that contains the segments the route consists of.
:way_points: Array that contains the geometry-point number for each of the travel ``coordinates``.

.. _segments:

------

segments
--------

:duration: Contains the duration of the segment in seconds.
:distance: Contains the distance of the segment in ``units``.
:steps: Array that contains the steps the segment consists of.

.. _steps:

------

steps
-----

+-------------+----------------------------------------------------------------------------------+
| Parameter   | Description                                                                      |
+=============+==================================================================================+
| duration    | Contains duration for the step in seconds.                                       |
+-------------+----------------------------------------------------------------------------------+
| distance    | Contains distance for the step in meters.                                        |
+-------------+----------------------------------------------------------------------------------+
| instruction | Contains the routing instruction text for the step.                              |
+-------------+----------------------------------------------------------------------------------+
| type        | Contains the :ref:`instruction type <ins_type>` for symbolisation.               |
+-------------+----------------------------------------------------------------------------------+
| way_points  | Array that contains the geometry-point number of the step's start- and endpoint. |
+-------------+----------------------------------------------------------------------------------+

.. _ins_type:

------

instruction type
<<<<<<<<<<<<<<<<

+-------+--------------+
| Value | Encoding     |
+=======+==============+
| 0     | Left         |
+-------+--------------+
| 1     | Right        |
+-------+--------------+
| 2     | Sharp Left   |
+-------+--------------+
| 3     | Sharp Right  |
+-------+--------------+
| 4     | Slight Left  |
+-------+--------------+
| 5     | Slight Right |
+-------+--------------+
| 6     | Straight     |
+-------+--------------+
| 7     | Roundabout   |
+-------+--------------+


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

.. Response Gradients List
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

-----

The following example routes from coordinate ``8.690614,49.38365`` over ``8.7007,49.411699`` to ``8.7107,49.45169`` using the ``cycling-regular`` profile::

	hostname/routing-test?profile=cycling-regular&coordinates=8.690614,49.38365|8.7007,49.411699|8.7107,49.45169&api_key=api-key

The resulting route has 2 segments with multiple steps:

.. hidden-code-block:: json
	:starthidden: True
	:label: Show/Hide Code

	{
	  "routes": [
	    {
	      "summary": {
	        "duration": 4978.3,
	        "distance_actual": 11762.8,
	        "distance": 12826.4
	      },
	      "bbox": [
	        8.690675,
	        49.383662,
	        8.690675,
	        49.383662
	      ],
	      "geometry": "{fllHwk`t@SH?d@sIM}EDo@?oHJ{Ud@aDJoRbAeD^g@FK@_FRWAS@_AFOESKa@m@KQCKEIO@[q@_@]OG{Bo@OEaC_AkC{@gHsBwCo@kM{BGAeAEMEa@AMGKMKWJmADsAKg@KWKI_@Im@CCKAOG@I@}E~AKDgDdAoHhBK?SCGBUWYqCO_CCq@eAuNEs@EaBCSP[PGIgEGUIcD?Il@O`@Ka@Jm@NHnC?^ILw@RKDBhAFTNdAVxAPlAjAhPBp@N~BXpCDX_@RoIxAq@Jy@DG^CBcRf@m@HOD]V}ChDEDU?UDqBn@UJOJELCDgAb@q@\\gC|Ay@XeBt@mNvEuAf@MHKJG@GCINCGI?o@N}K`EkBf@aAd@KFSmA{Ab@g@ZELKfA?FiBj@qGlEc@Rk@RsKtBo@FKASx@Cf@@P[?wBMGEKJo@V{A`@wBz@}AjAgJlFs@^c@Lq@HsF|A_ClAeA`@mA^eAVkGjARfCETIFwJhCeDvA{@\\y@f@iArCc@`@gIdGaAn@O}AQyBGgCA_@sDd@o@LUgE?mHE{BGs@MsAi@QIICE?MGQESZmBNc@Di@T{@De@?aBEeCWmEQ}EI{LCe@PPFh@HrCLjBf@dE^fBb@|AfAzCFFF@FK?SQc@Mm@MeBIsBE}B?eA\\cO\\iICi@Sg@m@_@YYEKEU?GIWe@}B@eBJiBCgA@s@^aECmBIoCBkDPaB@{ASy@]q@c@k@a@a@aAi@[MYWLm@B{@C}@Fu@TcAP_BDsCJs@LqBRoHN}BBkAQiDq@gCW{@[Ue@kC_@gAYoAWsAIkAKiASo@O]EG[mCI]",
	      "segments": [
	        {
	          "duration": 879.3,
	          "distance": 3859.5,
	          "steps": [
	            {
	              "duration": 4.4,
	              "distance": 25.2,
	              "instruction": "Heidelberger Straße",
	              "name": "Heidelberger Straße",
	              "type": 0,
	              "way_points": [
	                0,
	                2
	              ]
	            },
	            {
	              "duration": 67.9,
	              "distance": 339.6,
	              "instruction": "Karlsruher Straße",
	              "name": "Karlsruher Straße",
	              "type": 2,
	              "way_points": [
	                2,
	                5
	              ]
	            }, 
	            {},
	            {
                  "duration": 83.2,
                  "distance": 46.2,
                  "instruction": "Karpfengasse",
                  "name": "Karpfengasse",
                  "type": 2,
                  "way_points": [
                    72,
                    74
                  ]
                }
	          ]
	        },
	        {
	          "duration": 4099,
	          "distance": 8966.9,
	          "steps": [
	            {
	              "duration": 41.6,
	              "distance": 46.2,
	              "instruction": "Karpfengasse",
	              "name": "Karpfengasse",
	              "type": 0,
	              "way_points": [
	                74,
	                76
	              ]
	            },
	            {
	              "duration": 22.3,
	              "distance": 111.6,
	              "instruction": "Untere Neckarstraße",
	              "name": "Untere Neckarstraße",
	              "type": -2,
	              "way_points": [
	                76,
	                81
	              ]
	            },
	            {},
	            {
	              "duration": 64,
	              "distance": 71.1,
	              "instruction": "",
	              "name": "",
	              "type": 1,
	              "way_points": [
	                273,
	                275
	              ]
	            }
	          ]
	        }
	      ],
	      "way_points": [
	        0,
	        74,
	        275
	      ]
	    }
	  ],
	  "info": {
	    "service": "routing",
	    "query": {
	      "geometry_format": "encodedpolyline",
	      "elevation": false,
	      "instructions": true,
	      "profile": "cycling-regular",
	      "coordinates": [
	        [
	          8.690614,
	          49.38365
	        ],
	        [
	          8.7007,
	          49.411699
	        ],
	        [
	          8.7107,
	          49.45169
	        ]
	      ],
	      "units": "meters"
	    },
	    "attribution": "tmc - BASt",
	    "version": "0.1",
	    "timestamp": 1485363740092
	  }
	}	

.. Errors
.. ++++++

.. Currently we are not supporting an error coding. If your route could't be rendered the xml file will contain an error Message similar to this: ::

..  <xls:ErrorList>
..   <xls:Error errorCode="Unknown" severity="Error" locationPath="OpenLS Route Service - RSListener, Message: " message="Internal Service Exception: java.lang.Exception Internal Service Exception Message: Cannot find point 0: 20.38325080173755,14.721679687500002 ..."/>
..  </xls:ErrorList>

.. In that case there aren't any roads in the vicinity of the start and endpoint. Please try to place your points closer to the road network.

-----

.. _geocodings:

------

Geocoding Service
>>>>>>>>>>>>>>>>>

The geocoding endpoint is defined as follows:

.. centered:: hostname/geocode?

We distinguish between geocoding and reverse geocoding depending on your input. 

.. _gc:

-----

Geocoding
+++++++++

A geocoding request returns a list of coordinates matching your search input.

Query Parameters
----------------

+-------------+-------------------------------------------------------------------------------------------------+
| Parameter   | Description                                                                                     |
+=============+=================================================================================================+
| ``query``   | Name of location, street address or postal code.                                                |
+-------------+-------------------------------------------------------------------------------------------------+
| ``lang``    | Sets the language of the response. Available are ``de``, ``en``\ *(default)*, ``fr`` and ``it`` |
+-------------+-------------------------------------------------------------------------------------------------+
| ``limit``   | Specifies the maximum number of responses. Default is ``20``.                                   |
+-------------+-------------------------------------------------------------------------------------------------+
| ``api_key`` | ``your_api_key`` is placed within this parameter                                                |
+-------------+-------------------------------------------------------------------------------------------------+

 
.. _gc_response:

-----

Response
--------

The geocoding result contains as many features (if existing) as the ``limit`` parameter was set to. It also contains the standard :ref:`meta information<meta_info>`\.

:geometry: Contains the coordinates and the geometry ``type`` which is ``Point``.
:type: Specifies the JSON feature type.
:properties: Contains the tag information of the point.

-----

The following geocoding request searches for ``Berlin`` with a maximum of ``5`` response objects::

	hostname/geocoding-test?format=json&query=Berlin&limit=5&api_key=api-key

As a response you will obtain the following JSON file with exactly 5 matches:

.. hidden-code-block:: json
	:starthidden: True
	:label: Show/Hide Code

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

-----

Reverse Geocoding
+++++++++++++++++

Query Parameters
----------------

As a result of a reverse geocoding request you will get one match, namely the next enclosing object with an address tag which surrounds the given coordinate.

+--------------+----------------------------------------------------------------------------------------+
| Parameter    | Description                                                                            |
+==============+========================================================================================+
| ``location`` | ``Longitude,Latitude`` of the coordinate.                                              |
+--------------+----------------------------------------------------------------------------------------+
| ``lang``     | Language of the response. Available are ``de``, ``en``\ *(default)*, ``fr`` and ``it`` |
+--------------+----------------------------------------------------------------------------------------+
| ``limit``    | Specifies the maximum number of responses. Fixed to ``1`` for now.                     |
+--------------+----------------------------------------------------------------------------------------+
| ``api_key``  | ``your_api_key`` is placed within this parameter                                       |
+--------------+----------------------------------------------------------------------------------------+

.. _rgc_response:

-----

Response
--------

The reverse geocoding result contains one feature (if existing) as well as the standard :ref:`meta information<meta_info>`\.

:geometry: Contains the coordinate and the geometry ``type`` which is ``Point``.
:type: Specifies the JSON feature type.
:properties: Contains the ``distance`` between the input location and the result point, the ``accuracy_score`` depending on the ``distance``\ (``1`` is a perfect score with less than 0.1?m distance) as well as the tag information of the point.

-----

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



-----

.. _isos:

-----

Isochrones Service
>>>>>>>>>>>>>>>>>>

The accessibility analysis endpoint is defined as follows::

 hostname/analyse?

Query Parameters
++++++++++++++++

The Isochrone Service supports time and distance analyses with multiple start or end points. Additionally you can specify the line interval or give multiple exact range values and output some extra attributes for the polygons in the :ref:`response <aa_response>`.

+---------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter                       | Description                                                                                                                                                                                      |
+=================================+==================================================================================================================================================================================================+
| ``locations``                   | List of ``longitude,latitude`` coordinates delimited with vertical bar.                                                                                                                          |
+---------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``range_type``                  | ``time``\ *(default)* for isochrones or ``distance`` for equidistants.                                                                                                                           |
+---------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``range`` :ref:`\# <range>`     | Maximum range ``value`` of the analysis in *seconds* for time and *meters* for distance. Alternatively a comma separated list of specific single range values                                    |
+---------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``interval``                    | Interval of isochrones or equidistants for one ``range`` value. ``value`` in *seconds* for time and *meters* for distance.                                                                       |
+---------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``units`` :ref:`\# <units>`     | Unit format. ``m``\ *(default)*, ``km`` or ``mi`` for ``distance``. ``s`` for ``time``.                                                                                                          |
+---------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``location_type``               | ``start`` treats the location(s) as starting point, ``destination`` as goal.                                                                                                                     |
+---------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``profile``                     | Profile used for the analysis. ``driving-car``\ *(default)*, ``driving-hgv``, ``cycling-road`` , ``cycling-mountain``, ``cycling-tour``, ``cycling-safe``, ``foot-walking`` and ``foot-hiking``. |
+---------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``attributes`` :ref:`\# <attr>` | Values are ``area`` and ``reachfactor``. Delimit with vertical bar for both.                                                                                                                     |
+---------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``api_key``                     | ``your_api_key`` is inserted within this parameter.                                                                                                                                              |
+---------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. | ``calcmethod``    | Method of generating the Isochrones. At the moment: ``default`` or ``empty``                                                                                                                    |
.. +-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _range:

-----

Range
-----

There are three ways to use the range parameter:

:single range:  Returns one isochrone with the given range. ``range=value``
:with interval: Returns isochrones in ``interval`` gaps with ``range`` as outmost ring. ``range=value&interval=smaller_value``
:range list: Returns isochrones at the specified ranges. ``range=value_1,value_2,...,value_N``

.. _units:

-----

Units
-----

+---------------+------------------------------------------------------------------+
| ``rangetype`` | ``units``                                                        |
+===============+==================================================================+
| ``time``      | ``m``\(meters *default*), ``km``\(kilometers) and ``mi``\(miles) |
+---------------+------------------------------------------------------------------+
| ``distance``  | ``s``\(seconds)                                                  |
+---------------+------------------------------------------------------------------+

.. _attr:

-----

Attributes
----------

:area:  Returns the area of each polygon in the feature properties.
:reachfactor:  Returns reachability score between ``1`` and ``0``

.. note:: As the maximum reachfactor would be achieved by traveling the direct distance at maximum speed in a vacuum without obstacles, naturally it can never be ``1``. The availability of motorways however produces a higher score over normal roads.

.. _aa_response:

-----

Response
++++++++

Every Isochrone/Equidistant will result in an object in the features-block. They will be sorted in groups for each location analysed (see ``group_index``) as well as from closest to furthest range within each group. The result also contains the standard :ref:`meta information<meta_info>`\.

:geometry: Contains the coordinates and the geometry ``type`` which is ``Polygon``.
:type: Specifies the JSON feature type.
:properties: Contains the ``center``, ``group_index`` and ``value`` parameter.


+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------+
| Properties      | Description                                                                                                                                               |
+=================+===========================================================================================================================================================+
| ``area``        | Contains the area of the polygon in square meters.                                                                                                        |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``reachfactor`` | Contains the :ref:`reachability score <attr>`.                                                                                                            |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``center``      | Contains the coordinates of the associated analysis location.                                                                                             |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``group_index`` | Contains the ID of the point coordinate based on the position in the ``loctaions`` query-parameter. For every location there is an own group of Polygons. |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``value``       | Contains the range value of this isochrone/equidistant in seconds/meters.                                                                                 |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------+


-----

This analysis request for the location ``8.6984954,49.38092`` uses the ``driving-car`` profile and searches for accessibility in range ``500`` seconds with interval ``200`` seconds::

	hostname/analysis-test?format=json&range=500&interval=200&locations=8.6984954,49.38092&profile=driving-car&api_key=api-key

The result supplies isochrones at ``200``, ``400`` seconds and ends with the ``500`` seconds as outter ring:

.. hidden-code-block:: json
	:starthidden: True
	:label: Show/Hide Code

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

.. _meta_info:

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
		    "version": "4.0.0",
		    "timestamp": 1484660155896
		}
	}

.. substitutions
.. hostname replace::
.. api-key  replace::
