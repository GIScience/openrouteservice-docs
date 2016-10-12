Application Programming Interfaces
==================================

Instead of using the `ORS website <http://www.openrouteservice.org>`__ you can also request the Data via GET in the form of an .gml file.
Therefore you have to directly contact the respective :term:`API` of the tool you would like to use.


------------

Routing API
------------

To do a direct routing request via GET you need to open up your URL with::

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
| ``routepref``      | Route profile for your course. Available profiles can be found in the `table <routepref>`_ below.          |
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

This is a simple route for a car from starting point A(9.258506,49.240011) to destination B(9.2556609,49.2397316) with no direction-instructions. The measurement will be in kilometers, the weighting is `shortest` and ferries, motorways, tollways, unpavedroads and steps will be considered. The result will be the following:

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

Further examples (without response):


.. attention:: Parameters as well as values are `case sensitive`. The input order doesn't matter though. 

Errors
++++++

Is there a list for the different possible errors?

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

If you want to carry out either a normal geocoding or a reverse geocoding query via GET start your query with::

 http://openls.geog.uni-heidelberg.de/geocode?

Whether you get a normal or a reverse response depends on your input Parameters. The usage of the parameters is the same as for the :ref:`routing section <par-ref>`.


Normal Geocoding Parameters
+++++++++++++++++++++++++++

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


+-----------------+--------------------------------------------------------------------------------------+
| Parameter       | Description                                                                          |
+=================+======================================================================================+
| ``lon``         | ``Longitude`` of coordinate of interest                                              |
+-----------------+--------------------------------------------------------------------------------------+
| ``lat``         | ``Latitude`` of coordinate of interest                                               |
+-----------------+--------------------------------------------------------------------------------------+
| ``MaxResponse`` | Maximum number of responses e.g. ``10``                                              |
+-----------------+--------------------------------------------------------------------------------------+
| ``lang``        | Language of Reverse Geocode response ``de`` (Deutsch)\ *(default)*, ``en`` (English) |
+-----------------+--------------------------------------------------------------------------------------+
| ``api_key``     | ``your_api_key`` is placed in this parameter                                         |
+-----------------+--------------------------------------------------------------------------------------+

.. _example-ref2:

Example
+++++++


:: 

	http://openls.geog.uni-heidelberg.de/geocode?FreeFormAdress=Heidelberg,%20Mathematikon&MaxResponse=10&api_key=eb85f2a6a61aafaebe7e2f2a89b102f5


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

:: 

	http://openls.geog.uni-heidelberg.de/geocode?lon=8.6754713&lat=49.4184374&MaxResponse=10&api_key=eb85f2a6a61aafaebe7e2f2a89b102f5


::

	<xls:XLS version="1.1" xsi:schemaLocation="http://www.opengis.net/xls http://schemas.opengis.net/ols/1.1.0/LocationUtilityService.xsd">
	 <xls:ResponseHeader xsi:type="xls:ResponseHeaderType"/>
	 <xls:Response xsi:type="xls:ResponseType" requestID="123456789" version="1.1" numberOfResponses="1">
	  <xls:ReverseGeocodeResponse xsi:type="xls:ReverseGeocodeResponseType">
	   <xls:ReverseGeocodedLocation>
	    <gml:Point>
	     <gml:pos srsName="EPSG:4326">8.6754713 49.4184374</gml:pos>
	    </gml:Point>
	    <xls:Address countryCode="">
	     <xls:StreetAddress>
	      <xls:Building buildingName="Mathematikon" number="41-49"/>
	      <xls:Street officialName="Berliner Straße"/>
	     </xls:StreetAddress>
	     <xls:Place type="Country">Germany</xls:Place>
	     <xls:Place type="CountrySubdivision">Baden-Württemberg</xls:Place>
	     <xls:Place type="Municipality">Heidelberg</xls:Place>
	     <xls:PostalCode>69120</xls:PostalCode>
	    </xls:Address>
	    <xls:SearchCentreDistance uom="M" value="0.0"/>
	   </xls:ReverseGeocodedLocation>
	  </xls:ReverseGeocodeResponse>
	 </xls:Response>
	</xls:XLS>


--------

Accessibility Analysis API
--------------------------

For an Accessibillity Analysis of a geographical position open your query URL with::

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
| ``interval``        | Interval of the Isochrones in minutes e.g. ``15``                                              |
+---------------------+------------------------------------------------------------------------------------------------+
| ``api_key``         | ``your_api_key`` is placed in this parameter                                                   |
+---------------------+------------------------------------------------------------------------------------------------+

Example
+++++++

..
	------------
	Response Type
	--------------
	response type text
