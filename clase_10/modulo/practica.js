let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados=estudiantes.filter(function(a){
    return a.aprobado==true
})

let desaprobados=estudiantes.filter(function(a){
    return a.aprobado==false
})

/* console.log(aprobados)
console.log(desaprobados)  */

function Curso2(estudiante,apellido,edad,nota){
    this.estudiante=estudiante
    this.apellido=apellido
    this.edad=edad
    this.nota=nota
   this.notificacion= function(){
        if(this.nota>7){
            return `${this.estudiante} ${this.apellido} vas por buen camino, sigue asi!"`
        }
        else if(this.nota<8&&this.nota>5){
            return `${this.estudiante} ${this.apellido} vas bien, aunque te aconsejaria mejorar!"`
        }
        else if(this.nota <6){
            return `${this.apellido} deberias mejorar, ponte a practicar...`
        }
    } 
    this.saludo=function(a){
        return "hola "+this.estudiante+"!!!"
    }
}

function Curso(estudiante,edad,comision,notas){
    this.estudiante=estudiante
    this.edad=edad
    this.comision=comision
    this.notas=notas

}
let alexander= new  Curso2("alexander","ureta",30,10,"ALEX")
/*  console.log(alexander.saludo("alex"))
 */
module.exports = {Curso,Curso2}