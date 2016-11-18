Application Programming Interfaces
==================================

The ORS API allows for programmatic access to our services. We offer a GET scheme for you to directly query the API which is described in the following section. Please note that the response currently follows the OpenLS standard.

#. `Routing API`_
#. `Geocoding API`_
#. `Accessibility Analysis API`_

------------

Routing API
------------

To routing endpoint is defined as follows::

 http://openls.geog.uni-heidelberg.de/route?

.. _par-ref:

The query parameters are added to the end of the endpoint with `query string encoding <https://en.wikipedia.org/wiki/Query_string>`. Hence the pattern for parameter usage is:

.. centered:: **&**\ ``parameter``\ **=**\ ``value``

We distinguish between two types of parameters:

:`Required parameters`_: These are required.
:`Optional parameters`_: These parameters are not necessary for a functional request.

.. _req-ref:

Required Parameters
+++++++++++++++++++

The following parameters are required for the routing service to respond. For a valid request we require at least a starting and an end point in the form ``long,lat`` as well as your API key. If no further parameters are defined the API will fall back on a default object. 

+-------------+------------------------------------------------------------------------------------+
| Parameter   | Description                                                                        |
+=============+====================================================================================+
| ``start``   | Pair of ``longitude,latitude`` coordinates used as the starting point of the route |
+-------------+------------------------------------------------------------------------------------+
| ``end``     | Pair of ``longitude,latitude`` coordinates used as the destination of the route    |
+-------------+------------------------------------------------------------------------------------+
| ``api_key`` | ``your_api_key`` is inserted in this parameter                                     |
+-------------+------------------------------------------------------------------------------------+

The Default Object
>>>>>>>>>>>>>>>>>>

If one of these Parameters isn't set, it will assume the below-mentioned default values.

+---------------+-------------+
| Parameter     | Value       |
+===============+=============+
| ``distunit``  | ``KM``      |
+---------------+-------------+
| ``routpref``  | ``Car``     |
+---------------+-------------+
| ``weighting`` | ``Fastest`` |
+---------------+-------------+

For further information regarding the specific routing profiles, distance units and weighting options please visit our :doc:`glossary </glossary>`.


Optional Parameters
+++++++++++++++++++

Parameters in this section are not required for a functional request, however these may contribute to the accuracy of your query. Some parameters only work with specific routing profiles. ``noStepd`` for example merely works with the **Pedestrian** or one of the **Bicycle** profiles. Please be aware which specific route preference you chose.


General Parameters
>>>>>>>>>>>>>>>>>>>>

+------------------+-----------------------------------------------------------------------------------------------------------+
| Parameter        | Description                                                                                               |
+==================+===========================================================================================================+
| ``via``          | Ampersand-separated list of ``longitude,latitude`` coordinate pairs visited in order                      |
+------------------+-----------------------------------------------------------------------------------------------------------+
| ``lang``         | Language for the route instructions. The default language is set to English ``en``.                       |
+------------------+-----------------------------------------------------------------------------------------------------------+
| ``distunit``     | Unit in which you want to view the distances in : ``km``\ (kilometers)\/``m``\ (meters)\/``mi``\ (miles). |
+------------------+-----------------------------------------------------------------------------------------------------------+
| ``routepref``    | Route profile for your course. Available profiles may be found in the `table`__ below.                    |
+------------------+-----------------------------------------------------------------------------------------------------------+
| ``instructions`` | For routing instructions in your chosen language set to ``True``.                                         |
+------------------+-----------------------------------------------------------------------------------------------------------+
| ``weighting``    | Type of route the algorithm chooses. Modes are ``Fastest`` (*default*), ``Shortest`` and ``Recommended``  |
+------------------+-----------------------------------------------------------------------------------------------------------+
| ``maxspeed``     | Maximum speed in km/h for the selected route profile e.g. ``maxspeed=10``.                                |
+------------------+-----------------------------------------------------------------------------------------------------------+

.. | ``useTMC``   | Set ``True`` to obtain traffic information from your route. |
.. +--------------+---------------------------------------------------------------------------+

..TODO: Add languages

__ routepref_

routepref
>>>>>>>>>

