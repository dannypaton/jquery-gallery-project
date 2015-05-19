$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  var galleryLength = $('li.thumbnail').length;
  var galleryIndex = 6;
// Make the splash section "fold" 
// when we click the down arrow OR the splash logo

  $('.splashLogo').on('click',function(e){
    e.preventDefault();
    $("#nav").slideDown(1400, function() {
    });
    $('#splash').slideUp(1400, function() {
      console.log("SLIIIIDERRRYYY");
      });
    });

// Make the splash logo appear when you click on the nav bar

  $('.navBar').on("click", function() {
    $('#splash').slideDown(1400, function() {

    });
    // $('.navBar').slideUp(1400, function() {
    // });
  });

// Deactivating the a link in the arrow Containers 


// This is for making the thumbnail with border
// appear in the full gallery section

function fullMaker() {
  var isSelected = $("li.selected");
  if (isSelected = true) {
    var nextSrc = $("li.selected a").data('full');
    $("img.mainImage").attr("src", nextSrc);
  }
};

fullMaker();
// function thumbnailHighlighter() {
//   if (isSelected = true ) {
//     $('.thumbnail img').addClass("selected");
//   }
// };

// This is also for making the full image appear when its thumbnail is clicked on from the carousel


  $('li.thumbnail a').on('click',function(e){
    e.preventDefault();
    var src = $(this).data('full');
    $('img.mainImage').fadeIn().attr('src',src);
    $('.selected').removeClass('selected');
    $(this).parent('li').addClass("selected");
    // $('img.mainImage').addClass('previewFullModal');
  });

  //fancybox thing we can't close

  $('a.fancyLink').on('click',function(e){
    e.preventDefault();
    $('.fancybox').addClass("fancyAppear");
    $('.navBar').hide();
  });

  $('.fancybox').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('fancyAppear');
    $('.navBar').show();
  });

//Select next item (right arrow in gallery section)

  $(".rightArrowContainer a").on("click", function(e) {
    e.preventDefault();
    galleryIndex++;
    console.log(galleryIndex);
    console.log(galleryLength);
    if(galleryIndex < galleryLength) {
      $(".selected").removeClass('selected').next().addClass("selected");
      fullMaker();
    }
    else if(galleryIndex >= galleryLength) {
      $(".selected").removeClass('selected');
      $("li.thumbnail:first").addClass('selected');
      galleryIndex = 0;
      fullMaker();
    }
    //This is removing the class of selected and applying it to the next guy

  });

// select previous item (left arrow in gallery section)

  $(".leftArrowContainer a").on("click", function(e) {
  e.preventDefault();
  galleryIndex--;
  console.log(galleryIndex);
  console.log(galleryLength);
  if(galleryIndex <= 0 ) {
    $(".selected").removeClass('selected');
    $("li.thumbnail:last").addClass('selected');
    galleryIndex = galleryLength;
    fullMaker();
    console.log($("li.thumbnail:last"));
  } else if(galleryIndex <= galleryLength) {
    $(".selected").removeClass('selected').prev().addClass("selected");
    fullMaker();
  };

});

// carousel clickers 


// for(shiftAmount = 0; shiftAmount <= 25; shiftAmount =+ 25){
//   shiftAmount


$('.leftCarouselArrow a').on("click", function(e) {
  e.preventDefault();
  // $("ul.carousel").css("left","0");
  console.log("you are a cool dude");
  $("ul.carousel").css("left","0");
});

$('.rightCarouselArrow a').on("click", function(e) {
  e.preventDefault();
  console.log("you are a cooler dude");
  $("ul.carousel").css("left","auto").css("right","0");
});







}); //end of document ready



