window.AppButton = React.createClass({
  render() {
    return (
      <div onClick={this.props.onClick} onTouchStart={this.props.onClick}>
        <h4
          className={'btn ' + (this.props.checked ? '' : 'btn-light')}
          style={{width: "90%", padding: '5px 10px', margin: "5px 20px"}}
        >
          {this.props.children}
        </h4>
      </div>
    )
  },
})