The parameter ``routepref`` points to the selected routing mode. Please note that there are additional route preferences for the ``Bicycle`` and a subtype list for the ``HeavyVehicle`` type.

+------------------+-------------------------------------------------------------------------------+
| Preference Value | Alternative Values                                                            |
+==================+===============================================================================+
| ``Car``          | \-                                                                            |
+------------------+-------------------------------------------------------------------------------+
| ``Pedestrian``   | \-                                                                            |
+------------------+-------------------------------------------------------------------------------+
| ``Bicycle``      | ``BicycleMTB``\/\ ``BicycleRacer``\/\ ``BicycleTouring``\/\ ``BicycleSafety`` |
+------------------+-------------------------------------------------------------------------------+
| ``Wheelchair``   | \-                                                                            |
+------------------+-------------------------------------------------------------------------------+
| ``HeavyVehicle`` | There is a subtype list for the HeavyVehicle profile                          |
+------------------+-------------------------------------------------------------------------------+
			

Avoidable Features Parameters 
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

The following feature types provide means to avoid certain objects along your route. Please be aware that these may be specific to your chosen route preference. Please note that avoidable parameters for alternative route preferences correspond to their parent profile. The default value is set to `False`. 

+--------------------+--------------------------------------------------------+
| Parameter          | Profiles                                               |
+====================+========================================================+
| ``noMotorways``    | ``Car``, ``HeavyVehicle``                              |
+--------------------+--------------------------------------------------------+
| ``noTollways``     | ``Car``, ``HeavyVehicle``                              |
+--------------------+--------------------------------------------------------+
| ``noTunnels``      | ``Car``, ``HeavyVehicle``                              |
+--------------------+--------------------------------------------------------+
| ``noPavedroads``   | ``Bicycle``                                            |
+--------------------+--------------------------------------------------------+
| ``noUnpavedroads`` | ``Car``, ``Bicycle``, ``HeavyVehicle``                 |
+--------------------+--------------------------------------------------------+
| ``noTracks``       | ``Car``, ``HeavyVehicle``                              |
+--------------------+--------------------------------------------------------+
| ``noFerries``      | ``Car``, ``Bicycle``, ``Pedestrian``, ``HeavyVehicle`` |
+--------------------+--------------------------------------------------------+
| ``noFords``        | ``Car``, ``Bicycle``, ``Pedestrian``, ``HeavyVehicle`` |
+--------------------+--------------------------------------------------------+
| ``noSteps``        | ``Bicycle``, ``Pedestrian``                            |
+--------------------+--------------------------------------------------------+


Bicycle Specific Parameters
>>>>>>>>>>>>>>>>>>>>>>>>>>>

For the ``Bicycle`` profiles we offer additional filters to finetune your route.

+---------------+------------------------------------------------------------------------------------------------------------+
| Parameter     | Description                                                                                                |
+===============+============================================================================================================+
| ``elevation`` | ``True`` to retrieve elevation information for each returned point in the response.                        |
+---------------+------------------------------------------------------------------------------------------------------------+
| ``surface``   | ``True`` to retrieve way surface information for your route.                                               |
+---------------+------------------------------------------------------------------------------------------------------------+
| ``noHills``   | ``True`` to steep gradients. You may either set this option or set the ``level`` parameter.                |
+---------------+------------------------------------------------------------------------------------------------------------+
| ``level``     | Corresponds to the fitness level. ``0`` = Novice, ``1`` = Moderate, ``2`` = Amateur, ``3`` = Pro.          |
+---------------+------------------------------------------------------------------------------------------------------------+
| ``steep``     | Which relates to the maximum steepness given as a percentage. The range of values is from ``1`` to ``15``. |
+---------------+------------------------------------------------------------------------------------------------------------+

The surface parameter provides decoded values for the surfacetype and the waytype.

.. attention:: The ``steep`` parameter can only be set if ``noHills`` or ``level`` is defined. Also you can only use ``noHills`` or ``level`` at a time.


HeavyVehicle Specific Parameters
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

For the ``HeavyVehicle`` profiles we offer additional filters to finetune your route according to specific vehicle options.

