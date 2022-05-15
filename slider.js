var _slayt=document.getElementsByClassName("slayt");


var slaytsayisi=_slayt.length;
var slaytno=0;
var i=0;
slaytGoster(slaytno);

function sonrakiSlayt()
{
    slaytno++;
    slaytGoster(slaytno);
}
function oncekiSlayt()
{
    slaytno--;
    slaytGoster(slaytno);
}


function slaytGoster(slaytnumarasi)
{
    slaytno=slaytnumarasi;
    if(slaytnumarasi>=slaytsayisi)
    {
        slaytno=0;
    }
    if(slaytnumarasi<0)
    {
        slaytno=slaytsayisi-1;
    }
    for(i=0;i<slaytsayisi;i++)
    {
        _slayt[i].style.display="none";
    }
    _slayt[slaytno].style.display="block";
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  

    if (name==null || name==""){  
      alert("Email alanı dolu olmalı");  
      return false;  
    }else if(password.length<10){  
      alert("Parola en az 10 haneli olmalı.");  
      return false;  
      }  
    }  


