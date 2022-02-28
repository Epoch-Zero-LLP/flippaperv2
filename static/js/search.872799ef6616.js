$(document).ready(function () {

    $("button[name='srch']").on('click',function() {
	    var qrry = $("input[name='qrry']").val();
        var res_div = $("#results")
        var is_eng = (window.location.href.split('/').indexOf("en") != -1)? true:false
	    $.ajax({
          url: '/search/',
          data: {
                'q': qrry,
                'is_eng': is_eng
                },
          success: function(data) {
                var sub_res = ''
                var resp_data = JSON.parse(data)
                res_div.css('display', 'block')
                res_div.empty()
                if (resp_data.result.results) {
                    $.each(resp_data.result.results, function(key, item) {
                        var cur_id = 'search__result_' + key;
                        res_div.append($('<div></div>').attr('class', 'search__result').attr('id', cur_id))
                        var sub_res = $('#' + cur_id)
                        sub_res.append($('<a></a>').attr('class', 'search__result-head').attr('href', item.url).text(item.title));
                        sub_res.append($('<div></div>').attr('class', 'search__result-text').text(item.description));
                    });
                } else {
                    res_div.append($('<div></div>').attr('class', 'search__result').attr('id', 'no_results'))
                    var sub_res = $('#no_results')
                    if (is_eng) {

                        sub_res.append($('<div></div>').attr('class', 'search__result-text').text('Not found. Check search querry.'));
                    } else {

                        sub_res.append($('<div></div>').attr('class', 'search__result-text').text('Ничего не найдено. Проверьте запрос.'));
                    };

                };
          },
          failure: function(data) {
            alert('Got an error', data);
          }

        });

	});

	$("#search_form_ajx").on('submit', function(e) {
	    e.preventDefault();
    });

});
