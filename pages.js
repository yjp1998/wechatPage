let homePage = `
  <!-- 微信页面部分 -->
  <div class="tab_page wechat_content">
    <!-- 微信头部 -->
    <div class="tab_page_header_wrap">
      <div class="tab_page_header">
        <span>微信</span>
        <input type="button" class="iconfont" value="&#xe68a;">
      </div>
    </div>
    <!-- 微信内容 -->
    <div class="tab_page_content">
      <!-- 搜索框 -->
      <div class="tab_page_content_search">
        <input type="text" class="search_input iconfont" placeholder="&#xe602; 搜索" style="font-size: 12px;">
      </div>
      <!-- 聊天框 -->
      <a class="tab_page_content_chat" href="#/home/chatWindow">
        <div class="chat_profile">
        </div>
        <div class="chat_content">
          <div class="chat_content_name">马云</div>
          <div class="chat_content_text">111</div>
        </div>
      </a>
    </div>
  </div>
`;
let addressBookPage = `
  <div class="tab_page addressBook_content">
     <!-- 通讯录页面头部 -->
     <div class="tab_page_header_wrap">
         <div class="tab_page_header">
         <span>通讯录</span>
         <input type="button" class="iconfont" value="&#xe628;">
         </div>
     </div>
     <!-- 通讯录页面内容 -->
     <div class="tab_page_content">
         <!-- 搜索框 -->
         <div class="tab_page_content_search">
         <input type="text" class="search_input iconfont" placeholder="&#xe602; 搜索" style="font-size: 12px;">
         </div>
         <!-- 功能框 -->
         <div class="addressBook_item">
         <div class="addressBook_item_content">
             <div class="item_content_img newFriend"></div>
             <div class="item_content_text">新的朋友</div>
         </div>
         <div class="addressBook_item_content">
             <div class="item_content_img group"></div>
             <div class="item_content_text">群聊</div>
         </div>
         <div class="addressBook_item_content">
             <div class="item_content_img tag"></div>
             <div class="item_content_text">标签</div>
         </div>
         <div class="addressBook_item_content">
             <div class="item_content_img officialAccount"></div>
             <div class="item_content_text">公众号</div>
         </div>
         </div>
     </div>
  </div>
  `;
let findPage = `
  <!-- 发现页面部分 -->
                    <div class="tab_page find_content">
                    <!-- 发现页面头部 -->
                    <div class="tab_page_header_wrap">
                        <div class="tab_page_header">
                        <span>发现</span>
                        </div>
                    </div>
                    <!-- 发现页面内容 -->
                    <div class="tab_page_content">
                        <div class="find_item">
                        <div class="find_item_content iconfont">
                            <span class="iconfont">&#xe667;</span>
                            <span>朋友圈</span>
                            <span class="iconfont">&#xe612;</span>
                        </div>
                        <div class="find_item_content iconfont">
                            <span class="iconfont">&#xe69e;</span>
                            <span>游戏</span>
                            <span class="iconfont">&#xe612;</span>
                        </div>
                        </div>
                    </div>
                </div>
                `;
let minePage = `
  <!-- 我页面部分 -->
  <div class="tab_page mine_content">
      <!-- 我页面头部 -->
      <div class="tab_page_mine_header">
          <input type="button" class="top-button iconfont" value="&#xeb48;" style="font-size: 20px;">
      </div>
      <!-- 我页面内容 -->
      <!-- 我页面个人部分 -->
      <div class="tab_page_content">
          <div class="mine_personal_content">
              <span class="mine_personal_content_Selfie"></span>
              <span>一个pen</span>
              <span>微信号：123456789</span>
              <span class="iconfont">&#xeb4a;</span>
              <span class="iconfont">&#xe612;</span>
          </div>
          <!-- 我页面支付部分 -->
          <div class="mine_payment_content">
              <span class="iconfont">&#xe634;</span>
              <span>支付</span>
              <span class="iconfont">&#xe612;</span>
          </div>
          <!-- 我页面生活部分 -->
          <div class="mine_life_content">
          <div class="mine_life_content_item">
              <span class="iconfont">&#xe60a;</span>
              <span>收藏</span>
              <span class="iconfont">&#xe612;</span>
          </div>
          <div class="mine_life_content_item">
              <span class="iconfont">&#xe621;</span>
              <span>相册</span>
              <span class="iconfont">&#xe612;</span>
          </div>
          <div class="mine_life_content_item">
              <span class="iconfont">&#xeb49;</span>
              <span>卡包</span>
              <span class="iconfont">&#xe612;</span>
          </div>
          <div class="mine_life_content_item">
              <span class="iconfont">&#xe60b;</span>
              <span>表情</span>
              <span class="iconfont">&#xe612;</span>
          </div>
          </div>
          <!-- 我页面设置部分 -->
          <div class="mine_setting_content">
              <span class="iconfont">&#xe606;</span>
              <span>设置</span>
              <span class="iconfont">&#xe612;</span>
          </div>
      </div>
  </div>
  `;
let chatWindowPage = `
  <div class="chat_part">
    <div class="chat_top">
      <input type="button" class="chat_top_backButton top_backButton iconfont" value="&#xe611;" onclick="window.history.go(-1)">
        马云
      <input type="button" class="chat_top_moreButton top_moreButton iconfont" value="&#xe627;">
    </div>
    <div class="chat_center_wrap">
      <div class="chat_center">
        <div class="chat_info">
          <a class="chat_dialog_profile" href="#/home/chatWindow/fdInfo"></a>
          <div class="chat_dialog_content">
            <span>你好，很高兴认识你！</span>
          </div>
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
  `;

let fdInfoPage =`
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
  `;
