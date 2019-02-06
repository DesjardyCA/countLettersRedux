// returns an object all unique characters in a string and how many instances of each character there are
function countLetters(str) {
    var out = {};

    for (var char in str) {
        var text = str.charAt(char);
        if (!out[text] && text !== ' ') {
            out[text] = {
                num: 1,
                list: []
            };
            out[text].list.push(char);
        } else if (out[text] && text !== ' ') {
            out[text].num++;
            out[text].list.push(char);
        }
    }

    return out;
}

console.log(countLetters("lighthouse in the house"));