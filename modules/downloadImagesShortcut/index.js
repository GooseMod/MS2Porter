const version = '1.1.0';

let src;

const downloadURL = async (url) => {
  let el = document.createElement('a');

  el.href = url;
  el.download = url.includes('http') ? url.split('/').pop() : '';

  el.style.display = 'none';

  document.body.appendChild(el);

  el.click();

  document.body.removeChild(el);
};

const keypressHandler = (e) => {
  if (src && e.code === 'KeyD' && e.ctrlKey) {
    downloadURL(src);

    e.preventDefault();
    return false;
  }
};

const hoverHandler = (e) => {
  if (e.target && e.target.src) {
    src = e.target.src.split('?')[0];
  } else {
    src = undefined;
  }
};

export default {
gooseModHandlers: {
  onImport: async function () {
    document.addEventListener('keypress', keypressHandler);
    document.addEventListener('mousemove', hoverHandler);
  },

  onRemove: async function () {
    document.removeEventListener('keypress', keypressHandler);
    document.removeEventListener('mousemove', hoverHandler);
  },



}
};