const searchUser = document.getElementById("searchUser");
const searchBtn = document.getElementById("btn1");
const github = new GitHub();
const ui = new UI();
// search event listener

searchBtn.addEventListener("click", (e) => {
  // get input text
  const userText = searchUser.value;
  if (userText !== "") {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not found") {
        // show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile
        ui.showProfile(data.profile);

        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
