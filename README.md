This repository stores the swagger specifications of the [OpenRouteService](openrouteservice.org "ORS website") API in yaml and json format.
For a live version of this documentation visit https://developers.openrouteservice.org/portal/apis/.

This readme stores coding tables that go beyond the display options of swagger.
With these you can decode response values where the meaning is not directly evident.

# Routing Response

Encoding of the Extra Information:

## Steepness

## Suitability

## Surface

## WayCategory

The exponential assignment of the values is used for `bit fields <http://eddmann.com/posts/using-bit-flags-and-enumsets-in-java/>`__. One route section may belong to different categories. Hence a value of ``97`` would indicate a belonging to ``Paved road``, ``Tunnel`` and ``Highway`` (``64``\ +\ ``32``\ +\ ``1``\ ).

## Waytype

## Instruction Types

# Places Response

### accomodation : 100

### animals : 120

### arts_and_culture : 130

### education : 150

### facilities : 160

### financial : 190

### healthcare : 200

### historic : 220

### leisure_and_entertainment : 260

### natural : 330

### public_places : 360

### service : 390

### shops : 420

### sustenance : 560

### transport : 580

### tourism: 620