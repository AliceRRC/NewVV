// export { blablabla };


function initializeGlobe() {
    const options = { zoom: 1.6, position: [47.19537,8.524404] };
    const earth = new WE.map('earth_div', options);
    WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
          bounds: [[-85, -180], [85, 180]],
          minZoom: 0,
          maxZoom: 16,
          tms: true
        }).addTo(earth);
      }

export { initializeGlobe };
