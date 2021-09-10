$(document).ready(function() {

    // ===== NAVMENU ===== //
    $('.navmenubtn').click(function() {
        $('.navmenubtn img').toggleClass('navmenubtnclick');
        $('.navmenu').slideToggle(500);
    });

    $('.navmenulinkz').click(function() {
        $('.navmenubtn img').removeClass('navmenubtnclick');
        $('.navmenu').slideToggle(500);
    });


    // ===== DARK MODE ===== //

    var darkMode;

    if (localStorage.getItem('dark-mode')) { 
        darkMode = localStorage.getItem('dark-mode');
    } else {
        darkMode = 'light';
    }

    localStorage.setItem('dark-mode', darkMode);

     if (localStorage.getItem('dark-mode') == 'darktheme') {
        $('body').addClass('darktheme');
        $('.moon').addClass('moondisappear');
        $('.sun').addClass('sunappear');  
    }

    $('.moon').click(function() {
        $('.moon').addClass('moondisappear');
        $('.sun').addClass('sunappear');
        $('body').addClass('darktheme');
        localStorage.setItem('dark-mode', 'darktheme');
    });

    $('.sun').click(function() {
        $('.moon').removeClass('moondisappear');
        $('.sun').removeClass('sunappear');
        $('body').removeClass('darktheme');
        localStorage.setItem('dark-mode', 'light');
    });

    // ===== BUTTON STYLE ===== //
    $('.herobtn').on('mouseenter', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    });

    $('.herobtn').on('mouseout', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({top:y, left:x})
    });

    // ===== CHANGE NAVBAR WHEN SCROLLED ===== //
    $(window).scroll(function() {
        $('.header1').toggleClass('scrolled', $(this).scrollTop()>50);
    });
    
    
    

});


// ===== ACTIVE LINKS ON SCROLL AND CLICK ===== //

// SCROLL //
var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll(".navmenulinkz").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  // console.log(id);
  var selector = `.navmenulinkz[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};