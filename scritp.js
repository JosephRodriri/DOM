function toggleImage() {
    const img = document.getElementById("hachi");

    
    const button = document.getElementById("toggleButton");
  
    if (img.style.display === "none") {
      img.style.display = "block";  
      button.value = "Ocultar";  
    } else {
      img.style.display = "none";
      button.value = "Insertar Pelicula";
    }
  }
  
  const toggleButton = document.getElementById("toggleButton");
  toggleButton.addEventListener("click", toggleImage);

