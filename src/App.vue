<script>
import Group from '@/group.js';
import User from '@/user.js';
import MessageList from '@/components/MessageList.vue';

export default {
  components: {
    MessageList
  } ,

  data() {
    return {
      user: null,
      users: [],
      groupName: '',
      newGroups: [],
      selectedGroup: null
    }
  },


  computed: {

  },

  methods: {
    sendSampleMessage() {
      const sender = this.users[0];
      const receiver = this.users[1];

      sender.sendMessage(receiver, "Hello " + receiver.name + "! How are you?");

      receiver.displayInbox();
    },
    sendSampleGroupMessage(){
      this.user.sendMessage(this.selectedGroup, "This is a sample message!");
    },

    createUsers(){
      this.users = [
        new User("Collin"),
        new User("Jose"),
        new User("Goku"),
        new User("Donald"),
        new User("Goofy"),
        new User("Van Helsing"),
        new User("Pluto"),
        new User("Dracula"),
        new User("George RR Martin"),
      ]
    },
    selectRandomUser() {
      const randomIndex = Math.floor(Math.random() * this.users.length);
      return this.users[randomIndex];
    },

    createGroup() {
    console.log("create group has been called")
    const newGroup = new Group(this.groupName);
    console.log(this.groupName)
    for (let i = 0; i < 4; i++) {
      const selectedUser = this.selectRandomUser();
      newGroup.addMember(selectedUser);
    }
    console.log(newGroup);
    this.newGroups.push(newGroup);
    },
  },


  mounted() {
    this.createUsers();
    console.log(this.users);
    this.user = this.users[0] || null;
    this.users[2].sendMessage(this.user, "Welcome to the messaging app!")
    console.log(this.user)
  },
}
</script>

<template>
  <div class="app">
    <h1>Messenger Board</h1>
    <div>
      <button @click="sendSampleMessage">Send Sample Message</button>
      <input type="text" v-model="groupName" placeholder="Enter group name">
      <button @click="createGroup">Create Group</button>
      <select v-model="selectedGroup">
        <option value="" disabled>Select a group</option>
        <option v-for="(group, index) in newGroups" :key="index" :value="group">{{ group.name }}</option>
      </select>
      <button @click="sendSampleGroupMessage">Send Sample Message To Group</button>
      <div v-for="(group, index) in newGroups" :key="index" class="group-card">
        <h2>Group Created: {{ group.name }}</h2>
        <ul>
          <li v-for="member in group.members" :key="member.id">{{ member.name }}</li>
        </ul>
      </div>
      <MessageList :user="user" />
    </div>

  </div>
</template>

<style>
.group-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
}
button{
  margin: 10px;
}
</style>