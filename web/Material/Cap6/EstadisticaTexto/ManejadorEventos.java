

import javax.swing.JButton;
import javax.swing.JOptionPane;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Clase que permite manejar eventos de la clase.
 *
 * @author Santizo Galicia Jessica
 */
public class ManejadorEventos implements ActionListener {

    private EstadisticaPanel panel;
    private CalcularDatos calcular;

    /**
     * Constructor a partir de un parámetro.
     * @param panel -- el panel del que se desea
     * manejar los eventos.
     */
    public ManejadorEventos(EstadisticaPanel panel) {
        this.panel = panel;

    }

    @Override
    public void actionPerformed(ActionEvent e) {
        JButton boton = (JButton) e.getSource();

        if (boton.getActionCommand().equals("calcular")) {
            if (panel.getTexto().getText().equals("")) {
                JOptionPane.showMessageDialog(null, "Escriba un texto, para mostrar estadísticas");
            } else {
                calcular = new CalcularDatos(panel.getTexto().getText());
                if (!panel.getCaracteres().isSelected() && !panel.getPalabras().isSelected() && !panel.getLineas().isSelected()) {
                    JOptionPane.showMessageDialog(null, "Debes seleccionar una opción");
                } else {
                    panel.getEstadisticas().setText("");

                    if (panel.getCaracteres().isSelected()) {
                        int caracteres = calcular.calcularCaracteres();
                        System.out.println("Carácteres: " + caracteres);
                        System.out.println();
                        panel.getEstadisticas().setText(panel.getEstadisticas().getText() + "\nCarácteres: " + caracteres);
                    }
                    if (panel.getPalabras().isSelected()) {
                        int palabras = calcular.obtenerCantidadPalabras();
                        System.out.println("Palabras: " + palabras);
                        panel.getEstadisticas().setText(panel.getEstadisticas().getText() + "\nPalabras: " + palabras);
                    }
                    if (panel.getLineas().isSelected()) {
                        int lineas = calcular.calcularLineas();
                        System.out.println("Líneas: " + lineas);
                        panel.getEstadisticas().setText(panel.getEstadisticas().getText() + "\nLíneas: " + lineas);
                    }
                }
            }
        }

        if (boton.getActionCommand().equals("limpiar")) {
            panel.getTexto().setText("");
            panel.getEstadisticas().setText("");
        }
    }
}
