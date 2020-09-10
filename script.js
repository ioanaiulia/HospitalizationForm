function setTodayDate () {
    let date=document.getElementById('today');
    date.value= new Date().toISOString().slice(0,10);
}

function successfullRegistration() {
    window.open("./successfullRegistration/successfullRegistration.html", "_self" ,"" , true);
}