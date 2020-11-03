const config = {
  Home: {
    title: 'home',
    component: HomePage,
    page: null
  },
  AddressBook: {
    title: 'addressBook',
    component: AddressBookPage,
    page: null
  },
  Find: {
    title: 'find',
    component: FindPage,
    page: null
  },
  Mine: {
    title: 'mine',
    component: MinePage,
    page: null
  },
  ChatWindow: {
    title: 'chatWindow',
    component: ChatWindow,
    page: null
  },
  FdInfo: {
    title: 'fdInfo',
    component: FdInfoPage,
    page: null
  }
}

let homePage = new HomePage();
let addressBookPage = new AddressBookPage();
let findPage = new FindPage();
let minePage = new MinePage()
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

function changePage() {
  const tabs = document.querySelector('.tabs');
  let btns = Array.from(tabs.querySelectorAll('.btn'));
  let pages = Array.from(document.querySelector('.page_container').childNodes)
  btns.map((item, index) => {
    item.addEventListener('click', function(e) {
      for(let i = 0; i < e.currentTarget.parentNode.children.length; i++) {
        e.currentTarget.parentNode.children[i].style.color = ''
        document.querySelector('.page_container').children[i].style.display = 'none';
      }
      e.currentTarget.style.color = 'green';
      document.querySelector('.page_container').children[index].style.display = 'block';
    })
  })
}

let router = new Router();
changePage()