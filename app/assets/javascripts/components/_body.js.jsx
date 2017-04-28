var Body = React.createClass({
  getInitialState() {
    return {
      items: []
    }
  },

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => {
      this.setState({
        items: response
      })
    });
  },

  handleClick(item) {
    var newState = this.state.items.concat(item);
    this.setState({
      items: newState
    })
  },

  handleUpdate(item) {(
    $.ajax({
      url: `/api/v1/items/${item.id}`,
      type: 'PUT',
      data: {
        item: item
      },
      success: () => {
        this.updateItem(item);
      }
    })
  )},

  updateItems(item) {
    var items = this.state.items.filter((i) => {
      return i.id != item.id
    });

    items.push(item);

    this.setState({
      items: items
    });
  },

  handleDelete() {
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'Delete',
      success: () => {
        this.removeItemClient(id);
      }
    });
  },

  removeItemClient(id) {
    var newItems = this.state.items.filter((item) => {
      return item.id != id;
    });

    this.setState({
      items: newItems
    });
  }

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit}/>
        <AllItems items={this.state.items} onUpdate={this.handleUpdate}  handleDelete={this.handleDelete}/>
      </div>
    )
  }
});
