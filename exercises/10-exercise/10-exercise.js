var html = '';
var list = [];
var earlyRegister = '';
var url = '';
var lastName = '';

//get all Labels
$(".anavmfe__accordion__item__name").each(function () {
    list.push($(this).html());
});

//loop in all checkbox
$("#cat-anav input:checkbox").each(function () {
    var obj = JSON.parse($(this).attr("data-metrics"))
    //loop in labels
    for (var i = 0; i < list.length; i++) {
        //verify if checkboxes are child of an label
        if (obj.anav_caption == list[i]) {
            //Get the first link of the checkboxes
            if (earlyRegister == '') {
                url = $(this).attr("data-url");
                lastName = list[i];
            } else {
                if (earlyRegister == obj.anav_caption) {
                    //if checkbox is of the same category concat filters' link
                    url += ',' + $(this).attr("name");
                    lastName = obj.anav_caption;
                } else {
                    //else close the url and start a new one
                    html += '<a href="' + url + '">' + lastName + '</a> ';
                    url = $(this).attr("data-url");
                }
            }

            //used to verify if checkbox are in the same category
            earlyRegister = obj.anav_caption;
        }
    }
});

//build the last url
html += '<a href="' + url + '">' + lastName + '</a>';

//draw all the links
$('#cat-cards').prepend(html);
