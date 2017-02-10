Application Programming Interfaces
==================================

The **OpenRouteService** API allows for programmatic access to our services and responds in **JSON**. We offer a comprehensive GET scheme for you to directly query the different services which is described in the following sections. 

-----

The query parameters are appended to the end of the specific service endpoint by means of `query string encoding <https://en.wikipedia.org/wiki/Query_string>`__. Hence the general pattern for parameter usage is:

.. centered:: **&**\ ``parameter``\ **=**\ ``value``

-----

**Sections:**

- :ref:`Routing Service <routings>`
- :ref:`Geocoding Service <geocodings>`

    + :ref:`Geocoding <gc>`
    + :ref:`Reverse Geocoding <rgc>`
- :ref:`Isochrones Service <isos>`
- :ref:`Meta Information <meta_info>`

.. _routings:

-----

Routing Service
>>>>>>>>>>>>>>>

Returns a route between two or more locations for a selected profile and its settings as `GeoJSON <http://geojson.org/geojson-spec.html>`__ :ref:`response <r_response>`. The routing endpoint uses ``/route?`` as the request action.

-----

Query Parameters
++++++++++++++++

.. _routing_param:

The minimum requirements for a valid request are specified ``profile`` and ``coordinates`` parameters. Other parameters are optional but may contribute to the accuracy of your query.

.. Optional Parameters
.. +++++++++++++++++++

.. Parameters in this section are not required for a functional request, however these may contribute to the accuracy of your query. Some parameters only work with specific routing profiles. ``noSteps`` for example merely works with the **foot-walking** or one of the **cycling-regular** profiles. Please be aware which specific route preference you chose.


.. General Parameters
.. >>>>>>>>>>>>>>>>>>>>

.. .. raw:: html

.. 	<table border="1" class="docutils">
.. 	<colgroup>
.. 	<col width="14%" />
.. 	<col width="86%" />
.. 	</colgroup>
.. 	<thead valign="bottom">
.. 	<tr class="row-odd"><th class="head">Parameter</th>
.. 	<th class="head">Description</th>
.. 	</tr>
.. 	</thead>
.. 	<tbody valign="top">
.. 	<tr class="row-even"><td><code class="docutils literal"><span class="pre">coordinates</span></code></td>
.. 	<td>Pipe separated List of <code class="docutils literal"><span class="pre">longitude,latitude</span></code> coordinates visited in order.</td>
.. 	</tr>
.. 	<tr class="row-odd"><td><code class="docutils literal"><span class="pre">profile</span></code></td>
.. 	<td>Specifies the routing profile. Values are <code class="docutils literal"><span class="pre">driving-car</span></code>, <code class="docutils literal"><span class="pre">driving-hgv</span></code>, <code class="docutils literal"><span class="pre">cycling-regular</span></code>, <code class="docutils literal"><span class="pre">cycling-road</span></code>, <code class="docutils literal"><span class="pre">cycling-safe</span></code>, <code class="docutils literal"><span class="pre">cycling-mountain</span></code>, <code class="docutils literal"><span class="pre">cycling-tour</span></code>, <code class="docutils literal"><span class="pre">foot-walking</span></code>, <code class="docutils literal"><span class="pre">foot-hiking</span></code> and <code class="docutils literal"><span class="pre">wheelchair</span></code>.</td>
.. 	</tr>
.. 	<tr class="row-even"><td><code class="docutils literal"><span class="pre">preference</span></code></td>
.. 	<td>Specifies the routing preference. Values are <code class="docutils literal"><span class="pre">fastest</span></code>(<em>default</em>)/, <code class="docutils literal"><span class="pre">shortest</span></code> and <code class="docutils literal"><span class="pre">recommended</span></code>.</td>
.. 	</tr>
.. 	<tr class="row-odd"><td><code class="docutils literal"><span class="pre">units</span></code></td>
.. 	<td>Specifies the distance unit . Values are <code class="docutils literal"><span class="pre">m</span></code>(meters)(<em>default</em>)/<code class="docutils literal"><span class="pre">km</span></code>(kilometers)/<code class="docutils literal"><span class="pre">mi</span></code>(miles).</td>
.. 	</tr>
.. 	<tr class="row-even"><td><code class="docutils literal"><span class="pre">language</span></code></td>
.. 	<td>Language for the route instructions. <code class="docutils literal"><span class="pre">en</span></code>(<em>default</em>),``de`` , <code class="docutils literal"><span class="pre">ru</span></code>.. .</td>
.. 	</tr>
.. 	<tr class="row-odd"><td><code class="docutils literal"><span class="pre">geometry</span></code></td>
.. 	<td>Specifies whether to return geometry or not. Default is <code class="docutils literal"><span class="pre">True</span></code>.</td>
.. 	</tr>
.. 	<tr class="row-even"><td><code class="docutils literal"><span class="pre">geometry_format</span></code></td>
.. 	<td>Sets the format of a returned geometry. <a class="reference external" href="link">polyline</a> , <a class="reference external" href="https://developers.google.com/maps/documentation/utilities/polylinealgorithm">encodedpolyline</a>(<em>default</em>) or <a class="reference external" href="http://geojson.org/geojson-spec.html#linestring">geojson</a>.</td>
.. 	</tr>
.. 	<tr class="row-odd"><td><code class="docutils literal"><span class="pre">instructions</span></code></td>
.. 	<td>Specifies whether to return instructions or not. Default is <code class="docutils literal"><span class="pre">True</span></code>.</td>
.. 	</tr>
.. 	<tr class="row-even"><td><code class="docutils literal"><span class="pre">prettify_instructions</span></code></td>
.. 	<td>Specifies whether to returen more verbose instructions or not. Default is <code class="docutils literal"><span class="pre">False</span></code>.</td>
.. 	</tr>
.. 	<tr class="row-odd"><td><code class="docutils literal"><span class="pre">elevation</span></code></td>
.. 	<td>Specifies whether to return elevation values for points or not. Default is <code class="docutils literal"><span class="pre">False</span></code>.</td>
.. 	</tr>
.. 	<tr class="row-even"><td><code class="docutils literal"><span class="pre">extra_info</span></code><span> </span> <a class="fa fa-link" href="#extra-info"></a></td>
.. 	<td>Pipe separated List of desired additional information. Values are <code class="docutils literal"><span class="pre">gradients</span></code>, <code class="docutils literal"><span class="pre">surface</span></code> and <code class="docutils literal"><span class="pre">waytypes</span></code>.</td>
.. 	</tr>
.. 	<tr class="row-odd"><td><code class="docutils literal"><span class="pre">options</span></code><span> </span> <a class="fa fa-link" href="#options"></a></td>
.. 	<td>Sets advanced options in <a class="reference external" href="http://json-schema.org/">json schema</a>. Add json as string: <code class="docutils literal"><span class="pre">&quot;{...}&quot;</span></code>.</td>
.. 	</tr>
.. 	</tbody>
.. 	</table>

