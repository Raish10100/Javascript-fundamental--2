/*Let's say you are working for an event management company.As a web developer,you need to build a countdown timer for an 
upcoming event.You need to build a function that calculates the number of days between the current date
and the event's start date. */

 function calculatesDaysRemain(eventStartDate){
    const currentDate = new Date();
    const eventDate = new Date(eventStartDate);

    const timeDiffrence = eventDate - currentDate;
    const timeDiffrenceinDate = Math.floor(timeDiffrence/(1000*60*60*24));

    return timeDiffrenceinDate;
 }

 const eventStartDate = '2023-10-30';

  const timeDiffrenceinDate = calculatesDaysRemain(eventStartDate);

  console.log(`There are ${timeDiffrenceinDate} days until the event.`);