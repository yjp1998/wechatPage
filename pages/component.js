class Component {
  constructor() {
    this.parent = document.querySelector('.stack_container');
  }
  
  create() {
    const temp = this.render();
    this.div = document.createElement('div');
    this.div.innerHTML = temp;
    this.div.className = this.name;
    this.parent.appendChild(this.div);
  }

  destory() {
    this.parent.removeChild(this.div);
  }

  interAnimation() {
    this.div.classList.add('out_left');
    this.div.nextSibling.classList.add('in_right');
      setTimeout(() => {
        this.div.classList.remove('out_left');
        this.div.nextSibling.classList.remove('in_right');
      }, 1000);
  }

  return() {
    document.querySelector(`.${this.name}_top_backButton`).addEventListener('click', () => {
      this.div.classList.add('out_right');
      this.div.previousSibling.classList.add('in_left');
      this.div.addEventListener('animationend', () => {
        this.div.classList.remove('out_right');
        this.div.previousSibling.classList.remove('in_left');
        router.back()
      })
    })
  }
}