+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter                             | Description                                                                                                                                                                                                                                      |
+=======================================+==================================================================================================================================================================================================================================================+
| ``coordinates``                       | Pipe separated List of ``longitude,latitude`` coordinates visited in order.                                                                                                                                                                      |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``profile``                           | Specifies the routing profile. Values are ``driving-car``, ``driving-hgv``, ``cycling-regular``, ``cycling-road``, ``cycling-safe``, ``cycling-mountain``, ``cycling-tour``, ``foot-walking``, ``foot-hiking`` and ``wheelchair``.               |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``preference``                        | Specifies the routing preference. Values are ``fastest``\ (*default*), ``shortest`` and ``recommended``.                                                                                                                                         |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``units``                             | Specifies the distance unit . Values are ``m``\ (meters, *default*) , ``km``\ (kilometers) or ``mi``\ (miles).                                                                                                                                   |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``language``                          | Language for the route instructions. We currently support ``en``\ (english - *default*), ``de``\ (german), ``ru``\ (russian), ``es``\ (spanish) and ``cn``\ (chinese), .                                                                         |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``geometry``                          | Specifies whether to return geometry or not (*default is* ``True``).                                                                                                                                                                             |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``geometry_format``                   | Sets the format of a returned geometry. `polyline <link>`__ , `encodedpolyline <https://developers.google.com/maps/documentation/utilities/polylinealgorithm>`__\ (*default*) or `geojson <http://geojson.org/geojson-spec.html#linestring>`__\. |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``instructions``                      | Specifies whether to return instructions or not (*default is ``True``*).                                                                                                                                                                         |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``prettify_instructions``             | Specifies whether to returen more verbose instructions or not (*default is* ``False``).                                                                                                                                                          |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``elevation``                         | Specifies whether to return elevation values for points or not (*default is* ``False``).                                                                                                                                                         |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``extra_info`` :ref:`\# <extra_info>` | Pipe separated List of desired additional information. Values are ``gradients``, ``priorty``, ``surface`` and ``waytypes``.                                                                                                                      |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``options`` :ref:`\# <options>`       | For advanced options formatted as `json <http://json-schema.org/>`_\. Add object as string: ``"{...}"``.                                                                                                                                         |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

