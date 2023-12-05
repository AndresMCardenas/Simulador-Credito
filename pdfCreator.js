


// Descargar tabla de amortización en PDF
function downloadPDF() {
    // Obtener datos del préstamo
    var loanAmount = formatCurrency(document.getElementById('loanAmount').value);
    var interestRate = '15% N.A. (1.25% mensual)';
    var loanTerm = document.getElementById('loanTerm').value + ' meses';

    // Obtener datos adicionales
    var borrowerName = document.getElementById('borrowerName').value;
    var borrowerAge = document.getElementById('age').value;

    // Obtener fecha y hora actual
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString('es-CO') + ' ' + currentDate.toLocaleTimeString('es-CO');

    // Crear contenido del PDF
    var pdfContent = {
        content: [
            { text: '\n\n' },
            { text: 'COOPROFESORESUN - Crédito Aniversario', style: 'header' },
            { text: '\n\n' },
            { text: 'Fecha de simulación: ' + formattedDate, style: 'subheader' },
            { text: 'Monto del Préstamo: ' + loanAmount, style: 'subheader' },
            { text: 'Tasa de Interés: ' + interestRate, style: 'subheader' },
            { text: 'Plazo del Préstamo: ' + loanTerm, style: 'subheader' },
            { text: 'Nombre del Solicitante: ' + borrowerName, style: 'subheader' },
            { text: 'Edad del Solicitante: ' + borrowerAge, style: 'subheader' },
            '\n\n', // Espacio en blanco para centrar la tabla
            { table: { body: getAmortizationData(), layout: 'lightHorizontalLines', width: ['*'], alignment: 'center' } }, // Centrar la tabla
            { text: '\n\n' }, // Saltos de línea después de la tabla
            { text: 'Nota: Los cálculos pueden variar según condiciones del crédito.', style: 'note' }
        ],
        styles: {
            header: { fontSize: 18, bold: true, margin: [0, 0, 0, 10], color: '#3498db' }, // Azul brillante
            subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 0], color: '#555' }, // Gris oscuro
            note: { fontSize: 10, margin: [0, 5, 0, 0], color: '#777' } // Gris claro
        }
    };

    // Generar el PDF
    pdfMake.createPdf(pdfContent).download('tabla_amortizacion.pdf');

}