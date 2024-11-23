import intToRoman from "./lib/intToRoman";

function App() {
    console.log('Hello World');
    console.log(intToRoman(1994)); // Saída: "MCMXCIV"
    console.log(intToRoman(58));   // Saída: "LVIII"
    console.log(intToRoman(3999)); // Saída: "MMMCMXCIX"
}

App();