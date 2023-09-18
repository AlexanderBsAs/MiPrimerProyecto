let calculadora=require("./calculadora/completo")

function calculadora2(a,b,c){
    a.toLowerCase()
    switch(a){
        case "sumar":
            return calculadora.sumar(b,c);
            break;
            case "restar":
                return calculadora.restar(b,c);
                break;
                case "multiplicar":
                    return calculadora.multiplicar(b,c);
                    break;
                    case "dividir":
                        return calculadora.dividir(b,c);
                        break;
                                    
    }
}

console.log(calculadora2("dividir",40,50))