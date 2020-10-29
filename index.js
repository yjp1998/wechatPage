import './Component/Component';
import './Component/home'
import './Component/addressBook'
import './Component/find'
import './Component/mine'

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
    const cur = this.routes[this.length - 1];
    this.routes[this.length - 1].page.destory();
    
    this.length--;
  }
}
let changePage = function () {
  document.querySelector('.wechat_btn').addEventListener('click', () => {
    for (let i = 0; i < document.querySelector('.home_container').childNodes.length; i++) {
      document.querySelector('.home_container').childNodes[i].style.display = 'none';
      document.querySelector('.home_container').childNodes[0].style.display = 'block';
    }
  }, false)
  document.querySelector('.addressBook_btn').addEventListener('click', () => {
    for (let i = 0; i < document.querySelector('.home_container').childNodes.length; i++) {
      document.querySelector('.home_container').childNodes[i].style.display = 'none';
      document.querySelector('.home_container').childNodes[1].style.display = 'block';
    }
  }, false)
};
changePage();