+--------------------+--------------------------------------------------------------------------------------------------------------------------+
| Parameter          | Description                                                                                                              |
+====================+==========================================================================================================================+
| ``haz``            | ``True`` for an appropriate routing while delivering hazardous goods and avoids water protected areas.                   |
+--------------------+--------------------------------------------------------------------------------------------------------------------------+
| ``value_weight``   | Maximum weight restriction in tons.                                                                                      |
+--------------------+--------------------------------------------------------------------------------------------------------------------------+
| ``value_height``   | Maximum height restriction in meters.                                                                                    |
+--------------------+--------------------------------------------------------------------------------------------------------------------------+
| ``value_width``    | Maximum width restriction in meters.                                                                                     |
+--------------------+--------------------------------------------------------------------------------------------------------------------------+
| ``value_length``   | Maximum length restriction in meters.                                                                                    |
+--------------------+--------------------------------------------------------------------------------------------------------------------------+
| ``value_axleload`` | Maximum axeload restriction in tons.                                                                                     |
+--------------------+--------------------------------------------------------------------------------------------------------------------------+
| ``subtype``        | Defines a HeavyVehicle subtype. ``hgv``\ (*default*), ``Agricultural``, ``Bus``, ``Delivery``, ``Foresty`` or ``Goods``. |
+--------------------+--------------------------------------------------------------------------------------------------------------------------+


.. _example-ref:

Examples
++++++++

The shortest version of a full functioning `query <http://openls.geog.uni-heidelberg.de/route?start=9.258506,49.240011&end=9.2556609,49.2397316&api_key=eb85f2a6a61aafaebe7e2f2a89b102f5>`__ would comprise the following parameters::

  http://openls.geog.uni-heidelberg.de/route?start=9.258506,49.240011&end=9.2556609,49.2397316&api_key=eb85f2a6a61aafaebe7e2f2a89b102f5	

.. needs revision

This example corresponds to a route for the route preference Car from a starting point to a destination with no direction-instructions. The distance values will be returned in kilometers and the route weight is set to `Shortest`. The response will be in the following format:

.. highlight:: xml

::

	<xls:XLS version="1.1" xsi:schemaLocation="http://www.opengis.net/xls http://schemas.opengis.net/ols/1.1.0/RouteService.xsd">
	 <xls:ResponseHeader xsi:type="xls:ResponseHeaderType"/>
	 <xls:Response xsi:type="xls:ResponseType" requestID="123456789" version="1.1" numberOfResponses="1">
	  <xls:DetermineRouteResponse xsi:type="xls:DetermineRouteResponseType">
	   <xls:RouteSummary>
	    <xls:TotalTime>PT16S</xls:TotalTime>
	    <xls:TotalDistance uom="KM" value="0.2"/>
        <xls:ActualDistance uom="KM" value="0.0"/>
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

.. highlight:: py

..
 Further examples (without response):


.. attention:: Parameters as well as values are `case sensitive`. The input order doesn't matter though. 

Response Values
+++++++++++++++

This is the encoding for the Surface and Waytype you will encounter in your response file if ``surface`` is set to ``True``.
 
Response Surfacetype List
>>>>>>>>>>>>>>>>>>>>>>>>>

+--------+------------------+
| Value  | Encoding         |
+========+==================+
| ``0``  | Unknown          |
+--------+------------------+
| ``1``  | Paved            |
+--------+------------------+
| ``2``  | Unpaved          |
+--------+------------------+
| ``3``  | Asphalt          |
+--------+------------------+
| ``4``  | Concrete         |
+--------+------------------+
| ``5``  | Cobblestone      |
+--------+------------------+
| ``6``  | Metal            |
+--------+------------------+
| ``7``  | Wood             |
+--------+------------------+
| ``8``  | Compacted Gravel |
+--------+------------------+
| ``9``  | Fine Gravel      |
+--------+------------------+
| ``10`` | Gravel           |
+--------+------------------+
| ``11`` | Dirt             |
+--------+------------------+
| ``12`` | Ground           |
+--------+------------------+
| ``13`` | Ice              |
+--------+------------------+
| ``14`` | Salt             |
+--------+------------------+
| ``15`` | Sand             |
+--------+------------------+
| ``16`` | Woodchips        |
+--------+------------------+
| ``17`` | Grass            |
+--------+------------------+
| ``18`` | Grass Paver      |
+--------+------------------+

