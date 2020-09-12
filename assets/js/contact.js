function sendMessage() {

    // Construct POSTS
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/753867196190556170/FtWnSZvS-3hXzzC7qwlXoA9JvmqW_TmkBRQkIWRK8dZEAdGPs61Igk_i9IltCaKVaIct");

    // Obtain values from document
    request.setRequestHeader('Content-type', 'application/json');
    var charname = document.getElementById("charname").value;
    var battletag = document.getElementById("battletag").value;
    var classtype = document.getElementById("classtype").value;
    var spec = document.getElementById("spec").value;
    var logs = document.getElementById("logs").value;
    var raiderio = document.getElementById("raiderio").value;
    var message = document.getElementById("message").value;

    // Validate fields aren't blank
    if (charname == "" || battletag == "" || classtype == "" || spec == "" || logs == "" || raiderio == "" || message == "") {
        alert("One of the form fields are blank. Please correct before submitting.");
        document.getElementById("charname").style.background = '#c59393';
        document.getElementById("battletag").style.background = '#c59393';
        document.getElementById("classtype").style.background = '#c59393';
        document.getElementById("spec").style.background = '#c59393';
        document.getElementById("logs").style.background = '#c59393';
        document.getElementById("raiderio").style.background = '#c59393';
        document.getElementById("message").style.background = '#c59393';
        return false;
    }

    // Construct params
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

    // Send using JSON
    request.send(JSON.stringify(params));

    // Alert user that they submitted
    var sideNav = document.getElementById("doneMsg");
    sideNav.classList.toggle("hiddenContact");
    sideNav.classList.toggle("visibleContact");

    // Clear form after so many seconds
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
