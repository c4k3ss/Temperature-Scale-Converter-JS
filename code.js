var darkmodetrue = 2;
var OrgFin = 0;
var OrgVal = 0;
var temp1 = "Fahrenheit";
var temp2 = "Fahrenheit";
var nine = 9;
var five = 5;
function save()
{
    OrgVal = document.getElementById("orgval").value;
    OrgVal = Number(OrgVal);
    if (temp1 == "Fahrenheit")
    {
        if (temp2 == "Fahrenheit")
        document.getElementById("demo").innerHTML = OrgVal;
        if (temp2 == "Celsius")
        {
            OrgFin = (OrgVal-32)*five/nine;
            document.getElementById("demo").innerHTML = OrgFin;
        }
        if (temp2 == "Kelvin")
        {
            OrgFin = (OrgVal-32)*five/nine+273.15;
            document.getElementById("demo").innerHTML = OrgFin;
        }
        if (temp2 == "Rankine")
        {
            OrgFin = OrgVal+459.67; 
            document.getElementById("demo").innerHTML = OrgFin;
        }
    }
    if (temp1 == "Celsius")
    {
        if (temp2 == "Fahrenheit")
        { OrgFin = (OrgVal*nine/five)+32;
        document.getElementById("demo").innerHTML = OrgFin;}
        if (temp2 == "Celsius")
        {
            document.getElementById("demo").innerHTML = OrgVal;
        }
        if (temp2 == "Kelvin")
        {
            OrgFin = OrgVal+273.15;
            document.getElementById("demo").innerHTML = OrgFin;
        }
        if (temp2 == "Rankine")
        {
            OrgFin = OrgVal*nine/five+491.67; 
            document.getElementById("demo").innerHTML = OrgFin;
        }
    }
    if (temp1 == "Kelvin")
    {
        if (temp2 == "Fahrenheit")
        { OrgFin = (OrgVal-273.15)*nine/five+32;
        document.getElementById("demo").innerHTML = OrgFin;}
        if (temp2 == "Celsius")
        {
            OrgFin = OrgVal-273.15;
            document.getElementById("demo").innerHTML = OrgFin;
        }
        if (temp2 == "Kelvin")
        {
            document.getElementById("demo").innerHTML = OrgVal;
        }
        if (temp2 == "Rankine")
        {
            OrgFin = OrgVal*1.8; 
            document.getElementById("demo").innerHTML = OrgFin;
        }
    }
    if (temp1 == "Rankine")
    {
        if (temp2 == "Fahrenheit")
        { OrgFin = OrgVal-459.67;
        document.getElementById("demo").innerHTML = OrgFin;}
        if (temp2 == "Celsius")
        {
            OrgFin = (OrgVal-491.67)*5/9;
            document.getElementById("demo").innerHTML = OrgFin;
        }
        if (temp2 == "Kelvin")
        {
            OrgFin = OrgVal*5/9;
            document.getElementById("demo").innerHTML = OrgFin;
        }
        if (temp2 == "Rankine")
        {
            document.getElementById("demo").innerHTML = OrgVal;
        }
    }
    OrgVal = 0;
    OrgFin = 0;
}
function Change1(){
    temp1 = document.getElementById("temp1").value;

}
function Change2(){
    temp2= document.getElementById("temp2").value;
}
function darkmode(){
    darkmodetrue++;
    if (darkmodetrue == 1)
    {
        document.getElementById("body").style.backgroundColor = 'white';
        document.getElementById("darkmode").innerHTML = "Off";
    }
    if (darkmodetrue == 2)
    document.getElementById("body").style.backgroundColor = '#2d3449';
    document.getElementById("darkmode").innerHTML = "On";
    if (darkmodetrue == 3)
    {
        document.getElementById("body").style.backgroundColor = 'white';
        document.getElementById("darkmode").innerHTML = "Off";
        darkmodetrue = 1;
    }
}