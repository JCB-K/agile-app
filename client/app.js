//client only code

Template.main.helpers({
  columns: function(){
    return Columns.find({});
  }
});
Template.list.helpers({
  cards: function () {
    return Cards.find({column: this.valueOf().id}, {
      sort: { order: 1 },
    });
  },
  cardsOptions: {
      group: {
        name: "cards",
        put: true,
        pull: true
    },
    sort: true,
    onAdd : function(/**Event*/event) {
      console.log(event.data._id);
      delete event.data._id;
      event.data.column = 1;
    }
  }
});


