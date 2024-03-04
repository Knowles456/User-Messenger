import Group from '@/group.js'

export default class User {
    constructor(name) {
        this.name = name;
        this.inbox = [];
    }

    sendMessage(receiver, message) {
        // Implement logic based on receiver type (User or Group)
        if(receiver instanceof User){
            receiver.receiveMessage(message);
        }else if(receiver instanceof Group){
            receiver.distributeMessage(this.User, message);
        }else{
            console.log("Error");
        }
    }

    receiveMessage(message) {
        this.inbox.push(message);
    }

    displayInbox() {
        console.log(`${this.name}'s Inbox:`, this.inbox);
    }
}
