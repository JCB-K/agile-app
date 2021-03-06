//code shared between client and server

Cards = new Mongo.Collection("cards");
Columns = new Mongo.Collection("columns");

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('columns');
});

Router.route('/card/:_id', function () {
  var card = Cards.findOne({_id: this.params._id});
  this.render('card', {data: card});
});