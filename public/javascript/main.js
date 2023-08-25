            function loadMapScenario() {
                var coord = JSON.parse(options);
                var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
                });
                Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
                    var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
                    // Set Route Mode to driving
                    directionsManager.setRequestOptions({ routeMode: Microsoft.Maps.Directions.RouteMode.driving });
                    var waypoint1 = new Microsoft.Maps.Directions.Waypoint({ address: coord.startPoint , location: new Microsoft.Maps.Location(coord.startLat, coord.startLong) });
                    var waypoint2 = new Microsoft.Maps.Directions.Waypoint({ address: coord.endPoint, location: new Microsoft.Maps.Location(coord.endLat, coord.endLong) });
                    directionsManager.addWaypoint(waypoint1);
                    directionsManager.addWaypoint(waypoint2);
                    directionsManager.calculateDirections();
                });    
            }