const login = require("facebook-chat-api")
const credentials = {email: "#email#", password: "#password#"}
login(credentials, (err, api) => {
    if(err) return console.error(err)
    api.getUserInfo(api.getCurrentUserID(), (err, ret) => {
        console.log(ret)
    })
})