For further information regarding the differences between routing profiles, distance units and preference settings please visit our :doc:`glossary </glossary>`.


.. _extra_info:

-----

Extra Information
-----------------

Encoding of the ``extra_info`` Values:

+---------------+---------------------------------------------------------------------+
| Value         | Description                                                         |
+===============+=====================================================================+
| ``gradients`` | Returns steepneess information for each step.                       |
+---------------+---------------------------------------------------------------------+
| ``surface``   | Returns surface information for each step.                          |
+---------------+---------------------------------------------------------------------+
| ``waytypes``  | Returns waytype information for each step.                          |
+---------------+---------------------------------------------------------------------+
| ``priority``  | Returns the suitability of a segment considering the chosen profile |
+---------------+---------------------------------------------------------------------+



.. _options:		

-----

Options
-------

The following settings may be appended as strings to the options object.

.. .. raw:: html

.. 	<table border="1" class="docutils">
.. 	<colgroup>
.. 	<col width="24%" />
.. 	<col width="76%" />
.. 	</colgroup>
.. 	<thead valign="bottom">
.. 	<tr class="row-odd"><th class="head">Options</th>
.. 	<th class="head">Descriptions</th>
.. 	</tr>
.. 	</thead>
.. 	<tbody valign="top">
.. 	<tr class="row-even"><td>&#8220;maximum_speed&#8221;</td>
.. 	<td>Sets the maximum travel speed in km/h.</td>
.. 	</tr>
.. 	<tr class="row-odd"><td>&#8220;avoid_features&#8221;<span> </span> <a class="fa fa-link" href="#avoid"></a></td>
.. 	<td>Pipe seperated list of features to avoid. <code class="docutils literal"><span class="pre">&quot;hills|ferries|...&quot;</span></code></td>
.. 	</tr>
.. 	<tr class="row-even"><td>&#8220;vehicle_type&#8221;<span> </span> <!--<a class="fa fa-link" href="#mode">--></a></td>
.. 	<td>Specifies the heavy vehicle mode of the <code class="docutils literal">driving-hgv</code>profile. Values are <code class="docutils literal">&#8220;hgv&#8221;</code> and <code class="docutils literal">&#8220;bus&#8221;</code>.</td>
.. 	</tr>
.. 	<tr class="row-odd"><td>&#8220;profile_params&#8221;<span> </span> <a class="fa fa-link" href="#vehparam"></a></td>
.. 	<td>Specifies hgv, bicycle or wheelchair specific profile settings.</td>
.. 	</tr>
.. 	<tr class="row-even"><td>&#8220;avoid_polygons&#8221;</td>
.. 	<td>Depicts areas to be avoided within the route, formatted as <a class="reference external" href="http://geojson.org/geojson-spec.html#id4">geojson polygon</a> or <a class="reference external" href="http://geojson.org/geojson-spec.html#id7">geojson multipolygon</a>.</td>
.. 	</tr>
.. 	</tbody>
.. 	</table>

+-----------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Options                                 | Descriptions                                                                                                                                                                                      |
+=========================================+===================================================================================================================================================================================================+
| ``maximum_speed``                       | Specifies a maximum travel speed in km/h.                                                                                                                                                         |
+-----------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``avoid_features`` :ref:`\# <avoid>`    | Pipe seperated list of features to avoid. ``hills|ferries|...``                                                                                                                                   |
+-----------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``vehicle_type``                        | Specifies the vehicle type.                                                                                                                                                                       |
+-----------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``profile_params`` :ref:`\# <proparam>` | Specifies vehicle parameters.                                                                                                                                                                     |
+-----------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``avoid_polygons``                      | Comprises areas to be avoided for the route. Formatted as `geojson polygon <http://geojson.org/geojson-spec.html#id4>`__ or `geojson multipolygon <http://geojson.org/geojson-spec.html#id7>`__\. |
+-----------------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. attention:: The available parameters for ``avoid_features`` and ``profile_params`` may differ according to the selected routing profile.

.. _option_examples:

-----

Options Examples
<<<<<<<<<<<<<<<<

.. hidden-code-block:: json
	:starthidden: True
	:label: - HGV example

	{
	    "maximum_speed": 120,
	    "avoid_features": "tollways|tunnels",
	    "vechile_type": "hgv",
	    "profile_params": {
	        "length": 30,
	        "width": 30,
	        "height": 3,
	        "axleload": 4,
	        "weight": 3,
	        "hazmat": true,
	    }
	}

