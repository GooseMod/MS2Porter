let version = '2.2.3';

let globalTwitchEmotes = JSON.parse(`{"4Head":"354","ANELE":"3792","ArgieB8":"51838","ArsonNoSexy":"50","AsianGlow":"74","AthenaPMS":"32035","BabyRage":"22639","BatChest":"1905","BCouch":"83536","BCWarrior":"30","BibleThump":"86","BigBrother":"1904","BionicBunion":"24","BlargNaut":"38","bleedPurple":"62835","BloodTrail":"69","BORT":"243","BrainSlug":"881","BrokeBack":"4057","BuddhaBar":"27602","ChefFrank":"90129","cmonBruh":"84608","CoolCat":"58127","CorgiDerp":"49106","CougarHunt":"21","DAESuppy":"973","DansGame":"33","DatSheffy":"170","DBstyle":"73","deExcite":"46249","deIlluminati":"46248","DendiFace":"58135","DogFace":"1903","DOOMGuy":"54089","duDudu":"62834","EagleEye":"20","EleGiggle":"4339","FailFish":"360","FPSMarksman":"42","FrankerZ":"65","FreakinStinkin":"39","FUNgineer":"244","FunRun":"48","FuzzyOtterOO":"168","GingerPower":"32","GrammarKing":"3632","HassaanChop":"20225","HassanChop":"68","HeyGuys":"30259","HotPokket":"357","HumbleLife":"46881","ItsBoshyTime":"169","Jebaited":"90","JKanStyle":"15","JonCarnage":"26","KAPOW":"9803","Kappa":"25","KappaClaus":"74510","KappaPride":"55338","KappaRoss":"70433","KappaWealth":"81997","Keepo":"1902","KevinTurtle":"40","Kippa":"1901","Kreygasm":"41","Mau5":"30134","mcaT":"35063","MikeHogu":"81636","MingLee":"68856","MrDestructoid":"28","MVGame":"29","NinjaTroll":"45","NomNom":"90075","NoNoSpot":"44","NotATK":"34875","NotLikeThis":"58765","OhMyDog":"81103","OMGScoots":"91","OneHand":"66","OpieOP":"356","OptimizePrime":"16","OSfrog":"81248","OSkomodo":"81273","OSsloth":"81249","panicBasket":"22998","PanicVis":"3668","PartyTime":"76171","PazPazowitz":"19","PeoplesChamp":"3412","PermaSmug":"27509","PeteZaroll":"81243","PeteZarollTie":"81244","PicoMause":"27","PipeHype":"4240","PJSalt":"36","PMSTwin":"92","PogChamp":"88","Poooound":"358","PraiseIt":"38586","PRChase":"28328","PunchTrees":"47","PuppeyFace":"58136","RaccAttack":"27679","RalpherZ":"1900","RedCoat":"22","ResidentSleeper":"245","riPepperonis":"62833","RitzMitz":"4338","RuleFive":"361","SeemsGood":"64138","ShadyLulu":"52492","ShazBotstix":"87","ShibeZ":"27903","SmoocherZ":"89945","SMOrc":"52","SMSkull":"51","SoBayed":"1906","SoonerLater":"355","SriHead":"14706","SSSsss":"46","StinkyCheese":"90076","StoneLightning":"17","StrawBeary":"37","SuperVinlin":"31","SwiftRage":"34","TF2John":"1899","TheRinger":"18","TheTarFu":"70","TheThing":"7427","ThunBeast":"1898","TinyFace":"67","TooSpicy":"359","TriHard":"171","TTours":"38436","twitchRaid":"62836","UleetBackup":"49","UncleNox":"3666","UnSane":"71","VaultBoy":"54090","VoHiYo":"81274","Volcania":"166","WholeWheat":"1896","WinWaker":"167","WTRuck":"1897","WutFace":"28087","YouWHY":"4337"}`);

let globalTwitchEmotesEnabled = true;

let interval;

