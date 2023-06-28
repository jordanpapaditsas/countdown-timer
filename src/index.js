const moving = "12 August 2023";

// Storing values to represent the remaining time to each element.
const elementDays = document.getElementById(`days-p`);
const elementHours = document.getElementById(`hours-p`);
const elementMinutes = document.getElementById(`minutes-p`);
const elementSeconds = document.getElementById(`seconds-p`);

function countdown() {
  const movingDate = new Date(moving);
  const currentDate = new Date();
  document.getElementById(`message`).style.display = 'none';

  // Converting milliseconds to seconds, substracting the dates and passing it to TotalSeconds var.
  const TotalSeconds = (movingDate - currentDate) / 1000;

  // Calculating values for days, hours, minutes, seconds 
  const days = Math.floor((TotalSeconds / 3600) / 24);
  const hours = Math.floor((TotalSeconds / 3600) % 24);
  const minutes = Math.floor((TotalSeconds / 60) % 60);
  const seconds = Math.floor((TotalSeconds) % 60);

  // Updating HTML elements with the new values.
  elementDays.innerHTML = showZeros(days);
  elementHours.innerHTML = showZeros(hours);
  elementMinutes.innerHTML = showZeros(minutes);
  elementSeconds.innerHTML = showZeros(seconds);

   // When the countdown reach the goal, this event takes over.
   if (TotalSeconds <= 0) {
    document.getElementById('days').style.display = 'none';
    document.getElementById('hours').style.display = 'none';
    document.getElementById('minutes').style.display = 'none';
    document.getElementById('seconds').style.display = 'none';
    document.getElementById(`message`).style.display = 'block';
    return;
  }
}

// This function gives a '0' in front of each value when they are dropping less than 10
function showZeros(time) {
  if (time < 10) {
    return (`0${time}`);
  } else {
    return time;
  }
}

// Updating countdown values every 1 second (1000 milliseconds)
setInterval(countdown, 1000);

// Calling function
countdown();



