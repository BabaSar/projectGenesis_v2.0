//Flags set up relating to the offer type selection, such that they are turned true or false depending on selection.

var archiveWorkflowFlag = false;
var cutvWorkflowFlag = false;
var ipprWorkflowFlag = false;
var est3aSingleTitleWorkflowFlag = false;
var noOfferTypeChosenYetFlag = false;

//function to set all flags to false. This is a quick way to set all to false again if there has been a change.
var setAllOfferTypeFlagsToFalse = function(){
    archiveWorkflowFlag = false;
    cutvWorkflowFlag = false;
    ipprWorkflowFlag = false;
    est3aSingleTitleWorkflowFlag = false;
    noOfferTypeChosenYetFlag = false;
};

// A function to immediately get all input elements from the form - but first to declare the input field variables

var providerIdInput;

var licenseYearInput;
var licenseMonthInput;
var licenseDayInput;
var licenseDurationInput;

var offerYearInput;
var offerMonthInput;
var offerDayInput;
var offerDurationInput;

var offerDropDownInput;

var serviceKeyInput;

var epgYearInput;
var epgMonthInput;
var epgDayInput;
var epgHoursInput;
var epgMinutesInput;
var epgSecondsInput;
var randomizeEpgButton;

var generateButton;
generateButton = document.getElementById("generateButton");

var resultsTextBox;

(function(){

    providerIdInput = document.getElementById("providerIdInput");

    licenseYearInput = document.getElementById("licenseYearInput");
    licenseMonthInput = document.getElementById("licenseMonthInput");
    licenseDayInput = document.getElementById("licenseDayInput");
    licenseDurationInput = document.getElementById("licenseDurationInput");

    offerYearInput = document.getElementById("offerYearInput");
    offerMonthInput = document.getElementById("offerMonthInput");
    offerDayInput = document.getElementById("offerDayInput");
    offerDurationInput = document.getElementById("offerDurationInput");

    offerDropDownInput = document.getElementById("offerDropDownInput");

    serviceKeyInput = document.getElementById("serviceKeyInput");

    epgYearInput = document.getElementById("epgYearInput");
    epgMonthInput = document.getElementById("epgMonthInput");
    epgDayInput = document.getElementById("epgDayInput");
    epgHoursInput = document.getElementById("epgHoursInput");
    epgMinutesInput = document.getElementById("epgMinutesInput");
    epgSecondsInput = document.getElementById("epgSecondsInput");
    randomizeEpgButton = document.getElementById("randomizeEpgButton");

    generateButton = document.getElementById("generateButton");

    resultsTextBox = document.getElementById("resultsTextBox");

})(); //This is an IIFE to get all field elements straight away.

//A function to determine which offer type is selected

var determineWhichOfferTypeSelected = function(){

    var offerDropDownInput = document.getElementById("offerDropDownInput");
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


    //do something here...
    providerId = providerIdInput.value;

    licenseYear = licenseYearInput.value;
    licenseMonth = licenseMonthInput.value;
    licenseDay = licenseDayInput.value;
    licenseDuration = licenseDurationInput.value;

    offerYear = offerYearInput.value;
    offerMonth = offerMonthInput.value;
    offerDay = offerMonthInput.value;
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


    if (archiveWorkflowFlag === true){
        yourAdiWillBeGeneratedNowAlert();
        resultsTextBox.value = textAreaResultsGeneratorArchive();

    }else if (cutvWorkflowFlag === true){
        yourAdiWillBeGeneratedNowAlert();
        resultsTextBox.value = textAreaResultsGeneratorCutv();

    }else if (ipprWorkflowFlag === true){
        yourAdiWillBeGeneratedNowAlert();
        resultsTextBox.value = textAreaResultsGeneratorIppr()

    }else if (est3aSingleTitleWorkflowFlag === true){
        yourAdiWillBeGeneratedNowAlert();
        resultsTextBox.value = textAreaResultsGeneratorEst3aSingleTitle()

    }else if (noOfferTypeChosenYetFlag === true){
        alert("Please choose an offer type!");
    }

};

var yourAdiWillBeGeneratedNowAlert = function(){
  alert("Your ADI will be generated now");
};

generateButton.addEventListener("click", generate);
