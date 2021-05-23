

const numbersNames= ['en punto','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce',
'trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve','veinte','veintiuno','veintidós','veintitrés',
'veinticuatro','veinticinco','veintiséis','veintisiete','veintiocho','veintinueve',]

const quarterNames= ['en punto','cuarto','media','menos cuarto']
const decimalNumbersNames= ['treinta','cuarenta','cincuenta']
const dayMomentNames = ['de la mañana','de la tarde','de la noche','media noche','medio día']



function gethourData(inputHours){
    let hourData={
        hour:0,
        minutes:0,
        time:""
    }
    let splitHours= inputHours.split(':')
    hourData.hour= splitHours[0];
    hourData.minutes= splitHours[1].match(/[0-5][0-9]/)[0];
    hourData.time= splitHours[1].match(/([a-zA-Z][a-zA-Z])/)[0];
    return hourData;
}




function getdayMoment(hourData){
    if(hourData.time=='am' || hourData.time=='AM'){
        return dayMomentNames[0];
    }else{
       if(hourData.hour<6){
        return dayMomentNames[1];
       }else{
        
        return dayMomentNames[2];
       }
    }
   
}

function getMinutesString(hourData){
    let minutesString=''
    if (hourData.minutes!=0){
        minutesString+= 'y ';
    }
    
    if(hourData.minutes%15==0){
        minutesString+=quarterNames[hourData.minutes/15];
    }else if(hourData.minutes>29){   
        minutesString+=  decimalNumbersNames[Math.floor(hourData.minutes/10)-3];
        if(hourData.minutes%10>0){
            minutesString+= ' y '+ numbersNames[hourData.minutes%10];
        }
    }else{
        console.log("pruebaa",hourData.minutes)
        minutesString+= numbersNames[Number(hourData.minutes)%30];
    }
    return ' '+minutesString+' ';
}

var hoursModule={

    printHour:function (inputHours){
        let hourData= gethourData(inputHours);
        let hourString= '';
        let minutesString='';
        if(hourData.hour==1){
            if(hourData.minutes==0){
                hourString+='Es la ';
            }else{
                hourString+='Son la ';
            }
            hourString+='una';
        }else{
            if(hourData.hour==12 && hourData.minutes==0){
                hourString+='Es ';
                if(hourData.time=='am' || hourData.time=='AM'){
                    hourString+= dayMomentNames[3];
                }else{
                    hourString+= dayMomentNames[4];
                }
                return hourString;
            }
            hourString+='Son las '+numbersNames[Number(hourData.hour)];
        }
        minutesString= getMinutesString(hourData);
        hourString+= minutesString;
        hourString+=getdayMoment(hourData);
        return (hourString);
    }
}

module.exports= hoursModule