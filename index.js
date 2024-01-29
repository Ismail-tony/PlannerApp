//Jquerry Element
const containerEl = $('.container');
const currentDayEl = $('#currentDay');

let time = [09, 10, 11, 12, 13, 14, 15, 16, 17];
const currenthour = dayjs().hour()
// Display the current day at the top of the calendar when a user opens the planner.
const currentDay = dayjs().format('dddd, Do MMM YYYY');
currentDayEl.text(currentDay);

// Present timeblocks for standard business hours when the user scrolls down.
function getTimeBlock() {
    for (let i = 0; i<=time.length -1; i++) { //reason for the -1 is because after the loop, an undefined object was present 
        /* const am_pm = dayjs(`2024 ${hour}`).format('h A') 
        formated the array to the standard clock widely used 
        but i couldn't get it to work with color changing. */
        const hours = time[i];
        const timeblock = 
        `
        <form class='time-block row'>
            <label class='hour col-2' for='hour'>${hours}:00</label>
            <textarea class='description col-8' name='description'></textarea>
            <button type='submit' class='saveBtn col-2'><i class="fa-regular fa-floppy-disk"></i></button>
        </form>
        `;
    containerEl.append(timeblock)
    } 
};
// for (let i = 0; i<=time.length -1; i++) { //reason for the -1 is because after the loop, an undefined object was present 
//     /* const am_pm = dayjs(`2024 ${hour}`).format('h A') 
//     formated the array to the standard clock widely used 
//     but i couldn't get it to work with color changing. */
//     const hours = time[i];
//     const timeblock = 
//     `
//     <form class='time-block row'>
//         <label class='hour col-2' for='hour'>${hours}:00</label>
//         <textarea class='description col-8' name='description'></textarea>
//         <button type='submit' class='saveBtn col-2'><i class="fa-regular fa-floppy-disk"></i></button>
//     </form>
//     `;
// containerEl.append(timeblock)
// }; 


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

function changeColor() {
time.forEach(hours => {
    if (time < currenthour) { 
        return "past"; 
    } else if (time === currenthour) { 
        return "present";
    } else {
        return "future";
    }
});



    $(".timeblock").each(function(i, timeblock) { 
        if (time < currenthour) { 
            return "past"; 
        } else if (time === currenthour) { 
            return "present";
        } else {
            return "future";
        }
    })
}
// Allow a user to enter an event when they click a timeblock.
$('form').on(`submit`)
// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page.