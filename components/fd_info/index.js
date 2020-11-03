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