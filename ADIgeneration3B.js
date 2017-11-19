var headerGenerator3B = function(){

    var header = '<?xml version="1.0" encoding="UTF-8"?>' +
        '<ADI3 xmlns="http://www.cablelabs.com/namespaces/metadata/xsd/vod30/1" ' + '\n' +
        'xmlns:PO="URN:NNDS:CMS:ADI3:PURCHASEOPTIONS:01" xmlns:content="http://www.cablelabs.com/namespaces/metadata/xsd/content/1" ' + '\n' +
        'xmlns:core="http://www.cablelabs.com/namespaces/metadata/xsd/core/1" xmlns:ext="URN:NNDS:CMS:ADI3:01" xmlns:offer="http://www.cablelabs.com/namespaces/metadata/xsd/offer/1" ' + '\n' +
        'xmlns:schemaLocation="http://www.cablelabs.com/namespaces/metadata/xsd/vod30/1 ./MD-SP-VODContainer-I01.xsd" xmlns:terms="http://www.cablelabs.com/namespaces/metadata/xsd/terms/1" ' + '\n' +
        'xmlns:title="http://www.cablelabs.com/namespaces/metadata/xsd/title/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' + '\n';

    return header;
};

// var string1 = string.replace(/@ProviderId@/g, providerId);
// var string2 = string1.replace(/@UriId@/g, uriId);
// var string3 = string2.replace(/@UriIdLastHalf@/g, uriIdLastHalf);
// var string4 = string3.replace(/@contentRefId@/g, contentRefId);
// var string5 = string4.replace(/@licenseStart@/g, licenseDatesObject.start);
// var string6 = string5.replace(/@licenseEnd@/g, licenseDatesObject.end);
// var string7 = string6.replace(/@offerStart@/g, offerDatesObject.start);
// var string8 = string7.replace(/@offerEnd@/g, offerDatesObject.end);
// var string9 = string8.replace(/@epgDateTime@/g, epgDateObject.epgDateTime);
// var string10 = string9.replace(/@cutvServiceKey@/g, serviceKey);
// var string11 = string10.replace(/@uriId2@/g, uriId2);
// var string12 = string11.replace(/@uriId3@/g, uriId3);

var titleGenerator3B = function(){
    var title = '<Title uriId="@ProviderId@/TITL@uriId@" internalVersionNum="0" providerVersionNum="0" creationDateTime="@licenseStart@" startDateTime="@licenseStart@" endDateTime="@licenseEnd@">\n' +
        '\t\t<core:AlternateId identifierSystem="ConversationID">51413591</core:AlternateId>\n' +
        '\t\t<core:Ext>\n' +
        '\t\t<ext:LocalizableTitleExt xml:lang="eng">\n' +
        '\t\t\t\t<ext:MarketingMessage>A gunslinger is embroiled in a war with a local drug runner.</ext:MarketingMessage>\n' +
        '\t\t\t</ext:LocalizableTitleExt>\n' +
        '\t\t\t<ext:IsSigned>false</ext:IsSigned>\n' +
        '\t\t\t<ext:IsSubtitle>true</ext:IsSubtitle>\n' +
        '\t\t\t<ext:IsAudioDescribed>true</ext:IsAudioDescribed>\n' +
        '\t\t\t<ext:Soundmouse>566444</ext:Soundmouse>\n' +
        '\t\t\t<ext:StudioCode>66</ext:StudioCode>\n' +
        '\t\t\t<ext:LinkedObject object="PRCT@uriId@" type="parentContent"/>\n' +
        '\t\t\t<ext:LinkedObject object="MULT@uriId@" type="MultiFormat"/>\n' +
        '\t\t\t<ext:TitleExtensions Language="eng">\n' +
        '\t\t\t\t<ext:ProgramKey>PV1520064</ext:ProgramKey>\n' +
        '\t\t\t\t<ext:LinkedProgramKey>PV1520058</ext:LinkedProgramKey>\n' +
        '\t\t\t\t<ext:DealSub>M/N</ext:DealSub>\n' +
        '\t\t\t</ext:TitleExtensions>\n' +
        '\t\t</core:Ext>\n' +
        '\t\t<title:LocalizableTitle xml:lang="eng">\n' +
        '\t\t\t<title:TitleSortName>*</title:TitleSortName>\n' +
        '\t\t\t<title:TitleBrief>BS@UriIdLastHalf@</title:TitleBrief>\n' +
        '\t\t\t<title:TitleMedium>@ProviderId@-@UriIdLastHalf@</title:TitleMedium>\n' +
        '\t\t\t<title:TitleLong> Title Long</title:TitleLong>\n' +
        '\t\t\t<title:SummaryShort>Sanity ingest for EST Single Title (3B) asset.</title:SummaryShort>\n' +
        '\t\t\t<title:ActorDisplay>Luke Wilson, Maya Rudolph, Dax Shepard, Justin Long, Terry Crews</title:ActorDisplay>\n' +
        '\t\t\t<title:Actor firstName="Luke" fullName="Luke Wilson" lastName="Wilson" sortableName="*"/>\n' +
        '\t\t\t<title:Actor firstName="Maya" fullName="Maya Rudolph" lastName="Rudolph" sortableName="*"/>\n' +
        '\t\t\t<title:Actor firstName="Dax" fullName="Dax Shepard" lastName="Shepard" sortableName="*"/>\n' +
        '\t\t\t<title:Actor firstName="Justin" fullName="Justin Long" lastName="Long" sortableName="*"/>\n' +
        '\t\t\t<title:Actor firstName="Baba" fullName="Baba Sariffodeen" lastName="Sariffodeen" sortableName="*"/>\n' +
        '\t\t\t<title:DirectorDisplay>Baba Sariffodeen</title:DirectorDisplay>\n' +
        '\t\t\t<title:Director firstName="Pankaj" fullName="Pankaj Buchade" lastName="Buchade" sortableName="*"/>\n' +
        '\t\t\t<title:StudioDisplay>Columbia Pictures</title:StudioDisplay>\n' +
        '\t\t</title:LocalizableTitle>\n' +
        '\t\t<title:Rating ratingSystem="BSkyBca">5</title:Rating>\n' +
        '\t\t<title:Rating ratingSystem="BSkyBsi">5</title:Rating>\n' +
        '\t\t<title:Rating ratingSystem="BSkyBtc">S8</title:Rating>\n' +
        '\t\t<title:Advisory>private:LANG</title:Advisory>\n' +
        '\t\t<title:Advisory>private:SEX</title:Advisory>\n' +
        '\t<title:DisplayRunTime>1:24:00</title:DisplayRunTime>\n' +
        '\t\t<title:Year>1995</title:Year>\n' +
        '\t\t<title:Genre>6:1</title:Genre>\n' +
        '\t\t<title:ShowType>private:H</title:ShowType>\n' +
        '\t</Title>';

    var processed = textProcessor(title);
    return processed;
};

