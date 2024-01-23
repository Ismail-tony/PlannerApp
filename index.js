// This Challenge will require you to leverage all the skills you've learned so far, requiring you to think about DOM manipulation, 
// advanced JavaScript, integration of third-party APIs, and more. 
// This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

// Display the current day at the top of the calendar when a user opens the planner.
const currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd, D MMM YYYY'));

// Present timeblocks for standard business hours when the user scrolls down.
for (let hour = 9; hour <= 17; hour++) {
    const time = dayjs('${hour}').format('h A');
}
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock.
$('form').on(`submit`)
// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page.