.. hidden-code-block:: json
	:starthidden: True
	:label: - Cycling example

	{
	    "maximum_speed": 18,
	    "avoid_features": "hills|unpavedroads",
	    "profile_params": {
	        "difficulty_level": 2,
	        "maximum_gradient": 13
	    },
	    "avoid_polygons": {  
	        "type": "Polygon",
	        "coordinates": [
	            [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ]
	     ]}
	}

.. hidden-code-block:: json
	:starthidden: True
	:label: - Wheelchair example

	{
	    "avoid_features": "hills|ferries|steps",
	    "profile_params": {
	        "surface_type": "cobblestone:flattened",
	        "track_type": "grade1",
	        "smoothness_type": "good",
	        "maximum_sloped_curb": 0.06,
	        "maximum_incline": 6,
	    }
	}

.. _avoid:

-----

Avoid Features
<<<<<<<<<<<<<<

The following feature types provide means to avoid certain objects along your route:

+------------------+----------------------------------------------------------+
| Parameter        | Available For                                            |
+==================+==========================================================+
| ``highways``     | ``driving-*``                                            |
+------------------+----------------------------------------------------------+
| ``tollways``     | ``driving-*``                                            |
+------------------+----------------------------------------------------------+
| ``ferries``      | ``driving-*``, ``cycling-*``, ``foot-*``, ``wheelchair`` |
+------------------+----------------------------------------------------------+
| ``tunnels``      | ``driving-*``                                            |
+------------------+----------------------------------------------------------+
| ``pavedroads``   | ``driving-*``, ``cycling-*``                             |
+------------------+----------------------------------------------------------+
| ``unpavedroads`` | ``driving-*``, ``cycling-*``                             |
+------------------+----------------------------------------------------------+
| ``tracks``       | ``driving-*``                                            |
+------------------+----------------------------------------------------------+
| ``fords``        | ``driving-*``, ``cycling-*``, ``foot-*``                 |
+------------------+----------------------------------------------------------+
| ``steps``        | ``cycling-*``, ``foot-*``, ``wheelchair``                |
+------------------+----------------------------------------------------------+
| ``hills``        | ``cycling-*``, ``foot-*``                                |
+------------------+----------------------------------------------------------+

.. | ``bridges``        | ``cycling-regular``, ``foot-walking``                            |
.. +--------------------+--------------------------------------------------------+
.. | ``borders``        | ``cycling-regular``, ``foot-walking``                            |
.. +--------------------+--------------------------------------------------------+

.. .. _type:

.. -----

.. Vehicle Type
.. <<<<<<<<<<<<

.. _proparam:

-----

Profile Parameters
<<<<<<<<<<<<<<<<<<


For the ``driving-hgv`` profile we offer the following vehicle specifications to customize the route:

+--------------+---------------------------------------------------------------------------------------------------------------------------------------+
| Parameter    | Description                                                                                                                           |
+==============+=======================================================================================================================================+
| ``length``   | Specifies length restriction in meters.                                                                                               |
+--------------+---------------------------------------------------------------------------------------------------------------------------------------+
| ``width``    | Specifies width restriction in meters.                                                                                                |
+--------------+---------------------------------------------------------------------------------------------------------------------------------------+
| ``height``   | Specifies height restriction in meters.                                                                                               |
+--------------+---------------------------------------------------------------------------------------------------------------------------------------+
| ``axleload`` | Specifies axleload restriction in tons.                                                                                               |
+--------------+---------------------------------------------------------------------------------------------------------------------------------------+
| ``weight``   | Specifies weight restriction in tons.                                                                                                 |
+--------------+---------------------------------------------------------------------------------------------------------------------------------------+
| ``hazmat``   | Specifies whether to use appropriate routing for delivering hazardous goods and avoiding water protected areas. Default is ``false``. |
+--------------+---------------------------------------------------------------------------------------------------------------------------------------+

-----

For the ``cycling-*`` profiles we offer the following fitness parameters to individualize the route:

+----------------------+----------------------------------------------------------------------------------------------+
| Value                | Description                                                                                  |
+======================+==============================================================================================+
| ``difficulty_level`` | Specifies the fitness level. ``0`` = Novice, ``1`` = Moderate, ``2`` = Amateur, ``3`` = Pro. |
+----------------------+----------------------------------------------------------------------------------------------+
| ``maximum_gradient`` | Specifies the maximum route steepness in percent. Values range from ``1`` to ``15``.         |
+----------------------+----------------------------------------------------------------------------------------------+

.. attention:: The ``maximum_gradient`` parameter can only be set if ``hills`` are avoided or ``difficulty_level`` is defined. Also you can only use ``difficulty_level`` or avoid ``hills`` at a time.

-----

For the ``wheelchair`` profile we offer the following filters to individualize the route:

