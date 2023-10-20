// In-memory list of errors within the last minute
let errorList = [];

// Last time an email was sent
let lastNotification = null;

// Function to add an error to the file
function appendErrorToFile(error) {
    console.log("Append Error To File... " + error);
}

// Hypothetical function to send the email notification
function sendEmailNotification() {
    // Here you would implement the email sending, possibly using a service like Nodemailer or similar.
    console.log("Sending email notification...");
}

// Existing function that gets called every time there's an error
function logError(error) {
    // Add error to text file
    appendErrorToFile(error);

    // Add error to in-memory list with the current date/time
    const now = new Date().getTime();
    errorList.push({ time: now, error: error });

    // Clear errors that occurred more than one minute ago from the in-memory list
    const threshold = now - (60 * 1000);
    errorList = errorList.filter(e => e.time >= threshold);

    // Check if more than 10 errors have been logged in the last minute
    if (errorList.length > 10) {
        // Check if a notification was already sent in the last minute
        if (!lastNotification || lastNotification < threshold) {
            sendEmailNotification();
            lastNotification = now;
        }
    }
}


module.exports = logError;