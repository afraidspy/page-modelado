
/**
 * Clase que representa a un animal.
 * @author Jessica Santizo Galicia.
 */
public class Animal {
    
    private String nombre;
    private String cabeza;
    private String brazoIzq;
    private String brazoDer;
    private String piernaIzq;
    private String piernaDer;
    private String cuerpo;
    private String cola;
    
    public Animal(String nombre){
        this.nombre = nombre;
    }

    public String getCabeza() {
        return cabeza;
    }

    public void setCabeza(String cabeza) {
        this.cabeza = cabeza;
    }

    public String getBrazoIzq() {
        return brazoIzq;
    }

    public void setBrazoIzq(String brazoIzq) {
        this.brazoIzq = brazoIzq;
    }

    public String getBrazoDer() {
        return brazoDer;
    }

    public void setBrazoDer(String brazoDer) {
        this.brazoDer = brazoDer;
    }

    public String getPiernaIzq() {
        return piernaIzq;
    }

    public void setPiernaIzq(String piernaIzq) {
        this.piernaIzq = piernaIzq;
    }

    public String getPiernaDer() {
        return piernaDer;
    }

    public void setPiernaDer(String piernaDer) {
        this.piernaDer = piernaDer;
    }

    public String getCuerpo() {
        return cuerpo;
    }

    public void setCuerpo(String cuerpo) {
        this.cuerpo = cuerpo;
    }

    public String getCola() {
        return cola;
    }

    public void setCola(String cola) {
        this.cola = cola;
    }
    
  

    public String getNombre() {
        return nombre;
    }
    
    
}
