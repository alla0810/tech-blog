var NewPostBtn = document.getElementById("New-Post");

const NewPostButtonHandler = async (event) => {
  event.preventDefault();

  console.log("NewPostButtonHandler");


  document.location.replace('/newpost');
}

NewPostBtn.addEventListener('click', NewPostButtonHandler);
