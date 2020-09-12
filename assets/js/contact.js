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
    var validateFields = validateFields(charname, battletag, classtype, spec, logs, raiderio, message);
    
    // Check if blank then construct params
    if (validateFields) {
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
        setTimeout(function() {
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
}

function validateFields(charname, battletag, classtype, spec, logs, raiderio, message) {
    if (charname == "") {
        alert("You forgot to fill in your Character Name. Please correct before submitting.");
        document.getElementById("charname").style.background = '#c59393';
        return false;
    } else if (battletag == "") {
        alert("You forgot to fill in your Battle Tag. Please correct before submitting.");
        document.getElementById("battletag").style.background = '#c59393';
        return false;
    } else if (classtype == "") {
        alert("You forgot to fill in your Class. Please correct before submitting.");
        document.getElementById("classtype").style.background = '#c59393';
        return false;
    } else if (spec == "") {
        alert("You forgot to fill in your Specialization. Please correct before submitting.");
        document.getElementById("spec").style.background = '#c59393';
        return false;
    } else if (logs == "") {
        alert("You forgot to fill in your Warcraft Logs link. Please correct before submitting.");
        document.getElementById("logs").style.background = '#c59393';
        return false;
    } else if (raiderio == "") {
        alert("You forgot to fill in your raider.io link. Please correct before submitting.");
        document.getElementById("raiderio").style.background = '#c59393';
        return false;
    } else if (message == "") {
        alert("You forgot to fill in what attracted you to Last Hope. Please correct before submitting.");
        document.getElementById("message").style.background = '#c59393';
        return false;
    } else {
        return true;
    }
}