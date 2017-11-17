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

//A function to determine which offer type is selection

var determineWhichOfferTypeSelected = function(){

    var selected = offerDropDownInput.value;

    var epgRelevantInputs = [serviceKeyInput, epgYearInput, epgMonthInput, epgDayInput, epgHoursInput, epgMinutesInput,
                                epgSecondsInput, randomizeEpgButton];

    if (selected === "CUTV"){

        for (var i=0; i < epgRelevantInputs.length; i++){
            epgRelevantInputs[i].disabled = false;
        }

    }else{

        for (var i=0; i < epgRelevantInputs.length; i++){
            epgRelevantInputs[i].disabled = true;
        }
    }
};
