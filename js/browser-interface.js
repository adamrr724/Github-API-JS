var getRepos = require('./../js/github-interface.js').getRepos;
var getDetails = require('./../js/github-interface.js').getDetails;


$(document).ready(function(){
  $('#getRepos').click(function(event){
    event.preventDefault();

    repository = $('#repository').val();
    getRepos(repository);

    $('#details').show();
    });

  $('#details').click(function(event){
    event.preventDefault();

    repository = $('#repository').val();
    getDetails(repository);

    $('.details').show();
    $('#details').hide();
    $('#hide').show();

    });

  $('#hide').click(function(event){
    event.preventDefault();

    $('.details').hide();
    $('#details').show();
    $('#hide').hide();
    });
  });
