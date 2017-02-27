const login = require("facebook-chat-api")
const credentials = {email: "#email#", password: "#password#"}
login(credentials, (err, api) => {
    if(err) return console.error(err)
    api.getFriendsList((err, data) => {
        console.log(data)
    })
})
