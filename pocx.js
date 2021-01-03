var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
    }
}
xhr.open('GET', '/en/content/how-to-book-a-flight.html', true);
xhr.send(null);
