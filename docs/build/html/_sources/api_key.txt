API Keys
========

Before you can access the endpoints of the `OpenRouteService API <http://www.openrouteservice.org>`__, you first need to obtain an :term:`API-Key`. Sign up at https://openrouteservice.org/developers to create and manage your **OpenRouteService** access. This key is a 32-character identifier, made of letters and numbers, which relates the request to the user. We utilize these keys in order to monitor miss- or overuse of the services (see :ref:`tos-ref`)


How to use an API key
---------------------

To use your API key simply add it as a parameter in your request URL, such as::

	&api_key=`your-api-key`

:ref:`Here<gc_example>` you can see a gecoding example with an API key appended to the end of a request.



