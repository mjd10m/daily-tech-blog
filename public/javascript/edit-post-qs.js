async function ClickFormHandler(event) {
    event.preventDefault();
  
    const id = this.id;
    window.location.replace(`/dashboard/edit/${id}`)
    return
  }
  
  document.querySelectorAll('.post').forEach(post => {
    post.addEventListener('click', ClickFormHandler);
  })