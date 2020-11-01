class Component {
  constructor(parent) {
    this.parent = document.querySelector('.home_container');
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

  destory() {
    this.parent.removeChild();
  }

  renderDOM() {
    return this.render()
  }
}

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
        <div class="home_header">
          <span>微信</span>
          <input type="button" class="iconfont" value="&#xe68a;">
        </div>
        <div class="fixed_box"></div>
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
        </div>
      </div>
    </div>
    `;
  }
}

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
      <div class="addressbook_header">
        <span>通讯录</span>
        <input type="button" class="iconfont" value="&#xe628;">
      </div>
      <div class="fixed_box"></div>
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

class FindPage extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.create();
    this.insert();
    this.componentDidMount();
  }

  componentDidMount() {
  }
  
  render() {
    return `
    <!-- 发现页面部分 -->
    <div class="find_page">
      <!-- 发现页面头部 -->
      <div class="find_header">
        <span>发现</span>
      </div>
      <div class="fixed_box"></div>
      <!-- 发现页面内容 -->
      <div class="find_content">
        <div class="find_item_content">
          <span class="iconfont">&#xe667;</span>
          <span>朋友圈</span>
          <span class="iconfont">&#xe612;</span>
        </div>
        <div class="find_item_content">
          <span class="iconfont">&#xe69e;</span>
          <span>游戏</span>
          <span class="iconfont">&#xe612;</span>
        </div>
      </div>
    </div>
    `;
  }
}

class MinePage extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.create();
    this.insert();
    this.componentDidMount();
  }

  componentDidMount() {

  }
  
  render() {
    return `
    <!-- 我页面部分 -->
    <div class="mine_page">
      <!-- 我页面头部 -->
      <div class="mine_header">
        <input type="button" class="top-button iconfont" value="&#xeb48;" style="font-size: 20px;">
      </div>
      <!-- 我页面内容 -->
      <!-- 我页面个人部分 -->
      <div class="mine">
        <div class="mine_personal">
          <!-- 我页面个人头像部分 -->
          <div class="mine_personal_selfie"></div>
          <!-- 我页面个人资料部分 -->
          <div class="mine_personal_text">
            <span>一个pen</span>
            <span>微信号：123456789</span>
          </div>
          <!-- 我页面个人图标部分 -->
          <div class="mine_personal_img">
            <span class="iconfont">&#xeb4a;</span>
            <span class="iconfont">&#xe612;</span>
          </div>
        </div>
        <!-- 我页面支付部分 -->
        <div class="mine_payment">
          <span class="iconfont">&#xe634;</span>
          <span>支付</span>
          <span class="iconfont">&#xe612;</span>
        </div>
        <!-- 我页面生活部分 -->
        <div class="mine_life">
          <div class="mine_life_item">
            <span class="iconfont">&#xe60a;</span>
            <span>收藏</span>
            <span class="iconfont">&#xe612;</span>
          </div>
          <div class="mine_life_item">
            <span class="iconfont">&#xe621;</span>
            <span>相册</span>
            <span class="iconfont">&#xe612;</span>
          </div>
          <div class="mine_life_item">
            <span class="iconfont">&#xeb49;</span>
            <span>卡包</span>
            <span class="iconfont">&#xe612;</span>
          </div>
          <div class="mine_life_item">
            <span class="iconfont">&#xe60b;</span>
            <span>表情</span>
            <span class="iconfont">&#xe612;</span>
          </div>
        </div>
        <!-- 我页面设置部分 -->
        <div class="mine_setting">
          <span class="iconfont">&#xe606;</span>
          <span>设置</span>
          <span class="iconfont">&#xe612;</span>
        </div>
      </div>
    </div>
    `;
  }
}

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
    return div;
  }
  
  destory() {
    // this.create().setAttribute('class', 'outSlide')
    this.parent.removeChild(this.parent.lastChild);
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
	<div class="chat_page">
		<div class="chat_top">
			<input type="button" class="chat_top_backButton top_backButton iconfont" value="&#xe611;" onclick="window.history.go(-1)">
				马云
			<input type="button" class="chat_top_moreButton top_moreButton iconfont" value="&#xe627;">
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
	</div>  
    `
  }
}

class FdInfoPage extends Component {
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
    return div;
  }
  
  destory() {
    this.parent.removeChild(this.parent.lastChild)
  }

  componentDidMount() {
    document.querySelector('.fd_info_top_backButton').addEventListener('click', () => {
      router.back();
    });
  }

  render() {
    return `
    <div class="fd_info_part">
      <div class="fd_info_top">
        <div class="fd_info_top_btnPart" style="border-bottom: none;">
          <input type="button" class="fd_info_top_backButton top_backButton iconfont backChat" value="&#xe611;"
            style="font-size: 20px;" onclick="window.history.go(-1)">
          <input type="button" class="fd_info_top_moreButton top_moreButton iconfont" value="&#xe627;"
            style="font-size: 20px;">
        </div>
        <div class="fd_info_top_introducePart">
          <div class="fd_info_top_introducePart_profile"></div>
          <div class="fd_info_top_introducePart_textIntroduce">
            <span>马云</span>
            <span>昵称: mayun</span>
            <span>微信号: 马云</span>
            <span>地区: 中国</span>
          </div>
        </div>
        <div class="fd_info_top_tagPart">备注和标签</div>
        <div class="fd_info_top_limitPart">朋友权限</div>
      </div>
      <div class="fd_info_center">
        <div class="fd_info_center_item">
          朋友圈
          <span class="iconfont">&#xe612;</span>
        </div>
        <div class="fd_info_center_item">
          更多信息
          <span class="iconfont">&#xe612;</span>
        </div>
      </div>
      <div class="fd_info_bottom">
        <div class="fd_info_bottom_sendMessage backChat">
          <span class="iconfont">&#xe65d;</span>
          发消息
        </div>
        <div class="fd_info_bottom_video">
          <span class="iconfont">&#xe71f;</span>
          音视频通话
        </div>
      </div>
    </div>
    `
  }
}