$(document).ready(function() {
  // Set instance
  var instanceBigfish = $('#weborama-bigfish--galery').Chocolat({}).data('chocolat');

  // Lipi start at click
  $('#weborama-bigfish').off().on('click', function() {
    instanceBigfish.api().open();
  })

  // Set instance
  var instanceLipi = $('#lipi-app--galery').Chocolat({
    loop: true
  }).data('chocolat');

  // Lipi start at click
  $('#lipi-app').off().on('click', function() {
    instanceLipi.api().open();
  })

  // Set instance
  var instanceFood = $('#food-app--galery').Chocolat({
    loop: true
  }).data('chocolat');

  // Lipi start at click
  $('#food-app').off().on('click', function() {
    instanceFood.api().open();
  })

  // Set instance
  var instancePIDC = $('#pidc-app--galery').Chocolat({
    loop: true
  }).data('chocolat');

  // Lipi start at click
  $('#pidc-app').off().on('click', function() {
    instancePIDC.api().open();
  })
});
