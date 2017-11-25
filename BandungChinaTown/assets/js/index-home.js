$(document).ready(function(){	

		var navbar = document.getElementById("topNav");
      var sticky = navbar.offsetTop;
      function navSticky() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }

		var gallery = $(".grid-carousel4").slick({
      infinite : true,
      lazyLoad: 'ondemand',
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:true,
      prevArrow: '<button type="button" class="slick-prev"><i class="ion-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ion-chevron-right"></i></button>'
   	});
   	var gallery = $(".grid-carousel5").slick({
      infinite : true,
      lazyLoad: 'ondemand',
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows:true,
      prevArrow: '<button type="button" class="slick-prev"><i class="ion-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ion-chevron-right"></i></button>'
   	});
   	var gallery = $(".grid-carousel3").slick({
      infinite : true,
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:true,
      prevArrow: '<button type="button" class="slick-prev"><i class="ion-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ion-chevron-right"></i></button>'
   	});

});