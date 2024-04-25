const initializeTheater = (rows, columns) => {
    const theater = [];
    for (let i = 0; i < rows; i++) {
        theater.push(new Array(columns).fill(true));
    }
    return theater;
};

const bookSeats = (theater, row, column) => {
    if (row < 0 || row >= theater.length || column < 0 || column >= theater[0].length) {
        return `Invalid seat coordinates. Please pick a seat within the theater bounds.`;
    } else if (!theater[row][column]) {
        return `Seat already taken, pick another one`;
    } else if (
        (theater[row][column + 1] && theater[row][column + 2] === false) ||
        (theater[row][column - 1] && theater[row][column - 2] === false)
    ) {
        return `You cannot leave an unbooked seat between booked seats. Please pick another one.`;
    } else {
        theater[row][column] = false;
        return `Seat booked successfully. Your seat: Row - ${row}, Column - ${column}`;
    }
};

const cancelBooking = (theater, row, column) => {
    if (row < 0 || row >= theater.length || column < 0 || column >= theater[0].length) {
        return `Invalid seat coordinates. Please pick a seat within the theater bounds.`;
    } else if (theater[row][column]) {
        return `Booking has already been canceled, This seat is available.`;
    }
    else if (theater[row][column + 1] === false && theater[row][column - 1] === false) {
        return `You cannot cancel this booking since it's violating the theater rules.`
    } else {
        theater[row][column] = true
        return `Booking has been canceled.`
    }

}

const seatSuggestion = (theater, row) => {
    if (row < 0 || row >= theater.length) {
        return `Invalid row number. Please provide a valid row number within the theater bounds.`;
    }
    let bestColumn = 0;
    let minDistance = Infinity;
    for (let j = 0; j < theater[row].length; j++) {
        if (theater[row][j]) {
            const distanceToCenter = Math.abs(j - Math.floor(theater[row].length / 2));
            if (distanceToCenter < minDistance) {
                minDistance = distanceToCenter;
                bestColumn = j;
            }
        }
    }
    if (bestColumn !== 0) {
        return `Best available seat in row ${row + 1}: Column - ${bestColumn + 1}`;
    } else {
        return `No available seats in row ${row + 1}.`;
    }
}

const bookMultipleSeats = (theater, row, numberOfSeats) => {
    if (row < 0 || row >= theater.length) {
        return "Invalid row number. Please select a valid row.";
    }
    let startColumn = -1;
    let availableSeats = 0;

    for (let j = 0; j < theater[row].length; j++) {
        if (theater[row][j]) {
            if (startColumn === -1) {
                startColumn = j;
            }
            availableSeats++;
            if (availableSeats === numberOfSeats) {
                for (let k = startColumn; k < startColumn + numberOfSeats; k++) {
                    theater[row][k] = false;
                }
                return `Seats booked successfully. Your seats: Row - ${row}, Column - ${startColumn} to ${startColumn + numberOfSeats - 1}`;
            }
        } else {
            startColumn = -1;
            availableSeats = 0;
        }
    }
    return "Unable to book seats. Not enough available seats in the selected row.";
};

const printTheater = (theater) => {
    for (let i = 0; i < theater.length; i++) {
        let rowStatus = ""; 
        for (let j = 0; j < theater[i].length; j++) {
            if (theater[i][j]) {
                rowStatus += "O ";
            } else {
                rowStatus += "X ";
            }
        }
        console.log(`Row ${i + 1}: ${rowStatus}`);
    }
};


const newTheater = initializeTheater(5, 7);
console.log("Theater initialized:");
printTheater(newTheater);

console.log("Booking seat at row 1, column 5:");
console.log(bookSeats(newTheater, 1, 5));
printTheater(newTheater);

console.log("Booking seat at row 1, column 4:");
console.log(bookSeats(newTheater, 1, 4));
printTheater(newTheater);

console.log("Booking seat at row 1, column 3:");
console.log(bookSeats(newTheater, 1, 3));

console.log("Booking seat at row 1, column 2:");
console.log(bookSeats(newTheater, 1, 2));

console.log("Canceling booking at row 1, column 5:");
console.log(cancelBooking(newTheater, 1, 5));
printTheater(newTheater);

console.log("Canceling booking at row 1, column 3:");
console.log(cancelBooking(newTheater, 1, 3));

console.log("Theater after bookings and cancellations:");
printTheater(newTheater);

console.log(seatSuggestion(newTheater, 1));

console.log(bookMultipleSeats(newTheater, 1, 3));
console.log(bookMultipleSeats(newTheater, 2, 3));
