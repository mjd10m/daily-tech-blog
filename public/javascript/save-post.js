async function saveFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const title = document.querySelector('#title').value;
    const text = document.querySelector('#text').value;
    console.log(text)
    
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
        title: title,
        text: text
        }),
        headers: {
        'Content-Type': 'application/json'
        }
    });
    
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
  
}

async function deleteFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    })
    
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }
  }
  
document.querySelector('#delete-post').addEventListener('click', deleteFormHandler); 
document.querySelector('#save-post').addEventListener('click', saveFormHandler);