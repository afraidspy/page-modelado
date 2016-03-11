import java.util.Scanner;

/**
 * Clase para probar el patrón Estrategia.
 * @author Jessica Santizo Galicia.
 */
public class Prueba {

  public static void menu() {
    System.out.println("\n[M E N U ] \n"
            + "[0] SALIR\n"
            + "[1] Primer algoritmo\n"
            + "[2] Segundo algoritmo");
  }

  public static void main(String[] args) {
    Scanner teclado = new Scanner(System.in);
    String cadena = "";
    int opcion = -1;
    Encriptacion algoritmo = null;

    do {
      menu();
      System.out.print("\nElija la opción del algoritmo que desea usar: ");
      opcion = teclado.nextInt();

      if (opcion == 1 || opcion == 2) {
        System.out.print("\nEscribe la contraseña a encriptar y desencriptar: ");
        cadena = teclado.next();
        algoritmo = new Encriptacion(cadena);
      }

      switch (opcion) {
        case 0:
          System.out.println("Saliendo...");
          break;
        case 1:
          algoritmo.establecerAlgoritmo(new AlgoritmoCesar());
          algoritmo.encriptar(cadena);
          algoritmo.desencriptar();
          break;
        case 2:
          algoritmo.establecerAlgoritmo(new AlgoritmoModulo());
          algoritmo.encriptar(cadena);
          algoritmo.desencriptar();
          break;
        default:
          System.out.println("Elija una opción válida");
      }

    } while (opcion != 0);
  }
}
