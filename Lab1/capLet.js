function correctSentence(text) {
    // returns a corrected sentence which starts with capital letter
    // and ends with dot.

    // your code here
    for(i = 0 ; i < text.length; i++){
        if (text.charCodeAt(0) >= 97 && text.charCodeAt(0) <= 122) {
            text[0].toUpperCase();
        }
    }
    return text;
}
correctSentence()