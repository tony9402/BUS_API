var request=require('request')
var cheerio=require('cheerio')

function get_bus_info(TmX, TmY, radius){
  var defaultUrl = "http://ws.bus.go.kr/api/rest/stationinfo/getStationByPos";
  var Key = "";

  var tmY=TmY;
  var tmX=TmX;
  var Radius=radius;
  console.log(tmY + " " + tmX + " " + Radius + "\n")
  var url = defaultUrl+"?ServiceKey="+Key+"&tmX="+tmX+"&tmY="+tmY+"&radius="+Radius;

  request(url,function(err,res,body){
      var $=cheerio.load(body,{xmlMode: true});
    
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

get_bus_info(TmX='126.953453',TmY='37.496115',radius='200');
