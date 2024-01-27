// This Challenge will require you to leverage all the skills you've learned so far, requiring you to think about DOM manipulation, 
// advanced JavaScript, integration of third-party APIs, and more. 
// This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
const containerEl = $('.container');
const currentDayEl = $('#currentDay');

// Display the current day at the top of the calendar when a user opens the planner.
const currentDay = dayjs().format('dddd, Do MMM YYYY');
currentDayEl.text(currentDay);

// Present timeblocks for standard business hours when the user scrolls down.
for (let hour = 9; hour <= 17; hour++) {
    const am_pm = dayjs(`2024 ${hour}`).format('h A') // formated the array to the standard clock widely used.
    const timeblock = 
    `
    <form>
        <label class=col-2 for=entry>${am_pm}</label>
        <textarea class=col-8 name=description></textarea>
        <button type=submit class=saveBtn col-2><i class="bi bi-save"></i></button>
    </form>
`;
containerEl.append(timeblock)
}


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock.
$('form').on(`submit`)
// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page.