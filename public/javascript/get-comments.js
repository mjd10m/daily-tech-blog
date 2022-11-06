async function ClickFormHandler(event) {
    event.preventDefault();
  
    const id = this.id;
    window.location.replace(`/post/${id}`)
    return
  }
  
  document.querySelectorAll('.post').forEach(post => {
    post.addEventListener('click', ClickFormHandler);
  })