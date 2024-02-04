import { ninja } from "./KeyboardManager.astro.0.mts";

if (ninja !== null) {
ninja.data = [
{
id: 'print',
title: 'Imprimir',
hotkey: 'ctrl+p',
icon: '',
section: 'Projects',
handler: () => {
// it's auto register above hotkey with this handler
alert('Your logic to handle');
},
}
];
}
