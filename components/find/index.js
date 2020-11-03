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
      <div class="header_wrap">
        <div class="find_header">
          <span>发现</span>
        </div>
      </div>
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