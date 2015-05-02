window.App = React.createClass({
  _PAGES: ["Form", "Totals", "Export"],

  componentDidMount: function() {
    this.state.peopleRef.on("value", this._handlePeopleRefChanged)
  },

  componentDidUnmount: function() {
    this.state.peopleRef.off("value", this._handlePeopleRefChanged)
  },

  getInitialState() {
    return {
      page: 'Form',
      peopleRef: new Firebase('https://pco-counter.firebaseio.com/people'),
      pageWidth: document.body.clientWidth,
      peopleData: [],
      appTotals: {},
    }
  },

  isShowing(page) {
    return page == this.state.page
  },

  getPosition(page) {
    return this._PAGES.indexOf(page) - this._PAGES.indexOf(this.state.page)
  },

  render() {
    return (
      <div>
        <AppPage width={this.state.pageWidth} position={this.getPosition("Form")}>
          <Form people={this.state.peopleRef} />
        </AppPage>
        <AppPage width={this.state.pageWidth} position={this.getPosition("Totals")}>
          <Totals appTotals={this.state.appTotals} />
        </AppPage>
        <AppPage width={this.state.pageWidth} position={this.getPosition("Export")}>
          <Export peopleData={this.state.peopleData} peopleRef={this.state.peopleRef}/>
        </AppPage>
        <div className='row' style={{margin: 0, position: "fixed", bottom: 0, width: this.state.pageWidth}}>
          <StateButton
            page='Form'
            isSelected={this.isShowing("Form")}
            onClick={this.handlePageClick.bind(null, "Form")}
          />
          <StateButton
            page='Totals'
            isSelected={this.isShowing("Totals")}
            onClick={this.handlePageClick.bind(null, "Totals")}
          />
          <StateButton
            page='Export'
            isSelected={this.isShowing("Export")}
            onClick={this.handlePageClick.bind(null, "Export")}
          />
        </div>
      </div>
    )
  },

  handlePageClick(page) {
    this.setState({page: page})
  },

  _handlePeopleRefChanged: function(snapshot) {
    var peopleData = snapshot.val()
    this.setState({peopleData: peopleData, appTotals: getCounts(peopleData)})
  }
})

window.StateButton = React.createClass({
  render() {
    return (
      <a
        className={'col sm-4 btn margin-bottom-0 ' + (this.props.isSelected ? 'btn-dark' : 'btn-light')}
        onClick={this.props.onClick}
      >
        {this.props.page}
      </a>
    )
  }
})

function getCounts(people) {
  var apps = {TotalMentions: 0, Conversations: 0}
  var id;
  for (id in people) {
    apps.Conversations += 1
    var personValue = people[id]
    for (name in APPS) {
      var appValue = APPS[name]
      if (hasApp(personValue, appValue)) {
        apps[name] ? null : (apps[name] = 0)
        apps[name] += 1
        apps.TotalMentions += 1
      }
    }
  }
  return apps
}
