const version = '1.3.11';

if (typeof window === 'undefined' || typeof window.Audio === 'undefined') { // JSON API generator evals
  global.window = {Audio: {}};
}

let _Audio = window.Audio;

let enabled = true;

let fileSelectEl;
let incomingCallSound, outgoingCallSound, notificationSound;
let incomingCallStorage, outgoingCallStorage, notificationStorage;
let incomingCallName, outgoingCallName, notificationName;

const dataURItoBlobURI = (dataURI) => { // https://stackoverflow.com/a/12300351
  try {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code
    const byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    const ab = new ArrayBuffer(byteString.length);

    // create a view into the buffer
    let ia = new Uint8Array(ab);

    // set the bytes of the buffer to the correct values
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    return URL.createObjectURL(new Blob([ab], {type: mimeString}));
  } catch (e) {
    return undefined;
  }
};

const getFileUpload = async () => {
  fileSelectEl.value = null; // Prevent not firing change for repeated files
  fileSelectEl.click();

  await new Promise((res) => {
    fileSelectEl.onchange = () => {
      res();
    };
  });

  fileSelectEl.onchange = undefined;

  const file = fileSelectEl.files[0];
          
  if (file === undefined) {
    return undefined;
  }

  return file;
};

export default {
gooseModHandlers: {
  onImport: async function() {
    goosemodScope.logger.debug('customSounds', 'Overriding Audio with a proxy function');

    window.Audio = function() {
      var audio = new _Audio();
    
      var _play = audio.play;
      audio.play = function() {
        //console.log(this.src);

        if (enabled) {
          if (outgoingCallSound && this.src.includes('/assets/c6e92752668dde4eee5923d70441579f.mp3')) { // Outgoing Call
            console.log('outgoing');
            this.src = outgoingCallSound;
          }

          if (incomingCallSound && this.src.includes('/assets/84a1b4e11d634dbfa1e5dd97a96de3ad.mp3')) { // Incoming Call
            console.log('incoming');
            this.src = incomingCallSound;
          }

          if (notificationSound && this.src.includes('/assets/dd920c06a01e5bb8b09678581e29d56f.mp3')) { // Notification Sound / Ping
            console.log('notification');
            this.src = notificationSound;
          }
        }

        return _play.apply(this, arguments);
      }
    
      return audio;
    };
  },

  onLoadingFinished: async function() {
    fileSelectEl = document.createElement('input');
    fileSelectEl.type = 'file';

    //fileSelectEl.accept = 'sound/*';
    fileSelectEl.style.display = 'none';

    document.body.appendChild(fileSelectEl);

    let items = [
      {
        type: 'text-and-button',
        text: 'Incoming Call',
        subtext: 'Not uploaded',
        buttonText: 'Upload',
        onclick: async (el) => {
          el.textContent = 'Uploading...';

          const file = await getFileUpload();

          incomingCallSound = file === undefined ? undefined : URL.createObjectURL(file);
          incomingCallName = file === undefined ? undefined : file.name;

          items[0].subtext = file === undefined ? 'Not uploaded' : `Uploaded: ${file.name}`;

          goosemodScope.settings.createFromItems();
          goosemodScope.openSettingItem('Custom Sounds');

          if (file !== undefined) {
            const reader = new FileReader();

            reader.onload = () => {
              incomingCallStorage = reader.result;
            };

            reader.readAsDataURL(file);
          }
        }
      },
      {
        type: 'text-and-button',
        text: 'Outgoing Call',
        subtext: 'Not uploaded',
        buttonText: 'Upload',
        onclick: async (el) => {
          el.textContent = 'Uploading...';

          const file = await getFileUpload();
          outgoingCallSound = file === undefined ? undefined : URL.createObjectURL(file);
          outgoingCallName = file === undefined ? undefined : file.name;

          items[1].subtext = file === undefined ? 'Not uploaded' : `Uploaded: ${file.name}`;

          goosemodScope.settings.createFromItems();
          goosemodScope.openSettingItem('Custom Sounds');

          if (file !== undefined) {
            const reader = new FileReader();

            reader.onload = () => {
              outgoingCallStorage = reader.result;
            };

            reader.readAsDataURL(file);
          }
        }
      },
      {
        type: 'text-and-button',
        text: 'Notification Sound',
        subtext: 'Not uploaded',
        buttonText: 'Upload',
        onclick: async (el) => {
          el.textContent = 'Uploading...';

          const file = await getFileUpload();

          notificationSound = file === undefined ? undefined : URL.createObjectURL(file);
          notificationName = file === undefined ? undefined : file.name;

          items[2].subtext = file === undefined ? 'Not uploaded' : `Uploaded: ${file.name}`;

          goosemodScope.settings.createFromItems();
          goosemodScope.openSettingItem('Custom Sounds');

          if (file !== undefined) {
            const reader = new FileReader();

            reader.onload = () => {
              notificationStorage = reader.result;
            };

            reader.readAsDataURL(file);
          }
        }
      }
    ];

    goosemodScope.settings.createItem('Custom Sounds', [
      `(v${version})`,

      {
        type: 'toggle',
        text: 'Custom Sounds Enabled',
        onToggle: (c) => { enabled = c; },
        isToggled: () => enabled
      },

      {
        type: 'header',
        text: 'Sounds'
      },

      ...items
    ]);
  },

  onRemove: async function() {
    window.Audio = _Audio;
    
    fileSelectEl.remove();

    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'Custom Sounds');
    goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(settingItem), 1);
  },

  getSettings: () => [enabled, incomingCallStorage, outgoingCallStorage, notificationStorage, incomingCallName, outgoingCallName, notificationName],
  loadSettings: ([_enabled, _incomingCallStorage, _outgoingCallStorage, _notificationStorage, _incomingCallName, _outgoingCallName, _notificationName]) => {
    enabled = _enabled;
    
    incomingCallStorage = _incomingCallStorage;
    outgoingCallStorage = _outgoingCallStorage;
    notificationStorage = _notificationStorage;

    incomingCallSound = incomingCallStorage === null ? undefined : dataURItoBlobURI(incomingCallStorage);
    outgoingCallSound = outgoingCallStorage === null ? undefined : dataURItoBlobURI(outgoingCallStorage);
    notificationSound = notificationStorage === null ? undefined : dataURItoBlobURI(notificationStorage);

    incomingCallName = _incomingCallName;
    outgoingCallName = _outgoingCallName;
    notificationName = _notificationName;

    let settingItem = goosemodScope.settings.items.find((x) => x[1] === 'Custom Sounds');

    settingItem[2][2].subtext = !incomingCallName ? 'Not uploaded' : `Uploaded: ${incomingCallName}`;
    settingItem[2][3].subtext = !outgoingCallName ? 'Not uploaded' : `Uploaded: ${outgoingCallName}`;
    settingItem[2][4].subtext = !notificationName ? 'Not uploaded' : `Uploaded: ${notificationName}`;

    //goosemodScope.settings.createFromItems();
    //goosemodScope.openSettingItem('Custom Sounds');

    //items[0].subtext = !incomingCallName ? 'Not uploaded' : `Uploaded: ${incomingCallName}`;
    //items[1].subtext = !outgoingCallName ? 'Not uploaded' : `Uploaded: ${outgoingCallName}`;
    //items[2].subtext = !notificationName ? 'Not uploaded' : `Uploaded: ${notificationName}`;
  },

  logRegionColor: 'darkblue',



}
};