Response Waytype List
>>>>>>>>>>>>>>>>>>>>>

+--------+--------------+
| Value  | Encoding     |
+========+==============+
| ``0``  | Unknown      |
+--------+--------------+
| ``1``  | State Road   |
+--------+--------------+
| ``2``  | Road         |
+--------+--------------+
| ``3``  | Street       |
+--------+--------------+
| ``4``  | Path         |
+--------+--------------+
| ``5``  | Track        |
+--------+--------------+
| ``6``  | Cycleway     |
+--------+--------------+
| ``7``  | Footway      |
+--------+--------------+
| ``8``  | Steps        |
+--------+--------------+
| ``9``  | Ferry        |
+--------+--------------+
| ``10`` | Construction |
+--------+--------------+

Response Steepness List
>>>>>>>>>>>>>>>>>>>>>>>

+--------+----------+
| Value  | Encoding |
+========+==========+
| ``-5`` |          |
+--------+----------+
| ``-4`` |          |
+--------+----------+
| ``-3`` |          |
+--------+----------+
| ``-2`` |          |
+--------+----------+
| ``-1`` |          |
+--------+----------+
| ``0``  | 0%       |
+--------+----------+
| ``1``  |          |
+--------+----------+
| ``2``  |          |
+--------+----------+
| ``3``  |          |
+--------+----------+
| ``4``  |          |
+--------+----------+
| ``5``  |          |
+--------+----------+


Errors
++++++

Currently we are not supporting an error coding. If your route could't be rendered the xml file will contain an error Message similar to this: ::

 <xls:ErrorList>
  <xls:Error errorCode="Unknown" severity="Error" locationPath="OpenLS Route Service - RSListener, Message: " message="Internal Service Exception: java.lang.Exception Internal Service Exception Message: Cannot find point 0: 20.38325080173755,14.721679687500002 ..."/>
 </xls:ErrorList>

In that case there aren't any roads in the vicinity of the start and endpoint. Please try to place your points closer to the road network.

Geocoding API
-------------

To geocoding endpoint is defined as follows::

 http://openls.geog.uni-heidelberg.de/geocode?

We distinguish between geocoding and reverse geocoding depending on your input. 

Geocoding Parameters
+++++++++++++++++++++++++++

A geocoding request returns a list of coordinates matching your search input.

+---------------------+--------------------------------------------------------+
| Parameter           | Description                                            |
+=====================+========================================================+
| ``FreeFormAddress`` | Name of location, street address or postal code.       |
+---------------------+--------------------------------------------------------+
| ``MaxResponse``     | Maximum number of responses. Default is set to ``20``. |
+---------------------+--------------------------------------------------------+
| ``api_key``         | ``your_api_key`` which is placed within this parameter |
+---------------------+--------------------------------------------------------+


Reverse Geocoding Parameters
++++++++++++++++++++++++++++

As a result of a reverse geocoding request you will always get exactly one match, namely the next enclosing object which surrounds the given coordinate.

+-------------+------------------------------------------------------------------------------------------------+
| Parameter   | Description                                                                                    |
+=============+================================================================================================+
| ``lon``     | ``Longitude`` of coordinate of interest.                                                       |
+-------------+------------------------------------------------------------------------------------------------+
| ``lat``     | ``Latitude`` of coordinate of interest.                                                        |
+-------------+------------------------------------------------------------------------------------------------+
| ``pos``     | Alternative and replaces the lat and lon parameter. ``Longitude Latitude`` of the coordinate.  |
+-------------+------------------------------------------------------------------------------------------------+
| ``lang``    | Language settings of reversed geocode response ``de`` (Deutsch), ``en`` (English)\ *(default)* |
+-------------+------------------------------------------------------------------------------------------------+
| ``api_key`` | ``your_api_key`` which is placed within this parameter                                         |
+-------------+------------------------------------------------------------------------------------------------+

.. _example-ref2:

