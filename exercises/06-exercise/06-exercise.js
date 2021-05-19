var element = document.getElementsByClassName("row bleed bg-dark bg-septenary compact")
var html = element[0].parentElement.innerHTML;

element[0].parentNode.removeChild(element[0]);

document.getElementById('solncat-offering').insertAdjacentHTML('beforebegin', html);

/* It should be done with just the ID solnca-hero, but there is two of then in the page, what is semantically wrong */