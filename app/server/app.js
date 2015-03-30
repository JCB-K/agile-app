//server only code

Meteor.startup(function () {
  if (Cards.find().count() === 0) {
    var items = [
      {title: "Reduce file size", description: "The app is over 6mb right now, that isn't fun on a 3g connection. We need to reduce that.", order: 0.5, column: 1},
      {title: "Test on Internet Explorer", description: "We haven't tested the app on IE yet. We also need to decide how which IE versions we will support.", order: 1, column: 1},
      {title: "User-defined columns", description: "A cool feature would be to let users define their own columns, instead of being stuck with idea/doing/done", order: 2, column: 1},
      {title: "Inline editing", description: "after creating a card the user should be able to edit the title and description, preferably inline", order: 1, column: 2},
      {title: "Reordering", description: "The user should be able to reorder items in each column, to indicate priority", order: 1, column: 3}
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