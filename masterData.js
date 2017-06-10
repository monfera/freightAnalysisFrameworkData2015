const commodityNameToCode = {
  'Unknown': 0,
  'Live animals/fish': 1,
  'Cereal grains': 2,
  'Other ag prods.': 3,
  'Animal feed': 4,
  'Meat/seafood': 5,
  'Milled grain prods.': 6,
  'Other foodstuffs': 7,
  'Alcoholic beverages': 8,
  'Tobacco prods.': 9,
  'Building stone': 10,
  'Natural sands': 11,
  'Gravel': 12,
  'Nonmetallic minerals': 13,
  'Metallic ores': 14,
  'Coal': 15,
  'Crude petroleum': 16,
  'Gasoline': 17,
  'Fuel oils': 18,
  'Coal-n.e.c.': 19,
  'Basic chemicals': 20,
  'Pharmaceuticals': 21,
  'Fertilizers': 22,
  'Chemical prods.': 23,
  'Plastics/rubber': 24,
  'Logs': 25,
  'Wood prods.': 26,
  'Newsprint/paper': 27,
  'Paper articles': 28,
  'Printed prods.': 29,
  'Textiles/leather': 30,
  'Nonmetal min. prods.': 31,
  'Base metals': 32,
  'Articles-base metal': 33,
  'Machinery': 34,
  'Electronics': 35,
  'Motorized vehicles': 36,
  'Transport equip.': 37,
  'Precision instruments': 38,
  'Furniture': 39,
  'Misc. mfg. prods.': 40,
  'Waste/scrap': 41,
  'Mixed freight': 42
}

const commodityCodeToName = [
  'Unknown',
  'Live animals/fish',
  'Cereal grains',
  'Other ag prods.',
  'Animal feed',
  'Meat/seafood',
  'Milled grain prods.',
  'Other foodstuffs',
  'Alcoholic beverages',
  'Tobacco prods.',
  'Building stone',
  'Natural sands',
  'Gravel',
  'Nonmetallic minerals',
  'Metallic ores',
  'Coal',
  'Crude petroleum',
  'Gasoline',
  'Fuel oils',
  'Coal-n.e.c.',
  'Basic chemicals',
  'Pharmaceuticals',
  'Fertilizers',
  'Chemical prods.',
  'Plastics/rubber',
  'Logs',
  'Wood prods.',
  'Newsprint/paper',
  'Paper articles',
  'Printed prods.',
  'Textiles/leather',
  'Nonmetal min. prods.',
  'Base metals',
  'Articles-base metal',
  'Machinery',
  'Electronics',
  'Motorized vehicles',
  'Transport equip.',
  'Precision instruments',
  'Furniture',
  'Misc. mfg. prods.',
  'Waste/scrap',
  'Mixed freight'
]

const modeNameToCode = {
  'No Domestic Mode': 0,
  'Truck': 1,
  'Rail': 2,
  'Water': 3,
  'Air (include truck-air)': 4,
  'Multiple modes & mail': 5,
  'Pipeline': 6,
  'Other and Unknown': 7,
  'Other and unknown': 7
}

const modeCodeToName = [
  'No Domestic Mode',
  'Truck',
  'Rail',
  'Water',
  'Air (include truck-air)',
  'Multiple modes & mail',
  'Pipeline',
  'Other and unknown'
]

const stateNameToCode = {
  'Alabama': 0,
  'Alaska': 1,
  'Arizona': 2,
  'Arkansas': 3,
  'California': 4,
  'Colorado': 5,
  'Connecticut': 6,
  'Delaware': 7,
  'District Of Columbia': 8,
  'Florida': 9,
  'Georgia': 10,
  'Hawaii': 11,
  'Idaho': 12,
  'Illinois': 13,
  'Indiana': 14,
  'Iowa': 15,
  'Kansas': 16,
  'Kentucky': 17,
  'Louisiana': 18,
  'Maine': 19,
  'Maryland': 20,
  'Massachusetts': 21,
  'Michigan': 22,
  'Minnesota': 23,
  'Mississippi': 24,
  'Missouri': 25,
  'Montana': 26,
  'Nebraska': 27,
  'Nevada': 28,
  'New Hampshire': 29,
  'New Jersey': 30,
  'New Mexico': 31,
  'New York': 32,
  'North Carolina': 33,
  'North Dakota': 34,
  'Ohio': 35,
  'Oklahoma': 36,
  'Oregon': 37,
  'Pennsylvania': 38,
  'Rhode Island': 39,
  'South Carolina': 40,
  'South Dakota': 41,
  'Tennessee': 42,
  'Texas': 43,
  'Utah': 44,
  'Vermont': 45,
  'Virginia': 46,
  'Washington': 47,
  'West Virginia': 48,
  'Wisconsin': 49,
  'Wyoming': 50,
  'American Samoa': 51,
  'Federated States Of Micronesia': 52,
  'Guam': 53,
  'Marshall Islands': 54,
  'Northern Mariana Islands': 55,
  'Palau': 56,
  'Puerto Rico': 57,
  'Virgin Islands': 58,

  'Washington DC': 8,


}

const stateCodeToName = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'American Samoa',
  'Federated States Of Micronesia',
  'Guam',
  'Marshall Islands',
  'Northern Mariana Islands',
  'Palau',
  'Puerto Rico',
  'Virgin Islands'
]

const bandNameToCode = {
  'Below 100': 0,
  '100 - 249': 1,
  '250 - 499': 2,
  '500 - 749': 3,
  '750 - 999': 4,
  '1,000 - 1,499': 5,
  '1,500 - 2,000': 6,
  'Over 2,000': 7
}


const bandCodeToName = [
  'Below 100',
  '100 - 249',
  '250 - 499',
  '500 - 749',
  '750 - 999',
  '1,000 - 1,499',
  '1,500 - 2,000',
  'Over 2,000'
]

const masterData = {
  commodity: {
    nameToCode: commodityNameToCode,
    codeToName: commodityCodeToName
  },
  mode: {
    nameToCode: modeNameToCode,
    codeToName: modeCodeToName
  },
  state: {
    nameToCode: stateNameToCode,
    codeToName: stateCodeToName
  },
  band: {
    nameToCode: bandNameToCode,
    codeToName: bandCodeToName
  }
}