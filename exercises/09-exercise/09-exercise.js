/* Exercise 1 */

$(".col-xs-4.bottom-offset-small a").click(function () {

    var container = $(this).closest(".row").find("a");
    var text = $(this).text();
    var position = "";
    var color = "";


    container.each(function (index) {
        if ($(this).text() == text) {
            position = index;
        }
    });


    switch (position) {
        case 0:
            color = "purple";
            break;
        case 1:
            color = "green";
            break;
        case 2:
            color = "orange";
            break;
    }  

    $(".half-hero .half-image-module").css("background-color", color);

    return false;

});


/* Exercise 2 */
var title = $(".half-hero h2");
var list = [];
var searchTitleNet = "Networking";
var searchTitlePhoto = "Cameras, Photo & Video";


title.each(function () {
    if ($(this).text() == searchTitlePhoto) {
        var originImg = $(this).closest(".half-hero").find(".half-modules-outer-container .img-responsive");
        originImg.each(function () {
            list.push($(this).attr("src"))
        });
    }
});

title.each(function () {
    if ($(this).text() == searchTitleNet) {

        var destinationImg = $(this).closest(".half-hero").find(".half-modules-outer-container .img-responsive");

        destinationImg.each(function (index) {
            $(this).attr("src", list[index]);
        });
    }
});


/* Exercise 3 */
(function ($) {
    var title = $(".half-hero h2");
    var searchTitlePower = "Power, Batteries & Adapters";
    var sum = 0;

    title.each(function () {
        if ($(this).text() == searchTitlePower) {
            var price = $(this).closest(".half-hero").find(".half-modules-outer-container .half-hero-pricing");
            price.each(function () {
                sum += parseFloat($(this).text().split("$")[1]);
            });
        }
    });
    alert("$" + sum);
})(jQuery);