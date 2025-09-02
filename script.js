// Handle adding new projects dynamically
document.getElementById("add-project-btn").addEventListener("click", function () {
  const projectGrid = document.getElementById("projects-grid");

  const newCard = document.createElement("div");
  newCard.classList.add("project-card");
  newCard.innerHTML = `
    <h3>New Project</h3>
    <p>This is a placeholder description for a new project. Update it with real details!</p>
  `;

  project