
package semaforo;


/**
 *  Clase que representa a un escritor
 * @author 
 */
public class TLector extends Thread {

    Semaforo sem;
    OperacionesArchivos operador;

    public TLector(String nombre, Semaforo s) {
        super(nombre);
        this.sem = s;
        operador = new OperacionesArchivos("datos.txt", getName());
    }

    @Override
    public void run() {
      //Aquí va el código para que se pueda leer del archivo
    }

}
