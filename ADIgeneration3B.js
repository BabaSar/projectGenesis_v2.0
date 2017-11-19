var headerGenerator3B = function(){

    var header = '<?xml version="1.0" encoding="UTF-8"?>' +
        '<ADI3 xmlns="http://www.cablelabs.com/namespaces/metadata/xsd/vod30/1" ' + '\n' +
        'xmlns:PO="URN:NNDS:CMS:ADI3:PURCHASEOPTIONS:01" xmlns:content="http://www.cablelabs.com/namespaces/metadata/xsd/content/1" ' + '\n' +
        'xmlns:core="http://www.cablelabs.com/namespaces/metadata/xsd/core/1" xmlns:ext="URN:NNDS:CMS:ADI3:01" xmlns:offer="http://www.cablelabs.com/namespaces/metadata/xsd/offer/1" ' + '\n' +
        'xmlns:schemaLocation="http://www.cablelabs.com/namespaces/metadata/xsd/vod30/1 ./MD-SP-VODContainer-I01.xsd" xmlns:terms="http://www.cablelabs.com/namespaces/metadata/xsd/terms/1" ' + '\n' +
        'xmlns:title="http://www.cablelabs.com/namespaces/metadata/xsd/title/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">' + '\n';

    return header;
};



var titleGenerator3B = function(){
    var title = '\t<Title uriId="@ProviderId@/TITL@UriId@" internalVersionNum="0" providerVersionNum="0" creationDateTime="@licenseStart@" startDateTime="@licenseStart@" endDateTime="@licenseEnd@">\n' +
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
        '\t\t\t<ext:LinkedObject object="PRCT@UriId@" type="parentContent"/>\n' +
        '\t\t\t<ext:LinkedObject object="MULT@UriId@" type="MultiFormat"/>\n' +
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
        '\t</Title>\n';

    var processed = textProcessor(title);
    return processed;
};

var movieGenerator3B = function(){

    var movie = '\t<Movie uriId="@ProviderId@/MAIN@UriId@" internalVersionNum="0" providerVersionNum="0" creationDateTime="@licenseStart@" startDateTime="@licenseStart@" endDateTime="@licenseEnd@">\n' +
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
        '\t</Movie>\n';

        var processed = textProcessor(movie);
        return processed;
};

