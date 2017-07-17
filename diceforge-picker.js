function randIndex(len) {
  return Math.floor(Math.random() * len);
}

function doRandomize(evt) {
  $(".circled_over").hide()
  $(".card_thumb").addClass("disabled")
  $("#supply tbody tr").each(function(i, el) {
    let possible_cards = $( this ).find("td:not(.na)")
    let n = randIndex(possible_cards.length)
    possible_cards.eq(n).find(".circled_over").show()
    possible_cards.eq(n).removeClass("disabled")
  })
}

$(document).ready(function() {
  $(".card_thumb").append("<div class='circled_over' style='display:none'>&nbsp</div>")
  $("#randomize").on("click", doRandomize)
})
