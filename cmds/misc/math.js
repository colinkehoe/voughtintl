import Util from '../../Util.js';
import math from 'mathjs';

/**
 * @param {Discord.Message} message
 */
export async function run(message, args) {
    try {
        const result = math.evaluate(args.join(' '));
        message.channel.send(result, { code: true });
    }
     catch (e) {
    return message.channel.send(Util.Embed(message.member).setTitle('An error occurred while processing your request:').setDescription('```\n' + e + '```'));
    }
}

export const help = {
    name: ['math', 'calc'],
    type: 'misc',
    help_text: 'math <expression>',
    help_desc: 'Do some math',
    owner: false,
    args: { force: true },
    roles: [],
    user_perms: [],
    bot_perms: []
};