var firstWord = "";

$(".category-links h5 a").each(function () {
    firstWord = $(this).text().split(" ")[0];
    $(this).closest(".category-links").find("#category-list-container a").prepend(firstWord + " - ");
});

/* There are multiples IDs #category-list-container in this page, what is semantically wrong */