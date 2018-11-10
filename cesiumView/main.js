(function() {
  "use strict";

  var viewer = new Cesium.Viewer("cesium");

  viewer.dataSources.add(
    Cesium.KmlDataSource.load("../kml/tatsutaKodoMapItems.kml")
  );

  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(135.6895, 34.576, 2000),
    orientation: {
      heading: 0,
      pitch: -0.8,
      roll: 0
    }
  });
})();