var thumbnailGenerator3B = function(){

    var thumbnail = '\t<Thumbnail uriId="@ProviderId@/THEP@UriId@" internalVersionNum="0" providerVersionNum="0" creationDateTime="@licenseStart@" startDateTime="@licenseStart@" endDateTime="@licenseEnd@">\n' +
        '\t\t<content:SourceUrl>tank/Images/ByPankaj/Twins_182x98.jpg</content:SourceUrl>\n' +
        '\t\t<content:ContentFileSize>100</content:ContentFileSize>\n' +
        '\t\t<content:ContentCheckSum>43178b156afa4f12859d17df7348b6cd</content:ContentCheckSum>\n' +
        '\t</Thumbnail>\n';

    var processed = textProcessor(thumbnail);
    return processed;
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

var contentGroupGenerator3B = function(){

    var contentGroup = '\t<ContentGroup uriId="@ProviderId@/CGVT@UriId@" internalVersionNum="0" providerVersionNum="0" creationDateTime="@licenseStart@" startDateTime="@licenseStart@" endDateTime="@licenseEnd@">\n' +
        '\t\t<core:Ext>\n' +
        '\t\t\t<ext:ContentGroupType>AV</ext:ContentGroupType>\n' +
        '\t\t</core:Ext>\n' +
        '\t\t<offer:TitleRef uriId="@ProviderId@/TITL@UriId@"/>\n' +
        '\t\t<offer:MovieRef uriId="@ProviderId@/MAIN@UriId@"/>\n' +
        '\t\t<offer:ThumbnailRef uriId="@ProviderId@/THEP@UriId@"/>\n' +
        '\t\t<offer:ContentRef uriId="@ProviderId@/CGPP@UriId@"/>\n' +
        '\t</ContentGroup>\n' +
        '\t<ContentGroup uriId="@ProviderId@/CGPP@UriId@" internalVersionNum="0" providerVersionNum="0" creationDateTime="@licenseStart@" startDateTime="@licenseStart@" endDateTime="@licenseEnd@">\n' +
        '\t\t<core:Ext>\n' +
        '\t\t\t<ext:PressPackImageRef uriId="@ProviderId@/PPAT@UriId@"/>\n' +
        '\t\t\t<ext:PressPackImageRef uriId="@ProviderId@/PRSW@UriId@"/>\n' +
        '\t\t\t<ext:PressPackImageRef uriId="@ProviderId@/PRSB@UriId@"/>\n' +
        '\t\t</core:Ext>\n' +
        '\t\t<offer:TitleRef uriId="est__sbo_hd/TITL@UriId@"/>\n' +
        '\t</ContentGroup>\n';

    return contentGroup;
};

var extOpeningTag = function(){
    return '\t<Ext>\n';
};

var extPressPackImage3B = function(){

    var extPressPackImage = '\t\t<ext:PressPackImage uriId="@ProviderId@/PPAT@UriId@" internalVersionNum="0" providerVersionNum="0" creationDateTime="@licenseStart@" startDateTime="@licenseStart@" endDateTime="@licenseEnd@">\n' +
        '\t\t\t<content:SourceUrl>tank/Images/ByPankaj/Twins_182x243.jpg</content:SourceUrl>\n' +
        '\t\t\t<content:ContentFileSize>100</content:ContentFileSize>\n' +
        '\t\t\t<content:ContentCheckSum>4a1623c0f37b90fbc2249ed4242747dc</content:ContentCheckSum>\n' +
        '\t\t\t<content:X_Resolution>182</content:X_Resolution>\n' +
        '\t\t\t<content:Y_Resolution>243</content:Y_Resolution>\n' +
        '\t\t\t<ext:Usage>urn:nnds:Metro:metadata:MediaTypeCS:2007:2.6</ext:Usage>\n' +
        '\t\t</ext:PressPackImage>\n' +
        '\t\t<ext:PressPackImage uriId="@ProviderId@/PRSW@UriId@" internalVersionNum="0" providerVersionNum="0" creationDateTime="@licenseStart@" startDateTime="@licenseStart@" endDateTime="@licenseEnd@">\n' +
        '\t\t\t<content:SourceUrl>tank/Images/ByPankaj/Twins_262x349.jpg</content:SourceUrl>\n' +
        '\t\t\t<content:ContentFileSize>100</content:ContentFileSize>\n' +
        '\t\t\t<content:ContentCheckSum>142c646c38c060e3e466a2b0e5b46cd7</content:ContentCheckSum>\n' +
        '\t\t\t<content:X_Resolution>262</content:X_Resolution>\n' +
        '\t\t\t<content:Y_Resolution>349</content:Y_Resolution>\n' +
        '\t\t\t<ext:Usage>urn:csco:vcs:metadata:MediaTypeCS:2015:stb:3-4</ext:Usage>\n' +
        '\t\t</ext:PressPackImage>\n' +
        '\t\t<ext:PressPackImage uriId="@ProviderId@/PRSB@UriId@" internalVersionNum="0" providerVersionNum="0" creationDateTime="@licenseStart@" startDateTime="@licenseStart@" endDateTime="@licenseEnd@">\n' +
        '\t\t\t<content:SourceUrl>tank/Images/ByPankaj/Twins_456x257.jpg</content:SourceUrl>\n' +
        '\t\t\t<content:ContentFileSize>100</content:ContentFileSize>\n' +
        '\t\t\t<content:ContentCheckSum>17af217040921f039e56a88b9c00548a</content:ContentCheckSum>\n' +
        '\t\t\t<content:X_Resolution>456</content:X_Resolution>\n' +
        '\t\t\t<content:Y_Resolution>257</content:Y_Resolution>\n' +
        '\t\t\t<ext:Usage>urn:csco:vcs:metadata:MediaTypeCS:2015:stb:16-9</ext:Usage>\n' +
        '\t\t</ext:PressPackImage>\n';

        var processed = textProcessor(extPressPackImage);
        return processed;

};

var extPriceBundle3B = function(){

    var priceBundle = '\t\t<ext:PriceBundle  uriId="@ProviderId@/PRBU@UriId@" internalVersionNum="0" providerVersionNum="0" creationDateTime="@licenseStart@" startDateTime="@licenseStart@" endDateTime="@licenseEnd@">\n' +
        '\t\t\t<PO:priceCategory currency="GBP" marketingSegment="Standard" price="10.00" territory="GBR"/>\n' +
        '\t\t\t<PO:priceCategory currency="GBP" marketingSegment="VIP" price="10.01" territory="GBR"/>\n' +
        '\t\t\t<PO:priceCategory currency="EUR" marketingSegment="Standard" price="20.16" territory="IRL"/>\n' +
        '\t\t\t<PO:priceCategory currency="EUR" marketingSegment="VIP" price="20.17" territory="IRL"/>\n' +
        '\t\t</ext:PriceBundle>\n' +
        '\t\t<ext:PriceBundle uriId="@ProviderId@/PRBU@uriId2@" internalVersionNum="0" providerVersionNum="0" creationDateTime="@licenseStart@" startDateTime="@licenseStart@" endDateTime="@licenseEnd@">\n' +
        '\t\t\t<PO:priceCategory currency="GBP" marketingSegment="Standard" price="11.00" territory="GBR"/>\n' +
        '\t\t\t<PO:priceCategory currency="GBP" marketingSegment="VIP" price="11.01" territory="GBR"/>\n' +
        '\t\t\t<PO:priceCategory currency="EUR" marketingSegment="Standard" price="21.16" territory="IRL"/>\n' +
        '\t\t\t<PO:priceCategory currency="EUR" marketingSegment="VIP" price="21.17" territory="IRL"/>\n' +
        '\t\t</ext:PriceBundle>\n' +
        '\t\t<ext:PriceBundle uriId="@ProviderId@/PRBU@uriId3@" internalVersionNum="0" providerVersionNum="0" creationDateTime="@licenseStart@" startDateTime="@licenseStart@" endDateTime="@licenseEnd@">\n' +
        '\t\t\t<PO:priceCategory currency="GBP" marketingSegment="Standard" price="12.00" territory="GBR"/>\n' +
        '\t\t\t<PO:priceCategory currency="GBP" marketingSegment="VIP" price="12.01" territory="GBR"/>\n' +
        '\t\t\t<PO:priceCategory currency="EUR" marketingSegment="Standard" price="22.16" territory="IRL"/>\n' +
        '\t\t\t<PO:priceCategory currency="EUR" marketingSegment="VIP" price="22.17" territory="IRL"/>\n' +
        '\t\t</ext:PriceBundle>';

    var processed = textProcessor(priceBundle);
    return processed;
};

var textAreaResultsGeneratorEst3bSingleTitle = function(){
    var result = headerGenerator3B() +
        titleGenerator3B() +
        movieGenerator3B() +
        thumbnailGenerator3B() +
        contentGroupGenerator3B() +
        extOpeningTag() +
        extPressPackImage3B() +
        extPriceBundle3B();

    return result;
};



