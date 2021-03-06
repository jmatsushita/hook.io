var df = require('dateformat');

module['exports'] = function view (opts, callback) {

  var self = this, $ = this.$;

  function appendPost (post) {
    var getData = new Function(post.$('.data').html() + ' return data;');
    var data = getData();
    $('.posts').prepend('<li>' + df(new Date(data.date), "mm/dd") + ' - <a href="' + data.url + '">' + data.title + '</a></li>');
  };

  var posts = [
    'the-monolith-versus-the-microservice-a-tale-of-two-applications',
    'new-multi-language-support',
    'hook-in-your-language',
    'role-based-access-control',
    'websocket-hooks'
  ];

  posts.forEach(function(p){
    var post = self.parent[p];
    appendPost(post);
  });

  callback(null, $.html());
};

// cache this page indefintely
module['exports'].cache = 0;