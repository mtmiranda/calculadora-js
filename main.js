function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    this.display.addEventListener("keypress", (event) => {
      if (event.keyCode !== 13) return;
      this.equal();
    });
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.delete();
      if (el.classList.contains("btn-eq")) this.equal();
    });
  };

  this.equal = () => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert("Conta inválida");
        return;
      }
      this.display.value = conta;
    } catch (event) {
      alert("Conta inválida");
      return;
    }
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => (this.display.value = "");
  this.delete = () => (this.display.value = this.display.value.slice(0, -1));
}

const calculadora = new Calculadora();
calculadora.inicia();

anime({
  targets: ".calculadora-wrapper",

  translateX:[
    {value: 250, duration: 800}, {value: -250, duration: 800}, {value: 0}
  ],
  rotate: {
    value: '+=2turn', // 0 + 2 = '2turn'
    easing: 'easeInOutSine',
  },

  delay: 2000

});
