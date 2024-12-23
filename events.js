document.addEventListener("DOMContentLoaded", () => {
    const eventForm = document.getElementById("event-form");
    const eventList = document.getElementById("event-list");
  
    // Store events
    let events = [];
  
    // Add Event
    eventForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("event-name").value;
      const description = document.getElementById("event-description").value;
      const location = document.getElementById("event-location").value;
      const date = document.getElementById("event-date").value;
  
      const newEvent = { id: Date.now(), name, description, location, date };
      events.push(newEvent);
      renderEvents();
      eventForm.reset();
    });
  
    // Render Events
    const renderEvents = () => {
      eventList.innerHTML = events
        .map(
          (event) => `
        <tr>
          <td>${event.name}</td>
          <td>${event.description}</td>
          <td>${event.location}</td>
          <td>${event.date}</td>
          <td><button onclick="deleteEvent(${event.id})">Delete</button></td>
        </tr>
      `
        )
        .join("");
    };
  
    // Delete Event
    window.deleteEvent = (id) => {
      events = events.filter((event) => event.id !== id);
      renderEvents();
    };
  });
  