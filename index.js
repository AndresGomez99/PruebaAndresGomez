const prompt = require('prompt');
const { printHour } = require('./horas');
var continueExecution= true;
const hourFormat= /(^((0?[1-9])|(1[0-2])):([0-5][0-9])\s?((am|pm)|(AM|PM))$)/
const hourCondition = [{
        name: 'hora',
        validator: hourFormat,
        warning: 'Hora no está en el formato necesario, por favor vuelva a ingresarla:'
    },
  
];

console.log('Bienvenido, por favor ingrese una hora con el formato de 12 horas ([horas]:[minutos][am/pm])');
    prompt.start();
    prompt.get(hourCondition, function (err, result){
        if (err){  
            console.log(err); 
            return 0;
        }
        if (result.hora==""){
            console.log('No se ingresó ninguna fecha');
        }else{
            console.log(printHour(result.hora)+'.');
        }
    });
