const currentDate = new Date();

function calculateRemainingDays(eventDateArg) {
    const eventDate = new Date(eventDateArg);

    // Ensure both dates are at midnight to get accurate day count
    currentDate.setHours(0, 0, 0, 0);
    eventDate.setHours(0, 0, 0, 0);

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysRemaining = Math.floor((eventDate - currentDate) / millisecondsPerDay);
    return daysRemaining;
}

const targetEventDate = '2025-08-13';
const remainingDays = calculateRemainingDays(targetEventDate);
console.log(remainingDays);
