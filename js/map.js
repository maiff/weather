(function(){
    function myFun(result){
        var cityName = result.name;
        //map.setCenter(cityName);
        TOOL.cityName=cityName.slice(0,2);
        TOOL.$('local').innerHTML=cityName.slice(0,2);
        //console.log(result);
        getWeather();
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
})();
