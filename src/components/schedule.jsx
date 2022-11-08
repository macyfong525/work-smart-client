import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


const Schedule = () => {
	const events = [{ title: "today's event", date: new Date() }];

	return (
		<FullCalendar
			defaultView="dayGridMonth"
			plugins={[dayGridPlugin]}
			events={events}
		/>
	);
}
 
export default Schedule;