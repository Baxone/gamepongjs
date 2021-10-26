export default class Pong {

    constructor(pClase, pEscenario, pNum, pT1, pT2) {
        this.className = pClase;
        this.div = document.createElement('div');
        this.div.classList.add(this.className);
        this.div.id = 'pong' + pNum;
        this.escenario = pEscenario;
        this.escenario.appendChild(this.div);
        this.t1 = pT1;
        this.t2 = pT2;
        this.velocity = 60;
        this.positionY = 0;
        this.movePong();
    }

    movePong() {
        const self = this;
        document.addEventListener('keydown', (event) => {
            if (self.t1 === event.keyCode && self.positionY > 0) {
                self.positionY -= self.velocity
                self.div.style.top = self.positionY + 'px';
            }
            else if (self.t2 === event.keyCode && self.positionY < 500) {
                self.positionY += self.velocity;
                self.div.style.top = self.positionY + 'px';
            }
        })
    }

}