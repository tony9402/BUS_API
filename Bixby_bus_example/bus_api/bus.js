var request=require('request')
var cheerio=require('cheerio')

function getStationByName(bus_name){
    var defaultUrl = 'http://ws.bus.go.kr/api/rest/stationinfo/getStationByName?ServiceKey='
    var Key=''

    var url = defaultUrl + Key + '&stSrch=' + encodeURI(bus_name)
    console.log(url)
    
    request(url, function(err, res, body){
        var $=cheerio.load(body, {xmlMode: true});

        
        $('ServiceResult msgBody itemList').each(function(res, err){
            var arsId = $(this).children('arsId').text();
            var posX = $(this).children('posX').text();
            var posY = $(this).children('posY').text();
            var stId = $(this).children('stId').text();
            var stNm = $(this).children('stNm').text();
            var tmX = $(this).children('tmX').text();
            var tmY = $(this).children('tmY').text();

            console.log(arsId)
            console.log(posX, posY)
            console.log(stId)
            console.log(stNm)
            console.log(tmX, tmY)
        })
    })
}

function getRouteByStationList(arsId){
    var defaultUrl = 'http://ws.bus.go.kr/api/rest/stationinfo/getRouteByStation'
    var Key=''
    var url = defaultUrl + '?ServiceKey=' + Key + '&arsId=' + arsId

    console.log(url)

    request(url, function(err, res, body){
        var $=cheerio.load(body, {xmlMode: true});

        $('ServiceResult msgBody itemList').each(function(res, err){
            var busRouteId = $(this).children('busRouteId').text();
            var busRouteNm = $(this).children('busRouteNm').text();
            var lastBusTm = $(this).children('lastBusTm').text();
            console.log('busRouteId', busRouteId)
            console.log('busRouteNm',busRouteNm)
            console.log('lastBusTm',lastBusTm)
        })
    })
}

function get_bus_info(Tmx, Tmy, radius){
	var defaultUrl = 'http://ws.bus.go.kr/api/rest/stationinfo/getStationByPos';
	var Key = ''
	console.log(Tmy+' '+Tmx+' '+radius+'\n')
	var url = defaultUrl+'?ServiceKey='+Key+'&tmX='+Tmx+'&tmY='+Tmy+'&radius='+radius;

	request(url, function(err, res, body){
		var $=cheerio.load(body, {xmlMode: true});

		$('ServiceResult msgBody itemList').each(function(res, err){
			var arsId = $(this).children('arsId').text();
      		var stationId = $(this).children('stationId').text();
      		var stationNm = $(this).children('stationNm').text();
      		console.log("arsId : " + arsId);
      		console.log("stationId : " + stationId);
      		console.log("stationNm : " + stationNm);
    	})
  	})
};

function getBustimeByStationList(arsId, busRouteId){
    var defaultUrl = 'http://ws.bus.go.kr/api/rest/stationinfo/getBustimeByStation';
	var Key = ''
	var url = defaultUrl+'?ServiceKey='+Key+'&arsId='+arsId+'&busRouteId='+busRouteId

    request(url, function(err, res, body){
        var $=cheerio.load(body, {xmlMode: true});

        $('ServiceResult msgBody itemList').each(function(res, err){
            var stationNm=$(this).children('stationNm').text()
            var firstBusTm=$(this).children('firstBusTm').text()
            var lastBusTm=$(this).children('lastBusTm').text()
            var busRouteNm=$(this).children('busRouteNm').text()

            console.log('stationNm', stationNm)
            console.log('firstBusTm', firstBusTm)
            console.log('lastBusTm', lastBusTm)
            console.log('busRouteNm',busRouteNm)
        })
    })
}

function getStationByUidItem(arsId){
    var defaultUrl = 'http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid'
    var Key = ''
    var url = defaultUrl + '?ServiceKey=' + Key + '&arsId='+arsId

    request(url, function(err, res, body){
        var $=cheerio.load(body, {xmlMode: true})

        $('ServiceResult msgBody itemList').each(function(res, err){
            var stId=$(this).children('stId').text()
            var stNm=$(this).children('stNm').text()
            var arsId=$(this).children('arsId').text()
            var busRouteId=$(this).children('busRouteId').text()
            var rtNm=$(this).children('rtNm').text()
            var gpsX=$(this).children('gpsX').text()
            var gpsY=$(this).children('gpsY').text()
            var nextBus=$(this).children('nextBus').text()
            var plainNo1=$(this).children('plainNo1').text()

            console.log('stNm', stNm)
            console.log('nextBus', nextBus)
            console.log('plainNo1', plainNo1)
            console.log(gpsX, gpsY)
            console.log('rtNm', rtNm)
            console.log('busRouteId', busRouteId)
            console.log()
        })
    })
}
//get_bus_info(Tmx='126.953453',Tmy='37.496115',radius='200')
//getStationByName('숭실대')
//getRouteByStationList(20170)
//getBustimeByStationList(20170, 100100116)
getStationByUidItem(20170)
