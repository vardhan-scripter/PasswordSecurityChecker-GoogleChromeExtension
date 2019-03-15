function passwordchange(val) {
         var str=document.getElementById('val').value;
         var str1='';
         var background='#3CC8B1';
      if ((/^[a-zA-Z]+$/i.test(str))) {
        
        if(str.length==0){
          str1='';
          background='#3CC8B1';
        }else if(str.length==1){
          str1='10 seconds to hack';
          background='#ff5454';
        }else if(str.length<=3 && str.length>1){
          str1='20 seconds to hack';
          background='#ff5454';
        }else if(str.length<=5 && str.length>3){
          str1="30 seconds to hack";
          background='#ff5454';
        }else if(str.length<=7 && str.length>5){
          str1="40 seconds to hack";
          background='#ff5454';
        }else if(str.length<=9 && str.length>7){
          str1="50 seconds to hack";
          background='##5eb8d6';
        }else if(str.length<=11 && str.length>9){
          str1="1 minute to hack";
          background='##5eb8d6';
        }else if(str.length<=13 && str.length>11){
          str1="2 minutes to hack";
          background='##5eb8d6';
        }else if(str.length<=15 && str.length>13){
          str1="5 minutes to hack";
          background='##5eb8d6';
        }else if(str.length<=17 && str.length>15){
          str1="10 minutes to hack";
          background='#ffaa0e';
        }else if(str.length<=19 && str.length>17){
          str1="1 day to hack";
          background='#ffaa0e';
        }else if(str.length<=21 && str.length>19){
          str1="10 days to hack";
          background='#ffaa0e';
        }else if(str.length>21){
          str1="forever";
          background='#5ce85c';
        }
      }
      else if (/^[0-9]+$/i.test(str)) {
        if(str.length==0){
          str1='';
          background='#3CC8B1';
        }else if(str.length==1){
          str1="5 seconds to hack";
          background='#ff5454';
        }if(str.length<=3 && str.length>1){
          str1="15 seconds to hack";
          background='#ff5454';
        }if(str.length<=5 && str.length>3){
          str1="25 seconds to hack";
          background='#ff5454';
        }if(str.length<=7 && str.length>5){
          str1="35 seconds to hack";
          background='#ff5454';
        }if(str.length<=9 && str.length>7){
          str1="45 seconds to hack";
          background='##5eb8d6';
        }if(str.length<=11 && str.length>9){
          str1="2 minute to hack";
          background='##5eb8d6';
        }if(str.length<=13 && str.length>11){
          str1="5 minutes to hack";
          background='##5eb8d6';
        }if(str.length<=15 && str.length>13){
          str1="7 minutes to hack";
          background='##5eb8d6';
        }if(str.length<=17 && str.length>15){
          str1="10 minutes to hack";
          background='#ffaa0e';
        }if(str.length<=19 && str.length>17){
          str1="1 day to hack";
          background='#ffaa0e';
        }if(str.length<=21 && str.length>19){
          str1="10 days to hack";
          background='#ffaa0e';
        }if(str.length>21){
          str1="forever";
          background='#5ce85c';
        }
      }else if (/^[a-zA-Z0-9]+$/i.test(str)) {
       if(str.length==0){
          str1='';
          background='#3CC8B1';
        }else if(str.length==1){
          str1="15 seconds to hack";
          background='#ff5454';
        }if(str.length<=3 && str.length>1){
          str1="35 seconds to hack";
          background='#ff5454';
        }if(str.length<=5 && str.length>3){
          str1="55 seconds to hack";
          background='#ff5454';
        }if(str.length<=7 && str.length>5){
          str1="2 minutes to hack";
          background='#ff5454';
        }if(str.length<=9 && str.length>7){
          str1="5 minutes to hack";
          background='#5eb8d6';
        }if(str.length<=11 && str.length>9){
          str1="10 minute to hack";
          background='#5eb8d6';
        }if(str.length<=13 && str.length>11){
          str1="1 hour to hack";
          background='#5eb8d6';
        }if(str.length<=15 && str.length>13){
          str1="1 day to hack";
          background='#5eb8d6';
        }if(str.length<=17 && str.length>15){
          str1="5 days to hack";
          background='#ffaa0e';
        }if(str.length<=19 && str.length>17){
          str1="1 week to hack";
          background='#ffaa0e';
        }if(str.length<=21 && str.length>19){
          str1="1 year to hack";
          background='#ffaa0e';
        }if(str.length>21){
          str1="forever";
          background='#5ce85c';
        }
      }
      document.getElementById('h1').innerHTML=str1;
      document.getElementById('body').style.background=background;
    }

$(document).ready(function() {
    $(document).keydown(function(e) {
        passwordchange();
    });
});