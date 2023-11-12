var CreateBtn = document.getElementById("Create-Post");


const CreatePostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#Blog-Title').value.trim();
  const description = document.querySelector('#Blog-Content').value.trim();

  console.log("title: ", title);
  console.log("description: ", description);

  if (title && description) {
    // Send a PUT request to the API endpoint
    const response = await fetch(`/api/blogposts/`, {
      method: 'POST',
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



CreateBtn.addEventListener('click', CreatePostHandler);
