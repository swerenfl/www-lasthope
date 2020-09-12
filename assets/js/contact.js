function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/753867196190556170/FtWnSZvS-3hXzzC7qwlXoA9JvmqW_TmkBRQkIWRK8dZEAdGPs61Igk_i9IltCaKVaIct");

    request.setRequestHeader('Content-type', 'application/json');
    var charname = document.getElementById("charname").value;
    var battletag = document.getElementById("battletag").value;
    var classtype = document.getElementById("classtype").value;
    var spec = document.getElementById("spec").value;
    var logs = document.getElementById("logs").value;
    var raiderio = document.getElementById("raiderio").value;
    var message = document.getElementById("message").value;

    var params = {
        username: "Application Received from: " + charname,
        avatar_url: "",
        content: "***Character Name:*** " + charname + 
                    "\n***BattleTag:*** " + battletag +
                    "\n***Class:*** " + classtype +
                    "\n***Spec:*** " + spec +
                    "\n***WCL:*** " + logs +
                    "\n***raider.io:*** " + raiderio +
                    "\n***What attracted you:*** " + message
    }

    request.send(JSON.stringify(params));

    var sideNav = document.getElementById("doneMsg");
    sideNav.classList.toggle("hiddenContact");
    sideNav.classList.toggle("visibleContact");

    setTimeout(function(){
        sideNav.classList.toggle("hiddenContact");
        document.getElementById("charname").value = '';
        document.getElementById("battletag").value = '';
        document.getElementById("classtype").value = '';
        document.getElementById("spec").value = '';
        document.getElementById("logs").value = '';
        document.getElementById("raiderio").value = '';
        document.getElementById("message").value = '';
    }, 3000);
}