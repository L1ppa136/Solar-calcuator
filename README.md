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
8. ***Határozzuk meg a `DC Array Output` értékét havi bontásban (havi összeg) és rendüzzük a hónapokat e összeg szerint növekvő sorrendbe!
9. ***Határozzuk meg a `DC Array Output` értékét havi bontásban (havi összeg) és rendüzzük a hónapokat e összeg szerint csökkenő sorrendbe!
10. *Határozzuk meg napi szinten a `DC Array Output` értékét!
11. **Rendezzük növekvő sorrendbe a napi szintű `DC Array Output` statisztikát.
12. **Rendezzük csökkenő sorrendbe a napi szintű `DC Array Output` statisztikát.
13. *Melyik volt a legmelegebb nap (napi átlaghőmérséklet alapján)?
14. *Melyik volt a leghidegebb nap (napi átlaghőmérséklet alapján)?
15. *Melyik volt a legszelesebb nap (napi szélsebesség átlag alapján)?
16. *Melyik volt a leg szélmentesebb nap (napi szélsebesség átlag alapján)?
17. ****Keressük meg azokat a napokat (minimális számú napokat), amelyek az évi `DC Array Output` 80%-át adták!
18. **Készítsünk statisztikát évi öszzegre az órára bontott `DC Array Output`-ra nézve!
19. **********Határozzuk meg az évi szintű villamos termelést. Ennek az egysége Wh vagy kWh. Ezt a mennyiséget úgy tudjuk megkapni, hogy a `DC Array Output` értékét integráljuk az időtengely mentén (meddig volt elérhető az a villamos teljesítmény). Tipp: tételezzük fel hogy két adatpont között a villamos teljesítmény lineárisan változik (pl. ha reggel 5-kor még a `DC Array Output` 0W volt, reggel 6-kor pedig 10W, akkor reggeli 5:30 kor az érték 5W volt).