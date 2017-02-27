const login = require("facebook-chat-api")
const credentials = {email: "#email#", password: "#password#"}
login(credentials, (err, api) => {
    if(err) return console.error(err)
    api.listen((err, message) => {
        console.log("From : "+message.threadID+", Message : "+message.body)
        api.sendMessage(message.body, message.threadID, (sendErr, messageInfo) => {
            if(err) return console.error(sendErr)
            console.log("To : "+message.threadID+", Message : "+message.body)
        });
    })
})
