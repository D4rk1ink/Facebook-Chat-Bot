const login = require("facebook-chat-api")
const credentials = {email: "#email#", password: "#password#"}

const day = ["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"]

function sendMessage(api, message, threadID){
    api.sendMessage(message, threadID, (sendErr, messageInfo) => {
        if(sendErr) return console.error(sendErr)
    });
}

login(credentials, (loginErr, api) => {
    if(loginErr) return console.error(loginErr)
    api.listen((err, message) => {
        const messageRec = message.body
        const threadID = message.threadID
        if(messageRec.match(/^สวัสดี/g)){
            api.getUserInfo(threadID, (getErr, ret) => {
                const messageSend = "สวัสดี "+ret[threadID].name
                sendMessage(api, messageSend, threadID)
            })
        }else if(messageRec.match(/^วันนี้วันอะไร/g)){
            const messageSend = "วันนี้วัน"+day[new Date().getDay()]
            sendMessage(api, messageSend, threadID)
        }
    })
})
