const GITHUB_API_URL = 'https://api.github.com/users/';

const userDetailContainer = document.getElementById('user-details');
const searchButton = document.getElementById('searchButton');
const inputEl = document.getElementById('searchField');

const fetchUser = async (userName) => {

	try {
		const response = await fetch(`${GITHUB_API_URL}${userName}`);
		if (!response.ok) {
			throw new Error('An error ocurred fetching user.');
		}
		const user = await response.json();
		displayUser(user);
	}

	catch (error) {
		console.error(`An error ocurred trying to fetch data: ${error}`);
		displayErrorMessage(error.message);
	};
};

const displayUser = (user) => {
	const userHTML = `
        <div class="card grid-2">
            <div class="all-center">
                <img src="${user.avatar_url}" class="round-img" alt="avatar">
                <h2>${user.name || 'Name not available'}</h2>
                <p>Location: ${user.location || 'Location not available'}</p>
            </div>
            <div class="all-center">
                <h3 class="text-center">Bio</h3>
                <p>${user.bio || 'Bio not available'}</p>
                <ul>
                    <li><strong>Username:</strong> ${user.login}</li>
                    <li></li>
                    <li><strong>Site: </strong><a href="${user.blog || '#'}" target="_blank"
                            rel="noreferrer">${user.blog || 'Site not available'}</a></li>
                    <li></li>
                </ul>
                <a href="https://github.com/${user.login}" class="btn btn-success my-1" target="_blank"
                    rel="noreferrer">To Github Profile</a>
            </div>
        </div>
        <div class="card text-center">
            <div class="badge badge-dark">Followers: ${user.followers}</div>
            <div class="badge badge-success">Following: ${user.following}</div>
            <div class="badge badge-info">Public Repositories: ${user.public_repos}</div>
            <div class="badge badge-light">Public Gists: ${user.public_gists}</div>
        </div>
    `;
	userDetailContainer.innerHTML = userHTML;
};

searchButton.addEventListener('click', () => {
	const typedValue = inputEl.value;
	const usernameRegex = /^[a-zA-Z0-9-]+$/;

	if (!typedValue || !usernameRegex.test(typedValue) || typedValue.includes(' ')) {
		displayErrorMessage(error.message);
		return;
	} else {
		fetchUser(typedValue);
	}

});

const displayErrorMessage = (message) => {
	userDetailContainer.innerHTML = '';
	const error = document.createElement('div');
	error.className = 'alert';
	error.style.color = 'red';
	error.textContent = message;
	userDetailContainer.appendChild(error);
};