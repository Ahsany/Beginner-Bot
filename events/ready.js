module.exports = (client) => {


  console.log("I am up and running!")

  client.user.setStatus("Online");

  client.user.setActivity("Online and Active!");
  
  //the bot is up and ready otherwise will throw an error

}
