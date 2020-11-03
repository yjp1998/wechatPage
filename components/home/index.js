class HomePage extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  create() {
    const temp = this.renderDOM();
    const div = document.createElement('div');
    div.innerHTML = temp;
    div.style.display = 'block';
    document.querySelector('.wechat_btn').style.color = 'green'
    return div;
  }

  init() {
    this.create();
    this.insert();
    this.componentDidMount();
  }

  componentDidMount() {
    document.querySelector('.home_content_chat').addEventListener('click', () => {
      router.go('ChatWindow');
    }, false);
  }
  
  render() {
    return `
    <!-- 主页页面部分 -->
    <div class="home_page">
      <!-- 主页头部 -->
      <div class="header_wrap">
        <div class="home_header">
          <span>微信</span>
          <input type="button" class="iconfont" value="&#xe68a;">
        </div>
      </div>
      <!-- 主页内容 -->
      <div class="home_content">
        <!-- 搜索框 -->
        <input type="text" class="search_input iconfont" placeholder="&#xe602; 搜索" style="font-size: 12px;">
        <!-- 聊天框 -->
        <div class="home_content_chat">
          <div class="chat_profile">
          </div>
          <div class="chat_content">
            <div class="chat_content_name">马云</div>
            <div class="chat_content_text">111</div>
          </div>
          <div class="chat_logo">
            <div class="chat_logo_time">11:42</div>
            <div class="chat_logo_notDisturb"></div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}