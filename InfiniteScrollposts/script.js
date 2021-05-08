const postContainer = document.getElementById('post-container')
const filter = document.getElementById('filter')
const loading = document.getElementById('loader')

let limit =5
let page =1 

getPosts = async ()=>{
    const rawdata =await  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    const posts = await rawdata.json();
    return posts;
}

showPosts = async ()=>{
    const posts = await getPosts();
    posts.forEach(post=>{
        const postEl = document.createElement('div')
        postEl.classList.add('post')
        postEl.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
        </div>
        `;
        postContainer.appendChild(postEl); 
    })
}

function filterPosts(e) {
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');
  
    posts.forEach(post => {
      const title = post.querySelector('.post-title').innerText.toUpperCase();
      const body = post.querySelector('.post-body').innerText.toUpperCase();
  
      if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
        post.style.display = 'flex';
      } else {
        post.style.display = 'none';
      }
    });
  }

function showLoading(){
    console.log('123')
    loading.classList.add('show');

    setTimeout(() => {
      loading.classList.remove('show');
  
      setTimeout(() => {
        page++;
        showPosts();
      }, 300);
    }, 1000);
}

showPosts();


window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      showLoading();
    }
  });
  
  filter.addEventListener('input', filterPosts);