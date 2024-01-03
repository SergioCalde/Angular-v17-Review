export interface Country {
    altSpellings: string[];
    area:         number;
    borders?:     string[];
    capital:      string[];
    capitalInfo:  CapitalInfo;
    car:          Car;
    cca2:         string;
    cca3:         string;
    ccn3:         string;
    cioc:         string;
    coatOfArms:   CoatOfArms;
    continents:   string[];
    currencies:   { [key: string]: Currency };
    demonyms:     Demonyms;
    fifa:         string;
    flag:         string;
    flags:        Flags;
    gini?:        Gini;
    idd:          Idd;
    independent:  boolean;
    landlocked:   boolean;
    languages:    Languages;
    latlng:       number[];
    maps:         Maps;
    name:         Name;
    population:   number;
    postalCode:   PostalCode;
    region:       string;
    startOfWeek:  string;
    status:       string;
    subregion:    string;
    timezones:    string[];
    tld:          string[];
    translations: { [key: string]: Translation };
    unMember:     boolean;
   }
   
   export interface CapitalInfo {
    latlng: number[];
   }
   
   export interface Car {
    side:  string;
    signs: string[];
   }
   
   export interface CoatOfArms {
    png?: string;
    svg?: string;
   }
   
   export interface Currency {
    name:   string;
    symbol: string;
   }
   
   export interface Demonyms {
    eng: Eng;
    fra: Eng;
   }
   
   export interface Eng {
    f: string;
    m: string;
   }
   
   export interface Flags {
    alt?: string;
    png:  string;
    svg:  string;
   }
   
   export interface Gini {
    "2019": number;
   }
   
   export interface Idd {
    root:     string;
    suffixes: string[];
   }
   
   export interface Languages {
    eng?: string;
    spa?:  string;
    ara?: string;
    ita?: string;
   }
   
   export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
   }
   
   export interface Name {
    common:     string;
    nativeName: NativeName;
    official:   string;
   }
   
   export interface NativeName {
    eng?: Translation;
    spa:  Translation;
   }
   
   export interface Translation {
    common:   string;
    official: string;
   }
   
   export interface PostalCode {
    format: string;
    regex:  string;
   }
   