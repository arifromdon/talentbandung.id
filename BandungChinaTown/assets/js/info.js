
	function initMap() {
        var BCT = {lat: -6.917264, lng: 107.593209};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: BCT
        });
        var marker = new google.maps.Marker({
          position: BCT,
          map: map
        });
      }