+-------------------------+----------------------------------------------------------------------------------------------------------------------------------------+
| Parameter               | Description                                                                                                                            |
+=========================+========================================================================================================================================+
| ``surface_type``        | Specifies the `surface type <http://wiki.openstreetmap.org/wiki/Key:surface>`__. Default is ``"cobblestone:flattened"``. (what values) |
+-------------------------+----------------------------------------------------------------------------------------------------------------------------------------+
| ``track_type``          | Specifies the `grade <http://wiki.openstreetmap.org/wiki/Key:tracktype>`__ of the route. Default is ``"grade1"``                       |
+-------------------------+----------------------------------------------------------------------------------------------------------------------------------------+
| ``smoothness_type``     | Specifies the `smoothness <http://wiki.openstreetmap.org/wiki/Key:smoothness>`__ of the route. Default is ``"good"``                   |
+-------------------------+----------------------------------------------------------------------------------------------------------------------------------------+
| ``maximum_sloped_curb`` | Specifies the maximum height of the sloped curb in meters. Values are ``0.03``, ``0.06``\ *(default)*, ``0.1`` or ``any``              |
+-------------------------+----------------------------------------------------------------------------------------------------------------------------------------+
| ``maximum_incline``     | Specifies the maximum incline as a percentage. ``3``, ``6``\ *(default)*, ``10``, ``15`` or ``any``                                    |
+-------------------------+----------------------------------------------------------------------------------------------------------------------------------------+

.. _r_response:

-----

Response
++++++++

The routing response consists of several components and is structured into **summary**, **geometry_format**, **bbox**, **geometry**, **segments** and **way_points** for each route. By default it also includes the :ref:`meta information<meta_info>`\.

.. _routes:

------

Routes
------

+---------------------+-------------------------------------------------------------------------------------------------------------------------------+
| Parameter           | Content                                                                                                                       |
+=====================+===============================================================================================================================+
| ``summary``         | Contains total duration\ *(in seconds)*, route distance\ *(in* ``units`` *)* and actual distance\ *(in meters)* of the route. |
+---------------------+-------------------------------------------------------------------------------------------------------------------------------+
| ``geometry_format`` | Contains the defined :ref:`geometry format <routing_param>`.                                                                  |
+---------------------+-------------------------------------------------------------------------------------------------------------------------------+
| ``bbox``            | Contains the `minimum bounding box <https://en.wikipedia.org/wiki/Minimum_bounding_box>`__ of the route.                      |
+---------------------+-------------------------------------------------------------------------------------------------------------------------------+
| ``geometry``        | Contains the geometry in the defined :ref:`geometry format<routings>`.                                                        |
+---------------------+-------------------------------------------------------------------------------------------------------------------------------+
| ``segments``        | List containing the :ref:`segments<segments>` and its correspoding steps which make up the route.                             |
+---------------------+-------------------------------------------------------------------------------------------------------------------------------+
| ``way_points``      | List containing the indices of way points corresponding to the ``geometry``.                                                  |
+---------------------+-------------------------------------------------------------------------------------------------------------------------------+

.. _segments:

------

Segments
--------

:duration: Contains the duration of the segment in seconds.
:distance: Contains the distance of the segment in ``units``.
:steps: List containing the specific :ref:`steps<steps>` the segment consists of.

.. _steps:

------

Steps
-----

+-----------------+-------------------------------------------------------------------------------------------------+
| Parameter       | Description                                                                                     |
+=================+=================================================================================================+
| ``duration``    | The duration for the step in seconds.                                                           |
+-----------------+-------------------------------------------------------------------------------------------------+
| ``distance``    | The distance for the step in meters.                                                            |
+-----------------+-------------------------------------------------------------------------------------------------+
| ``instruction`` | The routing instruction text for the step.                                                      |
+-----------------+-------------------------------------------------------------------------------------------------+
| ``type``        | The :ref:`instruction action <ins_type>` for symbolisation purposes.                            |
+-----------------+-------------------------------------------------------------------------------------------------+
| ``way_points``  | List containing the indices of the steps start- and endpoint corresponding to the ``geometry``. |
+-----------------+-------------------------------------------------------------------------------------------------+

.. _ins_type:

------

Instruction Types
<<<<<<<<<<<<<<<<

+-------+------------------+
| Value | Encoding     	   |
+=======+==================+
| ``0`` | Left         	   |
+-------+------------------+
| ``1`` | Right            |
+-------+------------------+
| ``2`` | Sharp left       |
+-------+------------------+
| ``3`` | Sharp right      |
+-------+------------------+
| ``4`` | Slight left      |
+-------+------------------+
| ``5`` | Slight right     |
+-------+------------------+
| ``6`` | Straight         |
+-------+------------------+
| ``7`` | Roundabout       |
+-------+------------------+


