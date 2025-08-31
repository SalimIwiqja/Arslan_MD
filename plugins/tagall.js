const { cmd } = require('../command');

cmd({
    pattern: 'tagall',
    alias: ['mentionall', 'all'],
    desc: 'Mention all group members',
    category: 'group',
    react: '📢',
    filename: __filename
}, async (client, match, message, { from, isGroup }) => {
    if (!isGroup) {
        return await client.sendMessage(from, {
            text: "❌ This command can only be used in groups."
        }, { quoted: message });
    }

    try {
        // Get group metadata
        const metadata = await client.groupMetadata(from);
        const members = metadata.participants.map(p => p.id);

        // Build message
        let text = "📢 *Tagging All Members:*\n\n";
        text += members.map((id, i) => `${i + 1}. @${id.split('@')[0]}`).join('\n');

        // Send with mentions
        await client.sendMessage(from, {
            text,
            mentions: members
        }, { quoted: message });

    } catch (err) {
        console.error("Tagall error:", err);
        await client.sendMessage(from, {
            text: "❌ Failed to fetch group members."
        }, { quoted: message });
    }
});
