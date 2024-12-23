document.addEventListener("DOMContentLoaded", () => {
    const taskFilterForm = document.getElementById("task-filter-form");
    const taskList = document.getElementById("task-list");
  
    // Store tasks
    let tasks = [
      // Example task
      { id: 1, name: "Setup Venue", deadline: "2024-12-31", status: "Pending", assignedTo: "John Doe" },
    ];
  
    // Render Tasks
    const renderTasks = (filteredTasks = tasks) => {
      taskList.innerHTML = filteredTasks
        .map(
          (task) => `
        <tr>
          <td>${task.name}</td>
          <td>${task.deadline}</td>
          <td>${task.status}</td>
          <td>${task.assignedTo}</td>
          <td>
            <select onchange="updateStatus(${task.id}, this.value)">
              <option value="Pending" ${task.status === "Pending" ? "selected" : ""}>Pending</option>
              <option value="Completed" ${task.status === "Completed" ? "selected" : ""}>Completed</option>
            </select>
          </td>
        </tr>
      `
        )
        .join("");
    };
  
    // Update Status
    window.updateStatus = (id, status) => {
      const task = tasks.find((task) => task.id === id);
      if (task) task.status = status;
      renderTasks();
    };
  
    // Filter Tasks by Event
    taskFilterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const eventFilter = document.getElementById("event-filter").value;
      const filteredTasks = tasks.filter((task) => task.eventId === eventFilter);
      renderTasks(filteredTasks);
    });
  
    renderTasks();
  });
  