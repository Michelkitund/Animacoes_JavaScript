function converterKm() {
    // 1. Pega o valor digitado no input de KM
    let km = document.getElementById("km").value;
    
    // 2. Faz o cálculo (1 km = 0.62 milhas)
    let milhas = km * 0.621371;
    
    // 3. Coloca o resultado no <span> da tela
    document.getElementById("resMilha").innerText = milhas.toFixed(2);
}

function converterTemp() {
    // 1. Pega o valor digitado no input de Celsius
    let c = document.getElementById("celsius").value;
    
    // 2. Aplica a fórmula: (C * 1.8) + 32
    let f = (c * 1.8) + 32;
    
    // 3. Coloca o resultado no <span> da tela
    document.getElementById("resFar").innerText = f.toFixed(1);
}

/***************************************************************/
/**************** LOGICA DO PORTUGOL ***************/
/*
programa
{
	funcao inicio()
	{
		// Declaração das variáveis 
		real km, milhas
		real celsius, fahrenheit

		// --- LOGICA DA DISTÂNCIA ---
		escreva("Digite o valor em Quilômetros: ")
		leia(km)
		// 1 km equivale a aproximadamente 0.62 milhas
		milhas = km * 0.621371
		
		escreva("O resultado em Milhas é: ", milhas)
		escreva("\n----------------------------\n")

		// --- LOGICA DA TEMPERATURA ---
		escreva("Digite o valor em Celsius: ")
		leia(celsius)
		
		// Fórmula: Multiplica por 1.8 e soma 32
		fahrenheit = (celsius * 1.8) + 32
		
		escreva("O resultado em Fahrenheit é: ", fahrenheit)
	}
}
*/