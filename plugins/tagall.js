const { cmd } = require('../command');

cmd({
    pattern: 'tagall',
    alias: ['all', 'mentionall'],
    desc: 'Mention all members in the group',
    category: 'group',
    react: '📢',
    filename: __filename
}, async (client, args, message, { from, isGroup, participants }) => {
    try {
        if (!isGroup) {
            return await client.sendMessage(from, {
                text: "❌ This command can only be used in groups."
            }, { quoted: message });
        }

        // Get all member IDs
        let members = participants.map(p => p.id);

        // Optional custom text from user
        let customMsg = args ? args.trim() : '';
        let text = customMsg ? `📢 *Message from admin:*\n${customMsg}\n\n` : "📢 *Tagging all members:*\n\n";

        // Build mention list
        text += members.map((id, i) => `${i + 1}. @${id.split('@')[0]}`).join('\n');

        await client.sendMessage(from, {
            text,
            mentions: members
        }, { quoted: message });

    } catch (err) {
        console.error("TagAll Error:", err);
        await client.sendMessage(from, { text: "⚠️ Failed to tag members." }, { quoted: message });
    }
});
