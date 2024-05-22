const baseUrl = 'https://jsonplaceholder.typicode.com';
const usersContainer = document.getElementById('users');

const fetchUsers = async () => {
  const fetchUsers = await fetch(`${baseUrl}/users`)
  const response = await fetchUsers.json();
  return response;
}

const fetchPosts = async (userId) => {
  const fetchPosts = await fetch(`${baseUrl}/posts?userId=${userId}`);
  const response = await fetchPosts.json();
  return response
}

const displayUserAndPosts = async () => {

  try {
    const usersResult = await fetchUsers();

      usersResult.forEach(async user => {  
        const userEl = document.createElement('div');
        userEl.className = 'user';
        userEl.innerHTML = `
                <h2>${user.name}</h2>
                <p>Email: ${user.email}</p>
                <div class="posts"></div>
            `;
        usersContainer.appendChild(userEl)

        try {
          const userPosts = await fetchPosts(user.id)
          const postsContainer = userEl.querySelector('.posts');
          userPosts.forEach(post => {
            const postEl = document.createElement('div');
            postEl.className = 'post';
            postEl.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    `;
            postsContainer.appendChild(postEl);
          })
        } 
        
        catch(error) {
          console.error(`an error has ocurred fetching posts: ${error}`);
        }
      });

  } catch(error) {
    console.error(`an error has ocurred fetching users: ${error.message}`);
  }
}

displayUserAndPosts();