export default class Ball {

    constructor(pEscenario, pBarra1, pBarra2) {
        this.barra1 = pBarra1;
        this.barra2 = pBarra2;
        this.avanceX = 400;
        this.avanceY = 300;
        this.velocidad_max = 10;
        this.div = document.createElement('div');
        this.div.classList.add('ball');
        this.escenario = pEscenario;
        pEscenario.appendChild(this.div);
        this.state = 2;
        this.direccion = 1;
        this.interval = setInterval(() => {
            this.moveBall();
        }, 30);
    }


    moveBall() {
        this.checkStateBall();
        this.getPoint();
        switch (this.state) {
            case 1: //derecha y abajo
                this.div.style.left = (this.div.offsetLeft + this.velocidad_max) + 'px';
                this.div.style.top = (this.div.offsetTop + this.velocidad_max) + 'px';
                break;

            case 2: // derecha y arriba
                this.div.style.left = (this.div.offsetLeft + this.velocidad_max) + 'px';
                this.div.style.top = (this.div.offsetTop - this.velocidad_max) + 'px';
                break;

            case 3: //izquierda y abajo
                this.div.style.left = (this.div.offsetLeft - this.velocidad_max) + 'px';
                this.div.style.top = (this.div.offsetTop + this.velocidad_max) + 'px';
                break;

            case 4: //izquierda y arriba
                this.div.style.left = (this.div.offsetLeft - this.velocidad_max) + 'px';
                this.div.style.top = (this.div.offsetTop - this.velocidad_max) + 'px';
                break;
        }
    }

    stopBall() {
        clearInterval(this.interval);
        this.escenario.style.backgroundColor = 'tomato';
    }


    checkStateBall() {

        if (this.collisionPlayer2()) {
            this.direccion = 2;
            if (this.state == 1) this.state = 3;
            if (this.state == 2) this.state = 4;
        } else if (this.collisionPlayer1()) {
            this.direccion = 1;
            if (this.state == 3) this.state = 1;
            if (this.state == 4) this.state = 2;
        }

        //golpeo arriba y abajo
        if (this.direccion === 1) {
            if (this.div.offsetTop >= 600) this.state = 2;
            else if (this.div.offsetTop <= 0) this.state = 1;
        } else {
            if (this.div.offsetTop >= 600) this.state = 4;
            else if (this.div.offsetTop <= 0) this.state = 3;
        }
    }

    collisionPlayer1() {
        if (this.div.offsetLeft <= 30 - this.barra1.div.clientWidth && this.div.offsetTop >= this.barra1.div.offsetTop && this.div.offsetTop <= this.barra1.div.offsetTop + this.barra1.div.clientHeight) {

            return true
        }


        return false;
    }
    collisionPlayer2() {

        if (this.div.offsetLeft >= 770 - this.barra2.div.clientWidth &&
            this.div.offsetTop >= this.barra2.div.offsetTop &&
            this.div.offsetTop <= this.barra2.div.offsetTop + this.barra2.div.clientHeight) {

            return true
        }
        return false;
    }


    getPoint() {
        if (this.div.offsetLeft <= 0) {
            this.stopBall();
            alert('Gana Jugador 2')
        }
        if (this.div.offsetLeft >= 800) {
            this.stopBall();
            alert('Gana Jugador 1')
        }
    }




}