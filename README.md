# Napelem kalkulátor
A `pvwatts_hourly_data.csv` file adatokat tartalmaz a 2022-es évre a napelem kalkulátorunkhoz. File formátuma: `csv`.<br>
## Adatok értelmezése:
- "Month": az adott év adott hónapja
- "Day": az adott év adott hónapjának napja
- "Hour": az adott év adott hónapjának adott napján belüli órára vonatkozó:
- "Beam Irradiance (W/m^2)": beeső napsugárzás mennyisége
- "Diffuse Irradiance (W/m^2)": visszavert napsugárzás mennyisége
- "Ambient Temperature (C)": környezeti hőmérséklet
- "Wind Speed (m/s)": szél sebesség
- "Albedo": albedó
- "Plane of Array Irradiance (W/m^2)": napelemre beeső napsugárzás mennyisége 
- "Cell Temperature (C)": napelem hőmérsékelt
- "DC Array Output (W)": DC kimeneti teljesítmény
- "AC System Output (W)": AC kimeneti teljesítmény

## Bevezető feladatok
1. Olvassuk be a csv file tartalmát egy (server) oldalon futó javascript file-ba (index.js)
2. Alakítsuk át a beolvasott file tartalmát a következő adatformátumra:
```javascript
const days = [
    {
        'month': 1,
        'Day': 1,
        'Hour': 0,
        'Beam Irradiance': {
            'value': 0,
            'unit': 'W/m^2'
        },
        'Diffuse Irradiance': {
            'value': 0,
            'unit': 'W/m^2'
        },
        'Ambient Temperature': {
            'value': -7.1,
            'unit': 'C'
        },
        'Wind Speed': {
            'value': 1,
            'unit': 'm/s'
        },
        'Albedo': 0.2,
        'Plane of Array Irradiance': {
            'value': 0,
            'unit': '(W/m^2)'
        },
        'Cell Temperature': {
            'value': -7.1,
            'unit': 'C'
        },
        'DC Array Output': {
            'value': 0,
            'unit': 'W'
        },
        'AC System Output': {
            'value': 0,
            'unit': 'W'
        }
    },
    {
        ...
    }
];
```
## Feladatok
1. *Határozzuk meg, hogy az adott év melyik napján volt a `DC Array Output` a legnagyobb? Melyik hónapban volt ez?
2. *Határozzuk meg, hogy az adott év melyik napján volt  a `DC Array Output` a legkisebb? Melyik hónapban volt ez?
3. **Határozzuk meg a `DC Array Output` értékét havi bontásban.
4. *Határozzuk meg az adott évben  a `DC Array Output` összegét!
5. *Határozzuk meg az adott évben `DC Array Output` átlagát!
6. **Határozzuk meg havi szinten `DC Array Output` szórását (az éves átlaghoz képest)!
7. ***Készítsünk egy összetett adatstruktúrát a havi bontásra vonatkozó `DC Array Output`-ra:
```javascript
const months = [
    {
        'avg': 0
        'σ': 0
    },
    {
        ...
    }
];
```