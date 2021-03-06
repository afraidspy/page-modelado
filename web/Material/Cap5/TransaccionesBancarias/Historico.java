

import java.util.Iterator;
import java.util.LinkedList;

/**
 * Clase que representa el historial  de las transacciones 
 * realizadas por un usuario.
 * @author Santizo Galicia Jessica
 */
public class Historico {

  private static Historico historico;
  /*Lista para guardar las transacciones */
  private static LinkedList<Transaccion> historial;
  /*Cuenta que realiza en diversas transacciones*/
  private Cuenta cuenta;
  
  /**
   * Constructor privado, que permite crear solo una instancia.
  */
  private Historico() {
    historial = new LinkedList<Transaccion>();
  }
  /**
  * Establece el número de cuenta.
  * @param cuenta -- la cuenta del cñiente.
  */
  public  void setCuenta(Cuenta cuenta) {
    this.cuenta = cuenta;
  }
  /**
  * Método que implementa el patrón Singleton
  */
  public static Historico getInstance() {
    
    return null;
  }
  /**
  * Método que permite recorrer el historial,
  * para mostrar cada una de las transacciones.
  */
  public void mostrar() {

  }
  /**
  * Método que permite agregar una transacción en 
  * el orden que se ejecuta.
  * @param t -  la transacción que se va agregar: depósito,
  * retiro o consulta de saldo.
  */
  public void agregar(Transaccion t) {
  }
}
