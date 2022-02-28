$(function() {
  $('#type_of_packaging_select').change(function(){
    if($('#type_of_packaging_select').val() == 'Прочее') {
      $('#type_of_packaging_wrapper').empty();
      $('#type_of_packaging_wrapper').append(`
        <input name="type_of_packaging" id="type_of_packaging_input" type="text" class="form-input">
        <label class="placelabel">Тип упаковки</label>
      `);

      $('#type_of_packaging_input').focus(function() {
        $('#type_of_packaging_wrapper').addClass('focused')
      });

      $('#type_of_packaging_input').blur(function() {
        if (!$('#type_of_packaging_input').val().length) {
          $('#type_of_packaging_wrapper').removeClass('focused')
        }
      });
    }
  });

  $('#type_of_inspection_select').change(function(){
    if($('#type_of_inspection_select').val() == 'Прочее') {
      $('#type_of_inspection_wrapper').empty();
      $('#type_of_inspection_wrapper').append(`
        <input name="type_of_inspection" id="type_of_inspection_input" type="text" class="form-input">
        <label class="placelabel">Вид досмотра</label>
      `);

      $('#type_of_inspection_input').focus(function() {
        $('#type_of_inspection_wrapper').addClass('focused')
      });

      $('#type_of_inspection_input').blur(function() {
        if (!$('#type_of_inspection_input').val().length) {
          $('#type_of_inspection_wrapper').removeClass('focused')
        }
      });
    }
  });
});