Example
+++++++

The following example shows a `search request <http://openls.geog.uni-heidelberg.de/geocode?FreeFormAddress=Heidelberg,%20Mathematikon&MaxResponse=10&api_key=eb85f2a6a61aafaebe7e2f2a89b102f5>`__ for *Heidelberg, Mathematikon* with a maximum of 10 response objects:

:: 

	http://openls.geog.uni-heidelberg.de/geocode?FreeFormAddress=Heidelberg,%20Mathematikon&MaxResponse=10&api_key=eb85f2a6a61aafaebe7e2f2a89b102f5

As a response you will obtain the following xml file with exactly 3 matches:

.. highlight:: xml

::

	<xls:XLS version="1.1" xsi:schemaLocation="http://www.opengis.net/xls http://schemas.opengis.net/ols/1.1.0/LocationUtilityService.xsd">
	 <xls:ResponseHeader xsi:type="xls:ResponseHeaderType"/>
	 <xls:Response xsi:type="xls:ResponseType" requestID="123456789" version="1.1" numberOfResponses="1">
	  <xls:GeocodeResponse xsi:type="xls:GeocodeResponseType">
	   <xls:GeocodeResponseList numberOfGeocodedAddresses="3">
	    <xls:GeocodedAddress>
	     <gml:Point>
	      <gml:pos srsName="EPSG:4326">8.6754713 49.4184374</gml:pos>
	     </gml:Point>
	     <xls:Address countryCode="">
	      <xls:StreetAddress>
	       <xls:Building buildingName="Mathematikon" number="41-49"/>
	       <xls:Street officialName="Berliner Straße"/>
	      </xls:StreetAddress>
	      <xls:Place type="Country">Deutschland</xls:Place>
	      <xls:Place type="CountrySubdivision">Baden-Württemberg</xls:Place>
	      <xls:Place type="Municipality">Heidelberg</xls:Place>
	      <xls:PostalCode>69120</xls:PostalCode>
	     </xls:Address>
	     <xls:GeocodeMatchCode accuracy="1.0"/>
	    </xls:GeocodedAddress>
	    <xls:GeocodedAddress>
	     <gml:Point>
	      <gml:pos srsName="EPSG:4326">8.6754603 49.4189858</gml:pos>
	     </gml:Point>
	   	 <xls:Address countryCode="">
	   	  <xls:StreetAddress>
	   	   <xls:Building buildingName="Mathematikon" number="41-47"/>
	   	   <xls:Street officialName="Berliner Straße"/>
	   	  </xls:StreetAddress>
	   	  <xls:Place type="Country">Deutschland</xls:Place>
	   	  <xls:Place type="CountrySubdivision">Baden-Württemberg</xls:Place>
	   	  <xls:Place type="Municipality">Heidelberg</xls:Place>
	   	  <xls:PostalCode>69120</xls:PostalCode>
	   	 </xls:Address>
	   	 <xls:GeocodeMatchCode accuracy="1.0"/>
	    </xls:GeocodedAddress>
	    <xls:GeocodedAddress>
	     <gml:Point>
	      <gml:pos srsName="EPSG:4326">8.6751818 49.4175293</gml:pos>
	     </gml:Point>
	    <xls:Address countryCode="">
	     <xls:StreetAddress>
	      <xls:Building buildingName="INF 205 Mathematikon" number="205"/>
	       <xls:Street officialName="Im Neuenheimer Feld"/>
	       </xls:StreetAddress>
	      <xls:Place type="Country">Deutschland</xls:Place>
	      <xls:Place type="CountrySubdivision">Baden-Württemberg</xls:Place>
	      <xls:Place type="Municipality">Heidelberg</xls:Place>
	      <xls:PostalCode>69120</xls:PostalCode>
	     </xls:Address>
	     <xls:GeocodeMatchCode accuracy="1.0"/>
	    </xls:GeocodedAddress>
	   </xls:GeocodeResponseList>
	  </xls:GeocodeResponse>
	 </xls:Response>
	</xls:XLS>

.. highlight:: py


