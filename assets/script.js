(function ($) {
  "use strict";

  /* sidr menu inital ===============*/
  $(".navbar-toggle").sidr({
    name: "sidr-main",
    side: "right",
    source: "#sidr",
    displace: false,
    renaming: false,
  });

  $(".closeMenu").on("click", function () {
    $.sidr("close", "sidr-main");
  });

  /* sticky header js ===============*/
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });

  /* filter menu toggle js ===============*/

  $(".fileter-menu").click(function () {
    $(".products-category").toggleClass("opened");
    $(this).toggleClass("open");
  });

  /* slide-categories slider inital ===============*/

  $(".slide-categories").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* trendy items slider inital ===============*/

  $(".trendy-items").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* testimonial slider inital ===============*/

  $(".testimonial-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });

  /* Isotope inital ===============*/

  $(".products-category .slide-categories .single-category").on(
    "click",
    function () {
      $(this).addClass("active").siblings().removeClass("active");
      var filterValue = $(this).attr("data-filter");

      $(".category-section").isotope({
        filter: filterValue,
      });
    }
  );

  /* tab js ===============*/
  $(".innerCollectionList-wrapper .innerNavList li").click(function () {
    var tab_id = $(this).attr("data-collection");

    $(".innerCollectionList-wrapper .innerNavList li").removeClass("active");
    $(
      ".innerCollectionList-wrapper .innerCollectionList .dataCollection"
    ).removeClass("active");

    $(this).addClass("active");
    $("#" + tab_id).addClass("active");
  });

  /* Header height = gutter height js ===============*/
  function setGutterHeight() {
    var header = document.querySelector(".navbar"),
      gutter = document.querySelector(".header_gutter");
    gutter.style.height = header.offsetHeight + "px";
  }
  setGutterHeight();
  window.onload = setGutterHeight;
  window.onresize = setGutterHeight;
})(jQuery);
