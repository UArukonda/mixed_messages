document.addEventListener("DOMContentLoaded", function () {
  const projectInput = document.getElementById("newproject");
  const submitBtn = document.getElementById("submitbtn");

  submitBtn.addEventListener("click", function () {
    console.log(projectInput);

    let newItem = document.createElement("li");
    newItem.innerHTML = projectInput.value;
    document.getElementById("projectlist").appendChild(newItem);
    document.getElementById("newproject").value = "";
  });
});
