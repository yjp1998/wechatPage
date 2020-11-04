class Component {
  constructor(parent) {
    this.parent = document.querySelector('.page_container');
    this.container = document.querySelector('wechat_content');
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
