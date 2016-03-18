var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
  $('.showOwner').empty();
  $('.showRepos').empty();

  $.get('https://api.github.com/users/' + username  + '?access_token=' + apiKey).then(function(response){
    $('.showOwner').append("<h1>" + response.login + "'s Repositories:</h1>");

  $.get('https://api.github.com/users/' + username  + '/repos?access_token=' + apiKey).then(function(respositories){
    respositories.forEach(function(repo) {
      $('.showRepos').append("<h4><a href=" + repo.html_url + ">" + repo.name + "</a></h4>");
    });
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
};

exports.getDetails = function(username) {
  $('.details').empty();

  $.get('https://api.github.com/users/' + username  + '?access_token=' + apiKey).then(function(user){
    console.log(user);

    if (user.name !== null){
      $('.details').append("<p>Name: " + user.name + "</p>");
    } else {  $('.details').append("This user has not set up a name detail.<br>");
    }

    if (user.location !== null){
      $('.details').append("<p>Location: " + user.location + "</p>");
    } else {
      $('.details').append("This user has not set up a location detail.<br>");
    }

    if (user.blog !== null){
      $('.details').append("<p>Blog: <a href=" + user.blog + ">" + user.blog + "</a></p>");
    } else {
      $('.details').append("This user has not set up a blog link.<br>");
    }

    if (user.company !== null){
      $('.details').append("<p>Company: " + user.company + "</p>");
    } else {
      $('.details').append("This user has not set up a company name.<br>");
    }

    if (user.email !== null){
      $('.details').append("<p> Email: " + user.email + "</p>");
    } else {
      $('.details').append("This user has not set up an email.<br>");
    }

});
};
