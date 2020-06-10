const inputs = document.querySelectorAll(".controls input");
// this will return a node list as there are more than 1 elements, to deal with such a node list we can use forEach or convert it into an array and then use array looping
// console.log(inputs);

function handleUpdate() {
  const suffix = this.dataset.sizing || ""; // is an object that has all the data attributes that we have created in the html using the data- format
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
