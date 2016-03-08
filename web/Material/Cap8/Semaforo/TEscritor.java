package semaforo;

/**
 * Clase que representa a un escritor 
 * @author 
 */
public class TEscritor extends Thread {

  private Semaforo sem;
  private OperacionesArchivos operador;
  private Articulo a;

  /**
   * Constructor a partir de varios parámtros.
   * @param nombre -- el nombre del escritor.
   * @param s -- 
   */
  public TEscritor(String nombre, Semaforo s, Articulo a) {
    super(nombre);
    this.sem = s;
    operador = new OperacionesArchivos("datos.txt", getName());
    this.a = a;
  }

  @Override
  public void run() {
    //Aquí va el código para que se puda escribir en el archivo
  }
}
