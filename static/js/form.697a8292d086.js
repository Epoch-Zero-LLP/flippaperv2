(function($) {
/**
 * polyfill for html5 form attr
 */

// detect if browser supports this
var sampleElement = $('[form]').get(0);
var isIE11 = !(window.ActiveXObject) && "ActiveXObject" in window;
if (sampleElement && window.HTMLFormElement && sampleElement.form instanceof HTMLFormElement && !isIE11) {
    // browser supports it, no need to fix
    return;
}

/**
 * Append a field to a form
 *
 */
$.fn.appendField = function(data) {
    // for form only
    if (!this.is('form')) return;

    // wrap data
    if (!$.isArray(data) && data.name && data.value) {
    data = [data];
    }

    var $form = this;

    // attach new params
    $.each(data, function(i, item) {
    $('<input/>')
        .attr('type', 'hidden')
        .attr('name', item.name)
        .val(item.value).appendTo($form);
    });

    return $form;
};

/**
 * Find all input fields with form attribute point to jQuery object
 *
 */
$('form[id]').submit(function(e) {
    var $form = $(this);
    // serialize data
    var data = $('[form='+ $form.attr('id') + ']').serializeArray();
    // append data to form
    $form.appendField(data);
}).each(function() {
    var form = this,
    $form = $(form),
    $fields = $('[form=' + $form.attr('id') + ']');

    $fields.filter('button, input').filter('[type=reset],[type=submit]').click(function() {
    var type = this.type.toLowerCase();
    if (type === 'reset') {
        // reset form
        form.reset();
        // for elements outside form
        $fields.each(function() {
        this.value = this.defaultValue;
        this.checked = this.defaultChecked;
        }).filter('select').each(function() {
        $(this).find('option').each(function() {
            this.selected = this.defaultSelected;
        });
        });
    } else if (type.match(/^submit|image$/i)) {
        $(form).appendField({name: this.name, value: this.value}).submit();
    }
    });
});


})(jQuery);


jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
    return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;
    while(tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

function serialize(obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}


$(document).ready(function () {
    function hasHtml5Validation () {
        return typeof document.createElement('input').checkValidity === 'function';
    }

    if (hasHtml5Validation()) {
        $('form').submit(function (e) {
            if (!this.checkValidity()) {
                // Prevent default stops form from firing
                e.preventDefault();
                $(this).addClass('invalid');
            }
            else {
                $(this).removeClass('invalid');
            }
        });
    }

    $('input').filter(function() {
        return this.value !== '';
    }).attr('data-empty', false);

    if($.multiDatesPicker) {
        $(".jsMultidatespicker").multiDatesPicker({
            minDate: 0,
            maxPicks: 999,
            dateFormat: "dd.mm.yy"
        });
    }

    $('.js-date').datepicker({
        changeYear: true,
        changeMonth: true,
        minDate: new Date(1900, 0, 1),
        yearRange: "1900:+10",
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        showOtherMonths: true,
        selectOtherMonths: true,
        focusOnShow: false,
        ignoreReadonly: true,
        dateFormat: "dd.mm.yy"
    });


    $('.js-min-date').datepicker({
        changeYear: true,
        changeMonth: true,
        minDate: new Date(1900, 0, 1),
        maxDate: new Date(),
        yearRange: "1900:+10",
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        showOtherMonths: true,
        selectOtherMonths: true,
        focusOnShow: false,
        ignoreReadonly: true,
        dateFormat: "dd.mm.yy"
    });

    $('input[name="passport_series"]').inputmask('9999')
    $('input[name="passport_number"]').inputmask('999999')
    $('input[name="birth_date"]').inputmask('99.99.9999')
    $('input[name="passport_date"]').inputmask('99.99.9999')


    $(document).on('click', '.ui-datepicker-prev, .ui-datepicker-next', function (e) {
        e.stopPropagation();
    });

    $(".jsMultidatespicker").on('input', function () {
        const dates = $(this).multiDatesPicker('getDates');
        $(this).multiDatesPicker('removeIndexes', dates.length - 1)
    });

    function sendForm(e, callback, error) {
        e.preventDefault();
        console.log('sendForm e------>>>>',e)
        var target = e.target;
        var data = $(target).serialize();
        console.log(data)
        var url = target.getAttribute('action');
        var method = target.getAttribute('method');
        $.ajax({
            url: url,
            type: method,
            data: data,
            success: callback,
            error: error
        });
    }

    function toCommas(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function getSelectedText(elt) {
        if (elt.selectedIndex == -1)
            return null;
        return elt.options[elt.selectedIndex].text;
    }

    $('.jsShowForm').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.jsOrderForm').css('display', 'block');
        $(this).css('display', 'none');
    });


    $('.jsFormCalculator').on('submit', function (e) {
        var arr_name = ['to_city', 'weight', 'volume'];
        arr_name.forEach(function (item) {
            var name = '[name="'+item+'"]';
            var nodeField = e.target.querySelector(name);
            $('.jsOrderForm '+'[name="'+item+'"]').val(nodeField.value);
        });
        $('.jsOrderForm [name="port"]').val(getSelectedText(e.target.querySelector('[name="port"]')))

        sendForm(e, function (response) {
            if(response.price) {
                $('.welcome-form-totals').css({'display': 'block',});
                if(response.price_train) {
                    $('.jsTotalCalcTrain').css({ 'display': 'block', });
                    $('.jsTotalSumTrain').html(toCommas(response.price_train));
                    $('.jsTotalDayTrain').html(toCommas(response.days.train));
                } else {
                    $('.jsTotalCalcTrain').css({ 'display': 'none', });
                    // $('.train').css({ 'display': 'none', });
                }
                $('.jsTotalCalc').css({'display': 'block',});
                $('.jsTotalSumAuto').html(toCommas(response.price_auto));
                $('.jsTotalDayAuto').html(toCommas(response.days.auto));
                $('.jsErrorText').text('');
            }
        }, function(err) {
            //console.log(err.responseJSON, 'err');
            var volume = err.responseJSON.volume;
            $('.jsTotalCalc, .jsTotalCalcTrain').css({
                'display': 'none',
            });
            $('.jsTotalSum').html('');
            $('.jsErrorText').text(volume.join());
        });
    });


    /* <editor-fold desc="Калькулятор ККТ"> */
    function formatPrice(value) {
        return String(value).split('').reverse().reduce(function(value, item, index) {
            value.push(item);
            if ((index + 1) % 3 == 0 && index > 0) {
                value.push(' ');
            }
            return value;
        }, []).reverse().join('');
    }

    // разблокируем выбор процента разгрузки при выборе физ досмотра контейнера
    $('.ktk-calculator__form #unloading').on('change', function() {
        if (!this.checked) {
            // убираем галочку у зависимых полей
            $('[name="sqc"],[name="qpc"]').filter(':checked').prop('checked', false).trigger('change');
        }

        var disabled = !this.checked;
        $('input[name="unloading_inspection_size"]').each(function(index) {
            this.disabled = disabled;
            if (disabled) {
                this.checked = false;
            } else if (index == 0) {
                this.checked = true;
            }
            $(this).trigger("refresh");
        });
    });
    // выбираем физический досмотр при выборе СКК и КФК
    $('[name="sqc"],[name="qpc"]').on('change', function() {
        if (this.checked) {
            var $unloading = $("#unloading");
            if (!$unloading.prop('checked')) {
                $unloading.prop('checked', true);
                $unloading.trigger('change');
            }
        }
    })

    var previousShippingOption = $('input[name="shipping_option"][checked]').val()
    $('input[name="shipping_option"]').on('change', function() {
        $('select[name="' + previousShippingOption + '_destination"]').prop('required', false).val("").trigger("change").closest('[data-container]').hide();
        $('select[name="' + this.value + '_destination"]').val("").prop('required', true).trigger("change").closest('[data-container]').show();
        previousShippingOption = this.value;
    })

    function KKTFormCalculate(reject) {
        var $form = $('.ktk-calculator__form');
        var $price = $("#ktk-calculator_result_total-price");
        var $detail = $("#ktk-calculator_result_detail");
        var $download = $("#kkt-calculator-btn-download-detail");

        var data = $form.serialize();
        var url = $form.prop('action');
        var method = $form.prop('method');

        $.ajax({
            url: url,
            type: method,
            data: data,
            success: function(data) {
                $price.text(formatPrice(data.total));
                $detail.children().remove();

                // $("#ktk-calculator_result_detail").hide();

                if (data.detail.length) {
                    $detail.append(
                        $("<tr/>").append(
                            $("<td/>").text("№"),
                            $("<td/>").text("Наименование услуги"),
                            $("<td/>").text("Цена")
                        )
                    )
                } else {
                    $download.removeAttr("href");
                }

                for (var i = 0; i < data.detail.length; i++) {
                    var item =  data.detail[i];
                    $detail.append(
                        $("<tr/>").append(
                            $("<td/>").text(i + 1),
                            $("<td/>").text(item.name),
                            $("<td/>").text(formatPrice(item.price))
                        )
                    )
                }

            },
            error: reject
        });
    }

    var calculateTimeoutID = null;
    $('.ktk-calculator__form input,select').on('change', function() {
        clearTimeout(calculateTimeoutID);
        calculateTimeoutID = setTimeout(function() {
            KKTFormCalculate(function() {
                clearTimeout(calculateTimeoutID);
            })
        }, 300);

        var $form = $('.ktk-calculator__form');
        var data = $form.serialize();
        var url = $form.prop('action');

        $("#kkt-calculator-btn-download-detail").prop("href", url + "?" + data);
    });

    if ($('.ktk-calculator__form').length) {
        KKTFormCalculate();
    }

    $("#kkt-calculator-btn-show-detail").on("click", function() {
        $("#ktk-calculator_result_detail").toggle();
    })



    /* </editor-fold> */

    function getData(url, data, callback, error) {
        $.ajax({
            url: url,
            type: 'get',
            data: data,
            success: callback,
            error: error
        });
    }

    /* purchases login start */
    var purchase = {
        ordering: '',
        reverse: false,
        next: 2,
        current: 1,
        getOrdering: function() {
            return this.reverse && this.ordering ? '-'+this.ordering : this.ordering;
        },
        getData: function(clear) {
            clear = typeof clear === 'undefined' ?  true : false;
            var self = this;
            var btnMore = document.querySelector('.jsMore');
            var ordering = self.getOrdering();
            var current = self.current;
            var params = $('.jsPurchasesForm').serialize();
            template = $("#purchasesTmpl").html();
            if(!template) {return false}
            var compiled = _.template(template);
            var $purchasesContent = $('.jsPurchasesContent');
            var url = '/api/catalog/purchase/?ordering='+ordering+'&page='+current;
            getData(url, params, function (response) {
                if(clear) {
                    $purchasesContent.html('');
                }
                btnMore.disabled = !response.next;
                if(response.next) {
                    self.next = Number(getQueryParams(response.next).page);
                }
                response.results.forEach(function(element) {
                    $purchasesContent.append(compiled(element));
                });
            }, function(err) {
                //console.log(err);
            });
        },
        getPurchases: function() {
            this.current = 1;
            this.getData();
        },
        getNextPage: function() {
            this.current = this.next;
            this.getData(false);
        },
        getSort: function(ordering) {
            this.ordering = ordering;
            this.reverse = !purchase.reverse;
            this.getPurchases();
        }
    }

    purchase.getPurchases();
    $('.jsPurchasesField').on('change keyup', function (e) {
        purchase.getPurchases();
        $('.jsPurchasesForm').find('input:radio').each(function(e) {
            if($(this)[0].checked){
                $(this)[0].labels[0].classList.remove('btn--border-blue');
            }else{
                $(this)[0].labels[0].classList.add('btn--border-blue');
            };
        });
    });

    $('.jsFormReset').on('click', function () {
        document.querySelector('.jsPurchasesForm').reset();
        $('input, select').trigger('refresh');
        purchase.getPurchases();
    });

    $('.jsOrdering').on('click', function (e) {
        e.preventDefault();
        var params = e.target.dataset.params;
        var obj = getQueryParams(params);
        purchase.getSort(obj.ordering);
        $('.jsOrdering').removeClass('active up down');
        $(this).addClass('active');
        if(purchase.reverse) {
            $(this).addClass('down');
        } else {
            $(this).addClass('up');
        }
    });

    $('.jsMore').on('click', function (e) {
        e.preventDefault();
        purchase.getNextPage();
    });
    /* purchases login end */

    $('.jsVacanciesRespondForm').on('click', function (e) {
        $('.jsJobVacancy').val(e.target.dataset.id);
    });

    var requiredCheckboxes = $('.jsOptions :checkbox[required]');
    requiredCheckboxes.change(function(){
        if(requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');
        } else {
            requiredCheckboxes.attr('required', 'required');
        }
    });

    $('.jsRepeatForm').on('click', function (e) {
        e.preventDefault();
        $('.jsOrderFormSuccess').addClass('hide');
        $('.jsButtonHidden').css('display', 'block');
    });
    if (window.location.pathname.slice(1,3) == 'en') {

    } else {
        $('[name="phone"], [name="chief_number"]').inputmask({
            mask: "+(7)999-999-99-99",
            showMaskOnHover: false,
            greedy: false
        });
    }

    // $('[name="name"], [name="surname"]').inputmask({
    //     mask: "Aa{1,50}",
    //     showMaskOnHover: false,
    //     greedy: false
    // });

    $('.jsKTKNumber').inputmask({
        mask: "aaaa9999999",
        showMaskOnHover: false,
    });
    $('[name="email"]').inputmask({
        alias: "email",
        showMaskOnHover: false,
    });

    $('.jsFronFilter').on('change keyup', function (e) {
        e.preventDefault();
        var value = e.target.value;
        $('.jsContent').css('display', 'none');
        var objs = $('.jsFilterField:Contains("'+value+'")');
        var parent = objs.parent('.jsContent');
        parent.css('display', 'block');
    });

    // $('.jsSelectTypeSend').on('change', function (e) {
    //     var value = e.target.value;
    //     document.querySelector('.jsEmailField').disabled = value !== 'email';
    //     document.querySelector('.jsPhoneField').disabled = value !== 'sms';
    // });

    $('.jsEmailField').on('change keyup', function(e) {
        var value = e.target.value;
        //console.log(value, 'value');
        if(value === '') {
            $('.jsPhoneField').attr('required', true);
        } else {
            $('.jsPhoneField').attr('required', false);
        }
    });

    $('.jsPhoneField').on('change keyup', function(e) {
        var value = e.target.value;
        //console.log(value, 'value');
        if(value === '') {
            $('.jsEmailField').attr('required', true);
        } else {
            $('.jsEmailField').attr('required', false);
        }
    });

    $('.jsShowAlert').on('click', function (e) {
        e.preventDefault();
        var href = e.target.getAttribute('href');
        $('.personal-alert'+href).toggleClass('form-dropdown--showed');
    });

    $('.jsCargoExpedLogic').on('click', function (e) {
        var from = $(this).data('from');
        var to = $(this).data('to');
        $('[name="from_address"]').val(from).attr('data-empty', false);;
        $('[name="to_address"]').val(to).attr('data-empty', false);;
    });
    $('.jsCloseReset').on('click', function(e) {
        document.querySelector('.jsFromAjax').reset();
    });

    $('.jsShowform').click(function (e) {
        e.preventDefault();
        var href = $(this)[0].getAttribute('href');
        //console.log($('.jsContact'), href);
        $('.jsContact').filter(href).addClass('contact--showed');
        $('body').addClass('body--ovh');
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
    });


    $('.jsCargoBringing').on('change', function (e) {
        var value = e.target.value;
        if(value === 'independently') {
            $('.jsDisableFieldBringing').attr('disabled', true);
        } else {
            $('.jsDisableFieldBringing').attr('disabled', false);
        }
    });
});



$('input').focus(function(){
    $(this).parent('.input-place').addClass('focused');
});

$('input').blur(function(){
    if(!$.trim(this.value).length) {
        $(this).removeClass('filled');
        $(this).parents('.input-place').removeClass('focused');
    } else {
        $(this).addClass('filled');
    }
});


