var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_testGeoJSONOGRGeoJSONPolygon_0 = new ol.format.GeoJSON();
var features_testGeoJSONOGRGeoJSONPolygon_0 = format_testGeoJSONOGRGeoJSONPolygon_0.readFeatures(json_testGeoJSONOGRGeoJSONPolygon_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_testGeoJSONOGRGeoJSONPolygon_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_testGeoJSONOGRGeoJSONPolygon_0.addFeatures(features_testGeoJSONOGRGeoJSONPolygon_0);var lyr_testGeoJSONOGRGeoJSONPolygon_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_testGeoJSONOGRGeoJSONPolygon_0, 
                style: style_testGeoJSONOGRGeoJSONPolygon_0,
    title: 'testGeoJSON OGRGeoJSON Polygon<br />\
    <img src="styles/legend/testGeoJSONOGRGeoJSONPolygon_0_0.png" /> A<br />\
    <img src="styles/legend/testGeoJSONOGRGeoJSONPolygon_0_1.png" /> B<br />\
    <img src="styles/legend/testGeoJSONOGRGeoJSONPolygon_0_2.png" /> C<br />\
    <img src="styles/legend/testGeoJSONOGRGeoJSONPolygon_0_3.png" /> D<br />\
    <img src="styles/legend/testGeoJSONOGRGeoJSONPolygon_0_4.png" /> E<br />\
    <img src="styles/legend/testGeoJSONOGRGeoJSONPolygon_0_5.png" /> F<br />\
    <img src="styles/legend/testGeoJSONOGRGeoJSONPolygon_0_6.png" /> G<br />\
    <img src="styles/legend/testGeoJSONOGRGeoJSONPolygon_0_7.png" /> <br />'
        });

lyr_testGeoJSONOGRGeoJSONPolygon_0.setVisible(true);
var layersList = [baseLayer,lyr_testGeoJSONOGRGeoJSONPolygon_0];
lyr_testGeoJSONOGRGeoJSONPolygon_0.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'MEMBER': 'MEMBER', 'ADDRESS': 'ADDRESS', 'PHONE': 'PHONE', 'FAX': 'FAX', 'EMAIL': 'EMAIL', 'CREATED_US': 'CREATED_US', 'CREATED_DA': 'CREATED_DA', 'LAST_EDITE': 'LAST_EDITE', 'LAST_EDI_1': 'LAST_EDI_1', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_testGeoJSONOGRGeoJSONPolygon_0.set('fieldImages', {'DISTRICT': 'TextEdit', 'MEMBER': 'TextEdit', 'ADDRESS': 'TextEdit', 'PHONE': 'TextEdit', 'FAX': 'TextEdit', 'EMAIL': 'TextEdit', 'CREATED_US': 'TextEdit', 'CREATED_DA': 'TextEdit', 'LAST_EDITE': 'TextEdit', 'LAST_EDI_1': 'TextEdit', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_testGeoJSONOGRGeoJSONPolygon_0.set('fieldLabels', {'DISTRICT': 'inline label', 'MEMBER': 'inline label', 'ADDRESS': 'header label', 'PHONE': 'inline label', 'FAX': 'inline label', 'EMAIL': 'header label', 'CREATED_US': 'header label', 'CREATED_DA': 'no label', 'LAST_EDITE': 'no label', 'LAST_EDI_1': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_testGeoJSONOGRGeoJSONPolygon_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});