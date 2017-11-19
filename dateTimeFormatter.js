//DateTimeFormatter function - this function should accept arguments, then return the datetime in the format required

var DateTimeFormatter = function(year, month, date, periodInDays){
    var startDateTime;
    var endDateTime;

    year = Number(year);
    month = Number(month);
    date = Number(date);
    periodInDays = Number(periodInDays);

    month = month - 1; //This is required since months (in UTC) start from 0. So for e.g if you enter month as "04", then really it is month 3.

    startDateTime = new Date();
    endDateTime = new Date();

    //Set the UTC Year,Month,Date
    startDateTime.setUTCFullYear(year, month, date);
    endDateTime.setUTCFullYear(year, month, (date + periodInDays));

    //Set the UTC Hours,Mins,Sec
    //We make the assumption that offer start time is 06:30am, and end time is 23:55pm (for simplicity)
    startDateTime.setUTCHours(6,30,0,0);
    endDateTime.setUTCHours(23,55,0,0);

    //Convert to ISOString, then replace .000Z with Z
    var startDateTimeISOString = startDateTime.toISOString().replace(/.000Z/g, "Z");
    var endDateTimeISOString = endDateTime.toISOString().replace(/.000Z/g, "Z");

    return {start: startDateTimeISOString,
        end: endDateTimeISOString};

};

//epgDateTimeFormatter

var epgDateTimeFormatter = function(year, month, day, hour, minutes, seconds){

    year = Number(year);
    month = Number(month);
    day = Number(day);
    hour = Number(hour);
    minutes = Number(minutes);
    seconds = Number(seconds);

    month = month - 1;

    var epgDateTime = new Date();
    epgDateTime.setUTCFullYear(year, month, day);
    epgDateTime.setUTCHours(hour, minutes, seconds,0);

    console.log(epgDateTime);

    var epgDateTimeISOString = epgDateTime.toISOString().replace(/.000Z/g, "Z"); //Since the system doesn't accept 000Z, we get rid of the leading 0's and replace with just Z.

    return {
        epgDateTime: epgDateTimeISOString
    };
};

//A function to generate a random epgDateTime when the randomize button is clicked
function generateRandomEpgDateTime(){
    epgYearInput.value = Math.floor(Math.random()*11 + 2006);
    //generates a random year between 2006 and 2016

    epgMonthInput.value = Math.floor(Math.random()*12 + 1);
    //generates a random number between 1 and 12

    epgDayInput.value = Math.floor(Math.random()*20 + 1);
    //generates a random number between 1 and 20

    epgHoursInput.value = Math.floor(Math.random()*24);
    //generates a random number between 0 and 24

    epgMinutesInput.value = Math.floor(Math.random()*60);
    //generates a random number between 0 and 60

    epgSecondsInput.value = Math.floor(Math.random()*60);
    //generates a random number between 0 and 60



};
