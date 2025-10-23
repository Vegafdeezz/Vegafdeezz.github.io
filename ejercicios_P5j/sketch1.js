function setup() {
  createCanvas(400, 400); // Crea un lienzo de 400x400 píxeles
  background(255);        // Fondo blanco

  // Lado superior: rojo opaco, grosor 3
  stroke(253, 103, 113);      // Color rojo
  strokeWeight(15);        // Grosor de línea 3
  line(100, 100, 300, 100);

  // Lado derecho: verde semitransparente, grosor 6
  stroke(253, 195, 108); // Verde con transparencia
  strokeWeight(20);        // Grosor de línea 6
  line(300, 100, 300, 300);

  // Lado inferior: azul opaco, grosor 2
  stroke(222, 20, 237);      // Azul
  strokeWeight(15);        // Grosor de línea 2
  line(300, 300, 100, 300);

  // Lado izquierdo: gris, grosor 4
  stroke(66, 236, 115);            // Gris
  strokeWeight(11);        // Grosor de línea 4
  line(100, 300, 100, 100);
}