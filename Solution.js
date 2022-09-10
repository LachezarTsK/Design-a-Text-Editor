
var TextEditor = function () {
    this.textLeftToCursor = [];
    this.textRightToCursor = [];
};

/** 
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function (text) {
    for (let character of text) {
        this.textLeftToCursor.push(character);
    }
};

/** 
 * @param {number} numberOfCharsToDelete
 * @return {number}
 */
TextEditor.prototype.deleteText = function (numberOfCharsToDelete) {
    numberOfCharsToDelete = Math.min(numberOfCharsToDelete, this.textLeftToCursor.length);
    this.textLeftToCursor.splice(this.textLeftToCursor.length - numberOfCharsToDelete);
    return numberOfCharsToDelete;
};

/** 
 * @param {number} numberOfCharsToMoveToLeft
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function (numberOfCharsToMoveToLeft) {
    numberOfCharsToMoveToLeft = Math.min(numberOfCharsToMoveToLeft, this.textLeftToCursor.length);
    while (numberOfCharsToMoveToLeft-- > 0) {
        this.textRightToCursor.push(this.textLeftToCursor.pop());
    }
    return  this.composeTextToDisplay();
};

/** 
 * @param {number} numberOfCharsToMoveToRight
 * @return {string}
 */
TextEditor.prototype.cursorRight = function (numberOfCharsToMoveToRight) {
    numberOfCharsToMoveToRight = Math.min(numberOfCharsToMoveToRight, this.textRightToCursor.length);
    while (numberOfCharsToMoveToRight-- > 0) {
        this.textLeftToCursor.push(this.textRightToCursor.pop());
    }
    return this.composeTextToDisplay();
};

/** 
 * @return {string}
 */
TextEditor.prototype.composeTextToDisplay = function () {
    const numberOfCharsToDisplay = Math.min(10, this.textLeftToCursor.length);
    return this.textLeftToCursor.slice(-numberOfCharsToDisplay).join('');
};
