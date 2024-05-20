const baseUrl = 'https://jsonplaceholder.typicode.com';
const usersEl = document.getElementById('users');
const userLoadingIndicator = document.createElement('div');
userLoadingIndicator.classList.add('loader');
usersEl.appendChild(userLoadingIndicator);

fetch(baseUrl + '/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Response is clearly not ok');
    }
    return response.json();
  })
  .then(users => {
    userLoadingIndicator.remove();
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <div class="posts"></div>
          `;
      usersEl.appendChild(userDiv);
      const postLoadingIndicator = document.createElement('div');
      postLoadingIndicator.classList.add('loader');
      userDiv.querySelector('.posts').appendChild(postLoadingIndicator);

      fetch(baseUrl + `/posts?userId=${user.id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Response is clearly not ok');
          }
          return response.json();
        })
        .then(posts => {
          const postsContainer = userDiv.querySelector('.posts');
          postLoadingIndicator.remove();

          if (posts.length > 0) {
            const postHeader = document.createElement('h3');
            postHeader.textContent = 'Posts:';
            postsContainer.appendChild(postHeader);
            posts.forEach(post => {
              const postDiv = document.createElement('div');
              postDiv.classList.add('post');
              postDiv.innerHTML = `
                    <strong>${post.title}</strong><br>
                    ${post.body}
                  `;
              postsContainer.appendChild(postDiv);
            });
          } else {
            postsContainer.textContent = 'No posts available';
          }
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    });
  })
  .catch(error => {
    console.error('Error fetching users:', error);
  });