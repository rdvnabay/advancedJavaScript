let sayi1=10
sayi1="İshak"
let student={
    id:1,
    name:"İbrahim"
}
//console.log(student)

function save(puan=10,ogrenci) {
    //console.log(ogrenci.name+" : "+puan)
}

//save(undefined,100)

let students=["İsmail","Rıdvan"]
//console.log(students)

let students2=[student,{id:2,name:"Sebahattin"},"Ankara",{city:"İstanbul"}]
//console.log(students2)

//rest: geriye kalan parametreler
//c# params, java varArgs
let showProducts=function(id,...products){
    console.log(id)
    console.log(products[0])
}

console.log(typeof showProducts())
//showProducts(10,["Elma","Armut","Karpuz"])

//spread: ayırma
let points=[1,2,3,4,50,7,25]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//destructuring
let populations=[10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number){
    console.log(small1)
}

someFunction(populations)

let category={id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name1}=category
console.log(id)
console.name(name1)

//redux
