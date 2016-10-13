Application Programming Interfaces
==================================

Instead of using the `ORS website <http://www.openrouteservice.org>`__ you can also request the Data via GET and will recieve an xml response.
Therefore you have to directly contact the respective :term:`API` of the tool you would like to use. You can either use the address line of your browser or do the request in your command line with curl.

#. `Routing API`_
#. `Geocoding API`_
#. `Accessibility Analysis API`_

------------

Routing API
------------

To do a direct routing request via GET you need to open up your query with::

 http://openls.geog.uni-heidelberg.de/route?

.. _par-ref:

After the **"?"** you have to add parameters with **"&"**. For the first parameter the **"&"** can be omitted. The value of the parameter is defined with a **"="**. Therefore the pattern for parameter usage is:

.. centered:: **&**\ ``parameter``\ **=**\ ``value``

If you don't get the picture, you can look at the :ref:`example-ref` below.

There are two types of parameters:

:`Required Parameters`_: They are required for the API to work.
:`Optional Parameters`_: These parameters are not necessary to get a functional request. But you can fine-tune your request through these.

.. _req-ref:

Required Parameters
+++++++++++++++++++

The following parameters are required for the api to work. For a valid request you need **every single parameter** of this table in your request-URL. You can omit the value if the parameter has a default value. The parameter will then be set to this default value. In the case of `via` there is no default value. If you don't want a stopover point just leave the parameter empty. For more information regarding the specific routing profiles please visit our :doc:`glossary </glossary>`.

+--------------------+------------------------------------------------------------------------------------------------------------+
| Parameter          | Description                                                                                                |
+====================+============================================================================================================+
| ``start``          | Pair of ``longitude,latitude`` coordinate used as starting point of the route                              |
+--------------------+------------------------------------------------------------------------------------------------------------+
| ``end``            | Pair of ``longitude,latitude`` coordinate used as destination of the route                                 |
+--------------------+------------------------------------------------------------------------------------------------------------+
| ``via``            | Ampersand-separated list of ``longitude,latitude`` coordinate pairs visited in order                       |
+--------------------+------------------------------------------------------------------------------------------------------------+
| ``lang``           | Language for the step by step instructions. ``en`` English or ``de`` German                                |
+--------------------+------------------------------------------------------------------------------------------------------------+
| ``distunit``       | Unit in which you want to view the distances in : ``KM``\ (kilometers)\/``M``\ (meters)\/``MI``\ (miles)   |
+--------------------+------------------------------------------------------------------------------------------------------------+
| ``routepref``      | Route profile for your course. Available profiles can be found in the `table`__ below.                     |
+--------------------+------------------------------------------------------------------------------------------------------------+
| ``instructions``   | For step by step instructions in your chosen language set ``True``. Default is ``False``                   |
+--------------------+------------------------------------------------------------------------------------------------------------+
| ``weighting``      | Type of route the algorithm chooses. Options are ``Fastest`` (*default*), ``Shortest`` and ``Recommended`` |
+--------------------+------------------------------------------------------------------------------------------------------------+
| ``noMotorways``    | Set ``True`` to avoid motorways. Default is ``False``                                                      |
+--------------------+------------------------------------------------------------------------------------------------------------+
| ``noTollways``     | Set ``True`` to avoid tollways. Default is ``False``                                                       |
+--------------------+------------------------------------------------------------------------------------------------------------+
| ``noUnpavedroads`` | Set ``True`` to avoid unpaved roads. Default is ``False``                                                  |
+--------------------+------------------------------------------------------------------------------------------------------------+
| ``noSteps``        | Set ``True`` to avoid steps. Default is ``False``                                                          |
+--------------------+------------------------------------------------------------------------------------------------------------+
| ``noFerries``      | Set ``True`` to avoid ferries. Default is ``False``                                                        |
+--------------------+------------------------------------------------------------------------------------------------------------+
| ``api_key``        | ``your_api_key`` is placed in this parameter                                                               |
+--------------------+------------------------------------------------------------------------------------------------------------+

__ routepref_

routepref
>>>>>>>>>

The parameter routepref contains all routepreferences. There are additional routepreferences for the Bicycle and the HeavyVehicle type.

+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Main Value       | Additional Values and Glossary Link                                                                                                                                        |
+==================+============================================================================================================================================================================+
| ``Car``          | :term:`Car`                                                                                                                                                                |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``Pedestrian``   | :term:`Pedestrian`                                                                                                                                                         |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``Bicycle``      | :term:`Bicycle`\/\ ``BicycleMTB``:term:`MTB`\/\ ``BicycleRacer``:term:`Racer`\/\ ``BicycleTouring``:term:`Touring`\/\ ``BicycleSafety``:term:`Safety`                      |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``Wheelchair``   | :term:`Wheelchair`                                                                                                                                                         |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``HeavyVehicle`` | :term:`HeavyVehicle`\/\ ``Goods``:term:`Goods`\/\ ``Agricultural``:term:`Agricultural`\/\ ``Bus``:term:`Bus`\/\ ``Foresty``:term:`Foresty`\/\ ``Delivery``:term:`Delivery` |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
					
