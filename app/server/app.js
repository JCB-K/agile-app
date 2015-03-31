//server only code

Meteor.startup(function () {
  if (Cards.find().count() === 0) {
    var items = [
      {title: "Welcome to your new agile board!", description: "Get started by adding a card using the form above.", order: 0.5, column: 1},
      {title: "Dragging", description: "When you've created a few cards, you can get started on one by dragging it to the next column.", order: 1, column: 1},
      {title: "Editing a card", description: "If you're not satisfied with a description, you can edit it by opening the card and clicking the description. You could fix this speling eror for example.", order: 2, column: 2},
      {title: "Finished with a card?", description: "When you're finished with a card, you can drag it to this column,", order: 1, column: 3},
      ];
    _.each(items, function (item) {
      Cards.insert({
        title: item.title,
        order: item.order,
        description: item.description,
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