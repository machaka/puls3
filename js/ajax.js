$(function() {
    $.get('../logos_footer.html', function(html) {
        $('footer').append(html);
    });

    $.get('usuario.json', function(json) {
        console.log(json);
    })

});

var base_url="http://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInformacion(lat, lon) {

    var query='SELECT * FROM geo.placefinder WHERE text="'+ lat + ', '+
        lon + '" AND gflags="R"';
    query = encodeURIComponent(query);
    console.log(query);

    $.ajax({
        url: base_url + "q=" + query,
        dataType: 'jsonp',
        jsonpCallback: 'procesarGeoInfo',
        data: {
            format: 'json'
        }
    });
}

function procesarGeoInfo(datos) {
    console.log("se vino para aca");
    console.log(datos);
    var res= datos.query.results.Result;
    var barrio = res.neighborhood;
    var ciudad = res.city;
    var pais   = res.country;
    var woeid  = res.woeid;

    $('#geo')
        .prepend('<p><strong>' + barrio + '</strong><br>'+ ciudad+'<br><strong>' + pais +'</strong></p>');

    obtenerClima(woeid);

}

function obtenerClima(woeid) {

    var query='select * from weather.forecast where woeid="'+ woeid + '" and u="c"';
    query = encodeURIComponent(query);
    console.log(query);

    $.ajax({
        url: base_url + "q=" + query,
        dataType: 'jsonp',
        jsonpCallback: 'procesarClimaInfo',
        data: {
            format: 'json'
        }
    });
}

function procesarClimaInfo(datos) {;
    console.log(datos);
    var res    = datos.query.results.channel;
    var clima  = res.item.condition.temp;
    var unidad = res.units.temperature;
    var code   = res.item.condition.code;
    $('#clima')
        .append('<img src="http://l.yimg.com/a/i/us/we/52/' + code + '.gif"/>')
        .append('<p><strong>'+ clima +  '° ' + unidad + '</strong></p>')
    //$('#clima').append(res.item.description);


}