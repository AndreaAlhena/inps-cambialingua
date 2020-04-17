/**
 * La funzione così come presa dal sito INPS
 * 
 * La nomenclatura PascalCase rende questa funzione un costruttore, pertanto risulterà più
 * lenta rispetto una normale funzione. Questa, infatti, dopo la sua esecuzione restituirà
 * un oggetto istanza privo di proprietà
 * 
 * @param {*} slingua
 * @returns {Object}
 */
function CambiaLingua(slingua) {
    if (window.location.href.indexOf('?') !== -1) {
        var pippo = window.location.href.replace('lang=EN', '').replace('lang=IT', '').replace('lang=ES', '').replace('lang=FR', '').replace('lang=DE', '');
        var pippo = pippo.replace('lang=en', '').replace('lang=it', '').replace('lang=es', '').replace('lang=fr', '').replace('lang=de', '') + '&lang=' + slingua;
        pippo = pippo.replace('&&', '&').replace('default.aspx?&', 'default.aspx?');
        window.location = pippo;
    } else {
        //C15
        window.location = window.location.href + '?lang=' + slingua;
    }
}

/**
 * La funzione così come presa dal sito INPS ma parametrizzata rispetto alla URL da trattare al fine
 * di agevolarne i test
 * 
 * @param {string} url La URL così come prelevata da window.location.href
 * @param {string} slingua
 * @returns {Object}
 */
function CambiaLinguaTest(url, slingua) {
    if (url.indexOf('?') !== -1) {
        var pippo = url.replace('lang=EN', '')
            .replace('lang=IT', '')
            .replace('lang=ES', '')
            .replace('lang=FR', '')
            .replace('lang=DE', '');
            .replace('lang=en', '')
            .replace('lang=it', '')
            .replace('lang=es', '')
            .replace('lang=fr', '')
            .replace('lang=de', '') + '&lang=' + slingua;

        pippo = pippo.replace('&&', '&').replace('default.aspx?&', 'default.aspx?');
        
        return pippo;
    } 
       
    return url + '?lang=' + slingua;
}

/**
 * La funzione così come presa dal sito INPS ma parametrizzata rispetto alla URL da trattare al fine
 * di agevolarne i test
 * 
 * La nomenclatura camelCase fa si che questa funzione venga interpretata come una normalissima
 * Function Declaration, pertanto risulterà più veloce rispetto un costruttore. Non dovendo restituire
 * un oggetto istanza, garantisce prestazioni migliori della precedente
 * 
 * @param {string} url La URL così come prelevata da window.location.href
 * @param {*} slingua
 * @returns {Object}
 */
function cambiaLinguaTest(url, slingua) {
    if (url.indexOf('?') !== -1) {
        var pippo = url.replace('lang=EN', '').replace('lang=IT', '').replace('lang=ES', '').replace('lang=FR', '').replace('lang=DE', '');
        var pippo = pippo.replace('lang=en', '').replace('lang=it', '').replace('lang=es', '').replace('lang=fr', '').replace('lang=de', '') + '&lang=' + slingua;
        pippo = pippo.replace('&&', '&').replace('default.aspx?&', 'default.aspx?');
        return pippo;
    } else {
        //C15
        return url + '?lang=' + slingua;
    }
}

/**
 * La funzione così come presa dal sito INPS ma parametrizzata rispetto alla URL da trattare al fine
 * di agevolarne i test. Altera la stringa mediante l'uso di una RegEx
 * 
 * @param {string} url La URL così come prelevata da window.location.href
 * @param {string} slingua
 * @returns {Object}
 */
function CambiaLinguaRegexTest(url, slingua) {
    if (url.indexOf('?') !== -1) {
        var pippo = url.replace(/lang=(e[ns]|it|fr|de)/i, '') + '&lang=' + slingua;
        pippo = pippo.replace('&&', '&').replace('default.aspx?&', 'default.aspx?');
        return pippo;
    } else {
        //C15
        return url + '?lang=' + slingua;
    }
}

/**
 * La funzione così come presa dal sito INPS ma parametrizzata rispetto alla URL da trattare al fine
 * di agevolarne i test
 * 
 * La nomenclatura camelCase fa si che questa funzione venga interpretata come una normalissima
 * Function Declaration, pertanto risulterà più veloce rispetto un costruttore. Non dovendo restituire
 * un oggetto istanza, garantisce prestazioni migliori della precedente. Altera la stringa mediante
 * l'uso di una RegEx
 * 
 * @param {string} url La URL così come prelevata da window.location.href
 * @param {string} slingua
 * @returns {Object}
 */
function cambiaLinguaRegexTest(url, slingua) {
    if (url.indexOf('?') !== -1) {
        var pippo = url.replace(/lang=(e[ns]|it|fr|de)/i, '') + '&lang=' + slingua;
        pippo = pippo.replace('&&', '&').replace('default.aspx?&', 'default.aspx?');
        return pippo;
    } else {
        //C15
        return url + '?lang=' + slingua;
    }
}
/**
 * Una forma definitiva ed ottimizzata della funzione cambiaLinguaRegexTest
 * 
 * All'interno dell'if viene rimossa la multipla assegnazione sulla variabile pippo
 * a favore di un singolo return. Trovandosi in presenza di un return condizionale,
 * si rimuove l'else per ridurre, ove possibile, le chiamate allo stack
 * 
 * @param {string} url 
 * @param {string} slingua 
 */
function cambiaLinguaRegexOptimTest(url, slingua) {
    if (url.indexOf('?') !== -1) {
        return (url.replace(/lang=(e[ns]|it|fr|de)/i, '') + '&lang=' + slingua)
            .replace('&&', '&')
            .replace('default.aspx?&', 'default.aspx?');
    }

    //C15
    return url + '?lang=' + slingua;
}