The following example shows a `reverse geocoding example <http://openls.geog.uni-heidelberg.de/geocode?pos=13.4127 52.5220&api_key=eb85f2a6a61aafaebe7e2f2a89b102f5>`__ which will return exactly one object:

:: 

	http://openls.geog.uni-heidelberg.de/geocode?pos=13.4127 52.5220&api_key=eb85f2a6a61aafaebe7e2f2a89b102f5

As a result you will obtain the full address as well as the distance from the queried point to the center of the response object:

.. highlight:: xml

::

 <xls:XLS version="1.1" xsi:schemaLocation="http://www.opengis.net/xls http://schemas.opengis.net/ols/1.1.0/LocationUtilityService.xsd">
  <xls:ResponseHeader xsi:type="xls:ResponseHeaderType"/>
  <xls:Response xsi:type="xls:ResponseType" requestID="123456789" version="1.1" numberOfResponses="1">
   <xls:ReverseGeocodeResponse xsi:type="xls:ReverseGeocodeResponseType">
    <xls:ReverseGeocodedLocation>
     <gml:Point>
      <gml:pos srsName="EPSG:4326">13.4127725 52.5220133</gml:pos>
     </gml:Point>
     <xls:Address countryCode="">
      <xls:StreetAddress>
       <xls:Building buildingName="Brunnen der Völkerfreundschaft"/>
       <xls:Street officialName="Alexanderplatz"/>
      </xls:StreetAddress>
      <xls:Place type="Country">Germany</xls:Place>
      <xls:Place type="CountrySubdivision">Berlin</xls:Place>
      <xls:Place type="Municipality">Berlin</xls:Place>
      <xls:PostalCode>10178</xls:PostalCode>
     </xls:Address>
     <xls:SearchCentreDistance uom="M" value="8.2"/>
    </xls:ReverseGeocodedLocation>
   </xls:ReverseGeocodeResponse>
  </xls:Response>
 </xls:XLS>

.. highlight:: py

--------

Accessibility Analysis API
--------------------------

To accessibility analysis endpoint is defined as follows::

 http://openls.geog.uni-heidelberg.de/analyse?

Parameters
++++++++++

 As minimum requirements this endpoint will need the position and api_key parameters. There are default values for the remaining parameters. 

+---------------------+---------------------------------------------------------------------------------------------------------+
| Parameter           | Description                                                                                             |
+=====================+=========================================================================================================+
| ``position``        | Pair of ``longitude,latitude`` coordinates for the specific point of interest.                          |
+---------------------+---------------------------------------------------------------------------------------------------------+
| ``routePreference`` | The route preference which may be ``Car``(*default*), ``Pedestrian``, ``Bicycle`` and ``HeavyVehicle``. |
+---------------------+---------------------------------------------------------------------------------------------------------+
| ``method``          | Method of generating the Isochrones. This may either be ``RecursiveGrid``(*default*) or ``TIN``         |
+---------------------+---------------------------------------------------------------------------------------------------------+
| ``interval``        | Interval of isochrones in **seconds** e.g. ``300`` for 5 minutes. The default is set to ``300``.        |
+---------------------+---------------------------------------------------------------------------------------------------------+
| ``minutes``         | Maximum range of the analysis in **minutes** e.g. ``0-30``. The default is set to ``10``.               |
+---------------------+---------------------------------------------------------------------------------------------------------+
| ``api_key``         | ``your_api_key`` is inserted within this parameter.                                                     |
+---------------------+---------------------------------------------------------------------------------------------------------+

.. note:: The ``interval`` parameter must be equal or smaller than the ``minutes`` parameter. For a maximum range of ``minutes=30`` the maximum interval would be ``interval=1800``.

Example
+++++++

The `following example <http://openls.geog.uni-heidelberg.de/analyse?api_key=ee0b8233adff52ce9fd6afc2a2859a28&position=8.661367306640742,49.42859632294706&minutes=4&interval=120>`__ is rendered with the RecursiveGrid method and has a maximum range of 4 minutes with a 2 minute set interval: ::

 http://openls.geog.uni-heidelberg.de/analyse?api_key=ee0b8233adff52ce9fd6afc2a2859a28&position=8.661367306640742,49.42859632294706&minutes=4&interval=120