.. Response Values
.. +++++++++++++++

.. This section depicts the encoding for surfaces, waytypes and gradients.
 
.. Surfaces Encoding
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

..  Waytypes Encoding
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

.. Gradients Encoding
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

The following example routes from coordinate ``8.690614,49.38365`` via ``8.7007,49.411699`` to ``8.7107,49.45169`` using the ``cycling-regular`` profile::

	hostname/routing-test?profile=cycling-regular&coordinates=8.690614,49.38365|8.7007,49.411699|8.7107,49.45169&api_key=api-key

The resulting route has two segments with multiple steps:

.. hidden-code-block:: json
	:starthidden: True
	:label: Toggle Example

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

.. Currently we are not supporting error coding. If your route couldn't be computed the API will return an empty object: ::


.. In that case there aren't any roads in the vicinity of the start and endpoint. Please try to place your points closer to the road network.

.. _geocodings:

------

Geocoding Service
>>>>>>>>>>>>>>>>>

We distinguish between `geocoding <https://en.wikipedia.org/wiki/Geocoding>`__ and `reverse geocoding <https://en.wikipedia.org/wiki/Reverse_geocoding>`__ depending on your input. 

The `geocoding <https://en.wikipedia.org/wiki/Geocoding>`__ endpoint uses ``/geocode?`` as the request action.

.. _gc:

-----

Geocoding
+++++++++

A `geocoding <https://en.wikipedia.org/wiki/Geocoding>`__ request a returns a `GeoJSON <http://geojson.org/geojson-spec.html>`__ formatted list of objects corresponding to the search input.

Query Parameters
----------------

+-----------+-------------------------------------------------------------------------------------------------+
| Parameter | Description                                                                                     |
+===========+=================================================================================================+
| ``query`` | Name of location, street address or postal code.                                                |
+-----------+-------------------------------------------------------------------------------------------------+
| ``lang``  | Sets the language of the response. Available are ``de``, ``en``\ *(default)*, ``fr`` and ``it`` |
+-----------+-------------------------------------------------------------------------------------------------+
| ``limit`` | Specifies the maximum number of responses. Default is set to ``20``.                            |
+-----------+-------------------------------------------------------------------------------------------------+

 
.. _gc_response:

-----

Response
--------

The `geocoding <https://en.wikipedia.org/wiki/Geocoding>`__ result contains as many features (if they exist) as the ``limit`` parameter was set to. It also contains the standard :ref:`meta information<meta_info>`.

:geometry: Contains the coordinates and the geometry ``type`` which is a ``Point``.
:type: Specifies the JSON feature type.
:properties: Contains the tag information of the point.

.. _gc_example:

-----

The following geocoding request searches for ``Berlin`` with a maximum of ``5`` response objects::

	hostname/geocoding?format=json&query=Berlin&limit=5&api_key=api-key

As a response you will obtain the following JSON file with exactly 5 matches:

.. hidden-code-block:: json
	:starthidden: True
	:label: Toggle Example

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

As a result of a `reverse geocoding <https://en.wikipedia.org/wiki/Reverse_geocoding>`__ request you will obtain one match (if it exists), namely the next enclosing object with an address tag which surrounds the given coordinate.

Query Parameters
----------------

+--------------+----------------------------------------------------------------------------------------+
| Parameter    | Description                                                                            |
+==============+========================================================================================+
| ``location`` | ``Longitude,Latitude`` of the coordinate.                                              |
+--------------+----------------------------------------------------------------------------------------+
| ``lang``     | Language of the response. Available are ``de``, ``en``\ *(default)*, ``fr`` and ``it`` |
+--------------+----------------------------------------------------------------------------------------+
| ``limit``    | Specifies the maximum number of responses. Set to ``1`` for now.                       |
+--------------+----------------------------------------------------------------------------------------+

.. _rgc_response:

-----

Response
--------

The reverse geocoding result contains one feature (if it exists) as well as the :ref:`meta information<meta_info>` by default.

:geometry: Contains the coordinate and the geometry ``type`` which is ``Point``.
:type: Specifies the JSON feature type.
:properties: Contains the ``distance`` between the input location and the result point, the ``accuracy_score`` as well as the tag information of the point.

.. hint:: The ``accuracy_score`` is based on the ``distance``. The closer a result is to the queried point, the higher the score.

.. table for score encoding ?

-----

The following example reverse geocodes the location ``13.239515,52.514679``::

	hostname/geocoding-test?format=json&location=13.239515,52.514679&api_key=key

