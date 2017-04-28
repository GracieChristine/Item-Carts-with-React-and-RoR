var AllItems = React.createClass({

  handleEdit() {

  },

  handleDelete() {
    this.props.handleDelete(id);
  }

  onUpdate(item) {
    this.props.onUpdate(item);
  },

  render() {
    var items = this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <Item item={item}
                      handleEdit={this.handleEdit}
                      handleDelete={this.handleDelete.bind(this, item.id)}/>
        </div>
      )
    });

    return (
      <div>
        {items}
      </div>
    )
  }
});
