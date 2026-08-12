// Get elements from HTML
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

// Add note when button is clicked
addNoteBtn.addEventListener("click", function () {

    const title = titleInput.value;
    const content = contentInput.value;

    // Check if fields are empty
    if (title === "" || content === "") {
        alert("Please enter title and note");
        return;
    }

    // Create note div
    const note = document.createElement("div");
    note.classList.add("note");

    // Add note content
    note.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button class="delete-btn">Delete</button>
    `;

    // Add note to container
    notesContainer.appendChild(note);

    // Clear input fields
    titleInput.value = "";
    contentInput.value = "";

    // Delete button
    const deleteBtn = note.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {
        note.remove();
    });
});