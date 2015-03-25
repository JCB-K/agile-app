//client only code

Template.main.helpers({
  columns: function(){
    return Columns.find({});
  }
});
Template.list.helpers({
  cards: function () {
    return Cards.find({}, {
      sort: { order: 1 },
    });
  },
  cardsOptions: {
      group: {
        name: 'list',
        put: true
    },
    sort: true,
    onSort: function (event) {
      console.log('Item %s went from #%d to #%d',
          event.data.name, event.oldIndex, event.newIndex
      );
    }
  }
});


