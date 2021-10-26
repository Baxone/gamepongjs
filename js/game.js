import Pong from './pong.js';
import Ball from './ball.js';

const escenario = document.querySelector('.escenario');
const pong1 = new Pong('pong', escenario, 1, 81, 65);
const pong2 = new Pong('pong', escenario, 2, 38, 40);
const ball = new Ball(escenario, pong1, pong2);
