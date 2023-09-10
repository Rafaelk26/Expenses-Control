let priceInput: HTMLInputElement | null = document.getElementById('price') as HTMLInputElement;
let btn: HTMLElement | null = document.getElementById('btn');
let valueHere: HTMLSpanElement | null = document.getElementById('insert-value-here') as HTMLSpanElement;
let valueHereInsert: HTMLSpanElement | null = document.getElementById('value-here') as HTMLSpanElement;

let priceNumber: number;
let value: number = 0;

// Adiciona o evento de click assim que aperta no botão
btn?.addEventListener("click", () => {
    if (isNaN(parseFloat(priceInput?.value ?? ''))) {
        alert('Favor digitar um valor numérico!');
    } else{
        if(priceInput?.value !== '0'){
            // Verifica se existe valor
            if (priceInput) {
                // Faz a conversão de elemento HTML para String
                let priceText: string = priceInput.value;
                // Faz a conversão de String para Number
                priceNumber = parseFloat(priceText);
    
                // Verifica se existe valor na variável valueHereInsert
                if (valueHereInsert) {    
                    let valueCheck: string;
                    let checkQtdNumbers: number;
                    let valueDone: number;
                    // Soma o preço ao valor atual
                    value += priceNumber;
                    valueCheck = value.toString();
                    checkQtdNumbers = parseFloat(valueCheck);
                    valueDone = checkQtdNumbers
                    // Converte o valor numérico de valueDone para string e insere o valor na valueHereInsert
                    valueHereInsert.innerHTML = valueDone.toFixed(2)
                    // Limpa o input de digitação do valor
                    priceInput.value = ''
                }   
            }
        } else {
            alert(`Total da compra é de R$${value.toFixed(2)}`)
            priceInput.value = ''   
        }
    }
});




