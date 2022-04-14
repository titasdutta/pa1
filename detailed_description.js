function parseQString(query){
    var query_params = query.split("%20");
    console.log(query_params);
    new_query = query_params.join(" ");
    return new_query;
}

var qString = location.href.split("?")[1].split("&")[0];
document.getElementById("product_name").value = parseQString(qString);

var image =  location.href.split("?")[1].split("&")[1];
document.getElementById("cloth").src = image;