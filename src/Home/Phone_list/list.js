const countryCodes = [
    { short: 'IN' ,name: 'INDIA',code: '91'},
	{ short: 'AD' ,name: 'ANDORRA',code: '376'},
	{ short: 'AE' ,name: 'UNITED ARAB EMIRATES',code: '971'},
	{ short: 'AF' ,name: 'AFGHANISTAN',code: '93'},
	{ short: 'AG' ,name: 'ANTIGUA AND BARBUDA',code: '1268'},
	{ short: 'AI' ,name: 'ANGUILLA',code: '1264'},
	{ short: 'AL' ,name: 'ALBANIA',code: '355'},
	{ short: 'AM' ,name: 'ARMENIA',code: '374'},
	{ short: 'AN' ,name: 'NETHERLANDS ANTILLES',code: '599'},
	{ short: 'AO' ,name: 'ANGOLA',code: '244'},
	{ short: 'AQ' ,name: 'ANTARCTICA',code: '672'},
	{ short: 'AR' ,name: 'ARGENTINA',code: '54'},
	{ short: 'AS' ,name: 'AMERICAN SAMOA',code: '1684'},
	{ short: 'AT' ,name: 'AUSTRIA',code: '43'},
	{ short: 'AU' ,name: 'AUSTRALIA',code: '61'},
	{ short: 'AW' ,name: 'ARUBA',code: '297'},
	{ short: 'AZ' ,name: 'AZERBAIJAN',code: '994'},
	{ short: 'BA' ,name: 'BOSNIA AND HERZEGOVINA',code: '387'},
	{ short: 'BB' ,name: 'BARBADOS',code: '1246'},
	{ short: 'BD' ,name: 'BANGLADESH',code: '880'},
	{ short: 'BE' ,name: 'BELGIUM',code: '32'},
	{ short: 'BF' ,name: 'BURKINA FASO',code: '226'},
	{ short: 'BG' ,name: 'BULGARIA',code: '359'},
	{ short: 'BH' ,name: 'BAHRAIN',code: '973'},
	{ short: 'BI' ,name: 'BURUNDI',code: '257'},
	{ short: 'BJ' ,name: 'BENIN',code: '229'},
	{ short: 'BL' ,name: 'SAINT BARTHELEMY',code: '590'},
	{ short: 'BM' ,name: 'BERMUDA',code: '1441'},
	{ short: 'BN' ,name: 'BRUNEI DARUSSALAM',code: '673'},
	{ short: 'BO' ,name: 'BOLIVIA',code: '591'},
	{ short: 'BR' ,name: 'BRAZIL',code: '55'},
	{ short: 'BS' ,name: 'BAHAMAS',code: '1242'},
	{ short: 'BT' ,name: 'BHUTAN',code: '975'},
	{ short: 'BW' ,name: 'BOTSWANA',code: '267'},
	{ short: 'BY' ,name: 'BELARUS',code: '375'},
	{ short: 'BZ' ,name: 'BELIZE',code: '501'},
	{ short: 'CA' ,name: 'CANADA',code: '1'},
	{ short: 'CC' ,name: 'COCOS (KEELING) ISLANDS',code: '61'},
	{ short: 'CD' ,name: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE',code: '243'},
	{ short: 'CF' ,name: 'CENTRAL AFRICAN REPUBLIC',code: '236'},
	{ short: 'CG' ,name: 'CONGO',code: '242'},
	{ short: 'CH' ,name: 'SWITZERLAND',code: '41'},
	{ short: 'CI' ,name: 'COTE D IVOIRE',code: '225'},
	{ short: 'CK' ,name: 'COOK ISLANDS',code: '682'},
	{ short: 'CL' ,name: 'CHILE',code: '56'},
	{ short: 'CM' ,name: 'CAMEROON',code: '237'},
	{ short: 'CN' ,name: 'CHINA',code: '86'},
	{ short: 'CO' ,name: 'COLOMBIA',code: '57'},
	{ short: 'CR' ,name: 'COSTA RICA',code: '506'},
	{ short: 'CU' ,name: 'CUBA',code: '53'},
	{ short: 'CV' ,name: 'CAPE VERDE',code: '238'},
	{ short: 'CX' ,name: 'CHRISTMAS ISLAND',code: '61'},
	{ short: 'CY' ,name: 'CYPRUS',code: '357'},
	{ short: 'CZ' ,name: 'CZECH REPUBLIC',code: '420'},
	{ short: 'DE' ,name: 'GERMANY',code: '49'},
	{ short: 'DJ' ,name: 'DJIBOUTI',code: '253'},
	{ short: 'DK' ,name: 'DENMARK',code: '45'},
	{ short: 'DM' ,name: 'DOMINICA',code: '1767'},
	{ short: 'DO' ,name: 'DOMINICAN REPUBLIC',code: '1809'},
	{ short: 'DZ' ,name: 'ALGERIA',code: '213'},
	{ short: 'EC' ,name: 'ECUADOR',code: '593'},
	{ short: 'EE' ,name: 'ESTONIA',code: '372'},
	{ short: 'EG' ,name: 'EGYPT',code: '20'},
	{ short: 'ER' ,name: 'ERITREA',code: '291'},
	{ short: 'ES' ,name: 'SPAIN',code: '34'},
	{ short: 'ET' ,name: 'ETHIOPIA',code: '251'},
	{ short: 'FI' ,name: 'FINLAND',code: '358'},
	{ short: 'FJ' ,name: 'FIJI',code: '679'},
	{ short: 'FK' ,name: 'FALKLAND ISLANDS (MALVINAS)',code: '500'},
	{ short: 'FM' ,name: 'MICRONESIA, FEDERATED STATES OF',code: '691'},
	{ short: 'FO' ,name: 'FAROE ISLANDS',code: '298'},
	{ short: 'FR' ,name: 'FRANCE',code: '33'},
	{ short: 'GA' ,name: 'GABON',code: '241'},
	{ short: 'GB' ,name: 'UNITED KINGDOM',code: '44'},
	{ short: 'GD' ,name: 'GRENADA',code: '1473'},
	{ short: 'GE' ,name: 'GEORGIA',code: '995'},
	{ short: 'GH' ,name: 'GHANA',code: '233'},
	{ short: 'GI' ,name: 'GIBRALTAR',code: '350'},
	{ short: 'GL' ,name: 'GREENLAND',code: '299'},
	{ short: 'GM' ,name: 'GAMBIA',code: '220'},
	{ short: 'GN' ,name: 'GUINEA',code: '224'},
	{ short: 'GQ' ,name: 'EQUATORIAL GUINEA',code: '240'},
	{ short: 'GR' ,name: 'GREECE',code: '30'},
	{ short: 'GT' ,name: 'GUATEMALA',code: '502'},
	{ short: 'GU' ,name: 'GUAM',code: '1671'},
	{ short: 'GW' ,name: 'GUINEA-BISSAU',code: '245'},
	{ short: 'GY' ,name: 'GUYANA',code: '592'},
	{ short: 'HK' ,name: 'HONG KONG',code: '852'},
	{ short: 'HN' ,name: 'HONDURAS',code: '504'},
	{ short: 'HR' ,name: 'CROATIA',code: '385'},
	{ short: 'HT' ,name: 'HAITI',code: '509'},
	{ short: 'HU' ,name: 'HUNGARY',code: '36'},
	{ short: 'ID' ,name: 'INDONESIA',code: '62'},
	{ short: 'IE' ,name: 'IRELAND',code: '353'},
	{ short: 'IL' ,name: 'ISRAEL',code: '972'},
	{ short: 'IM' ,name: 'ISLE OF MAN',code: '44'},
	{ short: 'IQ' ,name: 'IRAQ',code: '964'},
	{ short: 'IR' ,name: 'IRAN, ISLAMIC REPUBLIC OF',code: '98'},
	{ short: 'IS' ,name: 'ICELAND',code: '354'},
	{ short: 'IT' ,name: 'ITALY',code: '39'},
	{ short: 'JM' ,name: 'JAMAICA',code: '1876'},
	{ short: 'JO' ,name: 'JORDAN',code: '962'},
	{ short: 'JP' ,name: 'JAPAN',code: '81'},
	{ short: 'KE' ,name: 'KENYA',code: '254'},
	{ short: 'KG' ,name: 'KYRGYZSTAN',code: '996'},
	{ short: 'KH' ,name: 'CAMBODIA',code: '855'},
	{ short: 'KI' ,name: 'KIRIBATI',code: '686'},
	{ short: 'KM' ,name: 'COMOROS',code: '269'},
	{ short: 'KN' ,name: 'SAINT KITTS AND NEVIS',code: '1869'},
	{ short: 'KP' ,name: 'KOREA DEMOCRATIC PEOPLES REPUBLIC OF',code: '850'},
	{ short: 'KR' ,name: 'KOREA REPUBLIC OF',code: '82'},
	{ short: 'KW' ,name: 'KUWAIT',code: '965'},
	{ short: 'KY' ,name: 'CAYMAN ISLANDS',code: '1345'},
	{ short: 'KZ' ,name: 'KAZAKSTAN',code: '7'},
	{ short: 'LA' ,name: 'LAO PEOPLES DEMOCRATIC REPUBLIC',code: '856'},
	{ short: 'LB' ,name: 'LEBANON',code: '961'},
	{ short: 'LC' ,name: 'SAINT LUCIA',code: '1758'},
	{ short: 'LI' ,name: 'LIECHTENSTEIN',code: '423'},
	{ short: 'LK' ,name: 'SRI LANKA',code: '94'},
	{ short: 'LR' ,name: 'LIBERIA',code: '231'},
	{ short: 'LS' ,name: 'LESOTHO',code: '266'},
	{ short: 'LT' ,name: 'LITHUANIA',code: '370'},
	{ short: 'LU' ,name: 'LUXEMBOURG',code: '352'},
	{ short: 'LV' ,name: 'LATVIA',code: '371'},
	{ short: 'LY' ,name: 'LIBYAN ARAB JAMAHIRIYA',code: '218'},
	{ short: 'MA' ,name: 'MOROCCO',code: '212'},
	{ short: 'MC' ,name: 'MONACO',code: '377'},
	{ short: 'MD' ,name: 'MOLDOVA, REPUBLIC OF',code: '373'},
	{ short: 'ME' ,name: 'MONTENEGRO',code: '382'},
	{ short: 'MF' ,name: 'SAINT MARTIN',code: '1599'},
	{ short: 'MG' ,name: 'MADAGASCAR',code: '261'},
	{ short: 'MH' ,name: 'MARSHALL ISLANDS',code: '692'},
	{ short: 'MK' ,name: 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF',code: '389'},
	{ short: 'ML' ,name: 'MALI',code: '223'},
	{ short: 'MM' ,name: 'MYANMAR',code: '95'},
	{ short: 'MN' ,name: 'MONGOLIA',code: '976'},
	{ short: 'MO' ,name: 'MACAU',code: '853'},
	{ short: 'MP' ,name: 'NORTHERN MARIANA ISLANDS',code: '1670'},
	{ short: 'MR' ,name: 'MAURITANIA',code: '222'},
	{ short: 'MS' ,name: 'MONTSERRAT',code: '1664'},
	{ short: 'MT' ,name: 'MALTA',code: '356'},
	{ short: 'MU' ,name: 'MAURITIUS',code: '230'},
	{ short: 'MV' ,name: 'MALDIVES',code: '960'},
	{ short: 'MW' ,name: 'MALAWI',code: '265'},
	{ short: 'MX' ,name: 'MEXICO',code: '52'},
	{ short: 'MY' ,name: 'MALAYSIA',code: '60'},
	{ short: 'MZ' ,name: 'MOZAMBIQUE',code: '258'},
	{ short: 'NA' ,name: 'NAMIBIA',code: '264'},
	{ short: 'NC' ,name: 'NEW CALEDONIA',code: '687'},
	{ short: 'NE' ,name: 'NIGER',code: '227'},
	{ short: 'NG' ,name: 'NIGERIA',code: '234'},
	{ short: 'NI' ,name: 'NICARAGUA',code: '505'},
	{ short: 'NL' ,name: 'NETHERLANDS',code: '31'},
	{ short: 'NO' ,name: 'NORWAY',code: '47'},
	{ short: 'NP' ,name: 'NEPAL',code: '977'},
	{ short: 'NR' ,name: 'NAURU',code: '674'},
	{ short: 'NU' ,name: 'NIUE',code: '683'},
	{ short: 'NZ' ,name: 'NEW ZEALAND',code: '64'},
	{ short: 'OM' ,name: 'OMAN',code: '968'},
	{ short: 'PA' ,name: 'PANAMA',code: '507'},
	{ short: 'PE' ,name: 'PERU',code: '51'},
	{ short: 'PF' ,name: 'FRENCH POLYNESIA',code: '689'},
	{ short: 'PG' ,name: 'PAPUA NEW GUINEA',code: '675'},
	{ short: 'PH' ,name: 'PHILIPPINES',code: '63'},
	{ short: 'PK' ,name: 'PAKISTAN',code: '92'},
	{ short: 'PL' ,name: 'POLAND',code: '48'},
	{ short: 'PM' ,name: 'SAINT PIERRE AND MIQUELON',code: '508'},
	{ short: 'PN' ,name: 'PITCAIRN',code: '870'},
	{ short: 'PR' ,name: 'PUERTO RICO',code: '1'},
	{ short: 'PT' ,name: 'PORTUGAL',code: '351'},
	{ short: 'PW' ,name: 'PALAU',code: '680'},
	{ short: 'PY' ,name: 'PARAGUAY',code: '595'},
	{ short: 'QA' ,name: 'QATAR',code: '974'},
	{ short: 'RO' ,name: 'ROMANIA',code: '40'},
	{ short: 'RS' ,name: 'SERBIA',code: '381'},
	{ short: 'RU' ,name: 'RUSSIAN FEDERATION',code: '7'},
	{ short: 'RW' ,name: 'RWANDA',code: '250'},
	{ short: 'SA' ,name: 'SAUDI ARABIA',code: '966'},
	{ short: 'SB' ,name: 'SOLOMON ISLANDS',code: '677'},
	{ short: 'SC' ,name: 'SEYCHELLES',code: '248'},
	{ short: 'SD' ,name: 'SUDAN',code: '249'},
	{ short: 'SE' ,name: 'SWEDEN',code: '46'},
	{ short: 'SG' ,name: 'SINGAPORE',code: '65'},
	{ short: 'SH' ,name: 'SAINT HELENA',code: '290'},
	{ short: 'SI' ,name: 'SLOVENIA',code: '386'},
	{ short: 'SK' ,name: 'SLOVAKIA',code: '421'},
	{ short: 'SL' ,name: 'SIERRA LEONE',code: '232'},
	{ short: 'SM' ,name: 'SAN MARINO',code: '378'},
	{ short: 'SN' ,name: 'SENEGAL',code: '221'},
	{ short: 'SO' ,name: 'SOMALIA',code: '252'},
	{ short: 'SR' ,name: 'SURINAME',code: '597'},
	{ short: 'ST' ,name: 'SAO TOME AND PRINCIPE',code: '239'},
	{ short: 'SV' ,name: 'EL SALVADOR',code: '503'},
	{ short: 'SY' ,name: 'SYRIAN ARAB REPUBLIC',code: '963'},
	{ short: 'SZ' ,name: 'SWAZILAND',code: '268'},
	{ short: 'TC' ,name: 'TURKS AND CAICOS ISLANDS',code: '1649'},
	{ short: 'TD' ,name: 'CHAD',code: '235'},
	{ short: 'TG' ,name: 'TOGO',code: '228'},
	{ short: 'TH' ,name: 'THAILAND',code: '66'},
	{ short: 'TJ' ,name: 'TAJIKISTAN',code: '992'},
	{ short: 'TK' ,name: 'TOKELAU',code: '690'},
	{ short: 'TL' ,name: 'TIMOR-LESTE',code: '670'},
	{ short: 'TM' ,name: 'TURKMENISTAN',code: '993'},
	{ short: 'TN' ,name: 'TUNISIA',code: '216'},
	{ short: 'TO' ,name: 'TONGA',code: '676'},
	{ short: 'TR' ,name: 'TURKEY',code: '90'},
	{ short: 'TT' ,name: 'TRINIDAD AND TOBAGO',code: '1868'},
	{ short: 'TV' ,name: 'TUVALU',code: '688'},
	{ short: 'TW' ,name: 'TAIWAN, PROVINCE OF CHINA',code: '886'},
	{ short: 'TZ' ,name: 'TANZANIA, UNITED REPUBLIC OF',code: '255'},
	{ short: 'UA' ,name: 'UKRAINE',code: '380'},
	{ short: 'UG' ,name: 'UGANDA',code: '256'},
	{ short: 'US' ,name: 'UNITED STATES',code: '1'},
	{ short: 'UY' ,name: 'URUGUAY',code: '598'},
	{ short: 'UZ' ,name: 'UZBEKISTAN',code: '998'},
	{ short: 'VA' ,name: 'HOLY SEE (VATICAN CITY STATE)',code: '39'},
	{ short: 'VC' ,name: 'SAINT VINCENT AND THE GRENADINES',code: '1784'},
	{ short: 'VE' ,name: 'VENEZUELA',code: '58'},
	{ short: 'VG' ,name: 'VIRGIN ISLANDS, BRITISH',code: '1284'},
	{ short: 'VI' ,name: 'VIRGIN ISLANDS, U.S.',code: '1340'},
	{ short: 'VN' ,name: 'VIET NAM',code: '84'},
	{ short: 'VU' ,name: 'VANUATU',code: '678'},
	{ short: 'WF' ,name: 'WALLIS AND FUTUNA',code: '681'},
	{ short: 'WS' ,name: 'SAMOA',code: '685'},
	{ short: 'XK' ,name: 'KOSOVO',code: '381'},
	{ short: 'YE' ,name: 'YEMEN',code: '967'},
	{ short: 'YT' ,name: 'MAYOTTE',code: '262'},
	{ short: 'ZA' ,name: 'SOUTH AFRICA',code: '27'} ,
	{ short: 'ZM' ,name: 'ZAMBIA',code: '260'},
	{ short: 'ZW' ,name: 'ZIMBABWE',code: '263'},
];

export default countryCodes