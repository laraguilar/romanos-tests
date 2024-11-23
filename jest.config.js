module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Usa ts-jest para transformar arquivos TypeScript
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'], // Permite extensões suportadas
  };