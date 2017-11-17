//Flags set up relating to the offer type selection, such that they are turned true or false depending on selection.

var archiveWorkflowFlag = false;
var cutvWorkflowFlag = false;
var ipprWorkflowFlag = false;
var est3aSingleTitleWorkflowFlag = false;

//function to set all flags to false. This is a quick way to set all to false again if there has been a change.
var setAllOfferTypeFlagsToFalse = function(){
    archiveWorkflowFlag = false;
    cutvWorkflowFlag = false;
    ipprWorkflowFlag = false;
    est3aSingleTitleWorkflowFlag = false;
};

// A function to immediately get all input elements from the form

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

var resultsTextBox;

var getElements = function(){

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

};

getElements();

//A function to determine which offer type is selected

var determineWhichOfferTypeSelected = function(){

    var selected = offerDropDownInput.value;

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
        }
    }
};

//DateTimeFormatter function
