const getBookingEvent = () =>{
    const BookingEvent = localStorage.getItem('booking-event');
    if(BookingEvent){
        return JSON.parse(BookingEvent);
    }
    return [];
}


const saveBookingEvent = id =>{
    const BookingEvents = getBookingEvent();
    const exists = BookingEvents.find(eventId => eventId === id);
    if(!exists){
        BookingEvents.push(id);
        localStorage.setItem('booking-event', JSON.stringify(BookingEvents))
    }
}

export { getBookingEvent, saveBookingEvent}