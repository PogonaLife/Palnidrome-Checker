# Palnidrome Checker
 

The Palindrome Checker is a web application designed to determine whether a given string of text is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward, ignoring punctuation, case, and spacing.

Technologies and Tools Used:

HTML: Serves as the backbone of the application, providing the structure for the user interface. It includes input fields for the user to enter text and buttons to trigger the palindrome check.
CSS: Used for styling the application to make it visually appealing and user-friendly. CSS is responsible for the layout, colors, fonts, and responsiveness, ensuring the app looks good on different devices.
JavaScript: The core logic of the application is written in JavaScript. It handles user interactions, such as clicking the check button, processing the input text, removing non-alphanumeric characters, and determining if the text is a palindrome. It also dynamically updates the webpage with the results of the palindrome check.
The application operates by taking user input from an HTML text input field. When the user presses the check button, JavaScript functions are executed to normalize the input (converting to lowercase and removing non-alphanumeric characters) and then compare it to its reverse. If both strings match, it's identified as a palindrome, and the result is displayed to the user. This process involves string manipulation and array handling methods in JavaScript, such as toLowerCase(), replace(), split(), reverse(), and join().

Additionally, the application includes simple error handling, displaying an alert if the user tries to check an empty string, thereby enhancing user experience by providing immediate feedback for incorrect actions.

Overall, the Palindrome Checker is a straightforward yet engaging project that demonstrates proficiency in HTML, CSS, and JavaScript, showcasing fundamental web development skills.
