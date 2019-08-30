var request = require("request")
var cheerio = require("cheerio")

const base_url = "http://ws.bus.go.kr/api/rest/stationinfo/"
function getLowStationByUidList(serviceKey, arsId){
    const function_name = "getLowStationByUid"
    var url = base_url + function_name + "?ServiceKey=" + serviceKey + "&arsId"+ arsId
    
    request(url, function(err, res, body){
        var $=cheerio.load(body, {xmlMode: true})

        res_msg = 
        ['stId',
         'stnNm',
         'arsId',
         'busRouteId',
         'rtNm',
         'firstTm',
         'lastTm',
         'term',
         'routeType',
         'nextBus',
         'staOrd',
         'vehId1',
         'plainNo1',
         'sectOrd1',
         'stationNm1',
         'traTime1',
         'traSpd1',
         'isArrive1',
         'isLast1',
         'busType1',
         'repTm1',
         'vehId2',
         'plainNo2',
         'sectOrd2',
        'stationNm2',
         'traTime2',
         'traSpd2',
         'isArrive2',
         'isLast2',
         'busType2',
         'repTm2',
         'adirection',
         'arrmsg1',
         'arrmsg2',
         'posX',
         'posY',
         'sectNm',
         'deTourAt']
        ret = []
        $('ServiceResult msgBody itemList').each(function(res, err){
            dict = {}
            for(var i=0;i<res_msg.length;i++){
                dict[res_msg[i]] = $(this).children(res_msg[i]).text()
                console.log(dict[res_msg[i]])
            }
        })
    })
}

