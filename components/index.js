class TabPages extends Component {
  constructor(props) {
    super(props);
    this.parent = document.querySelector('.stack_container');
    this.init();
  }

  init() {
    this.create();
    this.insert();
  }

  insert() {
    this.parent.appendChild(this.create());
  }

  render() {
    `
    <div class="page">
      <div class="index">
        ${new HomePage()}
        ${new AddressbookPage}
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
    </div>
    `
  }
}