function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const myObj = JSON.parse(this.responseText);
            document.getElementById("nev").value = myObj.results[0].name.title + " " + myObj.results[0].name.first + " " + myObj.results[0].name.last;
            document.getElementById("nem").value = myObj.results[0].gender;
            document.getElementById("szuletes").value = Dob(myObj.results[0].dob.date);
            document.getElementById("orszag").value = myObj.results[0].location.country;
            document.getElementById("varos").value = myObj.results[0].location.city;
            document.getElementById("email").value = myObj.results[0].email;
            document.getElementById("telefon").value = myObj.results[0].phone;
            document.getElementById("username").value = myObj.results[0].login.username;
            document.getElementById("pw").value = myObj.results[0].login.password;
            document.getElementById("profilkep").src = myObj.results[0].picture.thumbnail;
        }
    };
    xhttp.open("GET", "https://randomuser.me/api/", true);
    xhttp.send();
}

function Dob(szoveg){
    var szuletesiDatum = "";
    for(i = 0; i < 10; i++){
        szuletesiDatum += szoveg[i];
    }
    return szuletesiDatum;
}