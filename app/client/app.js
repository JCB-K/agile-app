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
  }
});


