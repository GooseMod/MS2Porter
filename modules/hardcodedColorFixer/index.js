let version = '2.1.3';

/*const getVariablesObj = (css) => css.split(';').map((x) => x.trim()).filter((x) => x.startsWith('--'))
.reduce((o, val) => {
  const spl = val.split(':');
  return Object.assign(o, {[spl[0].replace('--', '')]: spl[1]})
}, {});*/

const getVariablesArr = (css) => css.split(';').map((x) => x.trim()).filter((x) => x.startsWith('--'))
  .map((x) => x.split(':'));


export default {
gooseModHandlers: {
  onImport: async function () {
    /*let sheet = window.document.styleSheets[0];

    // Friends menu main container - fix hard coded colors
    sheet.insertRule(`body.hardcoded-color-fixes .container-1D34oG {
      background-color: var(--background-primary);
    }`, sheet.cssRules.length);

    // Autocomplete slash and mention menu - fix hard coded colors
    sheet.insertRule(`body.theme-darker .autocomplete-1vrmpx {
      background-color: var(--background-floating);
    }`, sheet.cssRules.length);
    sheet.insertRule(`body.theme-darker .selectorSelected-1_M1WV {
      background-color: var(--background-accent);
    }`, sheet.cssRules.length);

    // Profile popup - fix hard coded colors
    sheet.insertRule(`body.theme-darker .body-3iLsc4, body.theme-darker .footer-1fjuF6 {
      background-color: var(--background-floating);
    }`, sheet.cssRules.length);

    // Server Boost layer / page - fix hard coded colors
    sheet.insertRule(`body.theme-darker .perksModal-fSYqOq {
      background-color: var(--background-primary);
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.theme-darker .tierBody-16Chc9 {
      background-color: var(--background-floating);
    }`, sheet.cssRules.length);

    sheet.insertRule(`body.theme-darker .perk-2WeBWW {
      background-color: var(--background-floating);
    }`, sheet.cssRules.length);*/

    let ctx = document.createElement('canvas').getContext('2d');

    const normaliseColor = (str) => { ctx.fillStyle = str; return ctx.fillStyle; };
    const normaliseColors = (str) => str.replace(/rgb\(([0-9]+), ([0-9]+), ([0-9]+)\)/g, normaliseColor);

    let sheet = window.document.styleSheets[0];

    let darkThemeVars = getVariablesArr([...sheet.cssRules].find((x) => x.selectorText === '.theme-dark').cssText);
    let lightThemeVars = getVariablesArr([...sheet.cssRules].find((x) => x.selectorText === '.theme-light').cssText);

    let themeVars = darkThemeVars.concat(lightThemeVars).filter((x) => !x[0].includes('scrollbar') && !x[0].includes('logo')).map((x) => {
      x[1] = normaliseColor(x[1]);
      return x;
    });

    sheet.insertRule(`body {
      --brand-color: #7289da;
      --brand-color-hover: #677bc4;
    }`, sheet.cssRules.length);

    themeVars.push(['--brand-color', '#7289da']);
    themeVars.push(['--brand-color-hover', '#677bc4']);

    for (let rule of sheet.cssRules) {
      if (rule.selectorText === '.theme-light' || rule.selectorText === '.theme-dark' || rule.selectorText === 'body') continue;

      let normalisedText = normaliseColors(rule.cssText);
      let changed = false;

      for (let v of themeVars) {
        if (normalisedText.includes(v[1])) {
          normalisedText = normalisedText.replace(v[1], `var(${v[0]})`);
          changed = true;

          break;
        }
      }

      if (changed) {
        sheet.insertRule(`${normalisedText}`, sheet.cssRules.length);
      }
    }

    //document.documentElement.setAttribute('hardcoded-color-fixes', 'true');
  },

  onRemove: async function () {
    //document.documentElement.removeAttribute('hardcoded-color-fixes');
  },

  logRegionColor: 'darkred',



}
};