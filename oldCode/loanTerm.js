function recalculateLoan() {
  var loanAmount = document.getElementById('loanAmount').value;
  var interestRate = 0.0125; // 1.25% mensual
  var loanTerm = document.getElementById('loanTerm').value;
  var age = document.getElementById('age').value;

  // Verificar que el monto y el plazo sean válidos antes de recalcular
  if (loanAmount && loanTerm && age) {
    var monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));


    // Actualizar la cuota mensual en la interfaz
    var monthlyPaymentValue = document.getElementById('monthlyPaymentValue');
    monthlyPaymentValue.textContent = formatCurrency(monthlyPayment);


    // Generar y mostrar la nueva tabla de amortización
    generateAmortizationTable(loanAmount, interestRate, loanTerm, getInsuranceRate(age));
    calculateLoan();
  }
}