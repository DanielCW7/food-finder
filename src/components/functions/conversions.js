
const g_g = 1;
const g_mg = 1000;
const g_kg = .001;
const g_lb = .00220462;
const g_oz = .035274;

// US measurements
const l_l = 1;
const l_ml = 1000;
const l_tsp = 202.884;
const l_tbsp = 67.628;
const l_cup = 4.16667;
const l_gal = 0.264172;
const l_floz = 33.814;
const l_qt = 1.05669;
const l_pint = 2.11338;


function conversions(type, quantity, units) {
    console.log(type, quantity, units);


    let result = 0;
    switch(units) {
        case 'g':
            result = quantity * g_g
            break;
        case 'mg':
            result = quantity * g_mg
            break;
    }
    // type to units, 

    return result
}

export default conversions