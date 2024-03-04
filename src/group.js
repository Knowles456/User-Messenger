import User from '@/user.js';

export default class Group {
    constructor(name) {
        this.name = name;
        this.members = [];
    }

    addMember(user) {
        this.members.push(user);
    }

    removeMember(user) {
        // Implement removal logic
        this.Group.forEach((member, index) => {
            if(member.name = user){
                this.Group.splice(index, 1)
            }        
        })
    }

    distributeMessage(sender, message) {
        this.members.forEach(member => {
            if (member !== sender) {
                member.receiveMessage(message);
            }
        });
    }
}