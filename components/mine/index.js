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

  create() {
    const temp = this.renderDOM();
    const div = document.createElement('div');
    div.innerHTML = temp;
    div.className = 'mine_page';
    div.style.display = 'none'
    return div;
  }

  componentDidMount() {

  }
  
  render() {
    return `
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
    `;
  }
}
