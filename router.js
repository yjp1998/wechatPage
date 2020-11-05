class Router {
  constructor() {
    this.routes = {},
      this.length = 0
  }

  go(page) {
    this.routes[this.length] = config[page];
    this.routes[this.length].page = new config[page].component;
    this.length++;
  }

  back() {
    this.routes[this.length - 1].page.destory();
    delete this.routes[this.length - 1];
    this.length--;
  }
}

let router = new Router();
