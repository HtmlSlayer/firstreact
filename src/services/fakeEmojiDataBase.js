export const myEmojiTable = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃",
    "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜",
    "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟",
    "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠",
    "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗",
    "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧",
    "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧",
    "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "👻",
    "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽",
    "🙀", "😿", "😾"
];

// Retourne le tableau d'emojis
export function getEmojis() {
    return myEmojiTable
}

export function deleteTheClown() {
    // destructive method et non destructive method
    // filter -> parcours tous les éléments un par un et il applique la condition sur tous les éléments
    let arrayWithoutClown = myEmojiTable.filter(emoji => emoji !== "🤡")
    return arrayWithoutClown
}

export function addClown() {
    myEmojiTable.push("🤡")
    return myEmojiTable
}

export function updateClown() {
    const clown = myEmojiTable.find(emoji => emoji === "🤡")
    const index = myEmojiTable.indexOf(clown)
    myEmojiTable[index] = "💩"
    return myEmojiTable
}