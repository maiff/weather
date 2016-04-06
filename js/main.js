function getWeather(name){
	TOOL.ajax(' https://api.heweather.com/x3/weather?city='+name+'&key=0c064a3ef8f64d728f2f96a775808c82',onsuccess);
	function onsuccess(data){
    	TOOL.weather=JSON.parse(data)['HeWeather data service 3.0'][0];
    	//TOOL.$('now-temperature').innerHTML=
    	if(TOOL.weather.status=='ok'){
    		getDate();
    		TOOL.s_f=deal_s_f(TOOL.weather.daily_forecast);
    		//console.log(TOOL.s_f)
    		render();
    	}
    	else{
    		TOOL.count+=1
    		if(TOOL.count<10){
    			TOOL.cityName=TOOL.city;
				getWeather(TOOL.cityName);
			}
			else{
				TOOL.$('local').innerHTML='对不起，出错了';
			}
    	}
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
	TOOL.$('local').innerHTML=TOOL.cityName;
	TOOL.$('date-day').innerHTML=TOOL.date;
	TOOL.$('date-week').innerHTML=TOOL.day;
	TOOL.$('now-temperature').innerHTML=TOOL.weather.now.tmp+'°';
	TOOL.$('cond').innerHTML=TOOL.weather.now.cond.txt;
	TOOL.$('range-tem').innerHTML=TOOL.weather.daily_forecast[0].tmp.min+'°/'+TOOL.weather.daily_forecast[0].tmp.max+'°'
	TOOL.$('drsg').innerHTML=TOOL.weather.suggestion.drsg.txt;
	TOOL.$('sport').innerHTML=TOOL.weather.suggestion.sport.txt;
	var liLists=document.getElementById('se-for').getElementsByTagName('li');
	for(var i=0,len=liLists.length;i<len;i++){
		var pList=liLists[i].getElementsByTagName('p');
		pList[0].innerHTML=deal_date(TOOL.s_f[i].date);
		new Date().getHours()<18?pList[1].innerHTML=TOOL.s_f[i].cond.d:pList[1].innerHTML=TOOL.s_f[i].cond.n;
		
	}
}

function deal_s_f(arr){
	var results=[];
	for(var i=0,len=arr.length;i<len;i++){
		var obj={};
		obj.date=arr[i].date;
		obj.cond={};
		obj.cond.d=arr[i].cond.txt_d;
		obj.cond.n=arr[i].cond.txt_n;
		results.push(obj);
	}
	return results;

}
function deal_date(date){
	var mouth,day;
	if(date[5]==='0'){
		mouth=date.slice(6,7);
		if(date[8]==='0')
			day=date.slice(9,10);
		else
			day=date.slice(8,10);
	}
	else{
		mouth=date.slice(5,7);
	}
	return mouth+'/'+day;
}	