class Component {
  constructor(parent) {
    this.parent = document.querySelector('.index');
  }

  create() {
    const temp = this.renderDOM();
    const div = document.createElement('div');
    div.innerHTML = temp;
    div.style.display = 'none';
    return div;
  }

  insert() {
    this.parent.appendChild(this.create());
    return this.create()
  }

  renderDOM() {
    return this.render()
  }
}
