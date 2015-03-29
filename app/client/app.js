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

Template.list.rendered = function(){
  this.$('.column ul').sortable({
      connectWith: ".column ul",
      stop: function(e, ui){

          // Dragged element and its siblings in the target
          el = ui.item.get(0);
          before = ui.item.prev().get(0);
          after = ui.item.next().get(0);

          // Column id's from database and from target
          oldColumnId = Blaze.getData(el).column;
          targetColumnId = Blaze.getData(ui.item.parent().get(0)).id;

          // if ids are the same, use old. If they're different, use from target.
          newColumn = oldColumnId == targetColumnId ? oldColumnId : targetColumnId;

          // If it's the first element in the target column
          if(!before) {
              newOrder = Blaze.getData(after).order - 1;
          }
          // If it's the last element in the target column
          else if(!after) {
              newOrder = Blaze.getData(before).order + 1;
          }
          // If it's inbetween 2 cards in the target column
          else{
            newOrder = (Blaze.getData(after).order +
                       Blaze.getData(before).order)/2;
          }

          Cards.update(
            {
              _id: Blaze.getData(el)._id},
              {
                $set:
                {
                  order: newOrder,
                  column : newColumn
                }
            });
      }
  }).disableSelection();
};


