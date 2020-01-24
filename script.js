$( "#button" ).click(function() {
    document.getElementById('output').innerHTML='';
    var string = document.getElementById("code-area").value;
    var obj = JSON.parse(string);
    var variables = Object.keys(obj);
    for (i in variables) {
        document.getElementById('output').innerHTML += (variables[i]+" : "+obj[variables[i]]+"<br>");
    }
});
