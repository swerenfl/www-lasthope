function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/753867196190556170/FtWnSZvS-3hXzzC7qwlXoA9JvmqW_TmkBRQkIWRK8dZEAdGPs61Igk_i9IltCaKVaIct");

    request.setRequestHeader('Content-type', 'application/json');
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var params = {
        username: "Application Received from: " + name,
        avatar_url: "",
        content: "From: " + name + "\nMessage: " + message
    }

    request.send(JSON.stringify(params));
}