var request = require("request")
var cheerio = require("cheerio")

const base_url = "http://ws.bus.go.kr/api/rest/stationinfo/"
function getStationByNameList(serviceKey, stSrch){
    const function_name = "getStationByName"
    var url = base_url + function_name + "?ServiceKey=" + serviceKey + '&stSrch=' + stSrch
    
    request(url, function(err, res, body){
        var $=cheerio.load(body, {xmlMode: true})

        res_msg = 
        ['stId',
         'stNm',
         'tmX',
         'tmY',
         'arsId',
         'posX',
         'posY']
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