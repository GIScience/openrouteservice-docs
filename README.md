This repository stores the swagger specifications of the [OpenRouteService](openrouteservice.org "ORS website") API in yaml and json format.
For an API-Key please register at our [developers portal](https://developers.openrouteservice.org/portal/register/ "ORS Register").
Afterwards the Key can be requested in the [API catalogue](https://developers.openrouteservice.org/portal/apis/ "ORS Catalogue").
A live version of this documentation can be found on [swaggerhub](https://app.swaggerhub.com/apis/OpenRouteService/ors-api/ "Swagger Doku").

## Content

This readme stores additional information, examples and encoding tables that go beyond the display options of swagger.

- [Travel Time Calculation](#travel-time-calculation)
	- [Waytype](#waytype-speeds)
	- [Surface](#surface-speeds)
	- [Tracktype](#tracktype-speeds)
	- [Country Speed Sets](#country-speed-sets)
- [URL Encoding](#url-encoding)
- [Routing `options`](#routing-options)
	- [Examples](#examples)
- [Routing Response](#routing-response)
	- [Steepness](#steepness)
	- [Suitability](#suitability)
	- [Surface](#surface)
	- [WayCategory](#waycategory)
	- [Waytype](#waytype)
	- [Instruction Types](#instruction-types)
- [Places Response](#places-response)
	- [category_group_ids](#category_group_ids)
	- [category_ids](#category_ids)

# Travel Time Calculation

The travel time is calculated for each segment by using speed-limits for different [waytypes](https://wiki.openstreetmap.org/wiki/Key:highway) and adjusting them for different [grades](https://wiki.openstreetmap.org/wiki/Key:tracktype) of the road and the Incline. For `cycling` profiles also the [surface](https://wiki.openstreetmap.org/wiki/Key:surface) is considered. These limits can be reduced by setting the `maxSpeed` parameter in the [options](#routing-options). The following table shows the speed-limits used for the main profiles:

_(all Values in km/h)_

## Waytype Speeds
Corresponds to the OSM [highway](https://wiki.openstreetmap.org/wiki/Key:highway) tag value.

  | Waytype \ Profile -> | driving-car | driving-hgv | cycling-regular |
  |:--------------------:|:-----------:|:-----------:|:---------------:|
  |       motorway       |     100     |      85     |        -        |
  |     motorway_link    |      60     |      50     |        -        |
  |       motorroad      |      90     |      80     |        -        |
  |         trunk        |      85     |      60     |        18       |
  |      trunk_link      |      60     |      50     |        18       |
  |        primary       |      65     |      60     |        18       |
  |     primary_link     |      50     |      50     |        18       |
  |       secondary      |      60     |      60     |        18       |
  |    secondary_link    |      50     |      50     |        18       |
  |       tertiary       |      50     |      50     |        18       |
  |     tertiary_link    |      40     |      40     |        18       |
  |     unclassified     |      30     |      30     |        16       |
  |      residential     |      30     |      30     |        18       |
  |     living_street    |      10     |      10     |        6        |
  |        service       |      20     |      20     |        14       |
  |         road         |      20     |      20     |        12       |
  |         track        |      15     |      15     |        12       |
  |         path         |      -      |      -      |        12       |
  |        footway       |      -      |      -      |        6        |
  |      pedestrian      |      -      |      -      |        6        |
  |       cycleway       |      -      |      -      |        18       |

## Surface Speeds
Corresponds to the OSM [surface](https://wiki.openstreetmap.org/wiki/Key:surface) tag value.

  | Surface \ Profile -> | driving-car | driving-hgv |
  |:--------------------:|:-----------:|:-----------:|
  |        asphalt       |      -1     |      -1     |
  |       concrete       |      -1     |      -1     |
  |    concrete:plates   |      -1     |      -1     |
  |    concrete:lanes    |      -1     |      -1     |
  |         paved        |      -1     |      -1     |
  |        cement        |      80     |      60     |
  |       compacted      |      80     |      60     |
  |      fine_gravel     |      60     |      50     |
  |     paving_stones    |      40     |      40     |
  |         metal        |      40     |      40     |
  |        bricks        |      40     |      40     |
  |         grass        |      30     |      30     |
  |         wood         |      30     |      30     |
  |         sett         |      30     |      30     |
  |      grass_paver     |      30     |      30     |
  |        gravel        |      30     |      30     |
  |        unpaved       |      30     |      30     |
  |        ground        |      30     |      30     |
  |         dirt         |      30     |      30     |
  |      pebblestone     |      30     |      30     |
  |        tartan        |      30     |      30     |
  |      cobblestone     |      20     |      20     |
  |         clay         |      20     |      20     |
  |         earth        |      15     |      15     |
  |         stone        |      15     |      15     |
  |         rocky        |      15     |      15     |
  |         sand         |      15     |      15     |
  |          mud         |      10     |      10     |
  |       unknown:       |      30     |      30     |

## Tracktype Speeds
Corresponds to the OSM [tracktype](https://wiki.openstreetmap.org/wiki/Key:tracktype) tag value.

  | Tracktype \ Profile -> | driving-car | driving-hgv |
  |:----------------------:|:-----------:|:-----------:|
  |         grade1         |      40     |      40     |
  |         grade2         |      30     |      30     |
  |         grade3         |      20     |      20     |
  |         grade4         |      15     |      15     |
  |         grade5         |      10     |      10     |
  
## Country Speed Sets
As there are various traffic regulations in different countries. If [maximum speed](http://wiki.openstreetmap.org/wiki/Key:maxspeed) tag is not given in openstreetmap, we adjust the maximum speed according to the following key values taken from [country specific speed limits](http://wiki.openstreetmap.org/wiki/Speed_limits).

### Austria

  |   Country   |         Tags         | driving-car | driving-hgv |
  |:-----------:|:--------------------:|:-----------:|:-----------:|
  |   Austria   |       AT:urban       |      50     |      50     |
  |             |       AT:rural       |     100     |      80     |
  |             |       AT:trunk       |     100     |      80     |
  |             |      AT:motorway     |     130     |      80     |
  | Switzerland |       CH:urban       |      50     |      50     |
  |             |       CH:rural       |      80     |      80     |
  |             |       CH:trunk       |     100     |      80     |
  |             |      CH:motorway     |     120     |      80     |
  | Czech       |       CZ:urban       |      50     |      50     |
  | Republic    |       CZ:rural       |      90     |      90     |
  |             |       CZ:trunk       |      80     |      80     |
  |             |      CZ:motorway     |      80     |      80     |
  |   Denmark   |       DK:urban       |      50     |      50     |
  |             |       DK:rural       |      80     |      80     |
  |             |      DK:motorway     |     130     |      80     |
  |   Germany   |   DE:living_street   |       7     |       7     |
  |             |       DE:urban       |      50     |      50     |
  |             |       DE:rural       |     100     |      80     |
  |             |      DE:motorway     |     130     |      80     |
  |             |       FI:urban       |      50     |      50     |
  |   Finland   |       FI:rural       |      80     |      80     |
  |             |       FI:trunk       |     100     |      80     |
  |             |      FI:motorway     |     120     |      80     |
  |   France    |       FR:urban       |      50     |      50     |
  |             |       FR:rural       |      90     |      80     |
  |             |       FR:trunk       |     110     |      80     |
  |             |      FR:motorway     |     130     |      80     |
  |   Greece    |       GR:urban       |      50     |      50     |
  |             |       GR:rural       |      90     |      80     |
  |             |       GR:trunk       |     110     |      80     |
  |             |      GR:motorway     |     130     |      80     |
  |   Hungary   |       HU:urban       |      50     |      50     |
  |             |       HU:rural       |      90     |      80     |
  |             |       HU:trunk       |     110     |      80     |
  |             |      HU:motorway     |     130     |      80     |
  |    Italy    |       IT:urban       |      50     |      50     |
  |             |       IT:rural       |      90     |      80     |
  |             |       IT:trunk       |     110     |      80     |
  |             |      IT:motorway     |     130     |      80     |
  |    Japan    |      JP:national     |      60     |      60     |
  |   Poland    |   PL:living_street   |      20     |      20     |
  |             |       PL:urban       |      50     |      50     |
  |             |       PL:rural       |      90     |      80     |
  |             |      PL:motorway     |     140     |      80     |
  |   Romania   |       RO:urban       |      50     |      50     |
  |             |       RO:rural       |      90     |      80     |
  |             |       RO:trunk       |     100     |      80     |
  |             |      RO:motorway     |     130     |      80     |
  | Russian     |   RU:living_street   |      20     |      20     |
  |  Federation |       RU:rural       |      90     |      80     |
  |             |       RU:urban       |      60     |      60     |
  |             |      RU:motorway     |     110     |      80     |
  |  Slovakia   |       SK:urban       |      50     |      50     |
  |             |       SK:rural       |      90     |      80     |
  |             |       SK:trunk       |      90     |      80     |
  |             |      SK:motorway     |      90     |      80     |
  |  Slovenia   |       SI:urban       |      50     |      50     |
  |             |       SI:rural       |      90     |      80     |
  |             |       SI:trunk       |     110     |      80     |
  |             |      SI:motorway     |     130     |      80     |
  |    Spain    |       ES:urban       |      50     |      50     |
  |             |       ES:rural       |      90     |      80     |
  |             |       ES:trunk       |     100     |      80     |
  |             |      ES:motorway     |     120     |      80     |
  |   Sweden    |       SE:urban       |      50     |      50     |
  |             |       SE:rural       |      70     |      70     |
  |             |       SE:trunk       |      90     |      80     |
  |             |      SE:motorway     |     110     |      80     |
  | United      |     GB:nsl_single    |      95     |      90     |
  |  Kingdom    |      GB:nsl_dual     |     112     |      90     |
  |             |      GB:motorway     |     112     |      90     |
  | United      |       UA:urban       |      60     |      60     |
  |  States of  |       UA:rural       |      90     |      80     |
  |   America   |       UA:trunk       |     110     |      80     |
  |             |      UA:motorway     |     130     |      80     |
  | Uzbekistan  |   UZ:living_street   |      30     |      30     |
  |             |       UZ:urban       |      70     |      70     |
  |             |       UZ:rural       |     100     |      90     |
  |             |      UZ:motorway     |     110     |      90     |

# URL Encoding

To use the curl command string you have to encode special characters.
Values you need are shown in this table:

  | Character |  {  |  \| |  }  |  "  |  [  |  ]  |
  |:---------:|:---:|:---:|:---:|:---:|:---:|:---:|
  |  Encoding | %7B | %7C | %7D | %22 | %5B | %5D |

Sometimes needs to be used for the [options object](#examples).

# Routing options

For advanced options formatted as json object. For structure refer to the [examples](#examples) below.
The available parameters are:

- `maximum_speed` : Specifies a maximum travel speed in km/h.

- `avoid_features` : Pipe seperated list of features to avoid.
  The available features are :

  |     Feature    | Available for                               |
  |:--------------:|---------------------------------------------|
  | `highways`     | driving-*                                   |
  | `tollways`     | driving-*                                   |
  | `ferries`      | driving-\*, cycling-\*, foot-\*, wheelchair |
  | `tunnels`      | driving-*                                   |
  | `pavedroads`   | driving-\*, cycling-*                       |
  | `unpavedroads` | driving-\*, cycling-*                       |
  | `tracks`       | driving-*                                   |
  | `fords`        | driving-\*, cycling-\*, foot-*              |
  | `steps`        | cycling-\*, foot-\*, wheelchair             |
  | `hills`        | cycling-\*, foot-\*                         |


- `vehicle_type` (for `profile=driving-hgv` only): `hgv`,`bus`,`agricultural`,`delivery`,`forestry` and `goods`.

- `profile_params` : Specifies vehicle parameters.
  
  - `weightings` : Weightings will prioritize specified factors over the shortest path.

    - `fitness` : for `cycling-*` profiles:

      |        Value       |                                  Description                                  |
      |:------------------:|-------------------------------------------------------------------------------|
      | `difficulty_level` |  Specifies the fitness level. 0 = Novice, 1 = Moderate, 2 = Amateur, 3 = Pro. |
      | `maximum_gradient` |  Specifies the maximum route steepness in percent. Values range from 1 to 15. |

    - `green`: Specifies the Green factor for `foot-*` profiles.
        - `factor`: Values range from `0` to `1`. `0` equals normal routing. `1` will prefer ways through green areas over a shorter route.

    - `quiet`: Specifies the Quiet factor for `foot-*` profiles.
        - `factor`: Values range from `0` to `1`. `0` equals normal routing. `1` will prefer quiet ways over a shorter route.

  - `restrictions` : Specifies restrictions for `driving-hgv` and `wheelchair`
    - for `driving-hgv`: 

      |  Parameter | Description                                                                                                                       |
      |:----------:|-----------------------------------------------------------------------------------------------------------------------------------|
      | `length`   | Length restriction in meters.                                                                                                     |
      | `width`    | Width restriction in meters.                                                                                                      |
      | `height`   | Height restriction in meters.                                                                                                     |
      | `axleload` | Axleload restriction in tons.                                                                                                     |
      | `weight`   | Weight restriction in tons.                                                                                                       |
      | `hazmat`   | Specifies whether to use appropriate routing for delivering hazardous goods and avoiding water protected areas. Default is false. |

    - for `wheelchair`:

      |       Parameter       | Description                                                                                                         |
      |:---------------------:|---------------------------------------------------------------------------------------------------------------------|
      |     `surface_type`    | Specifies the [surface type](http://wiki.openstreetmap.org/wiki/Key:surface). Default is `"cobblestone:flattened"`. |
      |      `track_type`     | Specifies the [grade](http://wiki.openstreetmap.org/wiki/Key:tracktype) of the route. Default is `"grade1"`.        |
      |   `smoothness_type`   | Specifies the [smoothness](http://wiki.openstreetmap.org/wiki/Key:smoothness) of the route. Default is `"good"`.    |
      | `maximum_sloped_curb` | Specifies the maximum height of the sloped curb in meters. Values are `0.03`, `0.06`(default), `0.1` or `any`.      |
      |   `maximum_incline`   | Specifies the maximum incline as a percentage. `3`, `6`(default), `10`, `15` or `any`.                              |

    
- `avoid_polygons` : Comprises areas to be avoided for the route. Formatted as [geojson polygon](http://geojson.org/geojson-spec.html#id4) or [geojson multipolygon](http://geojson.org/geojson-spec.html#id7).


## Examples

**If your request works without the options object, but returns an error with it: try to [%-encode](#url-encoding) the options object!**

Some options examples in readable and minified JSON form:

for `profile=driving-car`:

```json
{
    "maximum_speed": 100,
    "avoid_features": "ferries|tollways"
}
```
`{"maximum_speed":100,"avoid_features":"ferries|tollways"}`

for `profile=cycling-*`:

```json
{
"maximum_speed": 18,
"avoid_features": "hills|unpavedroads",
"profile_params": {
    "weightings": {
        "fitness": {
            "difficulty_level": 2,
            "maximum_gradient": 13
        }
    }
},
"avoid_polygons": {
    "type": "Polygon",
    "coordinates": [
        [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ]
 ]}
}
```
`{"maximum_speed":18,"avoid_features":"hills|unpavedroads","profile_params":{"weightings":{"fitness":{"difficulty_level":2,"maximum_gradient":13}},"avoid_polygons":{"type":"Polygon","coordinates":[[[100.0,0.0],[101.0,0.0],[101.0,1.0],[100.0,1.0],[100.0,0.0]]]}}`

for `profile=foot-*`:

```json
{
    "avoid_features": "fords|ferries",
    "profile_params": {
        "weightings": {
            "green": {
                "factor": 0.8
              },
            "quiet": {
                "factor": 1.0
            }
        }
    },
    "avoid_polygons": {  
        "type": "Polygon",
        "coordinates": [
            [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ]
     ]}
}
```
`{"avoid_features":"fords|ferries","profile_params":{"weightings":{"green":{"factor":0.8},"quiet":{"factor":1.0}}},"avoid_polygons":{"type":"Polygon","coordinates":[[[100.0,0.0],[101.0,0.0],[101.0,1.0],[100.0,1.0],[100.0,0.0]]]}}`

for `profile=driving-hgv`:

```json
{
    "avoid_features": "hills|ferries|tollways",
    "vehcile_type": "hgv",
    "profile_params": {
        "restrictions": {
            "length": 30,
            "width": 30,
            "height": 3,
            "axleload": 4,
            "weight": 3,
            "hazmat": true
        }
    },
    "avoid_polygons": {  
        "type": "Polygon",
        "coordinates": [
            [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ]
     ]}
}
```
`{"avoid_features":"hills|ferries|tollways","vehcile_type":"hgv","profile_params":{"restrictions":{"length":30,"width":30,"height":3,"axleload":4,"weight":3,"hazmat":true}},"avoid_polygons":{"type":"Polygon","coordinates":[[[100.0,0.0],[101.0,0.0],[101.0,1.0],[100.0,1.0],[100.0,0.0]]]}}`

for `profile=wheelchair`:

```json
{
    "avoid_features": "hills|ferries|steps",
    "profile_params": {
        "restrictions": {
            "surface_type": "cobblestone:flattened",
            "track_type": "grade1",
            "smoothness_type": "good",
            "maximum_sloped_curb": 0.06,
            "maximum_incline": 6
        }
    }
}
```
`{"avoid_features":"hills|ferries|steps","profile_params":{"restrictions":{"surface_type":"cobblestone:flattened","track_type":"grade1","smoothness_type":"good","maximum_sloped_curb":0.06,"maximum_incline":6}}}`

# Routing Response

Encoding of the Extra Information:

## Steepness

Negative values indicate decline, positive incline.

| Value | Encoding |
|:-----:|:--------:|
| -5    | >16%     |
| -4    | 12-15%   |
| -3    | 7-11%    |
| -2    | 4-6%     |
| -1    | 1-3%     |
| 0     | 0%       |
| 1     | 1-3%     |
| 2     | 4-6%     |
| 3     | 7-11%    |
| 4     | 12-15%   |
| 5     | >16%     |

## Suitability

The suitability values for the selected profile range from ``10`` for best suitability to ``1`` for worst suitability.

## Surface

| Value |       Name       |
|:-----:|:----------------:|
| 0     | Unknown          |
| 1     | Paved            |
| 2     | Unpaved          |
| 3     | Asphalt          |
| 4     | Concrete         |
| 5     | Cobblestone      |
| 6     | Metal            |
| 7     | Wood             |
| 8     | Compacted Gravel |
| 9     | Fine Gravel      |
| 10    | Gravel           |
| 11    | Dirt             |
| 12    | Ground           |
| 13    | Ice              |
| 14    | Salt             |
| 15    | Sand             |
| 16    | Woodchips        |
| 17    | Grass            |
| 18    | Grass Paver      |

## WayCategory

The exponential assignment of the values is used for [bit fields](http://eddmann.com/posts/using-bit-flags-and-enumsets-in-java/). One route section may belong to different categories. Hence a value of ``97`` would indicate a belonging to ``Paved road``, ``Tunnel`` and ``Highway`` (``64`` + ``32`` + ``1`` ).

| Value |             Name             |
|:-----:|:----------------------------:|
| 0     | No category                  |
| 1     | Highway                      |
| 2     | Tollway (driving-* profiles) |
| 2     | Steps (other profiles)       |
| 4     | Ferry                        |
| 8     | Unpaved road                 |
| 16    | Track                        |
| 32    | Tunnel                       |
| 64    | Paved road                   |
| 128   | Ford                         |

## Waytype

| Value |     Name     |
|:-----:|:------------:|
| 0     | Unknown      |
| 1     | State Road   |
| 2     | Road         |
| 3     | Street       |
| 4     | Path         |
| 5     | Track        |
| 6     | Cycleway     |
| 7     | Footway      |
| 8     | Steps        |
| 9     | Ferry        |
| 10    | Construction |

## Instruction Types

| Value |     Encoding     |
|:-----:|:----------------:|
| 0     | Left             |
| 1     | Right            |
| 2     | Sharp left       |
| 3     | Sharp right      |
| 4     | Slight left      |
| 5     | Slight right     |
| 6     | Straight         |
| 7     | Enter roundabout |
| 8     | Exit roundabout  |
| 9     | U-turn           |
| 10    | Goal             |
| 11    | Unknown          |

# Places Response

The following tables contain the related names for the ``category_group_ids`` and the subordinate ``category_ids``.

## category_group_ids

Category groups

|                             Name                             | Value |
|:------------------------------------------------------------:|:-----:|
| [accomodation](#accomodation--100)                           | 100   |
| [animals](#animals--120)                                     | 120   |
| [arts_and_culture](#arts_and_culture--130)                   | 130   |
| [education](#education--150)                                 | 150   |
| [facilities](#facilities--160)                               | 160   |
| [financial](#financial--190)                                 | 190   |
| [healthcare](#healthcare--200)                               | 200   |
| [historic](#historic--220)                                   | 220   |
| [leisure_and_entertainment](#leisure_and_entertainment--260) | 260   |
| [natural](#natural--330)                                     | 330   |
| [public_places](#public_places--360)                         | 360   |
| [service](#service--390)                                     | 390   |
| [shops](#shops--420)                                         | 420   |
| [sustenance](#sustenance--560)                               | 560   |
| [transport](#transport--580)                                 | 580   |
| [tourism](#tourism--620)                                     | 620   |

## category_ids

Categories listed by group

### accomodation : 100

|      Name      | Value |
|:--------------:|:-----:|
| alpine_hut     | 101   |
| apparmtent     | 102   |
| camp_site      | 103   |
| caravan_site   | 104   |
| chalet         | 105   |
| guest_house    | 106   |
| hostel         | 107   |
| hotel          | 108   |
| motel          | 109   |
| wilderness_hut | 110   |

### animals : 120

|       Name      | Value |
|:---------------:|:-----:|
| animal_boarding | 121   |
| animal_shelter  | 122   |
| veterinary      | 123   |
| pet             | 124   |

### arts_and_culture : 130

|       Name       | Value |
|:----------------:|:-----:|
| arts_centre      | 131   |
| gallery          | 132   |
| library          | 133   |
| museum           | 134   |
| place_of_worship | 135   |
| studio           | 136   |

### education : 150

|      Name      | Value |
|:--------------:|:-----:|
| college        | 151   |
| driving_school | 152   |
| kindergarten   | 153   |
| lanuage_school | 154   |
| music_school   | 155   |
| school         | 156   |
| university     | 157   |

### facilities : 160

|        Name       | Value |   | Name                  | Value |
|:-----------------:|:-----:|---|-----------------------|-------|
| compressed_air    | 161   |   | recycling             | 172   |
| bench             | 162   |   | recycling_station     | 173   |
| emergency_phone   | 163   |   | sanitary_dump_station | 174   |
| clock             | 164   |   | shelter               | 175   |
| defibrillator     | 165   |   | shower                | 176   |
| drinking_water    | 166   |   | table                 | 177   |
| fire_hydrant      | 167   |   | telephone             | 178   |
| hunting_stand     | 168   |   | toilets               | 179   |
| internet_cafe     | 169   |   | waste_basket          | 180   |
| kneipp_water_cure | 170   |   | waste_disposal        | 181   |
| post_box          | 171   |   | water_point           | 182   |

### financial : 190

|       Name       | Value |
|:----------------:|:-----:|
| atm              | 191   |
| bank             | 192   |
| bureau_de_change | 193   |

### healthcare : 200

|          Name          | Value |
|:----------------------:|:-----:|
| baby_hatch             | 201   |
| clinic                 | 202   |
| dentist                | 203   |
| doctors                | 204   |
| emergency_access_point | 205   |
| hospital               | 206   |
| nursing_home           | 207   |
| pharmacy               | 208   |
| retirement_home        | 209   |
| social_facility        | 210   |
| blood_donation         | 211   |

### historic : 220

|         Name        | Value |   | Name           | Value |   | Name              | Value |
|:-------------------:|:-----:|---|----------------|-------|---|-------------------|-------|
| aircraft            | 221   |   | farm           | 231   |   | optical_telegraph | 241   |
| aqueduct            | 222   |   | fort           | 232   |   | pillory           | 242   |
| archaeological_site | 223   |   | gallows        | 233   |   | ruins             | 243   |
| castle              | 224   |   | highwater_mark | 234   |   | rune_stone        | 244   |
| cannon              | 225   |   | locomotive     | 235   |   | ship              | 245   |
| city_gate           | 226   |   | manor          | 236   |   | tomb              | 246   |
| citywalls           | 227   |   | memorial       | 237   |   | wayside_cross     | 247   |
| battlefield         | 228   |   | milestone      | 238   |   | wayside_shrine    | 248   |
| boundary_stone      | 229   |   | monastery      | 239   |   | wreck             | 249   |
| building            | 230   |   | monument       | 240   |   |                   |       |

### leisure_and_entertainment : 260

|         Name        | Value |   | Name           | Value |   | Name          | Value |   | Name          | Value |   | Name          | Value |
|:-------------------:|:-----:|---|----------------|-------|---|---------------|-------|---|---------------|-------|---|---------------|-------|
| adult_gaming_centre | 261   |   | fitness_centre | 271   |   | picnic_table  | 281   |   | swimming_area | 291   |   | dojo          | 301   |
| amusement_arcade    | 262   |   | garden         | 272   |   | pitch         | 282   |   | swimming_pool | 292   |   | gambling      | 302   |
| beach_resort        | 263   |   | golf_course    | 273   |   | playground    | 283   |   | track         | 293   |   | nightclub     | 303   |
| bandstand           | 264   |   | hackerspace    | 274   |   | raceway       | 284   |   | turkish_bath  | 294   |   | planetarium   | 304   |
| bird_hide           | 265   |   | horse_riding   | 275   |   | public_bath   | 285   |   | water_park    | 295   |   | social_centre | 305   |
| common              | 266   |   | ice_ring       | 276   |   | sauna         | 286   |   | wildlife_hide | 296   |   | spa           | 306   |
| dance               | 267   |   | marina         | 277   |   | slipway       | 287   |   | brothel       | 297   |   | stripclub     | 307   |
| dog_park            | 268   |   | miniature_golf | 278   |   | sports_centre | 288   |   | casino        | 298   |   | aquarium      | 308   |
| firepit             | 269   |   | nature_reserve | 279   |   | stadium       | 289   |   | cinema        | 299   |   | theme_park    | 309   |
| fishing             | 270   |   | park           | 280   |   | summer_camp   | 290   |   | dive_centre   | 300   |   | zoo           | 310   |

### natural : 330

|      Name     | Value |
|:-------------:|:-----:|
| cave_entrance | 331   |
| beach         | 332   |
| geyser        | 333   |
| hill          | 334   |
| peak          | 335   |
| rock          | 336   |
| saddle        | 337   |
| spring        | 338   |
| volcano       | 339   |
| water         | 340   |

### public_places : 360

|       Name       | Value |
|:----------------:|:-----:|
| embassy          | 361   |
| crematorium      | 362   |
| community_centre | 363   |
| courthouse       | 364   |
| coworking_space  | 365   |
| crypt            | 366   |
| fire_station     | 367   |
| grave_yard       | 368   |
| police           | 369   |
| post_office      | 370   |
| prison           | 371   |
| ranger_station   | 372   |
| rescue_station   | 373   |
| townhall         | 374   |

### service : 390

|     Name     | Value |
|:------------:|:-----:|
| beauty       | 391   |
| estate_agent | 392   |
| dry_cleaning | 393   |
| glaziery     | 394   |
| hairdresser  | 395   |
| laundry      | 396   |
| massage      | 397   |
| photo_booth  | 398   |
| tailor       | 399   |
| tattoo       | 400   |

### shops : 420

|        Name       | Value | Name             | Value | Name                | Value | Name                  | Value | Name          | Value | Name            | Value |
|:-----------------:|:-----:|------------------|-------|---------------------|-------|-----------------------|-------|---------------|-------|-----------------|-------|
| agrarian          | 421   | curtain          | 441   | e-cigarette         | 461   | hifi                  | 481   | optician      | 502   | tiles           | 522   |
| alkohol           | 422   | cheese           | 442   | farm                | 462   | houseware             | 482   | organic       | 503   | tobacco         | 523   |
| antiques          | 423   | chemist          | 443   | fashion             | 463   | hunting               | 483   | outdoor       | 504   | toys            | 524   |
| art               | 424   | chocolate        | 444   | fishing             | 464   | jewelry               | 485   | paint         | 505   | trophy          | 525   |
| bag               | 425   | clock            | 445   | florist             | 465   | leather               | 486   | pastry        | 506   | tyres           | 526   |
| bakery            | 426   | clocks           | 446   | funeral_directors   | 466   | locksmith             | 487   | perfumery     | 507   | variety_store   | 527   |
| bed               | 427   | clothes          | 447   | furniture           | 467   | kiosk                 | 488   | photo         | 508   | vending_machine | 528   |
| beverages         | 428   | coffee           | 448   | games               | 468   | kitchen               | 489   | pyrotechnics  | 509   | video           | 529   |
| bicycle           | 429   | computer         | 449   | garden_centre       | 469   | lamps                 | 490   | radiotechnics | 510   | video_games     | 530   |
| books             | 430   | confectionery    | 450   | garden_furniture    | 470   | lottery               | 491   | seefood       | 511   | watches         | 531   |
| boutique          | 431   | convenience      | 451   | gas                 | 471   | mall                  | 492   | second_hand   | 512   | weapons         | 532   |
| brewing_supplies  | 432   | copyshop         | 452   | general             | 472   | marketplace           | 493   | security      | 513   | wine            | 533   |
| business_machines | 433   | cosmetics        | 453   | gift                | 473   | medical_supply        | 494   | shoes         | 514   |                 |       |
| butcher           | 434   | dairy            | 454   | greengrocer         | 474   | mobile_phone          | 495   | spices        | 515   |                 |       |
| caf?              | 435   | deli             | 455   | grocery             | 475   | model                 | 496   | sports        | 516   |                 |       |
| camera            | 436   | department_store | 456   | interior_decoration | 476   | motorcycle            | 497   | stationery    | 517   |                 |       |
| candles           | 437   | doityourself     | 457   | hairdresser_supply  | 477   | music                 | 498   | supermarket   | 518   |                 |       |
| car               | 438   | electrical       | 458   | hardware            | 478   | musical_instrument    | 499   | swimming_pool | 519   |                 |       |
| car_parts         | 439   | electronics      | 459   | hearing_aids        | 479   | nutrition_supplements | 500   | tea           | 520   |                 |       |
| carpet            | 440   | erotic           | 460   | herbalist           | 480   | newsagent             | 501   | ticket        | 521   |                 |       |

### sustenance : 560

|      Name      | Value |
|:--------------:|:-----:|
| bar            | 561   |
| bbq            | 562   |
| biergarten     | 563   |
| caf?           | 564   |
| drinking_water | 565   |
| fast_food      | 566   |
| food_court     | 567   |
| ice_cream      | 568   |
| pub            | 569   |
| restaurant     | 570   |

### transport : 580

|          Name          | Value |   | Name               | Value |   | Name             | Value |
|:----------------------:|:-----:|---|--------------------|-------|---|------------------|-------|
| aerodrome              | 581   |   | car_sharing        | 591   |   | parking          | 601   |
| aeroport               | 582   |   | car_wash           | 592   |   | parking_entrance | 602   |
| bicycle_parking        | 583   |   | charging_station   | 593   |   | parking_space    | 603   |
| bicycle_rental         | 584   |   | ev_charging        | 594   |   | station          | 604   |
| bicycle_repair_station | 585   |   | ferry_terminal     | 595   |   | tram_stop        | 605   |
| boat_sharing           | 586   |   | fuel               | 596   |   | taxi             | 606   |
| bus_station            | 587   |   | halt               | 597   |   |                  |       |
| bus_stop               | 588   |   | helipad            | 598   |   |                  |       |
| car_rental             | 589   |   | heliport           | 599   |   |                  |       |
| car_repair             | 590   |   | motorcycle_parking | 600   |   |                  |       |

### tourism : 620

|      Name     | Value |
|:-------------:|:-----:|
| artwork       | 621   |
| attraction    | 622   |
| fountain      | 623   |
| information   | 624   |
| picnic_site   | 625   |
| travel_agency | 626   |
| viewpoint     | 627   |
