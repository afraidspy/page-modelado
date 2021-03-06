
import java.util.Scanner;

/**
 * Clase que permite probar el sistema bancario
 *
 * @author Jessica Santizo Galicia.
 */
public class Prueba {
  
  /**
  * Muestra en un menú, las transacciones 
  * que puede hacer el cliente.
  */
  public static void menu() {
    System.out.println("[M   E   N   Ú]"
            + "\n[0] SALIR"
            + "\n[1] Consultar saldo"
            + "\n[2] Retirar"
            + "\n[3] Depositar");
  }

  public static void main(String[] args) {
    Scanner teclado = new Scanner(System.in);
    Fabrica fabrica;
    Transaccion transaccion;
    Cuenta cuenta;

    System.out.print("Digíte su número de cuenta: ");
    int numCuenta = teclado.nextInt();
    cuenta = new Cuenta(numCuenta);
    Historico historico = Historico.getInstance();
    historico.setCuenta(cuenta);
    int opcion = -1;
    do {
      menu();
      System.out.print("Elige una opción: ");
      opcion = teclado.nextInt();
      if (opcion != 0) {
        fabrica = new Fabrica(opcion);
        transaccion = fabrica.crearTransaccion();
        transaccion.establecerNumeroCuenta(cuenta);
        transaccion.ejecutar();
        historico.agregar(transaccion);
      }
    } while (opcion != 0);
    System.out.println("Listando las transacciones ");
    historico.mostrar();
  }
}
