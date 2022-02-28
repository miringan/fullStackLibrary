// Establish real time date and time
const date = dayjs();

// Connector for date dive
const dateElement = document.querySelector('#date');

// Dynamically update HTML with date and time
dateElement.innerHTML = date;