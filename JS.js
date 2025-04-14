/*function multtable()
{
    num1=parseInt(document.getElementById("inp1").value);
    num2=parseInt(document.getElementById("inp2").value);
    var result = " ";
    if( num1<10&&num1>2&&num2<10&&num2>2){
        

    for (var m = 1; m <= num1; m++) {
        
        for (var n = 1; n <= num2; n++) {
            result += (m*n) + " ";
        }
        result += "<br>";
    }
    document.getElementById("output").innerHTML=result;

}   else{
        alert("Please enter numbers between 2 and 10");
    }
}
*/
function multtable() {

    const num1 = parseInt(document.getElementById("inp1").value);
    const num2 = parseInt(document.getElementById("inp2").value);
    let result = "";

    if (num1 > 2 && num1 < 10 && num2 > 2 && num2 < 10) {
        result += "<table>";

        for (let m = 1; m <= num1; m++) {
            result += "<tr>";
            for (let n = 1; n <= num2; n++) {
                result += "<td>" + (m * n) + "</td>";
            }
            result += "</tr>";
        }

        result += "</table>";
        document.getElementById("output").innerHTML = result;
    } else {
        alert("Please enter numbers between 2 and 10");
    }
    
}