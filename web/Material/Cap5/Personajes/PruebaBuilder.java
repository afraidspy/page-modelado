

import java.util.LinkedList;
import java.util.Scanner;

/**
 * Clase para probar el uso del patrón Builder.
 * @author Jessica Santizo Galicia.
 */
public class PruebaBuilder {
    public static void main (String [] arg){
        
        Scanner teclado = new Scanner(System.in);
        Nino niño ;
        System.out.print("Escribe tu nombre: ");
        String nombre =  teclado.nextLine();
        niño =  new Nino(nombre);
    
    }
}
