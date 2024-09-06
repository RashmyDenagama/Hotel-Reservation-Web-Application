const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', () => {
  logregBox.classList.add('active');
});




loginLink.addEventListener('click', () => {
  logregBox.classList.remove('active');
});

function viewRoomDetails(roomId) {
  // Redirect the user to the "Rooms" page with the specific room details
  window.location.href = `rooms.html#${roomId}`;
}

 // Retrieve the room ID from the URL hash
    const roomId = window.location.hash.slice(room1);

    // Show the specific room details based on the room ID
    if (roomId) {
      const roomDetails = document.getElementById(roomId);
      if (roomDetails) {
        roomDetails.style.display = 'block';
      }
    }