.. note:: The only languages supported are English and German. There are other language packages available that are too difficult to maintain. You can request them and implement them yourself if you want to.


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



+--------------+---------------------------------------------------------------------------+
| Parameter    | Description                                                               |
+==============+===========================================================================+
| ``useTMC``   | ``True`` to use traffic information for your route. Default is ``False``  |
+--------------+---------------------------------------------------------------------------+
| ``maxspeed`` | Maximum speed in km/h for the selected route profile e.g. ``maxspeed=10`` |
+--------------+---------------------------------------------------------------------------+

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

This is a simple route for a car from starting point A (9.258506,49.240011) to destination B (9.2556609,49.2397316) with no direction-instructions. The measurement will be in kilometers, the weighting is `Shortest` and ferries, motorways, tollways, unpavedroads and steps will be considered. The result will be the following:

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

Further examples (without response):


.. attention:: Parameters as well as values are `case sensitive`. The input order doesn't matter though. 

Errors
++++++

Currently we are not supporting Error coding. If your route could't be rendered the xml file will contain an error Message similar to this: ::

 <xls:ErrorList>
  <xls:Error errorCode="Unknown" severity="Error" locationPath="OpenLS Route Service - RSListener, Message: " message="Internal Service Exception: java.lang.Exception Internal Service Exception Message: Cannot find point 0: 20.38325080173755,14.721679687500002 ..."/>
 </xls:ErrorList>

In that case there aren't any usable roads in the vicinity of the start and endpoints. You can try to place your points closer to existing data.

..
	<xls:ErrorList>
	      <xls:Error errorCode="Unknown" severity="Error" locationPath="OpenLS Route Service - RSListener, Message: " message="Internal Service Exception: java.lang.Exception
	Internal Service Exception Message: Cannot find point 0: 20.38325080173755,14.721679687500002
	 [Exception]org.freeopenls.routeservice.routing.Routing.doRouting(Routing.java:94)
	 [Exception]org.freeopenls.routeservice.documents.RequestXLSDocument.doRoutePlan(RequestXLSDocument.java:467)
	 [Exception]org.freeopenls.routeservice.documents.RequestXLSDocument.doRouteRequest(RequestXLSDocument.java:152)
	 [Exception]org.freeopenls.routeservice.RSListener.receiveCompleteRequest(RSListener.java:139)
	 [Exception]org.freeopenls.routeservice.RequestOperator.doOperation(RequestOperator.java:67)
	 [Exception]org.freeopenls.routeservice.RSServlet.doPost(RSServlet.java:125)
	 [Exception]javax.servlet.http.HttpServlet.service(HttpServlet.java:646)
	 [Exception]javax.servlet.http.HttpServlet.service(HttpServlet.java:727)
	 [Exception]org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:303)
	 [Exception]org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)
	 [Exception]org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
	 [Exception]org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)
	 [Exception]org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)
	 [Exception]org.freeopenls.servlet.filters.PiwikRequestFilter.doFilter(PiwikRequestFilter.java:82)
	 [Exception]org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)
	 [Exception]org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)
	 [Exception]org.freeopenls.servlet.filters.RequestRateThrottleFilter.doFilter(RequestRateThrottleFilter.java:125)
	 [Exception]org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)
	 [Exception]org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)
	 [Exception]org.freeopenls.servlet.filters.UserAuthenticationFilter.doFilter(UserAuthenticationFilter.java:113)
	 [Exception]org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:241)
	 [Exception]org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:208)
	 [Exception]org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:220)
	 [Exception]org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:122)
	 [Exception]org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:501)
	 [Exception]org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:171)
	 [Exception]org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:102)
	 [Exception]org.apache.catalina.valves.AccessLogValve.invoke(AccessLogValve.java:950)
	 [Exception]org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:116)
	 [Exception]org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:408)
	 [Exception]org.apache.coyote.http11.AbstractHttp11Processor.process(AbstractHttp11Processor.java:1040)
	 [Exception]org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:607)
	 [Exception]org.apache.tomcat.util.net.AprEndpoint$SocketWithOptionsProcessor.run(AprEndpoint.java:2379)
	 [Exception]java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)
	 [Exception]java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)
	 [Exception]org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61)
	 [Exception]java.lang.Thread.run(Thread.java:745)
	"/>
	    </xls:ErrorList>

-----------

Geocoding API
-------------

If you want to carry out either a normal geocoding or a reverse geocoding query via GET start your request with::

 http://openls.geog.uni-heidelberg.de/geocode?

