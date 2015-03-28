//server only code

Meteor.startup(function () {
  if (Cards.find().count() === 0) {
    var items = [
      {title: "First Card", order: 1, column: 1},
      {title: "2nd card", order: 2, column: 1},
      {title: "3rd card", order: 1, column: 2},
      {title: "4th card", order: 1, column: 3}
      ];
    _.each(items, function (item) {
      Cards.insert({
        title: item.title,
        order: item.order,
        description: "lorem ipsum",
        createdAt: new Date(),
        column: item.column
      });
    });
  }
  if (Columns.find().count() === 0) {
    var items = [{title: "Idea", id: 1}, {title: "Doing", id: 2}, {title: "Done", id: 3}];
    _.each(items, function (item) {
      Columns.insert({
        title: item.title,
        id: item.id
      });
    });
  }
});