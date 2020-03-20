const commando = require('discord.js-commando');

module.exports = class Cool extends commando.Command {
    constructor(client){
        super(client, {
            name: "cool",
            memberName: "cool",
            group: "fun",
            description: "Cool up something",
            args: [
                {
                    key: "cool",
                    type: "string",
                    prompt: "What do you want to cool?",
                }
            ]
        })
    }
    exec(msg, cmd) {

        msg.channel.send("Cooling up " + cmd.cool);
    }
}