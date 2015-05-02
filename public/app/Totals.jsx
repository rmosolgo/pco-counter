window.Totals = React.createClass({
  render() {
    var appTotals = this.props.appTotals
    var apps = []
    for (name in appTotals) {
      if (["Conversations", "TotalMentions"].indexOf(name) === -1) {
        apps.push(<AppTotal
          key={name}
          name={name}
          value={appTotals[name]}
          total={appTotals.Conversations} />)
      }
    }

    apps.sort(function(a, b) { return a.props.value < b.props.value ? 1 : -1})

    return (
      <div style={{margin: "5px 20px"}}>
        <h3>{appTotals.Conversations} Conversations</h3>
        <p>{appTotals.TotalMentions} total mentions</p>
        <ul className='unstyled'>
          {apps}
        </ul>
      </div>
    )
  }
})