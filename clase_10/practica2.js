let cursos=require("./modulo/practica")

let alex= new cursos.Curso2("Alexander","ureta",30,[7],"enano")

/* console.log(cursos.Curso2);
console.log(alex)
 console.log(alex.saludo("alexander"))
 */

 let alexander={
    apellido:"Ureta",
    nota:8,
    comision:23,
    examen:"jueves",
    notificacion:function(nota){
        this.nota=nota
        return  nota>6&&`muy bien vas por buen camino`
    }
 }

/*  console.log(alexander.notificacion())
 */
 let alexander2=new alexander.notificacion(10)
/*  console.log(alexander2) */

 console.log(alex)