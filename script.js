function getFormvalue(e) {
    // Prevent default form submission behavior
    e.preventDefault();

    // Get the form element
    const form = document.getElementById('form1');

    // Get the first and last name input values
    const firstName = form.elements['fname'].value.trim();
    const lastName = form.elements['lname'].value.trim();

    // Combine first and last name
    const fullName = `${firstName} ${lastName}`;

    // Display full name using alert
    alert(fullName);
}