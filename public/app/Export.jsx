window.Export = React.createClass({
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.peopleData !== this.props.peopleData) {
      return true
    } else {
      return false
    }
  },

  getCSVURI() {
    var peopleValues = []
    var id

    for (id in this.props.peopleData) {
      peopleValues.push(this.props.peopleData[id])
    }

    return "data:text/csv;charset=utf-8," + prepareCSV(peopleValues)
  },

  render() {
    return (
      <div style={{padding: 10}}>
        <h3>Export</h3>
        <a className='btn btn-success block btn-lg' href={this.getCSVURI()} download="counter-export.csv">
          download CSV
        </a>
        <h3 style={{marginTop: 80}}> Clear Data </h3>
        <a className='btn btn-lg block btn-error' onClick={this.handleClearClick}>
          clear all data
        </a>
      </div>
    )
  },

  handleClearClick() {
    if (confirm("are you sure you want to remove all data?")) {
      this.props.peopleRef.remove()
    }
  }
})

function prepareCSV(peopleValues) {
  var appNames = Object.keys(APPS)
  var header = "person," + appNames.join(",")

  var peopleRows = peopleValues.map(function(person, idx) {
    var appValues = appNames.map(function(appName) { return hasApp(person, APPS[appName])})
    return [idx].concat(appValues).join(",")
  })

  var rows = [header].concat(peopleRows)
  return encodeURIComponent(rows.join("\n"))
}