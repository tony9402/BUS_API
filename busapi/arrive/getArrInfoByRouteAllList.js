var request = require("request")
var cheerio = require("cheerio")

const base_url = "http://ws.bus.go.kr/api/rest/arrive/"
function getArrInfoByRouteAllList(serviceKey, busRouteId){
    const function_name = "getArrInfoByRouteAll"
    var url = base_url + function_name + "?ServiceKey=" + serviceKey + "&busRouteId=" + busRouteId
    
    request(url, function(err, res, body){
        var $=cheerio.load(body, {xmlMode: true})

        res_msg = 
        ['stId',
         'stNm', 
         'arsId', 
         'rtNm',
         'fistTm',
         'lastTm',
         'term',
         'routeType',
         'nextBus',
         'staOrd',
         'dir',
         'mkTm',
         'vehId1',
         'plainNo1',
         'sectOrd1',
         'stationNm1',
         'traTime1',
         'traSpd1',
         'isArrive1',
         'repTm1',
         'isLast1',
         'busType1',
         'avgCf1',
         'expCf1',
         'kalCf1',
         'neuCf1',
         'exps1',
         'kals1',
         'neus1',
         'rerdie_Div1',
         'reride_Num1',
         'brerde_Div1',
         'brdrde_Num1',
         'full1',
         'nstnId1',
         'nstnOrd1',
         'nstnSpd1',
         'nstnSec1',
         'nmainStnid1',
         'nmainOrd1',
         'nmainSec1',
         'nmain2Stnid1',
         'nmain2Ord1',
         'nmain2Sec1',
         'nmain3Stnid1',
         'nmain3Ord1',
         'nmain3Sec1',
         'goal1',
         'vehId2',
         'plainNo2',
         'sectOrd2',
         'stationNm2',
         'traTime2',
         'traSpd2',
         'isArrive2',
         'repTm2',
         'isLast2',
         'busType2',
         'avgCf2',
         'expCf2',
         'kalCf2',
         'neuCf2',
         'exps2',
         'kals2',
         'neus2',
         'rerdie_Div2',
         'reride_Num2',
         'brerde_Div2',
         'brerde_Num2',
         'full2',
         'nstnId2',
         'nstnSec2',
         'nmainStnid2',
         'nmainOrd2',
         'nmainSec2',
         'nmain2Stnid2',
         'nmain2Ord2',
         'nmain2Sec2',
         'nmain3Stnid2',
         'nmain3Ord2',
         'nmain3Sec2',
         'goal2',
         'arrmsg1',
         'arrmsg2',
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