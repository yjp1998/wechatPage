class AddressBookPage extends Component {
  constructor(props) {
    super(props);
    this.init()
  }

  init() {
    this.create();
    this.insert()
  }

  render() {
    return `
    <!-- 通讯录页面 -->
    <div class="addressbook_page">
      <!-- 通讯录页面头部 -->
      <div class="header_wrap">
        <div class="addressbook_header">
          <span>通讯录</span>
          <input type="button" class="iconfont" value="&#xe628;">
        </div>
      </div>
      <!-- 通讯录页面内容 -->
      <div class="addressbook_content">
        <!-- 搜索框 -->
        <input type="text" class="search_input iconfont" placeholder="&#xe602; 搜索" style="font-size: 12px;">
        <!-- 功能框 -->
        <div class="addressbook_item_content">
          <div class="item_content_img newFriend"></div>
          <div class="item_content_text">新的朋友</div>
        </div>
        <div class="addressbook_item_content">
          <div class="item_content_img group"></div>
          <div class="item_content_text">群聊</div>
        </div>
        <div class="addressbook_item_content">
          <div class="item_content_img tag"></div>
          <div class="item_content_text">标签</div>
        </div>
        <div class="addressbook_item_content">
          <div class="item_content_img officialAccount"></div>
          <div class="item_content_text">公众号</div>
        </div>
      </div>
    </div>
    `;
  }
}

