// https://www.rita.dot.gov/bts/sites/rita.dot.gov.bts/files/subject_areas/freight_transportation/faf/users_guide/
// http://faf.ornl.gov/fafweb/Extraction2.aspx

const numConv = string => {
  const value = parseFloat(string)
  return Math.round(value * 100)
}

d3Request.csv('faf2015_state.csv', t => {
  const result = []
  for(let i = 0; i < t.length; i++) {
    const d = t[i]
    const rawOrigin = d['DMS ORIG']
    const rawDestination = d['DMS DEST']
    const rawFreightMode = d['DMS_MODE']
    const rawCommodity = d['SCTG2']
    const rawDistanceBand = d['DIST_BAND']
    const rawValueMillionDollars = d['Total Current M$ in 2015']
    const rawKilotons = d['Total KTons in 2015']
    const rawMegaTonMiles = d['Total Ton-Mile in 2015']
    const record = {
      origin: masterData.state.nameToCode[rawOrigin],
      destination: masterData.state.nameToCode[rawDestination],
      mode: masterData.mode.nameToCode[rawFreightMode],
      commodity: masterData.commodity.nameToCode[rawCommodity],
      band: masterData.band.nameToCode[rawDistanceBand],
      valueMmUsd: Math.round(rawValueMillionDollars),
      kilotons: numConv(rawKilotons),
      megaTonMiles: numConv(rawMegaTonMiles)
    }
    if(Object.keys(record).map(k => record[k]).some(dd => dd === void 0))
      throw new Error('Data error encountered.')
    if(!isFinite(record.valueMmUsd) || !isFinite(record.kilotons) || !isFinite(record.megaTonMiles))
      throw new Error('Number error encountered.')
    result.push(record)
  }
  const filteredResult = result.filter(d => d.valueMmUsd && d.kilotons && d.megaTonMiles)
  console.log([
    'origin', 'destination', 'mode', 'commodity', 'band', 'valueMmUsd', 'kilotons', 'megaTonMiles'
  ].join(','))
  filteredResult.forEach(d => console.log([
    d.origin, d.destination, d.mode, d.commodity, d.band, d.valueMmUsd, d.kilotons, d.megaTonMiles
  ].join(',')))
  return filteredResult
})