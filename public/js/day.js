// Establish real time date and time
const date = dayjs();

// Connector for date dive
const dateElement = document.querySelector('#date');

// Dynamically update HTML with date and time
dateElement.innerHTML = date;



// Trying to use MomentJs for live clock
// var today = $("#currentDay")
// var now = moment().format("dddd, MMM Do YYYY [at] h:mm:ss a");
// $('#currentDay').text(now);

// // Live clock telling date & time
// setInterval(function () {
//     var now = moment().format("dddd, MMM Do YYYY [at] h:mm:ss a");
//     $('#currentDay').text(now);
// }, 1000);
