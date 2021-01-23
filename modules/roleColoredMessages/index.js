let version = '1.2.2';

let interval;

function rgb2hsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}

export default {
gooseModHandlers: {
  onImport: async function() {
  },

  onLoadingFinished: async function() {
    interval = setInterval(() => {
      let els = [...document.getElementsByClassName('contents-2mQqc9')];
      let lastColor = '';
      for (let el of els) {
        let usernameEl = el.querySelector('.username-1A8OIy');

        let roleColor = usernameEl && (usernameEl.style.color || 'var(--header-primary)');

        if (roleColor) {
          let rgb = roleColor.replace('rgb(', '').replace(')', '').split(', ').map((x) => parseFloat(x));

          let [h, s, l] = rgb2hsl(rgb[0], rgb[1], rgb[2]);

          roleColor = `hsl(${h}, ${85}%, ${75}%)`;
        }

        el.querySelector('.markup-2BOw-j').style.color = roleColor || lastColor;

        if (roleColor) lastColor = roleColor;
      }
    }, 100);
  },

  onRemove: async function() {
    clearInterval(interval);

    let els = [...document.getElementsByClassName('contents-2mQqc9')]; // Reset message text back to normal color
      for (let el of els) {
        el.querySelector('.markup-2BOw-j').style.color = ''; //el.querySelector('.username-1A8OIy').style.color;
      }
  },

  logRegionColor: 'green',



}
};
