function onSubmit(token) {
    document.getElementById("submit").submit();
}

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

    var validateFields_Var = validateFields(charname, battletag, classtype, spec, logs, raiderio, message);

    // Validate and construct params
    if (validateFields_Var) {
        var params = {
            username: "Last Hope Guild Website Bot",
            avatar_url: "https://lasthopeguild.com",
            content: "",
            "embeds": [
                {
                  "title": "Application Received from: " + charname,
                  "color": 4437377,
                  "fields": [
                    {
                        "name": "Character Name",
                        "value": "> " + charname
                    },
                    {
                        "name": "BattleTag",
                        "value": "> " + battletag
                    },
                    {
                        "name": "Class",
                        "value": "> " + classtype
                    },
                    {
                        "name": "Specialization",
                        "value": "> " + spec
                    },
                    {
                        "name": "WCL",
                        "value": "> " + logs
                    },
                    {
                        "name": "raider.io",
                        "value": "> " + raiderio
                    },
                    {
                        "name": "What attracted you to Last Hope",
                        "value": "> " + message
                    }
                  ]
                }
            ]
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
    console.log('top');
    var alertvar = "";
    if (charname == "") {
        //alert("You forgot to fill in your Character Name. Please correct before submitting.");
        document.getElementById("charname").style.color = 'white';
        document.getElementById("charname").style.borderColor = '#C59393';
        document.getElementById("charname").style.background = '#C59393';

        alertvar = alertvar + "You forgot to fill in your Character Name. Please correct before submitting." + "<br>";
    }
    if (battletag == "") {
        document.getElementById("battletag").style.color = 'white';
        document.getElementById("battletag").style.borderColor = '#C59393';
        document.getElementById("battletag").style.background = '#C59393';
        alertvar = alertvar + "You forgot to fill in your Battle Tag. Please correct before submitting." + "<br>";
    }
    if (classtype == "") {
        document.getElementById("classtype").style.color = 'white';
        document.getElementById("classtype").style.borderColor = '#C59393';
        document.getElementById("classtype").style.background = '#C59393';
        alertvar = alertvar + "You forgot to fill in your Class. Please correct before submitting." + "<br>";
    }
    if (spec == "") {
        document.getElementById("spec").style.color = 'white';
        document.getElementById("spec").style.borderColor = '#C59393';
        document.getElementById("spec").style.background = '#C59393';
        alertvar = alertvar + "You forgot to fill in your Specialization. Please correct before submitting." + "<br>";
    }
    if (logs == "") {
        document.getElementById("logs").style.color = 'white';
        document.getElementById("logs").style.borderColor = '#C59393';
        document.getElementById("logs").style.background = '#C59393';
        alertvar = alertvar + "You forgot to fill in your Warcraft Logs link. Please correct before submitting." + "<br>";
    }
    if (raiderio == "") {
        document.getElementById("raiderio").style.color = 'white';
        document.getElementById("raiderio").style.borderColor = '#C59393';
        document.getElementById("raiderio").style.background = '#C59393';
        alertvar = alertvar + "You forgot to fill in your raider.io link. Please correct before submitting." + "<br>";
    }
    if (message == "") {
        document.getElementById("message").style.color = 'white';
        document.getElementById("message").style.borderColor = '#C59393';
        document.getElementById("message").style.background = '#C59393';
        alertvar = alertvar + "You forgot to fill in what attracted you to Last Hope. Please correct before submitting." + "<br>";
    }
    var sideNav = document.getElementById("doneMsg");
    if (alertvar != "") {
        console.log('inside alert logic');
        document.getElementById("doneMsg").innerHTML = "";
        sideNav.classList.remove("hiddenContact");
        sideNav.classList.add("visibleContact");
        document.getElementById("doneMsg").innerHTML = alertvar;
        document.getElementById("doneMsg").style.color = '#C59393';
        return false;
    } else {
        sideNav.classList.remove("visibleContact");
        sideNav.classList.add("hiddenContact");
        document.getElementById("doneMsg").style.color = '#98c593';
        document.getElementById("doneMsg").innerHTML = "Message Sent!";
        return true;
    }


}

function clearInput(id) {
    document.getElementById(id).style.color = 'black';
    document.getElementById(id).style.background = 'white';
    document.getElementById(id).style.borderColor = 'gray';
}

var textarea = document.querySelector("textarea");

textarea.addEventListener("input", function() {
    var maxlength = this.getAttribute("maxlength");
    var currentLength = this.value.length;

    if (currentLength >= maxlength) {
        document.getElementById("textAreaCount").innerHTML = "You have reached the maximum number of characters.";
        //console.log("You have reached the maximum number of characters.");
    } else {
        document.getElementById("textAreaCount").innerHTML = maxlength - currentLength + "/" + maxlength + " Chars left";
        //console.log(maxlength - currentLength + " chars left");
    }
});