
$(document).ready(function() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
    async function wait() {
        await sleep(1000);
    }
      
    wait().then(function(){

                var location_001={lat: 33.6985629, lng: -96.5802613}

                var point_001 = new google.maps.Marker({
                    position: location_001,
                    title: "Theresa Drive property"
                });
                point_001.setMap(map); 
                    
                var location_002={lat: 33.641335, lng:  -96.596741}

                var point_002 = new google.maps.Marker({
                    position: location_002,
                    title: "Approximate VCP area 1201 E Pecan St"
                });
                point_002.setMap(map); 

                var location_003={lat: 33.696530, lng: -96.581150}
                var point_003 = new google.maps.Marker({
                    position: location_003,
                    title: "Southwest corner of property"
                });
                point_003.setMap(map); 

                var location_004={lat: 33.642945, lng: -96.595106}
                var point_004 = new google.maps.Marker({
                    position: location_004,
                    title: "Approximate Northeast point of VCP area"
                });
                point_004.setMap(map); 

                var measureTool = new MeasureTool(map, {
                    showSegmentLength: true,
                    unit: MeasureTool.UnitTypeId.IMPERIAL // or just use 'imperial'
                  });
                    
    })
});
//Theresa Drive points
//33.700442, -96.581038
//33.700471, -96.580349
//33.700975, -96.580338
//33.700975, -96.575892
//33.697575, -96.576046
//33.697597, -96.576483
//33.697472, -96.576504
//33.697499, -96.577588
//33.696410, -96.577722
//33.696530, -96.581150

//1201 E. Pecan Holdings, VCP area
//33.642945, -96.595106
//33.641711, -96.594793
//33.640693, -96.599836
//33.641899, -96.600254