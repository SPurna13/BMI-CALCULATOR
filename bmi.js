function cal()
{
    var height=document.getElementById("ht").value;
    var weight=document.getElementById("wt").value;
    var bmi=Math.floor((weight)/(height*height));
    if (bmi<=18.5 && height>=1 && weight>=1)
    {
        document.querySelector('#bm').innerHTML=bmi +" i.e "+"Thin";
    }
    else if (bmi>18.5 && bmi<25 && height>=1 && weight>=1)
    {
        document.getElementById("bm").innerHTML=bmi+" i.e "+"Normal weight";
    }
     else if(bmi>=25 && bmi<30 && height>=1 && weight>=1){
        document.getElementById("bm").innerHTML=bmi+" i.e "+"Overweight";
     }
     else if(bmi>=30 && height>=1 && weight>=1){
        document.getElementById("bm").innerHTML=bmi+" i.e "+"Obesity";
     }
}