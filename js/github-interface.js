var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
  $('.showOwner').empty();
  $('.showRepos').empty();
  $('.details').empty();
  $('#hide').hide();

  $.get('https://api.github.com/users/' + username  + '?access_token=' + apiKey).then(function(response){
    $('.showOwner').append("<h1>" + response.login + "'s Repositories:</h1>");
    $('.showOwner').append("<img src=" + response.avatar_url + ">");
    $('.showOwner').append("<h3> Followers: <h2>" + response.followers + "</h2></h3>" );
    $('.showOwner').append("<h3> Following: <h2>" + response.following + "</h2></h3>" );
    $('.showOwner').append("<h3> # of Public Repos: <h2>" + response.public_repos + "</h2></h3>" );

  $.get('https://api.github.com/users/' + username  + '/repos?access_token=' + apiKey + '&sort=created&per_page=100').then(function(respositories){
    respositories.forEach(function(repo) {
      $('.showRepos').append("<h4><a href=" + repo.html_url + ">" + repo.name + "</a></h4>");
      if (repo.description !== null) {
        $('.showRepos').append("<h6>" + repo.description + "</h6>");
      } else {
        $('.showRepos').append("<h6>No description given.</h6>");
      }
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
    } else {  $('.details').append("<p>This user has not set up a name detail.</p>");
    }

    if (user.location !== null){
      $('.details').append("<p>Location: " + user.location + "</p>");
    } else {
      $('.details').append("<p>This user has not set up a location detail.</p>");
    }

    if (user.blog !== null){
      $('.details').append("<p>Blog: <a href=" + user.blog + ">" + user.blog + "</a></p>");
    } else {
      $('.details').append("<p>This user has not set up a blog link.</p>");
    }

    if (user.company !== null){
      $('.details').append("<p>Company: " + user.company + "</p>");
    } else {
      $('.details').append("<p>This user has not set up a company name.</p>");
    }

    if (user.email !== null){
      $('.details').append("<p> Email: " + user.email + "</p>");
    } else {
      $('.details').append("<p>This user has not set up an email.</p>");
    }

});
};
