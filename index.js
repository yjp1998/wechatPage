const config = {
  Home: {
    title: 'home',
    component: Home,
    page: null
  },
  Chat: {
    title: 'chat',
    component: Chat,
    page: null
  },
  FdInfo: {
    title: 'fdInfo',
    component: FdInfo,
    page: null
  }
}

class Router {
  constructor() {
    this.routes = {},
      this.length = 0;
  }

  go(page) {
    if(page === 'Home') {
      this.routes[this.length] = config[page];
      this.routes[this.length].page = new config[page].component;
      this.length++;
    } else {
      this.routes[this.length] = config[page];
      this.routes[this.length].page = new config[page].component;
      this.routes[this.length].page.div.previousSibling.classList.add('out_left');
      this.routes[this.length].page.div.classList.add('in_right');
      setTimeout(() => {
        this.routes[this.length - 2].page.div.classList.remove('out_left');
        this.routes[this.length - 1].page.div.classList.remove('in_right');
      }, 710);
      this.length++;
    }

  }

  back() {
    this.routes[this.length - 2].page.div.classList.add('in_left');
    this.routes[this.length - 1].page.div.classList.add('out_right');
    setTimeout(() => {
      this.routes[this.length - 1].page.destory();
      this.routes[this.length - 2].page.div.classList.remove('in_left');
      delete this.routes[this.length - 1];
      this.length--;
    }, 710);
  }
}


let router = new Router();
router.go('Home');
