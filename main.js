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



console.log(' Задание 3 ')

const students = [
    { name: 'Анна', grade: 4 },
    { name: 'Игорь', grade: 5 },
    { name: 'Олег', grade: 3 },
    { name: 'Мария', grade: 5 },
    { name: 'Иван', grade: 2 }
]

let Grade = Number(prompt('Введите оценку '))
let GradeSum = 0
const goodStudents = []

for (let i = 0; i < students.length; i++) {
    GradeSum = GradeSum + students[i].grade
    
    if (students[i].grade > Grade) {
        goodStudents.push(students[i].name)
    }
}

let Grade_crednyy = GradeSum / students.length

console.log('Ученики с оценкой выше заданной:', goodStudents)
console.log('Средняя оценка класса:',  Grade_crednyy)



console.log(' Задание 4 ')


function рандом() {
    const secretnoechislo = Math.floor(Math.random() * 10) + 1
    
    let chislo = Number(prompt('Задание 4: Угадай число от 1 до 10'))

    if (chislo === secretnoechislo) {
        console.log('  Вы угадали!')
    } else if (chislo < secretnoechislo) {
        console.log('Не угадали, число было больше!')
    } else {
        console.log('Не угадали. Загаданное число было меньше! ' )
    }
}

рандом()
