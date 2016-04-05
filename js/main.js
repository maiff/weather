function getWeather(){
	TOOL.ajax(' https://api.heweather.com/x3/weather?city='+TOOL.cityName+'&key=0c064a3ef8f64d728f2f96a775808c82',onsuccess);
	function onsuccess(data){
    	TOOL.weather=JSON.parse(data)['HeWeather data service 3.0'][0];
    	//TOOL.$('now-temperature').innerHTML=
    	getDate();
    	render();
    	//console.log(TOOL.weather)
	}	
}
function getDate(){
	var day={
		1:'周一',
		2:'周二',
		3:'周三',
		4:'周四',
		5:'周五',
		6:'周六',
		7:'周日',

	}
	var date=new Date();
	TOOL.date=date.getMonth()+1+'/'+date.getDate();
	TOOL.day=day[date.getDay()];
	console.log(TOOL.date);
}
 //getDate()

function render(){
	TOOL.$('date-day').innerHTML=TOOL.date;
	TOOL.$('date-week').innerHTML=TOOL.day;
	TOOL.$('now-temperature').innerHTML=TOOL.weather.now.tmp+'°';
	TOOL.$('cond').innerHTML=TOOL.weather.now.cond.txt;
	TOOL.$('range-tem').innerHTML=TOOL.weather.daily_forecast[0].tmp.min+'°/'+TOOL.weather.daily_forecast[0].tmp.max+'°'
	TOOL.$('drsg').innerHTML=TOOL.weather.suggestion.drsg.txt;
	TOOL.$('sport').innerHTML=TOOL.weather.suggestion.sport.txt;
}
	