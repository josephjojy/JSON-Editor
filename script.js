function convertToText() {
    document.getElementById('output').value='';
    var string = document.getElementById("code-area").value;
    var obj = JSON.parse(string);
    var variables = Object.keys(obj);
    for (i in variables) {
        document.getElementById('output').value += (variables[i]+" : "+obj[variables[i]]+"\n");
    }
}