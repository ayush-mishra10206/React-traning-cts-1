


interface Person{
    name:string;
}

interface Musician extends Person{
    inst:string
}

let user : Musician={
    name:'ayush',
    inst:'guitar',
}

console.log('name : ', user.name)
console.log('inst : ', user.inst)