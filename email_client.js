function parseQuery(query){
    var query_params = query.split("+");
    console.log(query_params);
    new_query = query_params.join(" ");
    return new_query;
}

var product = location.href.split("?")[1].split("&")[0].split("=")[1];
document.getElementById("body").value = "PRODUCT NAME: " + parseQuery(product);

var quantity = location.href.split("?")[1].split("&")[1].split("=")[1];
document.getElementById("body").value += '\n' + "QUANTITY: " + quantity;

var pname = location.href.split("?")[1].split("&")[2].split("=")[1] + " " + location.href.split("?")[1].split("&")[3].split("=")[1];
document.getElementById("body").value += '\n' + "NAME: " + pname;

var ship_address = location.href.split("?")[1].split("&")[5].split("=")[1];
document.getElementById("body").value += '\n' + "SHIPPING ADDRESS: " + parseQuery(ship_address);

document.getElementById("send").onclick = function() {
    alert("Email successfully sent!");
    window.location.href = "./index.html";
};