class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.init();
  }
  init() {
    this.create();
    this.insert();
    this.componentDidMount();
  }
  
  create() {
    const temp = this.renderDOM();
    const div = document.createElement('div');
    div.innerHTML = temp;
    div.className = 'chat_page inSlide'
    return div;
  }

  insert() {
    this.parent.appendChild(this.create());
  }

  destory() {
    const chat_page = document.querySelector('.chat_page');
    this.parent.removeChild(chat_page);
  }

  componentDidMount() {
    document.querySelector('.chat_top_backButton').addEventListener('click', () => {
      router.back();
    });
    document.querySelector('.chat_dialog_profile').addEventListener('click', () => {
      router.go('FdInfo');
    })
  }

  render() {
    return `
      <div class="chat_top">
        <input type="button" class="chat_top_backButton  iconfont" value="&#xe611;" onclick="window.history.go(-1)">
        <span class="chat_top_name">马云</span>
        <input type="button" class="chat_top_moreButton  iconfont" value="&#xe627;">
      </div>
      <div class="chat_center">
        <div class="chat_info">
          <div class="chat_dialog_profile" href="#/home/chatWindow/fdInfo"></div>
          <div class="chat_dialog_content">
            <span>你好，很高兴认识你！</span>
          </div>
        </div>
      </div>
      <div class="chat_bottom">
        <div class="chat_bottom_item">
          <input class="iconfont" type="button" value="&#xe805;">
        </div>
        <div class="chat_bottom-item chat_bottom_item_text">
          <input type="text">
        </div>
        <div class="chat_bottom_item">
          <input class="iconfont" type="button" value="&#xe60b;">
        </div>
        <div class="chat_bottom_item">
          <input class="iconfont" type="button" value="&#xe68a;">
        </div>
      </div>
    `
  }
}