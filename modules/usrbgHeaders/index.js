const version = '1.0.0';

let el;

const css = `@import url('https://discord-custom-covers.github.io/usrbg/dist/usrbg.css');

.reduce-motion .userPopout-3XzG_A {
	transform:translateZ(0);
}

.userPopout-3XzG_A .wrapper-3t9DeA::after {
	content: '';
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 20%;
	z-index: -1;
	pointer-events: none;
	opacity: .9;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: var(--user-popout-position) center;
	background-image: var(--user-background);
	-webkit-mask-image: linear-gradient(#000, transparent);
}

.userPopout-3XzG_A  .header-2BwW8b,
.userPopout-3XzG_A  .scroller-2FKFPG,
.userPopout-3XzG_A  .footer-1fjuF6 {
	z-index: 1;
}

:root {
  --usrbg-modal-x-offset:-34px; /*Distance from the avatar container to the edge of the modal (x)*/
  --usrbg-modal-y-offset:-20px; /*Distance from the avatar container to the edge of the modal (y)*/
  --usrbg-modal-width:600px; /*Maximum width of modal*/
  --usrbg-modal-height:190px; /*Maximum height of modal*/
}
.header-QKLPzZ .wrapper-3t9DeA::after {
  content:'';
  position:absolute;
  top:var(--usrbg-modal-x-offset);
  left:var(--usrbg-modal-y-offset);
  width:var(--usrbg-modal-width);
  height: var(--usrbg-modal-height);
  opacity:.9;
  z-index: -1;
  pointer-events:none;
  background: var(--user-background) center/cover no-repeat;
  -webkit-mask: linear-gradient(black, transparent 80%);
}

.headerInfo-30uryT,
.tabBarItem-1b8RUP,
.activity-1ythUs {
  z-index:1;
  position:relative;
}

.header-QKLPzZ .wrapper-3t9DeA {
  z-index: 0;
}`;

export default {
goosemodHandlers: {
  onImport: async function () {
    el = document.createElement('style');

    document.head.appendChild(el);

    el.appendChild(document.createTextNode(css));
  },

  onRemove: async function () {
    el.remove();
  },



}
};