let betterTTVEnabled = true;
let betterTTVEmotes = [];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const emoteReplace = async (n, el, e, src) => {
  const results = n.textContent.match(new RegExp(`([\\s]|^)${e}([\\s]|$)`));

  if (!results) return;
            
  const pre = n.textContent.substring(0, results.index + results[1].length);
  const post = n.textContent.substring(results.index + results[0].length - results[2].length);

  n.textContent = pre;

  let emojiContainerEl = document.createElement('span');
  emojiContainerEl.classList.add('emojiContainer-3X8SvE');

  emojiContainerEl.setAttribute('role', 'button');
  emojiContainerEl.setAttribute('tabindex', '0');

  let imgEl = document.createElement('img');
  imgEl.src = src;

  imgEl.classList.add('emoji', 'jumboable');

  imgEl.draggable = false;
  imgEl.setAttribute('aria-label', e);

  emojiContainerEl.appendChild(imgEl);

  el.insertBefore(emojiContainerEl, n.nextSibling);

  el.insertBefore(document.createTextNode(post), emojiContainerEl.nextSibling);
}

let canvasImg;

export default {
gooseModHandlers: {
  onImport: async function() {
    betterTTVEmotes = JSON.parse(`[{"id":"54fa928f01e468494b85b54f","code":"PedoBear","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa92ee01e468494b85b553","code":"RebeccaBlack","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa8f1401e468494b85b537","code":":tf:","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa8fce01e468494b85b53c","code":"CiGrip","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa903b01e468494b85b53f","code":"DatSauce","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa909b01e468494b85b542","code":"ForeverAlone","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa90ba01e468494b85b543","code":"GabeN","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa90f201e468494b85b545","code":"HailHelix","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa913701e468494b85b546","code":"HerbPerve","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa919901e468494b85b548","code":"iDog","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa930801e468494b85b554","code":"rStrike","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa932201e468494b85b555","code":"ShoopDaWhoop","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa9cc901e468494b85b565","code":"SwedSwag","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fab45f633595ca4c713abc","code":"M&Mjc","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fab7d2633595ca4c713abf","code":"bttvNice","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa934001e468494b85b556","code":"TopHam","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa935601e468494b85b557","code":"TwaT","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fa99b601e468494b85b55d","code":"WatChuSay","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fb603201abde735115ddb5","code":"SavageJerky","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"5622aaef3286c42e57d8e4ab","code":"Zappa","imageType":"png","userId":"54f93e618edd5fcd455f213f"},{"id":"566ca11a65dbbdab32ec0558","code":"tehPoleCat","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"566ca1a365dbbdab32ec055b","code":"AngelThump","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fbef6601abde735115de57","code":"HHydro","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fbefeb01abde735115de5b","code":"TaxiBro","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fbf00a01abde735115de5c","code":"BroBalt","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fbf02f01abde735115de5d","code":"ButterSauce","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fbf05a01abde735115de5e","code":"BaconEffect","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fbf07e01abde735115de5f","code":"SuchFraud","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fbf09c01abde735115de61","code":"CandianRage","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"54fbefc901abde735115de5a","code":"She'llBeRight","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"55028cd2135896936880fdd7","code":"D:","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"550352766f86a5b26c281ba2","code":"VisLaud","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"550b344bff8ecee922d2a3c1","code":"KaRappa","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"55189a5062e6bd0027aee082","code":"YetiZ","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"552d2fc2236a1aa17a996c5b","code":"miniJulia","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"566ca00f65dbbdab32ec0544","code":"FishMoley","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"566ca02865dbbdab32ec0547","code":"Hhhehehe","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"566ca04265dbbdab32ec054a","code":"KKona","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"566ca09365dbbdab32ec0555","code":"PoleDoge","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"553b48a21f145f087fc15ca6","code":"sosGame","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"55471c2789d53f2d12781713","code":"CruW","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"555015b77676617e17dd2e8e","code":"RarePepe","imageType":"png","userId":"54f93e618edd5fcd455f213f"},{"id":"54fbef8701abde735115de58","code":"iamsocal","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"555981336ba1901877765555","code":"haHAA","imageType":"png","userId":"54f93e3e8edd5fcd455f213d"},{"id":"55b6524154eefd53777b2580","code":"FeelsBirthdayMan","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"55f324c47f08be9f0a63cce0","code":"RonSmug","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"560577560874de34757d2dc0","code":"KappaCool","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"566c9fc265dbbdab32ec053b","code":"FeelsBadMan","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"566c9eeb65dbbdab32ec052b","code":"BasedGod","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"566c9f3b65dbbdab32ec052e","code":"bUrself","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"566c9f6365dbbdab32ec0532","code":"ConcernDoge","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"566c9fde65dbbdab32ec053e","code":"FeelsGoodMan","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"566c9ff365dbbdab32ec0541","code":"FireSpeed","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"566ca06065dbbdab32ec054e","code":"NaM","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"566ca38765dbbdab32ec0560","code":"SourPls","imageType":"gif","userId":"5561169bd6b9d206222a8c19"},{"id":"567b00c61ddbe1786688a633","code":"LuL","imageType":"png","userId":"54f93e618edd5fcd455f213f"},{"id":"56901914991f200c34ffa656","code":"SaltyCorn","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"56d937f7216793c63ec140cb","code":"FCreep","imageType":"png","userId":"5957e86c36b6a43b492d3989"},{"id":"56e9f494fff3cc5c35e5287e","code":"monkaS","imageType":"png","userId":"55bfba180baa41467919aabf"},{"id":"56f5be00d48006ba34f530a4","code":"VapeNation","imageType":"png","userId":"55583bc00c72ab1d77d8b9b7"},{"id":"56fa09f18eff3b595e93ac26","code":"ariW","imageType":"png","userId":"54ee2465b822020506c52a52"},{"id":"5709ab688eff3b595e93c595","code":"notsquishY","imageType":"png","userId":"54ee2465b822020506c52a52"},{"id":"5733ff12e72c3c0814233e20","code":"FeelsAmazingMan","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"573d38b50ffbf6cc5cc38dc9","code":"DuckerZ","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"59cf182fcbe2693d59d7bf46","code":"SqShy","imageType":"png","userId":"54ee2465b822020506c52a52"},{"id":"58d2e73058d8950a875ad027","code":"Wowee","imageType":"png","userId":"5561169bd6b9d206222a8c19"},{"id":"5dc36a8db537d747e37ac187","code":"WubTF","imageType":"png","userId":"54f93e3e8edd5fcd455f213d"},{"id":"5e76d2ab8c0f5c3723a9a87d","code":"cvR","imageType":"png","userId":"54ee2465b822020506c52a52"},{"id":"5e76d2d2d112fc372574d222","code":"cvL","imageType":"png","userId":"54ee2465b822020506c52a52"},{"id":"5e76d338d6581c3724c0f0b2","code":"cvHazmat","imageType":"png","userId":"54ee2465b822020506c52a52"},{"id":"5e76d399d6581c3724c0f0b8","code":"cvMask","imageType":"png","userId":"54ee2465b822020506c52a52"}]`);

    // should get latest emotes from API: however slow to request for import time, so just use "cached" version
  },

  onLoadingFinished: async function() {
    interval = setInterval(async () => {
      let els = [...document.getElementsByClassName('messageContent-2qWWxC')];
      for (let el of els) {
        if (globalTwitchEmotesEnabled) for (let e in globalTwitchEmotes) {
          if (!el.textContent.includes(e)) continue;

          for (let n of el.childNodes) {
            if (!n.textContent.includes(e)) continue;

            emoteReplace(n, el, e, `https://static-cdn.jtvnw.net/emoticons/v1/${globalTwitchEmotes[e]}/1.0`); // Discord SCP allows Twitch.tv emotes (because of integration)
          }
        }

        if (betterTTVEnabled) for (let e of betterTTVEmotes) {
          if (!el.textContent.includes(e.code)) continue;

          for (let n of el.childNodes) {
            if (!n.textContent.includes(e.code)) continue;

            emoteReplace(n, el, e.code, `https://cdn.betterttv.net/emote/${e.id}/2x.${e.imageType}`);
          }
        }
      }
    }, 500);

    goosemodScope.settings.createItem('Twitch Emotes', [
      `(v${version})`,

      {
        type: 'header',
        text: 'Emote Sources'
      },

      {
        type: 'toggle',
        text: 'Global Twitch Emotes',
        subtext: 'Regular global Twitch emotes',
        onToggle: (c) => { globalTwitchEmotesEnabled = c; },
        isToggled: () => globalTwitchEmotesEnabled
      },
      {
        type: 'toggle',
        text: 'BetterTTV Global Emotes',
        subtext: 'BetterTTV Global Emotes',
        onToggle: (c) => { betterTTVEnabled = c; },
        isToggled: () => betterTTVEnabled
      }
    ]);
  },

  onRemove: async function() {
    clearInterval(interval);

    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'Twitch Emotes');
    goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
  },

  getSettings: () => [globalTwitchEmotesEnabled, betterTTVEnabled],
  loadSettings: ([_globalTwitchEmotesEnabled, _betterTTVEnabled]) => {
    globalTwitchEmotesEnabled = _globalTwitchEmotesEnabled;
    betterTTVEnabled = _betterTTVEnabled;
  },

  logRegionColor: 'green',



}
};