The result gives us two isochrones with a corresponding 2 minute distance: 

.. highlight:: xml

::

 <aas:AAS version="1.0" xsi:schemaLocation="http://www.geoinform.fh-mainz.de/aas D:/Schemata/AAS1.0/AccessibilityService.xsd">
  <aas:ResponseHeader xsi:type="aas:ResponseHeaderType"/>
  <aas:Response xsi:type="aas:ResponseType" requestID="00" version="1.0">
   <aas:AccessibilityResponse xsi:type="aas:AccessibilityResponseType">
    <aas:AccessibilitySummary>
     <aas:NumberOfLocations>0</aas:NumberOfLocations>
     <aas:BoundingBox srsName="EPSG:4326">
      <gml:pos>8.6501824 49.4192320</gml:pos>
      <gml:pos>8.6767241 49.4380287</gml:pos>
     </aas:BoundingBox>
    </aas:AccessibilitySummary>
    <aas:AccessibilityGeometry>
     <aas:Isochrone time="120.0">
      <aas:IsochroneGeometry area="1350947.14">
       <gml:Polygon srsName="EPSG:4326">
        <gml:exterior>
         <gml:LinearRing xsi:type="gml:LinearRingType">
          <gml:pos>8.6540978 49.4268832</gml:pos>
          <gml:pos>8.6559152 49.4268349</gml:pos>
          <gml:pos>8.6560450 49.4267997</gml:pos>
          <gml:pos>8.6577326 49.4262919</gml:pos>
          <gml:pos>8.6595499 49.4257842</gml:pos>
          <gml:pos>8.6613673 49.4263097</gml:pos>
          <gml:pos>8.6631847 49.4265321</gml:pos>
          <gml:pos>8.6650020 49.4264503</gml:pos>
          <gml:pos>8.6652847 49.4267997</gml:pos>
          <gml:pos>8.6650020 49.4271590</gml:pos>
          <gml:pos>8.6631847 49.4271306</gml:pos>
          <gml:pos>8.6625517 49.4285963</gml:pos>
          <gml:pos>8.6631847 49.4292839</gml:pos>
          <gml:pos>8.6644828 49.4303930</gml:pos>
          <gml:pos>8.6650020 49.4318902</gml:pos>
          <gml:pos>8.6668194 49.4320860</gml:pos>
          <gml:pos>8.6668876 49.4321896</gml:pos>
          <gml:pos>8.6668194 49.4323019</gml:pos>
          <gml:pos>8.6650020 49.4324214</gml:pos>
          <gml:pos>8.6631847 49.4333364</gml:pos>
          <gml:pos>8.6613673 49.4335090</gml:pos>
          <gml:pos>8.6602639 49.4339862</gml:pos>
          <gml:pos>8.6595499 49.4342429</gml:pos>
          <gml:pos>8.6592903 49.4339862</gml:pos>
          <gml:pos>8.6586413 49.4321896</gml:pos>
          <gml:pos>8.6577326 49.4320514</gml:pos>
          <gml:pos>8.6574530 49.4321896</gml:pos>
          <gml:pos>8.6559152 49.4326256</gml:pos>
          <gml:pos>8.6549925 49.4321896</gml:pos>
          <gml:pos>8.6540978 49.4310840</gml:pos>
          <gml:pos>8.6522805 49.4305053</gml:pos>
          <gml:pos>8.6522426 49.4303930</gml:pos>
          <gml:pos>8.6522523 49.4285963</gml:pos>
          <gml:pos>8.6522805 49.4283397</gml:pos>
          <gml:pos>8.6540978 49.4268832</gml:pos>
         </gml:LinearRing>
        </gml:exterior>
       </gml:Polygon>
      </aas:IsochroneGeometry>
     </aas:Isochrone>
     <aas:Isochrone time="240.0">
      <aas:IsochroneGeometry area="4859691.72">
       <gml:Polygon srsName="EPSG:4326">
        <gml:exterior>
         <gml:LinearRing xsi:type="gml:LinearRingType">
          <gml:pos>8.6540978 49.4249448</gml:pos>
          <gml:pos>8.6551932 49.4232064</gml:pos>
          <gml:pos>8.6559152 49.4229412</gml:pos>
          <gml:pos>8.6576791 49.4214098</gml:pos>
          <gml:pos>8.6577326 49.4209411</gml:pos>
          <gml:pos>8.6590199 49.4196131</gml:pos>
          <gml:pos>8.6595499 49.4192320</gml:pos>
          <gml:pos>8.6597900 49.4196131</gml:pos>
          <gml:pos>8.6613673 49.4208846</gml:pos>
          <gml:pos>8.6618216 49.4214098</gml:pos>
          <gml:pos>8.6631847 49.4225211</gml:pos>
          <gml:pos>8.6650020 49.4231652</gml:pos>
          <gml:pos>8.6668194 49.4229437</gml:pos>
          <gml:pos>8.6686368 49.4225263</gml:pos>
          <gml:pos>8.6704541 49.4229737</gml:pos>
          <gml:pos>8.6709085 49.4232064</gml:pos>
          <gml:pos>8.6709518 49.4250030</gml:pos>
          <gml:pos>8.6704541 49.4254522</gml:pos>
          <gml:pos>8.6690911 49.4267997</gml:pos>
          <gml:pos>8.6704541 49.4283475</gml:pos>
          <gml:pos>8.6709085 49.4285963</gml:pos>
          <gml:pos>8.6709085 49.4303930</gml:pos>
          <gml:pos>8.6722715 49.4314771</gml:pos>
          <gml:pos>8.6738492 49.4303930</gml:pos>
          <gml:pos>8.6740889 49.4302177</gml:pos>
          <gml:pos>8.6759062 49.4300414</gml:pos>
          <gml:pos>8.6767241 49.4303930</gml:pos>
          <gml:pos>8.6759062 49.4312913</gml:pos>
          <gml:pos>8.6754642 49.4321896</gml:pos>
          <gml:pos>8.6740889 49.4335870</gml:pos>
          <gml:pos>8.6722715 49.4334913</gml:pos>
          <gml:pos>8.6704541 49.4326388</gml:pos>
          <gml:pos>8.6686368 49.4326388</gml:pos>
          <gml:pos>8.6672737 49.4339862</gml:pos>
          <gml:pos>8.6668194 49.4353473</gml:pos>
          <gml:pos>8.6650020 49.4354781</gml:pos>
          <gml:pos>8.6631847 49.4357157</gml:pos>
          <gml:pos>8.6630823 49.4357829</gml:pos>
          <gml:pos>8.6613673 49.4367160</gml:pos>
          <gml:pos>8.6601812 49.4375795</gml:pos>
          <gml:pos>8.6595499 49.4379548</gml:pos>
          <gml:pos>8.6577326 49.4380287</gml:pos>
          <gml:pos>8.6574963 49.4375795</gml:pos>
          <gml:pos>8.6562238 49.4357829</gml:pos>
          <gml:pos>8.6559152 49.4348589</gml:pos>
          <gml:pos>8.6540978 49.4344354</gml:pos>
          <gml:pos>8.6522805 49.4344354</gml:pos>
          <gml:pos>8.6504631 49.4344354</gml:pos>
          <gml:pos>8.6502350 49.4339862</gml:pos>
          <gml:pos>8.6501824 49.4321896</gml:pos>
          <gml:pos>8.6504631 49.4314551</gml:pos>
          <gml:pos>8.6515280 49.4303930</gml:pos>
          <gml:pos>8.6521979 49.4285963</gml:pos>
          <gml:pos>8.6522805 49.4282890</gml:pos>
          <gml:pos>8.6533423 49.4267997</gml:pos>
          <gml:pos>8.6540389 49.4250030</gml:pos>
          <gml:pos>8.6540978 49.4249448</gml:pos>
         </gml:LinearRing>
        </gml:exterior>
       </gml:Polygon>
      </aas:IsochroneGeometry>
     </aas:Isochrone>
    </aas:AccessibilityGeometry>
   </aas:AccessibilityResponse>
  </aas:Response>
 </aas:AAS>

.. highlight:: py

..
	------------
	Response Type
	--------------
	response type text
