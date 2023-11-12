var UpdateBtn = document.getElementById("Update-Post");
var DeleteBtn = document.getElementById("Delete-Post");


const UpdatePostHandler = async (event) => {
  event.preventDefault();

  const id = event.target.getAttribute('data-id');

    const title = document.querySelector('#Blog-Title').value.trim();
  const description = document.querySelector('#Blog-Content').value.trim();

  console.log("title: ", title);
  console.log("description: ", description);

  if (title && description) {
    // Send a PUT request to the API endpoint
    const response = await fetch(`/api/blogposts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response);

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};


const DeletePostHandler = async (event) => {
  event.preventDefault();

  const id = event.target.getAttribute('data-id');

  const response = await fetch(`/api/blogposts/${id}`, {
    method: 'DELETE',
  });

  console.log(response);

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};


UpdateBtn.addEventListener('click', UpdatePostHandler);
DeleteBtn.addEventListener('click', DeletePostHandler);