Whether you get a normal or a reverse response depends on your input Parameters. The usage of the parameters is the same as for the :ref:`routing section <par-ref>`.


Normal Geocoding Parameters
+++++++++++++++++++++++++++

Returns a list of coordinates matching your search input.

+--------------------+-------------------------------------------------+
| Parameter          | Description                                     |
+====================+=================================================+
| ``FreeFormAdress`` | Name of location, street address or postal code |
+--------------------+-------------------------------------------------+
| ``MaxResponse``    | Maximum number of responses e.g. ``10``         |
+--------------------+-------------------------------------------------+
| ``api_key``        | ``your_api_key`` is placed in this parameter    |
+--------------------+-------------------------------------------------+


Reverse Geocoding Parameters
++++++++++++++++++++++++++++

As a result of a reverse geocoding request you will always get exactly one match. It is the next enclosing Object which surrounds the given coordinate. The MaxResponse parameter is still needed. (Will be fixed soon)

+-----------------+--------------------------------------------------------------------------------------+
| Parameter       | Description                                                                          |
+=================+======================================================================================+
| ``lon``         | ``Longitude`` of coordinate of interest                                              |
+-----------------+--------------------------------------------------------------------------------------+
| ``lat``         | ``Latitude`` of coordinate of interest                                               |
+-----------------+--------------------------------------------------------------------------------------+
| ``MaxResponse`` | ``1``                                                                                |
+-----------------+--------------------------------------------------------------------------------------+
| ``lang``        | Language of Reverse Geocode response ``de`` (Deutsch)\ *(default)*, ``en`` (English) |
+-----------------+--------------------------------------------------------------------------------------+
| ``api_key``     | ``your_api_key`` is placed in this parameter                                         |
+-----------------+--------------------------------------------------------------------------------------+

.. _example-ref2:

Example
+++++++

The following example covers a search request for *Heidelberg, Mathematikon* with a maximum of 10 responses:

:: 

	http://openls.geog.uni-heidelberg.de/geocode?FreeFormAdress=Heidelberg,%20Mathematikon&MaxResponse=10&api_key=eb85f2a6a61aafaebe7e2f2a89b102f5

As a result we get the following xml file with three matches:

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


For the reverse geocoding example we use the coordinates of the *"Brunnen der Völkerfreundschaft"* in Berlin:

:: 

	http://openls.geog.uni-heidelberg.de/geocode?lon=13.4127&lat=52.5220&MaxResponse=5&api_key=eb85f2a6a61aafaebe7e2f2a89b102f5

As result we end up at the right location and get the full address as well as the distance to the center of the object in which the point is located:

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


--------

Accessibility Analysis API
--------------------------

For an Accessibillity Analysis of a geographical position open your query with::

 http://openls.geog.uni-heidelberg.de/analyse?

The usage of the parameters is the same as for the :ref:`routing section <par-ref>`.

Parameters
++++++++++

+---------------------+------------------------------------------------------------------------------------------------+
| Parameter           | Description                                                                                    |
+=====================+================================================================================================+
| ``position``        | Pair of ``longitude,latitude`` coordinates for the point of interest                           |
+---------------------+------------------------------------------------------------------------------------------------+
| ``routePreference`` | Route profile of the AA. Options are ``Car``, ``Pedestrian``, ``Bicycle`` and ``HeavyVehicle`` |
+---------------------+------------------------------------------------------------------------------------------------+
| ``method``          | Method of generating the Isochrones. Can be ``RecursiveGrid`` or ``TIN``                       |
+---------------------+------------------------------------------------------------------------------------------------+
| ``interval``        | Interval of the Isochrones in **seconds** e.g. ``300`` for 5 minutes                           |
+---------------------+------------------------------------------------------------------------------------------------+
| ``minutes``         | Maximum range of the analysis in **minutes** e.g. ``0-30``                                     |
+---------------------+------------------------------------------------------------------------------------------------+
| ``api_key``         | ``your_api_key`` is placed in this parameter                                                   |
+---------------------+------------------------------------------------------------------------------------------------+

.. note:: The ``interval`` parameter has to be equal or smaller than the ``minutes`` parameter. For a maximum range of ``minutes=30`` the maximum interval would be ``interval=1800`` 

Example
+++++++

The following example is rendered with the RecursiveGrid method and has a maximum range of 4 minutes with a 2 minute interval: ::

 http://openls.geog.uni-heidelberg.de/analyse?api_key=ee0b8233adff52ce9fd6afc2a2859a28&position=8.661367306640742,49.42859632294706&minutes=4&routePreference=Car&method=RecursiveGrid&interval=120

The result gives us two rings with a 2 minute distance: ::

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
 
..
	------------
	Response Type
	--------------
	response type text
