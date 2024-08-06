
// Jesus Guerrero 4 mar 2017
$(document).ready(function () {
    var $navButtons = $(".btn");

    slideFunctions();

    function slideFunctions() {
        var $slideShow = $("#slideShow"),
            $slideImg = $(".slide-img"),
            $slideItem = $(".slide-item"),
            $indicator = $("[rol='low-indicator']"),
            slideLoopCount = 0,
            slideTextCount = 1,
            slideOffset = 50;

        const SLIDE_TIME = 5000;

        initSlider();


        // functions
        function initSlider() {
            $navButtons.on('mouseover', blurSlider);
            $navButtons.on('mouseleave', quitSliderBlur);
            changeSlide();
        }

        function changeSlide() {
            setInterval(change, SLIDE_TIME);
            $indicator.eq(slideLoopCount).animate({ width: "100%" }, SLIDE_TIME);

            function change() {
                if (slideLoopCount < $slideImg.length - 1) {
                    $("#slideText" + slideTextCount).css("display", "none");
                    $("#slideText" + slideTextCount).animate({opacity: "0"}, 200);
                    slideLoopCount++;
                    slideTextCount++;
                    slideOffset -= 50;
                    $slideShow.animate({ left: slideOffset + "vw" }, 1000);
                    $("#slideText" + slideTextCount).css("display", "flex");
                    $("#slideText" + slideTextCount).animate({opacity: "1"}, 200);
                    $indicator.eq(slideLoopCount).animate({ width: "100%" }, SLIDE_TIME);
                } else {
                    $("#slideText" + slideTextCount).css("display", "none");
                    $("#slideText" + slideTextCount).animate({opacity: "0"}, 200);
                    slideLoopCount = 0;
                    slideTextCount = 1;
                    slideOffset = 50;
                    $slideShow.animate({ left: slideOffset + "vw" }, 1000);
                    $indicator.animate({ width: "0%" }, 200);
                    $("#slideText" + slideTextCount).css("display", "flex");
                    $("#slideText" + slideTextCount).animate({opacity: "1"}, 200);
                    $indicator.eq(slideLoopCount).animate({ width: "100%" }, SLIDE_TIME);
                }
            }
        }

        function blurSlider() {
            $slideShow.addClass("blur-slide");
        }

        function quitSliderBlur() {
            $slideShow.removeClass("blur-slide");
        }
    }
});