


/**
 * Intefaz para representar arboles B
 * y algunas operaciones básicas que se
 * pueden efectuar dentro de éstos.
 * @author Santizo Galicia Jessica
 */
public interface ArbolBI {
    
    /**
     *Indica si un árbol está vacío
     * @return boolean - true si no contiene elementos y
     * false en otro caso
     */
    public boolean estaVacio();
    /**
     * Método que inserta un numero  al árbol
     * @param elemento -
     */
    public void insertar(int numero);
    /**
     * Método que busca un numero dentro del arbol
     * @para boolean -- regresa true  si pertenece al arbol
     * y false en otro caso.
     */
     public boolean buscar(int elemento);
     
    /**
     * Método que elimina un numero del arbol B.
     * @para boolean -- regresa true  si se elimino
     * y false en otro caso.
     */
     public boolean eliminar(int elemento);
     /**
      * Regresa en formato cadena cada uno de los 
      * elementos del arbol,de acuerdo al nivel en que se encuentran
      * @return String -- Regresa en formato cadena los elementos existentes
      * en el arbol, de acuerdo al nivel en el que se encuentren.
      */
     public void imprimeNiveles();
}
