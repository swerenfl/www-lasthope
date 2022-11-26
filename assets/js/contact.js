// reCAPTCHA v3 function 
function onSubmit(token) {
    document.getElementById("submit").submit();
}

// sendMessage function called on the Contact Form
function sendMessage() {

    // Construct POSTS
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/754529916833366097/qvvlv3jgKazrlMl4HFGTGPx7eVIF0Zf-xkCztZuouC6oTFCDsHav5kCbhXhmQEBw2pdw");

    // Obtain values from document
    request.setRequestHeader('Content-type', 'application/json');
    var charname = document.getElementById("charname").value;
    var battletag = document.getElementById("battletag").value;
    var discord = document.getElementById("discord").value;
    var spec = document.getElementById("spec").value;
    var logs = document.getElementById("logs").value;
    var raiderio = document.getElementById("raiderio").value;
    var message = document.getElementById("message").value;
    var timeisnow = new Date().toISOString();
    var validateFields_Var = validateFields(charname, battletag, discord, spec, logs, raiderio, message, timeisnow);


    // Validate and construct params
    if (validateFields_Var) {
        var params = {
            username: "Application Received from: " + charname,
            avatar_url: "https://lasthopeguild.com/favicon.png",
            content: "",
            timestamp: timeisnow,
            components: [
                {
                  "type": 1,
                  "components": [
                    {
                      "style": 3,
                      "label": "Good",
                      "custom_id": "row_0_button_0",
                      "disabled": false,
                      "emoji": {
                        "id": null,
                        "name": "👍"
                      },
                      "type": 2
                    },
                    {
                      "style": 4,
                      "label": "Bad",
                      "custom_id": "row_0_button_1",
                      "disabled": false,
                      "emoji": {
                        "id": null,
                        "name": "👎"
                      },
                      "type": 2
                    }
                  ]
                }
            ],
            embeds: [
                {
                  "title": "Please review the application below and vote with either :thumbsup: or :thumbsdown:",
                  "color": 4437377,
                  "footer": {
                    "text": "Source: lasthopeguild.com",
                    "icon_url": "https://lasthopeguild.com/favicon.png"
                  },
                  "fields": [
                    {
                        "name": "Character Name",
                        "value": "> " + charname
                    },
                    {
                        "name": "Battle Tag",
                        "value": "> " + battletag
                    },
                    {
                        "name": "Discord Tag",
                        "value": "> " + discord
                    },
                    {
                        "name": "Class & Specialization",
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
            document.getElementById("discord").value = '';
            document.getElementById("spec").value = '';
            document.getElementById("logs").value = '';
            document.getElementById("raiderio").value = '';
            document.getElementById("message").value = '';
        }, 3000);
    }
}

// Validate that the fields are filled in
function validateFields(charname, battletag, discord, spec, logs, raiderio, message) {
    var alertvar = "";
    if (charname == "") { // Character Name
        document.getElementById("charname").style.borderColor = '#C59393';
        document.getElementById("charname").style.background = '#C59393';
        alertvar = alertvar + "You forgot to fill in your Character Name. Please correct before submitting." + "<br>";
    }
    if (battletag == "") { // Battle Tag
        document.getElementById("battletag").style.borderColor = '#C59393';
        document.getElementById("battletag").style.background = '#C59393';
        alertvar = alertvar + "You forgot to fill in your Battle Tag. Please correct before submitting." + "<br>";
    }
    if (discord == "") { // Discord Tag
        document.getElementById("discord").style.borderColor = '#C59393';
        document.getElementById("discord").style.background = '#C59393';
        alertvar = alertvar + "You forgot to fill in your Discord Tag. Please correct before submitting." + "<br>";
    }
    if (spec == "") { // Specialization
        document.getElementById("spec").style.borderColor = '#C59393';
        document.getElementById("spec").style.background = '#C59393';
        alertvar = alertvar + "You forgot to fill in your Specialization. Please correct before submitting." + "<br>";
    }
    if (logs == "") { // WCL logs
        document.getElementById("logs").style.borderColor = '#C59393';
        document.getElementById("logs").style.background = '#C59393';
        alertvar = alertvar + "You forgot to fill in your Warcraft Logs link. Please correct before submitting." + "<br>";
    }
    if (raiderio == "") { // raider.io link
        document.getElementById("raiderio").style.borderColor = '#C59393';
        document.getElementById("raiderio").style.background = '#C59393';
        alertvar = alertvar + "You forgot to fill in your raider.io link. Please correct before submitting." + "<br>";
    }
    if (message == "") { // What attracted you
        document.getElementById("message").style.borderColor = '#C59393';
        document.getElementById("message").style.background = '#C59393';
        alertvar = alertvar + "You forgot to fill in what attracted you to Last Hope. Please correct before submitting." + "<br>";
    }

    // Show alerts and/or clear alerts based on content
    var sideNav = document.getElementById("doneMsg");
    if (alertvar != "") {
        console.log('inside alert logic');
        document.getElementById("doneMsg").innerHTML = "";
        sideNav.classList.remove("hiddenContact");
        sideNav.classList.add("visibleContact");
        document.getElementById("doneMsg").innerHTML = alertvar;
        document.getElementById("doneMsg").style.color = '#C59393';
        return false;
    } 
    else {
        sideNav.classList.remove("visibleContact");
        sideNav.classList.add("hiddenContact");
        document.getElementById("doneMsg").style.color = '#98c593';
        document.getElementById("doneMsg").innerHTML = "Message Sent!";
        return true;
    }
}

// Clear Input function
function clearInput(id) {
    document.getElementById(id).style.color = 'black';
    document.getElementById(id).style.background = 'white';
    document.getElementById(id).style.borderColor = 'gray';
}

// Field listeners
var textarea = document.querySelector("textarea");
textarea.addEventListener("input", function() {
    var maxlength = this.getAttribute("maxlength");
    var currentLength = this.value.length;

    if (currentLength >= maxlength) {
        document.getElementById("textAreaCount").innerHTML = "You have reached the maximum number of characters.";
    } 
    else {
        document.getElementById("textAreaCount").innerHTML = maxlength - currentLength + "/" + maxlength + " Chars left";
    }
});