// Countdown Timer
const countdown = () => {
    const countDate = new Date('March 30, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('countdown').innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
};

setInterval(countdown, 1000);

// RSVP Form Validation
document.getElementById('rsvp-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        document.getElementById('rsvp-message').textContent = 'Thank you for your RSVP!';
        document.getElementById('rsvp-message').style.color = 'green';
    } else {
        document.getElementById('rsvp-message').textContent = 'Please fill out all fields.';
        document.getElementById('rsvp-message').style.color = 'red';
    }
});