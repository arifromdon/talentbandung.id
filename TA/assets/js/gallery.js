var navbar = document.getElementById("topNav");
      var sticky = navbar.offsetTop;

      function navSticky() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }

var gallery = $(".gallery-carousel").slick({
      infinite : true,
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:true,
      prevArrow: '<button type="button" class="slick-prev"><i class="ion-arrow-left-c"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ion-arrow-right-c"></i></button>'
   });