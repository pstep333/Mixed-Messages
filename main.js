// Arrays of data for the story description
const character = ['elf', 'witch', 'monster', 'prince', 'ninja', 'warrior', 'demon', 'knight', 'wizard'];
const setting_place = ['village', 'kingdom', 'land', 'forest', 'town', 'cave', 'grove', 'beach'];
const setting_verb = ['annoyed by', 'consumed by', 'covered in', 'conquered by'];
const setting_noun = ['beasts', 'a raging storm', 'plague', 'collapse', 'celebration', 'ice', 'lava'];
const con_nouns = ['death', 'ascension', 'plotting', 'kidnapping', 'coming', 'birth', 'betrayal'];
const con_character = ['of a king', 'of a queen', 'of a ruler', 'of a dimplomat', 'of a knight', 'of a commoner'];
const con_quest_action = ['hunt for', 'quest for', 'destruction of', 'race for', 'discovery of', 'war over'];
const con_quest_item = ['a panacea', 'a rare magical beast', ' a mystical weapon', 'a magic artifact', 'a secret map'];

// The story description has a character, setting and a conflict.
let randomSelect = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

let Story = `There once was a ${randomSelect(character)} who lived in a ${randomSelect(setting_place)} that was ${randomSelect(setting_verb)} ${randomSelect(setting_noun)}. Then a ${randomSelect(con_nouns)} ${randomSelect(con_character)} occured which led to a ${randomSelect(con_quest_action)} ${randomSelect(con_quest_item)}.`;

console.log(Story);

