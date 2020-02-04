module.exports = (Franz) => {
    const getMessages = function getMessages() {
        const unreadMail = parseInt(jQuery("div[title='Inbox'] > span").last().text());
        Franz.setBadge(unreadMail);
    };
    Franz.loop(getMessages);
};
