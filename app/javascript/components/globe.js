// export { blablabla };


function initializeGlobe() {
    // const options = { zoom: 3, position: [47.19537,8.524404] };
    const earth = new WE.map('earth_div');
    earth.setView([-14.24, -51.92], 2);
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: '© OpenStreetMap contributors',
          // bounds: [[-85, -180], [85, 180]],
          // minZoom: 0,
          // maxZoom: 16,
          // tms: true
        }).addTo(earth);
    let before = null;
        requestAnimationFrame(function animate(now) {
            const c = earth.getPosition();
            const elapsed = before? now - before: 0;
            before = now;
            earth.setCenter([c[0], c[1] + 0.1*(elapsed/30)]);
            requestAnimationFrame(animate);
          });

    const marker = WE.marker([-14.24, -51.92]).addTo(earth);
    marker.bindPopup("<img src='assets/Goias.JPG' class='img-fluid'></img><br>I am a popup.<br />", {maxWidth: 150, closeButton: true});
    marker.setLatLng([-14.24, -51.92]);

    // const markerCustom = WE.marker([50, -9], 'globe.png', 100, 24).addTo(earth);
      }

export { initializeGlobe };
