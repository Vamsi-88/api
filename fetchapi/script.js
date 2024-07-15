async function fetchPosts(){
   
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok) throw new Error('Network response was not ok');
        const posts = await  response.json();
        displayPosts(posts);
    }catch(error){
        document.getElementById('posts-error').innerText = `Error: ${error.message}`
    }


}




function displayPosts(posts){
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = posts.map(post => `
        <div class='post'>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>


        `).join('');
}




fetchPosts();
