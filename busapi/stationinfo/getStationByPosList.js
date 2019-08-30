var request = require("request")
var cheerio = require("cheerio")

const base_url = "http://ws.bus.go.kr/api/rest/stationinfo/"
function getStationByPosList(serviceKey, tmX, tmY, radius){
    const function_name = "getStationByPos"
    var url = base_url + function_name + "?ServiceKey=" + serviceKey + 
    "&tmX="+ tmX + "&tmY=" + tmY + "&radius=" + radius
    
    request(url, function(err, res, body){
        var $=cheerio.load(body, {xmlMode: true})

        res_msg = 
        ['stationId',
         'stationNm',
         'gpsX',
         'gpsY',
         'dist',
         'posX',
         'posY',
         'stationTp']
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