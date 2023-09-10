"use strict";
let priceInput = document.getElementById('price');
let btn = document.getElementById('btn');
let valueHere = document.getElementById('insert-value-here');
let valueHereInsert = document.getElementById('value-here');
let priceNumber;
let value = 0;
// Adiciona o evento de click assim que aperta no botão
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    var _a;
    if (isNaN(parseFloat((_a = priceInput === null || priceInput === void 0 ? void 0 : priceInput.value) !== null && _a !== void 0 ? _a : ''))) {
        alert('Favor digitar um valor numérico!');
    }
    else {
        if ((priceInput === null || priceInput === void 0 ? void 0 : priceInput.value) !== '0') {
            // Verifica se existe valor
            if (priceInput) {
                // Faz a conversão de elemento HTML para String
                let priceText = priceInput.value;
                // Faz a conversão de String para Number
                priceNumber = parseFloat(priceText);
                // Verifica se existe valor na variável valueHereInsert
                if (valueHereInsert) {
                    let valueCheck;
                    let checkQtdNumbers;
                    let valueDone;
                    // Soma o preço ao valor atual
                    value += priceNumber;
                    valueCheck = value.toString();
                    checkQtdNumbers = parseFloat(valueCheck);
                    valueDone = checkQtdNumbers;
                    // Converte o valor numérico de valueDone para string e insere o valor na valueHereInsert
                    valueHereInsert.innerHTML = valueDone.toFixed(2);
                    // Limpa o input de digitação do valor
                    priceInput.value = '';
                }
            }
        }
        else {
            alert(`Total da compra é de R$${value.toFixed(2)}`);
            priceInput.value = '';
        }
    }
});
