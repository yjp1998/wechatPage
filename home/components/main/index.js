class Main {
  constructor(props) {
    this.parent = document.querySelector('.index');
  }

  render() {
    return `
    <div class="home_page defaultBlock">
      <!-- 主页头部 -->
      <div class="home_header">
        <span>微信</span>
        <input type="button" class="iconfont" value="&#xe68a;">
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
            <div class="chat_content_up">
              <div class="chat_content_name">马云</div>
              <div class="chat_content_time">11:42</div>
            </div>
            <div class="chat_content_down">
              <div class="chat_content_text">111</div>
              <div class="chat_content_logo"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

