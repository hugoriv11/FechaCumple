//Objecto literal
var person = {
    /* property: value */
    name: "Hugo",
    lastname: "Rivera",
    birthday: Date.now
}; //JSON (JavaScript Object Notation)

//Accediendo a propiedades
console.log(person.name);
//Cambiando propiedades
person.birthday = new Date(1998,10,15,9,0,0,0);// yy/mm-1/dd/hrs/m/s/ms
console.log(person.birthday);
console.log(person.lastname);

person.age = "19";
console.log(person.age);

console.log(person);

//Ejemplo creando persona
function createPerson(name, lastname, birthday, dui) {
    return {
        name,
        lastname,
        birthday,
        dui
    }
}
let list = [] // Para guardar personas

//Agregando 1 personas
for (let i = 0; i < 1; i++) {
    list.push(createPerson(`Name ${i}`, `Lastname ${i}`, new Date().setFullYear(1998,09,27), `000000${i}`));
}

console.table(list);
console.table(person);


// Array Higher function
// Show only the name persons
console.table(list.map(({
    name
}) => name));

// Get average age
/**Explicar porque esta bueno */

console.log("Average age %i", list.reduce((sum, {
    birthday
}) => {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    console.log(ageDate.getUTCFullYear() , "ageDate UTC");
    console.log(Date.now().getMonth + " Date.now().getMonth");
    return Math.abs(ageDate.getUTCFullYear() - 1970) + sum;
}, 0) / list.length);
/** Explicacion
      1) Date.now() tiene como anio 1970
      2) birthday en este instante para esta explicacion tendra como anio 1998
      3) restando Date.now - birthday (1970 - 1998) nos da abs(-28)
      4) restando 1970 - 2018 nos da abs(-48)
      5) restando 48 - 28 nos da la edad de 20
      6) 1970 + la edad de 20 nos da 1990 el cual es ageDate.getUTCFullYear
      7) ageDate.getUTCFullYear(1990) - 1970 nos da 20 el cual es la edad
      
      Poniendo en juego mes y dia, los milisegundos de birthday aumentan, entonces la resta con 48 hace un valor mas pequeno
      el cual es la edad
*/



// More readable

var year = prompt("Enter ur year of bday");
var month = prompt("Enter ur month of bday");
var day = prompt("Enter ur day of bday");
//Funcion que obtiene fecha bday y pasa a nueva fecha
var fech = new Date();
var cumpleee = (year,month,day) =>{
    fech.setFullYear(year,month-1,day);
    return fech;

};

console.log(cumpleee(year,month,day) , " cumpleee");
var p = new Date(Date.now())
console.log(p.getUTCFullYear(), "Anio actual 2018");
//console.log(birthday," birthday");

function getAge() {
    var ageDifMs = Date.now();//birthday not defined
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var actualYear = ageDate.getUTCFullYear() - 1970;//2018-1970 = 48
    var bdYear = year - 1970;
    var actualMes = ageDate.getMonth() + 1;
    var bdMes = month - 0;
    var actualDay = ageDate.getDay();
    var bdDia = day - 1;

    var dif = actualYear - bdYear;// 20

    if(month <= actualMes && day < actualDay){//a partir del mes 10 dia 4 fecha que ya paso segun fecha de ahora 10 del 27, me dice que aun no he cumplido anios cosa total mente falsa, esto pasa por los milisegundos de los dias que no he tomado en cuenta
        return dif;
    } else {
        return dif - 1;
    }
}

console.log("Average age %i", list.reduce((sum, {
    birthday
}) => getAge(birthday) + sum, 0) / list.length);


/**     =========================
 * 
 *          CODIGO DE PRUEBA        
 *          HACER CASO OMISO
 * 
 */
//Devolver fecha de nacimiento del usuario segun edad
let age = 19;

let bday = new Date();
bday.setFullYear(2018,10,15);// yyyy/mm-1/dd

let dayNow = Date.now();//Devuelve el num de miliseg desde 00:00:00 UTC del 1 de enero de 1970 
let yearNa = bday.getFullYear();//Tomando anio actual
let f = yearNa - age;//Restando anio actual con la edad del usuario

console.log("===== RESULTADO PRUEBA, HACER CASO OMISO =====")
console.log(dayNow , "HHHHH day now");
console.log(bday , "QQQQQ bday");
console.log(f +"/"+(bday.getMonth()+1)+"/"+bday.getDate() , "fechaNacimiento seteando edad de 19");

//Funcion que devuelve la respuesta de si es tu cumple o no
var Cumple = () => {
    if(fech > dayNow) {//el problema el cual no sa la respuesta bien es por el anio, fech seimpre sera menor por el anio
        console.log("Falta para tu cumple");
    } else {
        console.log("Tu cumple ya paso");
    }
}


  