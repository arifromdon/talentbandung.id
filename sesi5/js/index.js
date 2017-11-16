	$.get('https://ariona.net/talentbandung/', function(data, status) {
		for(var i = 0; i < data.length;i++){
			$('.grid-layout').append
			('<div class="grid-item"><a href="single.html"><div class="taman"><figure><img src="'+data[i].image.thumbnail+'"/></figure><div class="taman-detail"><h2><span class="subtitle">Taman</span><span class="title">'+data[i].nama+ '</span></h2><p>'+data[i].alamat+'</p></div></div></a></div>');		
		}
	} );

	var input = $("#input");
	 	input.keyup(ft);

	function ft(){
		var taman = $('.taman');

		for (var i = 0; i < taman.length; i++) {
			var cari = $(taman[i]).text().toUpperCase();
			  if (cari.indexOf(input.val().toUpperCase()) > -1) {
		      $(taman[i]).slideDown();
			  } 
			  else {
		      $(taman[i]).slideUp();
			  }
		}
	}