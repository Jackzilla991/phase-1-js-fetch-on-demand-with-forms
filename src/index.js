const init = () => {
    document.querySelector("form").addEventListener("submit", async function(event) {
      event.preventDefault();
  
      const id = document.querySelector("#searchByID").value;
      const response = await fetch(`/movie-info?id=${id}`);
      const data = await response.json();
  
      if (response.ok) {
        document.querySelector("#movieDetails h4").textContent = data.title;
        document.querySelector("#movieDetails p").textContent = data.summary;
      } else {
        alert("Invalid ID or movie not found.");
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);
  