var movieGenerator3B = function(){

    var movie = '<Movie uriId="@ProviderId@/MAIN@uriId@" internalVersionNum="0" providerVersionNum="0" creationDateTime="@licenseStart@" startDateTime="@licenseStart@" endDateTime="@licenseEnd@">\n' +
        '\t\t<core:Ext>\n' +
        '\t\t\t<ext:MovieExtensions analogueOff="true" mediaId="M1035909" waterMarkingRequired="false"/>\n' +
        '\t\t</core:Ext>\n' +
        '\t<content:SourceUrl>Providers/BSS/Content/Distribution/pb/Matrix_M.ts</content:SourceUrl>\n' +
        '\t\t<content:ContentFileSize>100</content:ContentFileSize>\n' +
        '\t<content:ContentCheckSum>bdd4fbcf2c6e751c0dd6fbd51d66fde3</content:ContentCheckSum>\n' +
        '\t\t<content:AudioType>Dolby 5.1</content:AudioType>\n' +
        '\t\t<content:ScreenFormat>Widescreen</content:ScreenFormat>\n' +
        '\t\t<content:Resolution>1080i</content:Resolution>\n' +
        '\t\t<content:FrameRate>25</content:FrameRate>\n' +
        '\t\t<content:Duration>PT1H20M56S</content:Duration>\n' +
        '\t\t<content:IsHDContent>true</content:IsHDContent>\n' +
        '\t\t<content:Language>eng</content:Language>\n' +
        '\t\t<content:CopyControlInfo>\n' +
        '\t\t\t<content:IsCopyProtectionVerbose>true</content:IsCopyProtectionVerbose>\n' +
        '\t\t\t<content:AnalogProtectionSystem>0</content:AnalogProtectionSystem>\n' +
        '\t\t\t<content:EncryptionModeIndicator>0</content:EncryptionModeIndicator>\n' +
        '\t\t\t<content:ConstrainedImageTrigger>0</content:ConstrainedImageTrigger>\n' +
        '\t\t\t<content:CGMS_A>3</content:CGMS_A>\n' +
        '\t\t</content:CopyControlInfo>\n' +
        '\t\t</Movie>';

        var processed = textProcessor(movie);
        return processed;
};


var textAreaResultsGeneratorEst3bSingleTitle = function(){
    var result = headerGenerator3B() +
        titleGenerator3B() +
        movieGenerator3B();

    return result;
};

