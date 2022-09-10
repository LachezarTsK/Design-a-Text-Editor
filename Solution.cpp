
#include <string>
using namespace std;

class TextEditor {
    
    string textLeftToCursor;
    string textRightToCursor;

public:
    TextEditor() = default;

    void addText(string text) {
        textLeftToCursor.append(text);
    }

    int deleteText(int numberOfCharsToDelete) {
        numberOfCharsToDelete = min(numberOfCharsToDelete, static_cast<int> (textLeftToCursor.length()));
        textLeftToCursor.resize(textLeftToCursor.length() - numberOfCharsToDelete);
        return numberOfCharsToDelete;
    }

    string cursorLeft(int numberOfCharsToMoveToLeft) {
        numberOfCharsToMoveToLeft = min(numberOfCharsToMoveToLeft, static_cast<int> (textLeftToCursor.length()));
        while (numberOfCharsToMoveToLeft-- > 0) {
            textRightToCursor.push_back(textLeftToCursor.back());
            textLeftToCursor.pop_back();
        }
        return composeTextToDisplay();
    }

    string cursorRight(int numberOfCharsToMoveToRight) {
        numberOfCharsToMoveToRight = min(numberOfCharsToMoveToRight, static_cast<int> (textRightToCursor.length()));
        while (numberOfCharsToMoveToRight-- > 0) {
            textLeftToCursor.push_back(textRightToCursor.back());
            textRightToCursor.pop_back();
        }
        return composeTextToDisplay();
    }

private:
    string composeTextToDisplay() {
        const int numberOfCharsToDisplay = min(10, static_cast<int> (textLeftToCursor.length()));
        return textLeftToCursor.substr(textLeftToCursor.size() - numberOfCharsToDisplay, numberOfCharsToDisplay);
    };
};
