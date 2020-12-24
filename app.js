const wp = require('venom-bot');
const uuid = require('uuid');

wp.create(
    uuid.v4(),
    (base64Qrimg, asciiQR, attempts, urlCode) => { },
    (statusSession, session) => { },
    {
        autoClose: false
    },
).then(client => {
    start(client);
}).catch((erro) => {
    console.log(erro);
});

/**
 * 
 * @param {wp.Whatsapp} client 
 */
async function start(client) {
    const unreadMessages = client.getAllUnreadMessages();
    console.log('unreadMessages: ', JSON.stringify(unreadMessages, null, 4));
}