document.getElementById('programMenu').addEventListener('click', function() {
    var programContent = document.getElementById('programContent');
    if (programContent.style.display === 'none' || programContent.style.display === '') {
        programContent.style.display = 'block';
    } else {
        programContent.style.display = 'none';
    }
});

// Modal logic
const modal = document.getElementById("programModal");
const btn = document.getElementById("addNew");
const span = document.getElementsByClassName("close")[0];
const saveBtn = document.getElementById("saveProgram");
const cancelBtn = document.getElementById("cancel");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

cancelBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Save program data
saveBtn.addEventListener('click', function() {
    const pcode = document.getElementById('pcode').value;
    const description = document.getElementById('description').value;
    const type = document.getElementById('type').value;

    if (pcode && description && type) {
        const programTableBody = document.querySelector('#programTable tbody');
        const newRow = document.createElement('tr');
        const rowCount = programTableBody.rows.length + 1;

        newRow.innerHTML = `
            <td>${rowCount}</td>
            <td>${pcode}</td>
            <td>${description}</td>
            <td>${type}</td>
        `;

        programTableBody.appendChild(newRow);

        // Clear the form
        document.getElementById('pcode').value = '';
        document.getElementById('description').value = '';
        document.getElementById('type').value = 'Undergraduate';

        // Close the modal
        modal.style.display = "none";
    } else {
        alert('Please fill all fields.');
    }
});