const init = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userInput = e.target.children[1].value;
    const input = document.querySelector("input#searchByID");
    fetchData(userInput);
  });
  const fetchData = (input) => {
    fetch(`http://localhost:3000/movies/${input}`)
      .then((res) => res.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  };
};

document.addEventListener("DOMContentLoaded", init);
