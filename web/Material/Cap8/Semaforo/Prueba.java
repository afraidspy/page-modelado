


/**
 * Clase que permite ejecutae la simulación del problema lectores/escritores.
 * @author Jessica Santizo Galicia.
 */
public class Prueba {

  public static void main(String[] args) {
    Semaforo sem = new Semaforo();

    for (int i = 1; i < 4; i++) {
      double suma = i + 3.25;
      new TEscritor("Escritor" + i, sem, new Articulo(i, "articulo", suma)).start();
    }

    for (int i = 1; i < 3; i++) {
      new TLector("Lector" + i, sem).start();
    }

  }
}
