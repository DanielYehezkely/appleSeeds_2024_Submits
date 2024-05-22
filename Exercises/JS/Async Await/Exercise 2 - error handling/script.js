const usersContainer = document.getElementById('users');
const errorMessage = document.getElementById('error')
const usersUrl = 'https://jsonplaceholder.typicode.com/users'

const fetchUsers = async () => {

  try {
    const response = await fetch(usersUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const users = await response.json();

    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.innerHTML = `<h1>${user.name}</h1><p><strong>Email:</strong>${user.email}</p>`;
      usersContainer.appendChild(userDiv);
    });
  }

  catch (error) {
    errorMessage.textContent = `Error has occurred: ${error.message}`
  };
};

fetchUsers();