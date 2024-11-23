import intToRoman from "./intToRoman";

describe('ConvertToRoman unit test', () => { 
    test('converte números simples corretamente', () => {
        expect(intToRoman(1)).toBe('I');
        expect(intToRoman(5)).toBe('V');
        expect(intToRoman(10)).toBe('X');
        expect(intToRoman(50)).toBe('L');
        expect(intToRoman(100)).toBe('C');
        expect(intToRoman(500)).toBe('D');
        expect(intToRoman(1000)).toBe('M');
      });
    
      test('converte números compostos corretamente', () => {
        expect(intToRoman(4)).toBe('IV');
        expect(intToRoman(9)).toBe('IX');
        expect(intToRoman(40)).toBe('XL');
        expect(intToRoman(90)).toBe('XC');
        expect(intToRoman(400)).toBe('CD');
        expect(intToRoman(900)).toBe('CM');
      });
    
      test('converte números complexos corretamente', () => {
        expect(intToRoman(58)).toBe('LVIII');
        expect(intToRoman(1994)).toBe('MCMXCIV');
        expect(intToRoman(2023)).toBe('MMXXIII');
        expect(intToRoman(3999)).toBe('MMMCMXCIX');
      });
    
      test('lança excessão para números fora do intervalo', () => {
        expect(() => intToRoman(0)).toThrow(new Error('Número fora do intervalo permitido (1-3999).'));
        expect(() => intToRoman(-5)).toThrow(new Error('Número fora do intervalo permitido (1-3999).'));
        expect(() => intToRoman(4000)).toThrow(new Error('Número fora do intervalo permitido (1-3999).'));
      });
 })