var homeText = document.getElementById('home-heading');
var infoText = document.getElementById('info-heading');
var scheduleText = document.getElementById('schedule-heading');

homeText.addEventListener('click', () => {
    window.location.href = '../html/index.html';
});

infoText.addEventListener('click', () => {
    window.location.href = '../html/info.html';
});

scheduleText.addEventListener('click', () => {
    window.location.href = '../html/schedule.html';
});