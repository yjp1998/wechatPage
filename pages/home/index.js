class Home extends Component {
  constructor() {
    super();
    this.name = 'tab_pages';
    this.init();
  }

  init() {
    this.create();
    this.changePage();
    this.interChat();
  }

  // 切换页面
  changePage() {
    const tabs = document.querySelector('.tabs');
    let btns = Array.from(tabs.querySelectorAll('.btn'));
    btns[0].style.color = 'green';
    btns.map((item, index) => {
      item.addEventListener('click', function(e) {
        for(let i = 0; i < e.currentTarget.parentNode.children.length; i++) {
          e.currentTarget.parentNode.children[i].style.color = '';
          document.querySelector('.index').children[i].style.display = 'none';
        }
        e.currentTarget.style.color = 'green';
        document.querySelector('.index').children[index].style.display = 'block';
      })
    })
  }

  // 进入聊天页面
  interChat() {
    document.querySelector('.home_content_chat').addEventListener('click', () => {
      router.go('Chat');
    })
  }

  render() {
    return `
      <div class="index">
        ${new Main().render()}
        ${new Addressbook().render()}
        ${new Find().render()}
        ${new Mine().render()}
      </div>
      <div class="tabs">
        <div class="btn wechat_btn">
          <span class="iconfont">&#xe65d;</span>
          <span>微信</span>
        </div>
        <div class="btn addressBook_btn">
          <span class="iconfont">&#xe7d3;</span>
          <span>通讯录</a>
        </div>
        <div class="btn find_btn">
          <span class="iconfont">&#xe636;</span>
          <span>发现</span>
        </div>
        <div class="btn mine_btn">
          <span class="iconfont">&#xe626;</span>
          <span>我</span>
        </div>
      </div>
    `
  }
}