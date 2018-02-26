//Flags set up relating to the offer type selection, such that they are turned true or false depending on selection.

var archiveWorkflowFlag = false;
var cutvWorkflowFlag = false;
var ipprWorkflowFlag = false;
var est3aSingleTitleWorkflowFlag = false;
var est3bSingleTitleWorkflowFlag = false;
var noOfferTypeChosenYetFlag = false;

//function to set all flags to false. This is a quick way to set all to false again if there has been a change.
var setAllOfferTypeFlagsToFalse = function(){
    archiveWorkflowFlag = false;
    cutvWorkflowFlag = false;
    ipprWorkflowFlag = false;
    est3aSingleTitleWorkflowFlag = false;
    est3bSingleTitleWorkflowFlag = false;
    noOfferTypeChosenYetFlag = false;
};


const providerIdInput =  document.getElementById("providerIdInput");

const licenseYearInput = document.getElementById("licenseYearInput");
const licenseMonthInput = document.getElementById("licenseMonthInput");
const licenseDayInput = document.getElementById("licenseDayInput");
const licenseDurationInput = document.getElementById("licenseDurationInput");

const offerYearInput = document.getElementById("offerYearInput");
const offerMonthInput = document.getElementById("offerMonthInput");
const offerDayInput = document.getElementById("offerDayInput");
const offerDurationInput = document.getElementById("offerDurationInput");

const offerDropDownInput = document.getElementById("offerDropDownInput");

const serviceKeyInput = document.getElementById("serviceKeyInput");

const epgYearInput = document.getElementById("epgYearInput");
const epgMonthInput = document.getElementById("epgMonthInput");
const epgDayInput = document.getElementById("epgDayInput");
const epgHoursInput = document.getElementById("epgHoursInput");
const epgMinutesInput = document.getElementById("epgMinutesInput");
const epgSecondsInput = document.getElementById("epgSecondsInput");
const randomizeEpgButton = document.getElementById("randomizeEpgButton");
const licenseStartNow = document.getElementById("licenseStartNow");
const offerStartNow = document.getElementById("offerStartNow");
const generateButton = document.getElementById("generateButton");
const resultsTextBox = document.getElementById("resultsTextBox");


//Now set the duration for both offer and license to default to 30 days...
licenseDurationInput.value = 30;
offerDurationInput.value = 30;

//When user clicks NOW for licenseStart...
licenseStartNow.addEventListener('click', function(){
   var dateToday = new Date().toLocaleString();

   //get Year
   var year = dateToday.substring(6,10);
   licenseYearInput.value = year;

   //getMonth
    var month = dateToday.substring(3,5);
    licenseMonthInput.value = month;

    //getDay
    var day = dateToday.substring(0,2);
    licenseDayInput.value = day;

});

//When user clicks NOW for offerStart...
offerStartNow.addEventListener('click', function(){
    var dateToday = new Date().toLocaleString();

    //get Year
    var year = dateToday.substring(6,10);
    offerYearInput.value = year;

    //getMonth
    var month = dateToday.substring(3,5);
    offerMonthInput.value = month;

    //getDay
    var day = dateToday.substring(0,2);
    offerDayInput.value = day;

});


//A function to determine which offer type is selected

var determineWhichOfferTypeSelected = function(){

    const offerDropDownInput = document.getElementById("offerDropDownInput");
    var selected = offerDropDownInput.value;

    //An array of the epg related inputs to make it easy to loop through and disable/enable them depending on selection
    //of the offer type. E.g if CUTV is selected, then loop through these and set disabled = false.
    var epgRelevantInputs = [serviceKeyInput, epgYearInput, epgMonthInput, epgDayInput, epgHoursInput, epgMinutesInput,
        epgSecondsInput, randomizeEpgButton];

    if (selected === "CUTV"){

        for (var i=0; i < epgRelevantInputs.length; i++){
            epgRelevantInputs[i].disabled = false;
        }

        //flag for CUTV workflow should be activated and all others set to false
        setAllOfferTypeFlagsToFalse();
        cutvWorkflowFlag = true;

    }else{

        for (var i=0; i < epgRelevantInputs.length; i++){
            epgRelevantInputs[i].disabled = true;
        }

        if(selected === "Archive"){
            setAllOfferTypeFlagsToFalse();
            archiveWorkflowFlag = true;
        }else if(selected ==="IPPR"){
            setAllOfferTypeFlagsToFalse();
            ipprWorkflowFlag = true;
        }else if(selected === "EST 3A Single Title"){
            setAllOfferTypeFlagsToFalse();
            est3aSingleTitleWorkflowFlag = true;
        }else if(selected === "EST 3B Single Title"){
            setAllOfferTypeFlagsToFalse();
            est3bSingleTitleWorkflowFlag = true;
        }else if(selected === "Choose..."){
            setAllOfferTypeFlagsToFalse();
            noOfferTypeChosenYetFlag = true;
        }
    }
};

