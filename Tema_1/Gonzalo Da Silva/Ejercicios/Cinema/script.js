const movieSelect = document.getElementById('movie-select');
const seats = document.querySelectorAll('.seat.available');
const selectedCountElement = document.getElementById('selected-count');
const ticketPriceElement = document.getElementById('ticket-price');
const totalPriceElement = document.getElementById('total-price');
const selectedSeatsDisplay = document.getElementById('selected-seats-display');
const confirmButton = document.querySelector('.btn-confirm');

let selectedSeats = [];
let ticketPrice = parseFloat(movieSelect.value);

function updateTicketPrice() {
    ticketPrice = parseFloat(movieSelect.value);
    ticketPriceElement.textContent = ticketPrice.toFixed(2);
    updateTotal();
}

function getSeatLabel(seat) {
    const rowSeats = seat.parentElement;
    const rowLabel = rowSeats.querySelector('.row-label').textContent;
    const seatIndex = Array.from(rowSeats.querySelectorAll('.seat')).indexOf(seat) + 1;
    return `${rowLabel}${seatIndex}`;
}

function updateSelectedSeatsDisplay() {
    if (selectedSeats.length === 0) {
        selectedSeatsDisplay.innerHTML = '<p class="text-muted small">Selecciona tus butacas en el mapa</p>';
    } else {
        const seatsHTML = selectedSeats.map(seat => 
            `<span class="seat-badge">${getSeatLabel(seat)}</span>`
        ).join('');
        selectedSeatsDisplay.innerHTML = seatsHTML;
    }
}

function updateTotal() {
    const count = selectedSeats.length;
    const total = count * ticketPrice;
    
    selectedCountElement.textContent = count;
    totalPriceElement.textContent = total.toFixed(2);
    
    updateSelectedSeatsDisplay();
}

function toggleSeat(seat) {
    if (seat.classList.contains('occupied')) {
        return;
    }

    if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        seat.classList.add('available');
        selectedSeats = selectedSeats.filter(s => s !== seat);
    } else {
        seat.classList.remove('available');
        seat.classList.add('selected');
        selectedSeats.push(seat);
    }

    updateTotal();
}

movieSelect.addEventListener('change', updateTicketPrice);

seats.forEach(seat => {
    seat.addEventListener('click', () => toggleSeat(seat));
});

confirmButton.addEventListener('click', () => {
    if (selectedSeats.length === 0) {
        alert('Por favor, selecciona al menos una butaca.');
        return;
    }

    const seatLabels = selectedSeats.map(seat => getSeatLabel(seat)).join(', ');
    const total = (selectedSeats.length * ticketPrice).toFixed(2);
    const movieText = movieSelect.options[movieSelect.selectedIndex].text;

    alert(`Reserva confirmada!\n\nPelícula: ${movieText}\nButacas: ${seatLabels}\nTotal: $${total}\n\n¡Disfruta tu película!`);

    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
        seat.classList.add('occupied');
    });

    selectedSeats = [];
    updateTotal();
});

updateTotal();
