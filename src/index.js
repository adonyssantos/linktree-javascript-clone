import data from './data.js';
import { print, createHeader, createList, footer } from './utils/index.js';

if (data) {
  print('header', createHeader(data.header));
  print('links', createList(data.links));
  print('footer', footer);
}
