(function() {
  "use strict";

  var viewer = new Cesium.Viewer("cesium");

  viewer.dataSources.add(
    Cesium.KmlDataSource.load("../kml/tatsutaKodoSummary.kml")
  );

  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(135.685, 34.576, 2000),
    duration: 5,
    orientation: {
      heading: 0,
      pitch: -0.8,
      roll: 0
    }
  });
})();
