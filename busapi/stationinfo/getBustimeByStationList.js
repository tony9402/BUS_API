var request = require("request")
var cheerio = require("cheerio")

const base_url = "http://ws.bus.go.kr/api/rest/stationinfo/"
function getBustimeByStationList(serviceKey, arsId, busRouteId){
    const function_name = "getBustimeByStation"
    var url = base_url + function_name + "?ServiceKey=" + serviceKey + '&arsId=' + arsId + '&busRouteId=' + busRouteId
    
    request(url, function(err, res, body){
        var $=cheerio.load(body, {xmlMode: true})

        res_msg = 
        ['arsId',
         'stationNm',
         'busRouteId',
         'busRouteNm',
         'firstBusTm',
         'lastBusTm']
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