Resulting in one feature response:

.. hidden-code-block:: json
	:starthidden: True
	:label: Toggle Example

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

.. _isos:

-----

Isochrones Service
>>>>>>>>>>>>>>>>>>

The Isochrone Service supports time and distance analyses for one single or multiple locations. You may also specify the isochrone interval or provide multiple exact isochrone range values. This service allows the same range of profile options listed in the :ref:`ORS Routing<options>` section which help you to further customize your request to obtain a more detailed reachability area :ref:`response <aa_response>`. The isochrones endpoint uses ``/analyse?`` as the request action.

Query Parameters
++++++++++++++++

.. .. raw:: html

.. 	<table border="1" class="docutils">
.. 	<colgroup>
.. 	<col width="15%" />
.. 	<col width="85%" />
.. 	</colgroup>
.. 	<thead valign="bottom">
.. 	<tr class="row-odd"><th class="head">Parameter</th>
.. 	<th class="head">Description</th>
.. 	</tr>
.. 	</thead>
.. 	<tbody valign="top">
.. 	<tr class="row-even"><td><code class="docutils literal"><span class="pre">locations</span></code></td>
.. 	<td>List of pipe seperated <code class="docutils literal"><span class="pre">longitude,latitude</span></code> coordinates.</td>
.. 	</tr>
.. 	<tr class="row-odd"><td><code class="docutils literal"><span class="pre">range_type</span></code></td>
.. 	<td><code class="docutils literal"><span class="pre">time</span></code><em>(default)</em> for isochrones or <code class="docutils literal"><span class="pre">distance</span></code> for equidistants.</td>
.. 	</tr>
.. 	<tr class="row-even"><td><code class="docutils literal"><span class="pre">range</span></code><span> </span> <a class="fa fa-link" href="#range"></a></td>
.. 	<td>Maximum range <code class="docutils literal"><span class="pre">value</span></code> of the analysis in <em>seconds</em> for time and <em>meters</em> for distance. Alternatively a comma separated list of specific single range values.</td>
.. 	</tr>
.. 	<tr class="row-odd"><td><code class="docutils literal"><span class="pre">interval</span></code></td>
.. 	<td>Interval of isochrones or equidistants for one <code class="docutils literal"><span class="pre">range</span></code> value. <code class="docutils literal"><span class="pre">value</span></code> in <em>seconds</em> for time and <em>meters</em> for distance.</td>
.. 	</tr>
.. 	<tr class="row-even"><td><code class="docutils literal"><span class="pre">units</span></code><span> </span> <a class="fa fa-link" href="#units"></a></td>
.. 	<td>Unit format. <code class="docutils literal"><span class="pre">m</span></code><em>(default)</em>, <code class="docutils literal"><span class="pre">km</span></code> or <code class="docutils literal"><span class="pre">mi</span></code> for <code class="docutils literal"><span class="pre">distance</span></code>. <code class="docutils literal"><span class="pre">s</span></code> for <code class="docutils literal"><span class="pre">time</span></code>.</td>
.. 	</tr>
.. 	<tr class="row-odd"><td><code class="docutils literal"><span class="pre">location_type</span></code></td>
.. 	<td><code class="docutils literal"><span class="pre">start</span></code> treats the location(s) as starting point, <code class="docutils literal"><span class="pre">destination</span></code> as goal.</td>
.. 	</tr>
.. 	<tr class="row-even"><td><code class="docutils literal"><span class="pre">profile</span></code></td>
.. 	<td>Profile used for the analysis. <code class="docutils literal"><span class="pre">driving-car</span></code><em>(default)</em>, <code class="docutils literal"><span class="pre">driving-hgv</span></code>, <code class="docutils literal"><span class="pre">cycling-road</span></code> , <code class="docutils literal"><span class="pre">cycling-mountain</span></code>, <code class="docutils literal"><span class="pre">cycling-tour</span></code>, <code class="docutils literal"><span class="pre">cycling-safe</span></code>, <code class="docutils literal"><span class="pre">foot-walking</span></code> and <code class="docutils literal"><span class="pre">foot-hiking</span></code>.</td>
.. 	</tr>
.. 	<tr class="row-odd"><td><code class="docutils literal"><span class="pre">attributes</span></code><span> </span> <a class="fa fa-link" href="#attr"></a></td>
.. 	<td>Values are <code class="docutils literal"><span class="pre">area</span></code> and <code class="docutils literal"><span class="pre">reachfactor</span></code>. Delimit with pipe for both.</td>
.. 	</tr>
.. 	<tr class="row-even"><td><code class="docutils literal"><span class="pre">api_key</span></code></td>
.. 	<td><code class="docutils literal"><span class="pre">your_api_key</span></code> is inserted within this parameter.</td>
.. 	</tr>
.. 	</tbody>
.. 	</table>

