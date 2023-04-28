const myToken = process.env['TOKEN']
import { Client, Events, GatewayIntentBits } from 'discord.js';
import vueinit from '@/core/vue'
import { loadCommands, loadEvents } from '@/core/loader'
import { useAppStore } from '@/store/app'

vueinit()

loadCommands()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const appStore = useAppStore()
appStore.client = client
loadEvents()

// client.once(Events.ClientReady, c => {
//   console.log(`Ready! Logged in as ${c.user.tag}`);
// });


client.login(myToken);

