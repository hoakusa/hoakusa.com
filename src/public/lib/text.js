window.onload = function() {

  var s = Snap('#svg-opening svg');
  var text = 'hoakusa';
  var len = text.length;
  var array = [];
  for (var x = 0; x < len; x++) {
    var t = text[x]
    array.push(t);
  }
  var txt = s.text(16, 100, array)
  $('tspan').css({
    'font-size': 80,
    'font-family': 'Sorts Mill Goudy, serif',
    'font-style': 'italic',
    fill: 'rgba(62,96,59,0)',
    stroke: '#3E603B',
    'stroke-dasharray': 300,
    'stroke-dashoffset': 300
  })

  $('tspan').each(function(index) {
    $(this).stop(true, true).delay(350 * index).animate({
      'stroke-dashoffset': 0,
    }, 400, function() {
      $(this).css({'fill': 'rgba(62,96,59, 1)', 'transition': 'fill 0.5s'});
    })
  })
}