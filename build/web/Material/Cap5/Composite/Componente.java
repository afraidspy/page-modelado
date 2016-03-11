

/**
 * Interfaz que representa un componente en general.
 * @author Santizo Galicia Jessica
 */
public interface Componente {
  /**
   * Permite agregar un componente  a una lista de componentes.
   * @param c - el componente a ser agregado a la lista.
   */
  public void agregarComponente(Componente c);
  /**
   * Permite eliminar un componente del conjunto de componentes.
   * @param c - el componente a ser elimninado.
   */
  public void eliminarComponente(Componente c);
  /**
   * Permite obtener el precio de un componente específico.
   * @param c -  el componente del que se desea saber su  precio. 
   */
  public double obtenerPrecio(Componente c);
  /**
   * Obtiene un componente a partir de su nombre.
   * @param nombre -- el nombre del componente a obtener.
   */
  public Componente obtenerHijo(String nombre);
  /**
   * Obtiene el nombre de un componente.
   */
  public String obtenerNombre();
  /**
   * Obtiene el precio de un componente.
   */
  public double obtenerPrecio();
  /*Obtiene la descripción de los componentes*/
  public void descripcion();
}
