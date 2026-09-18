console.log(' Задание 1 ')

let chislo = Number(prompt('Задание 1: Введите любое число'))

if (chislo > 0) console.log('Число положительное')
if (chislo < 0) console.log('Число отрицательное')
if (chislo === 0) console.log('Это ноль')
if (chislo % 2 === 0 && chislo !== 0) console.log('Число чётное')
if (chislo % 2 !== 0) console.log('Число нечётное')


console.log(' Задание 2 ')
const massiv = [4, 8, 15, 16, 23, 42]

let sum = 0
let max =  massiv[0]
const big = []

for (let i = 0; i < massiv.length; i++) {
    sum = sum + massiv[i]
    if (massiv[i] > max) max = massiv[i]
    if (massiv[i] > 10) big.push(massiv[i])
}

console.log('Сумма элементов:', sum)
console.log('Максимальное число:', max)
console.log('Числа больше 10:', big)    