// JavaScript für den Musik Shop

let currentBookingType = '';
let currentItem = '';

function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('open');
}

function bookStudio(studioName) {
    currentBookingType = 'studio';
    currentItem = studioName;
    showBookingForm();
}

function bookInstrument(instrumentName) {
    currentBookingType = 'instrument';
    currentItem = instrumentName;
    showBookingForm();
}

function showBookingForm() {
    document.getElementById('bookingForm').style.display = 'block';
    document.getElementById('form').reset();
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const duration = document.getElementById('duration').value;

    // Hier könntest du die Buchung speichern (z.B. in localStorage oder an einen Server senden)
    const booking = {
        type: currentBookingType,
        item: currentItem,
        name: name,
        email: email,
        date: date,
        time: time,
        duration: duration
    };

    // Speichere in localStorage als Beispiel
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert('Buchung erfolgreich! Wir senden Ihnen eine Bestätigung per E-Mail.');
    document.getElementById('bookingForm').style.display = 'none';
});