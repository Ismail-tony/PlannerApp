//jQuery
$(document).ready(function () { //when the document is ready
    // let time = [9, 10, 11, 12, 13, 14, 15, 16, 17]; // times in 24 hours format
    const containerEl = $('.container');
    const currentDayEl = $('#currentDay');


    // Display the current day at the top of the calendar when a user opens the planner.
    const currentDay = dayjs().format('dddd, Do MMM YYYY');
    currentDayEl.text(currentDay);
    $('.saveBtn').on('click', function () {
        const value = $(this).siblings('.description').val();
        const time = $(this).parent().attr('id');
        // SETTING UP LOCAL STORAGE SET ITEMS

        localStorage.setItem(time, value);
    });

    // Color-code each timeblock based on past, present, and future when the timeblock is viewed.
    function getColorCode() {
        const currenthour = dayjs().hour()
        $(`.timeblock`).each(function () {
            const blockhour = parseInt($(this).attr('id').split('-')[1]);
            if (blockhour < currenthour) {
                $(this).addClass('past')
            } else if (blockhour === currenthour) {
                $(this).removeClass('past')
                $(this).addClass('present')
            } else {
                $(this).removeClass('past')
                $(this).removeClass('present')
                $(this).addClass('future')
            }
        })
    }
    getColorCode();
    setInterval(getColorCode, 15000);
    // Persist events between refreshes of a page.
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

});