//declare all variables to be used in the ADIs

var providerId;
var licenseYear;
var licenseMonth;
var licenseDay;
var licenseDuration;

var offerYear;
var offerMonth;
var offerDay;
var offerDuration;

var offerDropDown;

var serviceKey;

var epgYear;
var epgMonth;
var epgDay;
var epgHours;
var epgMinutes;
var epgSeconds;

var retrieveAllInputFieldValues = function(){

    providerId = providerIdInput.value;

    licenseYear = licenseYearInput.value;
    licenseMonth = licenseMonthInput.value;
    licenseDay = licenseDayInput.value;
    licenseDuration = licenseDurationInput.value;

    offerYear = offerYearInput.value;
    offerMonth = offerMonthInput.value;
    offerDay = offerDayInput.value;
    offerDuration = offerDurationInput.value;

    offerDropDown = offerDropDownInput.value;
    serviceKey = serviceKeyInput.value;

    epgYear = epgYearInput.value;
    epgMonth = epgMonthInput.value;
    epgDay = epgDayInput.value;
    epgHours = epgHoursInput.value;
    epgMinutes = epgMinutesInput.value;
    epgSeconds = epgSecondsInput.value;

};


//WHEN GENERATE ADI BUTTON IS CLICKED
var generate = function(){

    digitsGenerator();//This initializes new random digits e.g uriId

    console.log(uriId + "\n" + uriId2 + "\n" + uriId3);

    //Although this function is called once a change is detected if user selects an option from the offer type dropdown,
    //an alert is required if the first thing the user does is forget to choose an option and then presses generate.
    //Since it is likely that will happen, this function below is called here to cater for their being no offer type chosen.
    determineWhichOfferTypeSelected();

    //start collecting all the input field values and assign to variables
    retrieveAllInputFieldValues();

    //now set up license dates object using dateTimeFormatter()
    licenseDatesObject = dateTimeFormatter(licenseYear, licenseMonth, licenseDay, licenseDuration);
    offerDatesObject = dateTimeFormatter(offerYear, offerMonth, offerDay, offerDuration);
    epgDateObject = epgDateTimeFormatter(epgYear, epgMonth, epgDay, epgHours, epgMinutes, epgSeconds);

    console.log('epgDateObject: ' + epgDateObject); //the epg date time does in fact get generated here and shows on the console
    console.log();
    console.log('ofer object: ' + offerDatesObject.start + " & " + offerDatesObject.end);

    if (archiveWorkflowFlag === true){
        yourAdiWillBeGeneratedNowAlert();
        resultsTextBox.value = textAreaResultsGeneratorArchive();

    }else if (cutvWorkflowFlag === true){
        yourAdiWillBeGeneratedNowAlert();
        resultsTextBox.value = textAreaResultsGeneratorCutv();

    }else if (ipprWorkflowFlag === true){
        yourAdiWillBeGeneratedNowAlert();
        resultsTextBox.value = textAreaResultsGeneratorIppr();

    }else if (est3aSingleTitleWorkflowFlag === true){
        yourAdiWillBeGeneratedNowAlert();
        resultsTextBox.value = textAreaResultsGeneratorEst3aSingleTitle();

    }else if (est3bSingleTitleWorkflowFlag === true){
        yourAdiWillBeGeneratedNowAlert();
        resultsTextBox.value = textAreaResultsGeneratorEst3bSingleTitle();

    }else if (noOfferTypeChosenYetFlag === true){
        alert("Please choose an offer type!");
    }

};

var yourAdiWillBeGeneratedNowAlert = function(){
  alert("Your ADI will be generated now");
};

generateButton.addEventListener("click", generate);
