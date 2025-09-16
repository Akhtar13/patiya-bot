require("dotenv").config();
const { Client, GatewayIntentBits, Events } = require("discord.js");
const express = require("express"); // ✅ add express

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "buddy") {
        await interaction.reply("Buddy time is over 👋");
    }
});

client.login(process.env.BOT_TOKEN);

const app = express();

app.get("/", (req, res) => {
    res.send("Bot is running fine 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🌍 Web server running on port ${PORT}`);
});
