(function(){
    // function myFun(result){
    //     var cityName = result.name;
    //     //map.setCenter(cityName);
    //     TOOL.cityName=cityName.slice(0,2);
    //     //console.log(result);
    //     getWeather();
    // }
    // var myCity = new BMap.LocalCity();
    // myCity.get(myFun);
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            console.log('您的位置：'+r.point.lat+','+r.point.lng);
            //positioning(r.point.lng,r.point.lat);
            console.log(TOOL.cityName)
            var point = new BMap.Point(r.point.lng,r.point.lat);
            var geoc = new BMap.Geocoder();
            var pt = point;
            geoc.getLocation(pt, function(rs){
                var addComp = rs.addressComponents;
                TOOL.cityName=addComp.district.slice(0,-1);
                TOOL.city=addComp.city.slice(0,-1);
                console.log(TOOL.cityName)
                getWeather(TOOL.cityName);
                //alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
            });   
        }
        else {
            alert('failed'+this.getStatus());
        }        
    },{enableHighAccuracy: true})
    // function positioning(lng,lat){
    //         var point = new BMap.Point(lng,lat);
    //         var geoc = new BMap.Geocoder();
    //         var pt = point;
    //         geoc.getLocation(pt, function(rs){
    //             var addComp = rs.addressComponents;
                //return addComp.district;
    //             alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
    //         });        
    // }
    //TOOL.ajax('http://api.map.baidu.com/geocoder/v2/?ak=6co3fTZ9NlgUg5UotCSCk18Embd0NwXx&callback=renderReverse&location=31.061259,121.225598&output=xml&pois=1',onsuccess,true);
    //function onsuccess(data){
    //TOOL.cityName=data.getElementsByTagName('addressComponent')[0].getElementsByTagName('district').innHTML
    //}
})();

  
    

        
    
