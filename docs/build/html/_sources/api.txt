Application Programming Interfaces
==================================

End point:
In this Section we will let the user know what the :term:`API` is for.
Instead of using the ORS website you can also request the Data in the form of an .gml file.
Therefore you have to directly contact the respective API of the tool you would like to use.


API Keys
--------

Before you can use the APIs of the OpenRouteService you need an :term:`API-Key`. 


------------

Routing API
------------

To do a direkt routing request via GET you need to open up your URL with::

 http://openls.geog.uni-heidelberg.de/route?

After the **"?"** you have to add parameters with **"&"**. For the first parameter the **"&"** can be omitted. The pattern for parameter usage is "*parameter=value*". 
There are three types of parameters

- `Must Have Parameters`_ : They are required for the API to work and need a value inserted
- `Required Parameters`_ : They are required for the API to work but can be left empty.
- `Optional Parameters`_ : These parameters are not necessary to get a functional request.



Must Have Parameters
++++++++++++++++++++

The following table contains parameters where you absolutely have to add the 

+-----------------+--------------------------------+---------------------------------------------+
| Parameters      | Description                    | Values   ``example``                        |
+=================+================================+=============================================+
| start           | Set the starting Point of      | *latitude*,\ *longitude*                    |
|                 |                                |                                             |
|                 | your route in form of          | ``9.3785,47.2250``                          |
|                 |                                |                                             |
|                 | geographic coordinates         |                                             |
+-----------------+--------------------------------+---------------------------------------------+
| end             | Set the end Point of your route| *latitude*,\ *longitude*                    |
|                 |                                |                                             |
|                 | in geographic coordinates      | ``9.505250,47``                             |
+-----------------+--------------------------------+---------------------------------------------+
| lang            | Set the language for the       | de; en   ``lang=en``                        |
|                 |                                |                                             |
|                 | instructions                   |                                             |
+-----------------+--------------------------------+---------------------------------------------+
| distunit        | Set the unit in which you want | KM(kilometers); M(meters); MI(miles)        |
|                 |                                |                                             |
|                 | to view the distances in       | ``distunit=M``                              |
+-----------------+--------------------------------+---------------------------------------------+
| routepref       | Set the way you are taveling   | Car; Pedestrian; Bicycle;                   |
|                 |                                |                                             |
|                 |                                | Wheelchair; HeavyVehicle                    |
|                 |                                |                                             |
|                 |                                | ``routepref=Bicycle``                       |
+-----------------+--------------------------------+---------------------------------------------+
| api_key         | Input your :term:`API-Key` here| `your_api_key`                              |
|                 |                                |                                             |
|                 |                                | ``api_key=eb85f2a6a61aafaebe7e2f2a89b102f5``|
+-----------------+--------------------------------+---------------------------------------------+

routepref
>>>>>>>>>

+--------------+--------------------------------------------------------------------------------------------------------------+
| value        | description                                                                                                  |
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

.. note:: languages

Required Parameters
+++++++++++++++++++

The following parameters still are required for the api to work, but contrary to the prior the values can be left empty.
Except for "via" there will be a default value if you leave it empty


+-----------------+---------------------------------+--------------------------+--------------------------+
| Parameters      | Description                     | Values (**default**)     | Example                  |
+=================+=================================+==========================+==========================+
| via             | Set a stopover Point            | *latitude*,\ *longitude* | ``via`` ``via=9.43,47.1``|
+-----------------+---------------------------------+--------------------------+--------------------------+
| instructions    | Set True if you want step by    | True/**False**           | ``instructions=True``    |
|                 |                                 |                          |                          |
|                 | step by step instructions       |                          | ``instructions``         |
+-----------------+---------------------------------+--------------------------+--------------------------+
| weighting       | Set the route type              | **Fastest**; Shortest ;  | ``wighting=Shortest``    |
|                 |                                 |                          |                          |
|                 |                                 | Recommended              |                          |
+-----------------+---------------------------------+--------------------------+--------------------------+
| noMotorways     | Set True to avoid motorways     | True/**False**           | ``noMotorways``          |
+-----------------+---------------------------------+--------------------------+--------------------------+
| noTollways      | Set True to avoid tollways      | True/**False**           | ``noTollways=True``      |
+-----------------+---------------------------------+--------------------------+--------------------------+
| noUnpavedroads  | Set True to avoid unpaved roads | True/**False**           | ``noUnpavedroads=False`` |
+-----------------+---------------------------------+--------------------------+--------------------------+
| noSteps         | Set True to avoid steps         | True/**False**           | ``noSteps``              |
+-----------------+---------------------------------+--------------------------+--------------------------+
| noFerries       | Set True to avoid ferries       | True/**False**           | ``noFerries``            |
+-----------------+---------------------------------+--------------------------+--------------------------+


weighting
>>>>>>>>>

+-------------+------------------------------------------------------------+
| value       | description                                                |
+=============+============================================================+
| Fastest     | The fastest route uses speed limits etc.....               |
+-------------+------------------------------------------------------------+
| Shortest    | The shortest route ...                                     |
+-------------+------------------------------------------------------------+
| Recommended | This mode will include POIs to give you a trip to remember |
+-------------+------------------------------------------------------------+


Optional Parameters
+++++++++++++++++++



+-----------------+---------------------------------+--------------------------+--------------------------+
| Parameters      | Description                     | Values (**default**)     | Example                  |
+=================+=================================+==========================+==========================+
| useTMC          | Set a stopover Point            | True/**False**           | ``useTMC=True``          |
+-----------------+---------------------------------+--------------------------+--------------------------+



Example
+++++++

The shortest version of a full functioning routing URL would look like this::

  http://openls.geog.uni-heidelberg.de/route?start=9.258506,49.240011&via&end=9.156506,49.230011&lang=en&distunit=KM&routepref=Car&weighting&useTMC&noMotorways&noTollways&noUnpavedroads&noSteps&noFerries&instructions&api_key=eb85f2a6a61aafaebe7e2f2a89b102f5

.. attention:: Parameters as well as values are `case sensitive`. The input order doesn't matter though.

-----------

Geocoding API
-------------

here comes the geocoding api 




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