+---------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameter                       | Description                                                                                                                                                                                      |
+=================================+==================================================================================================================================================================================================+
| ``locations``                   | List of ``longitude,latitude`` coordinates delimited with pipe.                                                                                                                                  |
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
| ``attributes`` :ref:`\# <attr>` | Values are ``area`` and ``reachfactor``. Delimit with pipe for both.                                                                                                                             |
+---------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``options`` :ref:`\# <options>`       | For advanced options formatted as `json <http://json-schema.org/>`_\. Add object as string: ``"{...}"``.                                                                                                                                         |
+---------------------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. | ``calcmethod``    | Method of generating the Isochrones. At the moment only ``default``.                                                                                                                |
.. +-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

.. _range:

-----

Range
-----

There are three ways to use the range parameter:

:single range:  Returns one isochrone with the given range. ``range=value``
:with interval: Returns isochrones in ``interval`` gaps with ``range`` as outmost ring. ``range=value&interval=smaller_value``
:range list: Returns isochrones at the specified ranges. ``range=value_1,value_2,...,value_n``

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

:area:  Returns the area of each polygon in its feature :ref:`properties<aa_props>`.
:reachfactor:  Returns a reachability score between ``0`` and ``1``

.. note:: As the maximum reachfactor would be achieved by travelling as the crow flies at maximum speed in a vacuum without obstacles, naturally it can never be ``1``. The availability of motorways however produces a higher score over normal roads.

.. _aa_response:

-----

Response
++++++++

Every isochrone/equidistant will result in an object in the features-block. They will be sorted in groups for each location analysed (see ``group_index``) as well as from closest to furthest range within each group. The result contains the standard :ref:`meta information<meta_info>`\ by default.

:geometry: Contains the coordinates and the geometry ``type`` which is ``Polygon``.
:type: Specifies the JSON feature type.
:properties: Contains the ``center``, ``group_index`` and ``value`` parameter.

.. _aa_props:

+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------+
| Properties      | Description                                                                                                                             |
+=================+=========================================================================================================================================+
| ``area``        | The area of the polygon in square meters.                                                                                               |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------+
| ``reachfactor`` | The :ref:`reachability score <attr>`.                                                                                                   |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------+
| ``center``      | The coordinates of the specific analysis location.                                                                                      |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------+
| ``group_index`` | The id of the isochrone based on the position in the ``locations`` query-parameter. Every location comprises its own group of polygons. |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------+
| ``value``       | The range value of this isochrone/equidistant in seconds/meters.                                                                        |
+-----------------+-----------------------------------------------------------------------------------------------------------------------------------------+

.. attention:: Due to computational reasons we limit the total amount of received isochrones to 10 for each location.

-----

This analysis request for the location ``8.6984954,49.38092`` uses the ``driving-car`` profile and searches for accessibility in range ``500`` seconds with an interval ``200`` seconds::

	hostname/analyse?format=json&range=500&interval=200&locations=8.6984954,49.38092&profile=driving-car&api_key=api-key

The result supplies isochrones at ``200`` and ``400`` seconds and finally ``500`` seconds which corresponds to the ``range`` setting:

.. hidden-code-block:: json
	:starthidden: True
	:label: Toggle Example

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

.. _meta_info:

-----

Meta Information
>>>>>>>>>>>>>>>>


The format of your response for all service endpoints is `GeoJSON <http://geojson.org/geojson-spec.html>`__ formatted. 

Bbox
++++

The Bbox object depicts the values of the `minimum bounding box <https://en.wikipedia.org/wiki/Minimum_bounding_box>`__  enclosing all feature results as follows:


.. code-block:: json
	
	{
		"bbox": [
			minimum longitude,
			minimum latitude,
			maximum longitude,
			maximum latitude
		]
	}

------

Info
++++

The Info object summarizes your query settings.

+-------------+---------------------------------------------------------------+
| About       | Description                                                   |
+=============+===============================================================+
| ``service``     | API endpoint used. ``geocoding``, ``analysis`` or ``routing`` |
+-------------+---------------------------------------------------------------+
| ``query``       | Parameters that were specified in the query                   |
+-------------+---------------------------------------------------------------+
| ``attribution`` | Attribution for using our service                             |
+-------------+---------------------------------------------------------------+
| ``version``     | The ORS API version used for the request                      |
+-------------+---------------------------------------------------------------+
| ``timestamp``   | Unix timestamp of the precise request date                    |
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
