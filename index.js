const fs = require('fs');
const csv = require('csv-parser');

const hours = [];

fs.createReadStream('pvwatts_hourly_data.csv', { encoding: 'utf-8' })
  .pipe(csv())
  .on('data', (row) => {
    const hour = {
      'Month': parseInt(row[`Month`], 10),
      'Day': parseInt(row['Day'], 10),
      'Hour': parseInt(row['Hour'], 10),
      'Beam Irradiance': {
        value: parseInt(row['Beam Irradiance (W/m^2)'], 10),
        unit: 'W/m^2',
      },
      'Diffuse Irradiance': {
        value: parseInt(row['Diffuse Irradiance (W/m^2)'], 10),
        unit: 'W/m^2',
      },
      'Ambient Temperature': {
        value: parseFloat(row['Ambient Temperature (C)']),
        unit: 'C',
      },
      'Wind Speed': {
        value: parseFloat(row['Wind Speed (m/s)']),
        unit: 'm/s',
      },
      'Albedo': parseFloat(row['Albedo']),
      'Plane of Array Irradiance': {
        value: parseInt(row['Plane of Array Irradiance (W/m^2)'], 10),
        unit: '(W/m^2)',
      },
      'Cell Temperature': {
        value: parseFloat(row['Cell Temperature (C)']),
        unit: 'C',
      },
      'DC Array Output': {
        value: parseInt(row['DC Array Output (W)'], 10),
        unit: 'W',
      },
      'AC System Output': {
        value: parseInt(row['AC System Output (W)'], 10),
        unit: 'W',
      },
    };
    hours.push(hour);
  })
  .on('end', () => {
    console.log(hours[0]);
  });
