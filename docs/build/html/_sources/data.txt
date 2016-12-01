ORS Data
========

OpenRouteService does use open geographic data for providing routing services, offering real time traffic information and services and depends on open source third-party libraries. These are listed below. 


- **Routing & Geocoding:** `OpenStreetMap <http://www.openstreetmap.org>`__
- **Map Background Layer:** `OpenMapSurfer Tiles & WMS <http://www.openmapsurfer.uni-hd.de>`__
- **Hillshade Layer:** `CIAT-CSI SRTM <http://srtm.csi.cgiar.org>`__. Users are prohibited from any commercial, non-free resale, or redistribution without explicit written permission from CIAT. Original data by Jarvis A., H.I. Reuter, A. Nelson, E. Guevara, 2008, Hole-filled seamless SRTM data V4, International Centre for Tropical Agriculture (CIAT)
- **TMC traffic Messages:** `BASt <http://www.bast.de>`__
- **ORS WebFrontend:** `on Github <https://github.com/GIScience/openrouteservice>`__ --> Please report & fix any issues `here <https://github.com/GIScience/openrouteservice/issues>`__

Safety Disclaimer
-------------------

In order to provide OpenRouteService and all related APIs, OpenRouteService uses OpenStreetMap as a free editable geographic dataset, to derive and process a routable graph for all currently offered modes of transportation. OpenStreetMap is not a complete or accurate map of the world and should not be used in such a manner that deficiencies, omissions, inaccuracies or errors could result in death, loss or injury. It is particularly important to realize that the maps might not be reliable. The maps are an iterative ongoing work-in-progress. OpenRouteService aims to provide maps, which can be relied upon, equally well, or better than other maps. The openly-editable wiki nature of the OpenStreetMap mapping system may help towards this goal, however it may also mean that there will always be some inaccuracies. You should make your own judgement about the accuracy of our maps. Always use our maps in conjunction with your senses, official sources and your common sense. 

Route Results
-------------

While OpenRouteService attempts to convey accurate route and direction information, the information contained may contain errors. OpenRouteService disclaims any and all liability for the adequacy, completeness, timeliness or accuracy of information and routing results and disclaims liability for errors or omissions in the information. You are strongly advised not to use OpenStreetMap as your primary or sole information source for crucial and data quality dependent routing and navigation applications, such as emergency and rescue, flying, inland navigation, marine navigation, military, whitewater sports, flood prone objects and winter sports. As always, make sure you have all the necessary equipment and training, take all sensible precautions, and be aware of the risks. As stated above, we will not be held responsible. 

TMC traffic information
-----------------------

To integrate current traffic information in OpenRouteService, a road graph with TMC LCL information based on OpenStreetMap is used. To enable this service `BASt <jwww.bast.de>`__ (German Federal Highway Research Institute) offers an up to date Location Code List (LCL) for Germany and provides TMC real time traffic information messages. OpenRouteService does not warrant the accuracy of the traffic data used for the OpenRouteService and APIs. Such data may not always reflect reality due to, among other things, road closures, construction, weather, new roads and other changing conditions. There is no guarantee of the given accuracy of any of the visualized and for the dynamic routing used traffic messages.