document.querySelector("#check-btn").addEventListener("click", function() {
    const inputElement = document.querySelector("#text-input");
    const input = inputElement.value;
    const result = document.querySelector("#result");

    // Verifica si el input está vacío
    if (input.trim().length === 0) {
        alert("Please input a value");
        return;
    }

    // Función para verificar si un texto es un palíndromo
    function esPalindromo(texto) {
        const cadenaOriginal = texto.toLowerCase().replace(/[^a-z0-9]/gi, '');
        const cadenaInvertida = cadenaOriginal.split('').reverse().join('');
        return cadenaOriginal === cadenaInvertida;
    }

    // Verificar y mostrar el resultado
    if (esPalindromo(input)) {
        result.textContent = `"${input}" is a palindrome`;
    } else {
        result.textContent = `"${input}" is not a palindrome`;
    }
});