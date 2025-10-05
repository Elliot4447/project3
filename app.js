document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark') document.body.classList.add('theme-dark');
    toggle.addEventListener('click', function () {
      var isDark = document.body.classList.toggle('theme-dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  var back = document.getElementById('backToTop');
  if (!back) {
    back = document.createElement('button');
    back.id = 'backToTop';
    back.textContent = '↑';
    back.type = 'button';
    back.style.display = 'none';
    document.body.appendChild(back);
  }

  back.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) back.style.display = 'inline-block';
    else back.style.display = 'none';
  });

  var mapElement = document.getElementById('map');
  if (mapElement) {
    var loader = document.getElementById('gmapsLoader');
    var key = loader ? loader.getAttribute('data-api-key') : '';

    function initMap() {
      var center = { lat: 40.73061, lng: -73.935242 };
      var map = new google.maps.Map(mapElement, {
        center: center,
        zoom: 11
      });

      var marker = new google.maps.Marker({
        position: center,
        map: map,
        title: 'Main Marker'
      });

      var info = new google.maps.InfoWindow({
        content: 'Hello from New York!'
      });

      marker.addListener('click', function () {
        info.open(map, marker);
      });

      // Allow users to add new markers by clicking the map
      map.addListener('click', function (event) {
        new google.maps.Marker({
          position: event.latLng,
          map: map
        });
      });
    }

    if (key) {
      var script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=' + key + '&callback=initMap';
      script.async = true;
      document.head.appendChild(script);
    }
  }
});