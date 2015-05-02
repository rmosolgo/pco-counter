window.AppPage = React.createClass({
  getStyle() {
    var pageWidth = this.props.width
    var position = this.props.position
    return {
      position: "absolute",
      top: 0,
      left: 0,
      width: pageWidth,
      transform: "translateX(" + (position * pageWidth) + "px)",
      transition: "transform 0.2s ease-in-out",
    }
  },

  render() {
    return (
      <div style={this.getStyle()}>
        {this.props.children}
      </div>
    )
  }
})