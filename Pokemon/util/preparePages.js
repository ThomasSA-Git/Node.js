import { readPage, renderPage } from "./templateEngine.js";

const frontPage = readPage('./public/pages/frontpage/frontpage.html');
export const frontpagePage = renderPage(frontPage);

const battle = readPage('./public/pages/battle/battle.html');
export const battlePage = renderPage(battle);

const contact = readPage('./public/pages/contact/contact.html');
export const contactPage = renderPage(contact);