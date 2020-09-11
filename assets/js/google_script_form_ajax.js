var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxunSvWyZe2ZWSy6LhVPQKnoNKfqZ8DDZBbR4RJi0SqqLOE0GIU/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})