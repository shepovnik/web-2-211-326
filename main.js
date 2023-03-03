//---------------------------------------------------------1
function first()
{
let time = prompt( "введите скорость (в км/ч)" )
let time1 = time * 1000 / 3600
console.log(time, " км/ч соответствует ", time1, " м/с")
let time2 = prompt( "введите скорость (в м/с)" )
let time3 = time2 * 3600 / 1000
console.log(time2, " м/с соответствует ", time3, " км/ч")
}
//---------------------------------------------------------2
function second()
{
let a = +prompt( "введите сторону a" )
let b = +prompt( "введите сторону b" )
let c = +prompt( "введите сторону c" )

if (a+b<=c || b+c<=a || a+c<=b)
{
    console.log("треугольник не существует")
} else 
// (a+b>c && b+c>a && a+c>b) 
{
    console.log("треугольник существует")
}
const p = a+b+c;
console.log("периметр =", p)

const s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log("площадь =", s)

const otn = p/s;
console.log("Соотношение  =", otn)
}
//---------------------------------------------------------3
function three()
{
let ch = +prompt( "введите число до которого будет выполняться цикл" )
if ( !parseInt(ch) ) 
    {
    alert ('Нужно писать число!');  
    ch = +prompt( "введите число до которого будет выполняться цикл" )
    } 

for (let i = 0; i < ch+1; i++)
{
    if (i % 5 == 0 && i!=0) {
        console.log('"', i, "fizz buzz", '"')
    } else if (i % 2 == 1){
        console.log('"', i, "fizz", '"')
    } else if (i % 2 == 0){
        console.log('"', i, "buzz", '"')
    }
}
}
//---------------------------------------------------------4
function four()
{
let as = "\n"
let as2 = "||"
let itog = as 
for (let i = 0; i < 13; i++)
{
    if (i % 2 ==1)
    {
        itog += '*'.repeat(i)  + as
    }
    else{
        itog += '#'.repeat(i) + as
    }
}
itog += as2
console.log(itog)
}
//---------------------------------------------------------5
function five()
{
const ar = 12
let ch1 = +prompt( "Угадайте число" )

if ( !parseInt(ch1) ) 
    {
    alert ('Нужно писать число!') 
    ch1 = +prompt( "Угадайте число" )
    } 
    do {
        if (ch1 < ar){
            alert ( 'ваше число меньше' )
            ch1 = +prompt( "Угадайте число" )
        } 
            else{
                alert ( 'ваше число больше' )
                ch1 = +prompt( "Угадайте число" )
            }
    } while (ch1 != ar);
    alert ( 'Число угадано' )
}
//---------------------------------------------------------6
function six()
{
let n = +prompt( "введите число для проверки на делимость" )
let x1 = +prompt( "введите первый делитель" )
let y1 = +prompt( "введите второй делитель" )
let t = true;
let f = false; 

if (n % x1 == 0 && n % y1 == 0) {
        console.log( "n =", n, ",", "x =", x1, ",", "y =", y1, "=>", t )
    } else {
        console.log( "n =", n, ",", "x =", x1, ",", "y =", y1, "=>", f )
    }
}

//---------------------------------------------------------7
function seven()
{
let m = +prompt( "введите номер месяца от 1 до 12" )

    if ( 1 <= m && m <= 3  ) {
        console.log( "месяц", m, "=> 1 квартал")
    } else if ( 4 <= m && m <= 6 ){
        console.log("месяц", m, "=> 2 квартал")
    } else if ( 7 <= m && m <= 9 ){
        console.log("месяц", m, "=> 3 квартал")
    } else if ( 10 <= m && m <= 12 ){
        console.log("месяц", m, "=> 4 квартал")
    }
}

//----------------------------------------------------------1-1
function first1()
{
let value = +prompt( "введите скорость (число)" )
let measure = prompt( "введите направление преобразования: м/с или  км/ч" )   
let x = function convertSpeed(value, measure)
{ 
    if (measure == "км/ч")
    { 
        return value * 1000 / 3600
    }
    else if (measure == "м/с")
    {
        return value * 3600 / 1000     
    }
}
console.log("convertSpeed (", value, ", 'toKMH') -> " + x(value, measure), " '", measure, "'")
}
//----------------------------------------------------------2-1
function second1()
{
    let abs = +prompt( "введите число, для которого нужно найти модуль" )

let xx = function absValue (abs){
    if (abs < 0)
    {
        return -abs
    }
    else
    {
        return abs
    }
}
console.log("absValue(", abs,") ->", xx(abs))
}

//----------------------------------------------------------3-1
function three1()
{
    const student  = { group: 201, last_name: "Иванов", first_name: "Иван" };

    for (let property in student ) {
    console.log("список свойств:", property)
}
    console.log("Студент", student.first_name, student.last_name, "учится в", student.group, "группе")
    
}

//----------------------------------------------------------4-1

function four1()
{
    let min = +prompt( "введите минимальное число диапазона" )
    let max = +prompt( "введите максимальное число диапазона" )

    let xx = function randomNumber (min, max)
    {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    console.log("randomNumber(", min,",", max,") ->", xx(min, max))
}

//----------------------------------------------------------5-1

function sampleArray()
{
let arr = [0,1,2,3,4,5,6,7,8,9,10]
let arr1 = []
let ch = +prompt( "введите количество выводимых значений из массива" )
let i = 0
let rand
while (i != ch)
{
    rand = Math.floor(Math.random() * arr.length);
    arr1.push(rand)
    i++
}
console.log("sampleArray(", arr, ",", ch,") ->", arr1);
}