window.AppTotal = React.createClass({
  render() {
    var width = (this.props.value / (this.props.total * 1.0)) * 100
    if (isNaN(width)) { width = 0 }
    return (
      <li>
        <p style={{margin: "8px 0px", textAlign: "center", background: "linear-gradient(to right, #C7DDF0 " + width + "%, #FbFbFb "+ width + "%)"}}>
          {this.props.name} ({this.props.value}, {Math.round(width)}%)
        </p>
      </li>
    )
  }
})
