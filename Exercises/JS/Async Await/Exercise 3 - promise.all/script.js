const usersURL = 'https://jsonplaceholder.typicode.com/users';
const postsURL = 'https://jsonplaceholder.typicode.com/posts';
const usersEl = document.getElementById('users');
const postsEl = document.getElementById('posts');
const errorEl = document.getElementById('error');

const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json();
};

const displayData = async () => {
    try {
        const [users, posts] = await Promise.all([fetchData(usersURL), fetchData(postsURL)]);

        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'item';
            userDiv.innerHTML = `<h3>${user.name}</h3><p>Email: ${user.email}</p>`;
            usersEl.appendChild(userDiv);
        });

        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'item';
            postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            postsEl.appendChild(postDiv);
        });

    } catch (error) {
        errorEl.textContent = `An error occurred: ${error.message}. Please try again later.`;
        console.error('Error:', error);
    }
};

displayData();