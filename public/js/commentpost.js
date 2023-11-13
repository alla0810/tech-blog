var CommentBtn = document.getElementById("Submit-Btn");


const CommentBtnHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#Blog-Comment').value.trim();
  const blogpost_id = event.target.getAttribute('data-id');


  console.log("comment: ", comment);
  console.log("blogpost_id: ", blogpost_id);

  if (comment && blogpost_id) {
    // Send a PUT request to the API endpoint
    const response = await fetch(`/api/comments/`, {
      method: 'POST',
      body: JSON.stringify({ blogpost_id, comment }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response);

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace(`/commentshow/${blogpost_id}`);
    } else {
      alert(response.statusText);
    }
  }
};



CommentBtn.addEventListener('click', CommentBtnHandler);
