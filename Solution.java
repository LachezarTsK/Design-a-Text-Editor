
public class TextEditor {

    StringBuilder textLeftToCursor;
    StringBuilder textRightToCursor;

    public TextEditor() {
        textLeftToCursor = new StringBuilder();
        textRightToCursor = new StringBuilder();
    }

    public void addText(String text) {
        textLeftToCursor.append(text);
    }

    public int deleteText(int numberOfCharsToDelete) {
        numberOfCharsToDelete = Math.min(numberOfCharsToDelete, textLeftToCursor.length());
        textLeftToCursor.delete(textLeftToCursor.length() - numberOfCharsToDelete, textLeftToCursor.length());
        return numberOfCharsToDelete;
    }

    public String cursorLeft(int numberOfCharsToMoveToLeft) {
        numberOfCharsToMoveToLeft = Math.min(numberOfCharsToMoveToLeft, textLeftToCursor.length());
        while (numberOfCharsToMoveToLeft-- > 0) {
            textRightToCursor.append(textLeftToCursor.charAt(textLeftToCursor.length() - 1));
            textLeftToCursor.deleteCharAt(textLeftToCursor.length() - 1);
        }
        return composeTextToDisplay();
    }

    public String cursorRight(int numberOfCharsToMoveToRight) {
        numberOfCharsToMoveToRight = Math.min(numberOfCharsToMoveToRight, textRightToCursor.length());
        while (numberOfCharsToMoveToRight-- > 0) {
            textLeftToCursor.append(textRightToCursor.charAt(textRightToCursor.length() - 1));
            textRightToCursor.deleteCharAt(textRightToCursor.length() - 1);
        }
        return composeTextToDisplay();
    }

    private String composeTextToDisplay() {
        int numberOfCharsToDisplay = Math.min(10, textLeftToCursor.length());
        return textLeftToCursor.substring(textLeftToCursor.length() - numberOfCharsToDisplay, textLeftToCursor.length());
    }
}
