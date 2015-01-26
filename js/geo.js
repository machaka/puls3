$(function(){
    var geo = navigator.geolocation;
    var opciones = {}
    function geoError() {
        console.log("no pude recuperar tu posicion");
    }

    function geoExito(posicion) {
        var lat  = posicion.coords.latitude;
        var lon  = posicion.coords.longitude;
        var mapa = new Image();
        mapa.src = "http://maps.googleapis.com/maps/api/" +
            "staticmap?zoom=13&size=300x300&sensor=false&center=" + lat + "," + lon;
        $('#geo').append(mapa);

        obtenerGeoInformacion(lat, lon);
    }



    geo.getCurrentPosition(geoExito, geoError, opciones);
});
