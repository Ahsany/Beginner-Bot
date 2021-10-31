module.exports = {
    name: "test",
    description: "just a little test",
    aliases: [],
    usage: "{prefix} test",
    permission: "All",
    async execute(client, message, args, prefix) {
  
    message.channel.send("Test is a success!")
      //message should be sent to the channel that you typed the command from
    
}
}
