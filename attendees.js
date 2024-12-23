document.addEventListener("DOMContentLoaded", () => {
    const attendeeForm = document.getElementById("attendee-form");
    const attendeeList = document.getElementById("attendee-list");
    const eventSelector = document.getElementById("event-selector");
    const attendeeSelector = document.getElementById("attendee-selector");
  
    // Store attendees
    let attendees = [];
    let assignments = [];
  
    // Add Attendee
    attendeeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("attendee-name").value;
      const email = document.getElementById("attendee-email").value;
  
      const newAttendee = { id: Date.now(), name, email };
      attendees.push(newAttendee);
      renderAttendees();
      attendeeForm.reset();
    });
  
    // Render Attendees
    const renderAttendees = () => {
      attendeeList.innerHTML = attendees
        .map(
          (attendee) => `
        <tr>
          <td>${attendee.name}</td>
          <td>${attendee.email}</td>
          <td><button onclick="assignToEvent(${attendee.id})">Assign</button></td>
          <td><button onclick="deleteAttendee(${attendee.id})">Delete</button></td>
        </tr>
      `
        )
        .join("");
  
      attendeeSelector.innerHTML = attendees
        .map(
          (attendee) =>
            `<option value="${attendee.id}">${attendee.name}</option>`
        )
        .join("");
    };
  
    // Delete Attendee
    window.deleteAttendee = (id) => {
      attendees = attendees.filter((attendee) => attendee.id !== id);
      renderAttendees();
    };
  
    // Assign Attendee to Event
    const assignForm = document.getElementById("assign-attendee-form");
    assignForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const eventId = eventSelector.value;
      const attendeeId = attendeeSelector.value;
  
      assignments.push({ eventId, attendeeId });
      alert("Attendee assigned successfully!");
    });
  });
  