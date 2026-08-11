
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`البوت اشتغل يا ملك! اسم البوت: ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    // نتأكد إن البوت ميردش على نفسه
    if (message.author.bot) return;

    if (message.content === '!website') {
        message.reply('إليك الـ Prompt لإنشاء موقع: "أنشئ Landing Page لشركة تدريب باستخدام HTML و CSS. اجعل التصميم Responsive، الألوان أبيض وأزرق، واكتب جميع الملفات كاملة."');
    } 
    else if (message.content === '!discordbot') {
        message.reply('إليك الـ Prompt لإنشاء بوت ديسكورد: "أريد إنشاء Discord Bot باستخدام Discord.js، أضف الأوامر !help, !rules, !contact، واشرح لي الخطوات."');
    }
    else if (message.content === '!frontend') {
        message.reply('إليك الـ Prompt لإنشاء مشروع Front-End: "أنشئ مشروع موقع ويب متكامل باستخدام HTML, CSS, و JavaScript. أضف Navbar, Hero Section, Services, و Footer."');
    }
    // تقدري تزودي باقي الأوامر بنفس الطريقة هنا
});

// هنا حطي التوكين بتاعك بين علامات التنصيص
client.login('process.env.DISCORD_TOKEN');