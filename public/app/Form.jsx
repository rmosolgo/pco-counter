window.Form = React.createClass({
  getInitialState() {
    return {
      value: 0,
    }
  },

  hasApp(app) {
    return hasApp(this.state.value, app)
  },

  render() {
    return (
      <div style={{margin: "10px auto"}}>
        <h3 style={{margin: "5px 20px"}}>Talked about?</h3>
          <AppButton
            checked={this.hasApp(APPS.CheckIns)}
            onClick={this.handleToggleApp(APPS.CheckIns)}
          >
            Check-Ins
          </AppButton>
          <AppButton
            checked={this.hasApp(APPS.Registrations)}
            onClick={this.handleToggleApp(APPS.Registrations)}
          >
            Registrations
          </AppButton>
          <AppButton
            checked={this.hasApp(APPS.People)}
            onClick={this.handleToggleApp(APPS.People)}
          >
            People
          </AppButton>
          <AppButton
            checked={this.hasApp(APPS.Services)}
            onClick={this.handleToggleApp(APPS.Services)}
          >
            Services
          </AppButton>
          <AppButton
            checked={this.hasApp(APPS.Giving)}
            onClick={this.handleToggleApp(APPS.Giving)}
          >
            Giving
          </AppButton>
          <AppButton
            checked={this.hasApp(APPS.Resources)}
            onClick={this.handleToggleApp(APPS.Resources)}
          >
            Resources
          </AppButton>
          <AppButton
            checked={this.hasApp(APPS.AlreadyServices)}
            onClick={this.handleToggleApp(APPS.AlreadyServices)}
          >
            Already Services User
          </AppButton>
          <p>
            <a
              className='btn btn-success'
              onClick={this.handleSave}
              style={{margin: 20, padding: "5px 10px"}}
            >
              {this.state.saving ? "Saving..." : "Save"}
            </a>
          </p>
      </div>
    )
  },

  handleToggleApp: function(app) {
    return this.toggleApp.bind(null, app)
  },

  toggleApp: function(app, ev) {
    ev.preventDefault()
    var newValue;
    var appValue = 1 << app
    if (this.hasApp(app)) {
      newValue = this.state.value - appValue
    } else {
      newValue = this.state.value + appValue
    }
    this.setState({value: newValue})
  },

  handleSave: function(ev) {
    if (this.state.saving || this.state.value === 0) { return }

    var _this = this
    this.setState({saving: true})
    this.props.people.push(this.state.value, function() {
      _this.setState({value: 0, saving: false})
    })
  }
})