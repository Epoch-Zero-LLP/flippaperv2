$(document).ready(function () {

    $(".root").addClass("doc-ready");

    $(".root a").not('[href^="tel:"]').click(function() {
        if (1) {
            var t = $(this);
            void 0 !== t.attr("href") && void 0 === t.attr("target") && "" !== t.attr("href") && (t.hasClass("no_fade") || t.hasClass("popup_trigger") || t.attr("href").indexOf("mailto:") > -1 || !t.hasClass("force_fade") && (t.attr("href").indexOf("#") > -1 || t.hasClass("no_fade")) || $(".root").removeClass("doc-ready"))
        }
    });

    $(window).on("load resize ", function() {
        var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
        $('.tbl-header').css({'padding-right':scrollWidth});
        var pheight0 = $('.page').height();
        var pheight1 = $('.purchases__top').height();
        var pheight2 = $('.purchases-form').height();
        var pheight3 = $('.tbl-header').height();
        $('.tbl-content').css({'height': pheight0 - (pheight3 + 110)})
    }).resize();

    $('input, select').styler();

    $('.js-date-time').datetimepicker({
        currentText: 'Сегодня',
        closeText: 'Закрыть',
        timeText: 'Время',
        hourText: 'Часы',
        minuteText: 'Минуты',
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
        dateFormat: "yy-m-d",
        timeFormat: 'HH:mm',
    });
    $(function () {
        $('.js-date').datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            focusOnShow: false,
            ignoreReadonly: true
        });
    });
    $(document).on('click', '.ui-datepicker-prev, .ui-datepicker-next', function (e) {
        e.stopPropagation();
    });

    $('.js-showMenu').click(function (e) {
        $('.header').toggleClass('mainmenu--showed');
        $('.mainmenu').toggleClass('mainmenu--showed');
    });

    $('.js-hideMenu').click(function (e) {
        $('.header').removeClass('mainmenu--showed');
        $('.mainmenu').removeClass('mainmenu--showed');
    });

    $('.js-showUserMenu').click(function (e) {
        $('.header').toggleClass('usermenu--showed');
        $('.usermenu').toggleClass('usermenu--showed');
    });

    $('.js-hideUserMenu').click(function (e) {
        $('.header').removeClass('usermenu--showed');
        $('.usermenu').removeClass('usermenu--showed');
    });

    $('.js-showPhones').click(function (e) {
        $('.phonemenu').toggleClass('phonemenu--showed');
    });

    $('.js-hidePhones').click(function (e) {
        $('.phonemenu').removeClass('phonemenu--showed');
    });

    $(document).click(function (e) {
        if ($(e.target).closest('.mainmenu__wrap, .js-showMenu, .phonemenu').length === 0) {
            $('.mainmenu--showed').removeClass('mainmenu--showed');
        }
    });
    $(document).click(function (e) {
        if ($(e.target).closest('.phonemenu__wrap, .js-showPhones').length === 0) {
            $('.phonemenu--showed').removeClass('phonemenu--showed');
        }
    });
    $(document).click(function (e) {
        if ($(e.target).closest('.usermenu__wrap, .js-showUserMenu').length === 0) {
            $('.usermenu--showed').removeClass('usermenu--showed');
        }
    });

    $('.about-graph1').hover(
        function () {
            $('.about-graph1-i').addClass('active');
        },
        function () {
            $('.about-graph1-i').removeClass('active');
        }
    );
    $('.about-graph2').hover(
        function () {
            $('.about-graph2-i').addClass('active');
        },
        function () {
            $('.about-graph2-i').removeClass('active');
        }
    );
    $('.about-graph3').hover(
        function () {
            $('.about-graph3-i').addClass('active');
        },
        function () {
            $('.about-graph3-i').removeClass('active');
        }
    );
    $('.about-graph4').hover(
        function () {
            $('.about-graph4-i').addClass('active');
        },
        function () {
            $('.about-graph4-i').removeClass('active');
        }
    );
    $('.js-showSideMenu').click(function (e) {
        $('.page-rightcol').toggleClass('page-rightcol--showed');
    });
    $('.js-hideRightCol').click(function (e) {
        $('.page-rightcol').removeClass('page-rightcol--showed');
    });

    $('.js-vacanciesQuestionForm').click(function (e) {
        $('.vacancies-question').addClass('page-popup--showed');
    });
    $('.js-vacanciesRespondForm').click(function (e) {
        $('.vacancies-respond').addClass('page-popup--showed');
    });
    $('.js-edoForm').click(function (e) {
        $('.edo-form').addClass('page-popup--showed');
    });

    $('.js-searchForm').click(function (e) {
        $('.search-form').addClass('page-popup--showed');
    });

    $('.js-pagePopupHide').click(function (e) {
        $('.page-popup').removeClass('page-popup--showed');
    });

    $('input').focus(function(){
        $(this).parents('.input-place').addClass('focused');
    });

    $('input').blur(function(){
        if(!$.trim(this.value).length) {
            $(this).removeClass('filled');
            $(this).parents('.input-place').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    });

    $('input').ready(function(){
        console.log($(this.value).length)
    });

    $('.js-pedestrianAlert').click(function () {
        $(this).hide();
        $('.order-form__success').removeClass('hide');
        $('.pedestrian-alert').addClass('form-dropdown--showed');
    });

    $('.js-modalSuccess').click(function (e) {
        $('.modal-success').addClass('modal--showed');
    });

    $(document).click(function (e) {
        if ($(e.target).closest('.modal-wrapper, .js-modalSuccess').length === 0) {
            $('.modal').removeClass('modal--showed');
            $('body').removeClass('noscroll');
        }
    });

    $('.js-modalClose').click(function (e) {
        $('.modal').removeClass('modal--showed');
        $('body').removeClass('noscroll');
        $('.page-popup').removeClass('page-popup--showed');
    });

    $('.js-careerVacancy').click(function () {
        $(this).toggleClass('career-vacancy-btn--active');
        $('.career-vacancy').toggleClass('career-vacancy--showed');

        var hg1 = $('.career-feaut').height(),
            hg2 = $('.career-text').height(),
            hg3 = $('.order-form').height(),
            hg4 = $('.career-welcome').height(),
            hh = hg1 + hg2 + hg3 + hg4 + 300;
        $('.simplebar-scroll-content').animate({ scrollTop: hh }, 600);
    });

    $('.staff-item--link').click(function() {
        var $this = $(this);
        var $modal = $('.modal-staff');
        $modal.find('img').attr('src', $this.find('img').attr('src'));
        $modal.find('.staff-item__name').html($this.find('.staff-item__name').html());
        $modal.find('.staff-item__name2').html($this.find('.staff-item__name2').html());
        $modal.find('.staff-item__position').html($this.find('.staff-item__position').html());
        $modal.find('.staff-item__desc').html($this.find('.staff-item__desc').html());
        setTimeout(function() {
            $modal.addClass('modal--showed');
            $('body').addClass('noscroll');
            $modal.find('.modal-content').scrollTop(0)
        })
    })


    $('input.js-personalAlert').on('change', function () {
        if ($(this).is(':checked')) {
            $('.personal-alert').addClass('form-dropdown--showed');
        } else {
            $('.personal-alert').removeClass('form-dropdown--showed');
        }
    });

    $('.jsShowHelper').on('click', function () {
        $('.jsHelperBlock').toggleClass('form-dropdown--showed');
    });

    $('.js-dropdownHide').click(function () {
        $('.form-dropdown').removeClass('form-dropdown--showed')
    });

    var swiper = new Swiper('.history-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        simulateTouch: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next, .history-wheel__next',
            prevEl: '.swiper-button-prev, .history-wheel__prev',
        },
        breakpoints: {
            767: {}
        },
        on: {
            slideNextTransitionStart: function () {
                $('.history-wheel__top').addClass('rotnext');
                $('.history-wheel__top').removeClass('rotprev');
            },
            slideNextTransitionEnd: function () {
                $('.history-wheel__top').removeClass('rotnext');
            },
            slidePrevTransitionStart: function () {
                $('.history-wheel__top').addClass('rotprev');
                $('.history-wheel__top').removeClass('rotnext');
            },
            slidePrevTransitionEnd: function () {
                $('.history-wheel__top').removeClass('rotprev');
            },
            slideChangeTransitionEnd: function () {
                $('.history-wheel__top').removeClass('rotprev');
            }
        }
    });
    $('.history-wheel__next').click(function () {
        swiper.slideNext();
    });
    $('.history-wheel__prev').click(function () {
        swiper.slidePrev();
    });
    var swiper2 = new Swiper('.images-slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        speed: 800,
        simulateTouch: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {}
        }
    });
});


/* jQuery Form Styler v1.7.8 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
function render(){
    !function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e($ || require("jquery")) : e(jQuery)
    }(function (e) {
        "use strict";
    
        function t(t, s) {
            this.element = t, this.options = e.extend({}, l, s);
            var i = this.options.locale;
            void 0 !== this.options.locales[i] && e.extend(this.options, this.options.locales[i]), this.init()
        }
    
        function s(t) {
            if (!e(t.target).parents().hasClass("jq-selectbox") && "OPTION" != t.target.nodeName && e("div.jq-selectbox.opened").length) {
                console.log('im here!!!!');
                
                var s = e("div.jq-selectbox.opened"), l = e("div.jq-selectbox__search input", s),
                    o = e("div.jq-selectbox__dropdown", s), a = s.find("select").data("_" + i).options;
                a.onSelectClosed.call(s), l.length && l.val("").keyup(), o.hide().find("li.sel").addClass("selected"), s.removeClass("focused opened dropup dropdown")
            }
        }
    
        var i = "styler", l = {
            idSuffix: "-styler",
            filePlaceholder: "Файл не выбран",
            fileBrowse: "Прикрепить файл",
            fileNumber: "Выбрано файлов: %s",
            selectPlaceholder: "Выберите...",
            selectSearch: !1,
            selectSearchLimit: 10,
            selectSearchNotFound: "Совпадений не найдено",
            selectSearchPlaceholder: "Поиск...",
            selectVisibleOptions: 0,
            singleSelectzIndex: "100",
            selectSmartPositioning: !0,
            locale: "ru",
            locales: {
                en: {
                    filePlaceholder: "No file selected",
                    fileBrowse: "Browse...",
                    fileNumber: "Selected files: %s",
                    selectPlaceholder: "Select...",
                    selectSearchNotFound: "No matches found",
                    selectSearchPlaceholder: "Search..."
                }
            },
            onSelectOpened: function () {
            },
            onSelectClosed: function () {
            },
            onFormStyled: function () {
            }
        };
        t.prototype = {
            init: function () {
                function t() {
                    void 0 !== i.attr("id") && "" !== i.attr("id") && (this.id = i.attr("id") + l.idSuffix), this.title = i.attr("title"), this.classes = i.attr("class"), this.data = i.data()
                }
    
                var i = e(this.element), l = this.options,
                    o = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
                    a = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));

                if (i.attr("data-styler") == "off") {
                    return;
                }
                if (i.is(":checkbox")) {
                    var d = function () {
                        var s = new t, l = e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({
                            id: s.id,
                            title: s.title
                        }).addClass(s.classes).data(s.data);
                        i.css({
                            position: "absolute",
                            zIndex: "-1",
                            opacity: 0,
                            margin: 0,
                            padding: 0
                        }).after(l).prependTo(l), l.attr("unselectable", "on").css({
                            "-webkit-user-select": "none",
                            "-moz-user-select": "none",
                            "-ms-user-select": "none",
                            "-o-user-select": "none",
                            "user-select": "none",
                            display: "inline-block",
                            position: "relative",
                            overflow: "hidden"
                        }), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), l.click(function (e) {
                            e.preventDefault(), l.is(".disabled") || (i.is(":checked") ? (i.prop("checked", !1), l.removeClass("checked")) : (i.prop("checked", !0), l.addClass("checked")), i.focus().change())
                        }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
                            e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault())
                        }), i.on("change.styler", function () {
                            i.is(":checked") ? l.addClass("checked") : l.removeClass("checked")
                        }).on("keydown.styler", function (e) {
                            32 == e.which && l.click()
                        }).on("focus.styler", function () {
                            l.is(".disabled") || l.addClass("focused")
                        }).on("blur.styler", function () {
                            l.removeClass("focused")
                        })
                    };
                    d(), i.on("refresh", function () {
                        i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), d()
                    })
                } else if (i.is(":radio")) {
                    var r = function () {
                        var s = new t, l = e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({
                            id: s.id,
                            title: s.title
                        }).addClass(s.classes).data(s.data);
                        i.css({
                            position: "absolute",
                            zIndex: "-1",
                            opacity: 0,
                            margin: 0,
                            padding: 0
                        }).after(l).prependTo(l), l.attr("unselectable", "on").css({
                            "-webkit-user-select": "none",
                            "-moz-user-select": "none",
                            "-ms-user-select": "none",
                            "-o-user-select": "none",
                            "user-select": "none",
                            display: "inline-block",
                            position: "relative"
                        }), i.is(":checked") && l.addClass("checked"), i.is(":disabled") && l.addClass("disabled"), e.fn.commonParents = function () {
                            var t = this;
                            return t.first().parents().filter(function () {
                                return e(this).find(t).length === t.length
                            })
                        }, e.fn.commonParent = function () {
                            return e(this).commonParents().first()
                        }, l.click(function (t) {
                            if (t.preventDefault(), !l.is(".disabled")) {
                                var s = e('input[name="' + i.attr("name") + '"]');
                                s.commonParent().find(s).prop("checked", !1).parent().removeClass("checked"), i.prop("checked", !0).parent().addClass("checked"), i.focus().change()
                            }
                        }), i.closest("label").add('label[for="' + i.attr("id") + '"]').on("click.styler", function (t) {
                            e(t.target).is("a") || e(t.target).closest(l).length || (l.triggerHandler("click"), t.preventDefault())
                        }), i.on("change.styler", function () {
                            i.parent().addClass("checked")
                        }).on("focus.styler", function () {
                            l.is(".disabled") || l.addClass("focused")
                        }).on("blur.styler", function () {
                            l.removeClass("focused")
                        })
                    };
                    r(), i.on("refresh", function () {
                        i.closest("label").add('label[for="' + i.attr("id") + '"]').off(".styler"), i.off(".styler").parent().before(i).remove(), r()
                    })
                } else if (i.is(":file")) {
                    i.css({position: "absolute", top: 0, right: 0, margin: 0, padding: 0, opacity: 0, fontSize: "100px"});
                    var n = function () {
                        var s = new t, o = i.data("placeholder");
                        void 0 === o && (o = l.filePlaceholder);
                        var a = i.data("browse");
                        void 0 !== a && "" !== a || (a = l.fileBrowse);
                        var d = e('<div class="jq-file"><div class="jq-file__name">' + o + '</div><div class="jq-file__browse">' + a + "</div></div>").css({
                            display: "inline-block",
                            position: "relative",
                            overflow: "hidden"
                        }).attr({id: s.id, title: s.title}).addClass(s.classes).data(s.data);
                        i.after(d).appendTo(d), i.is(":disabled") && d.addClass("disabled"), i.on("change.styler", function () {
                            var t = i.val(), s = e("div.jq-file__name", d);
                            if (i.is("[multiple]")) {
                                t = "";
                                var a = i[0].files.length;
                                if (a > 0) {
                                    var r = i.data("number");
                                    void 0 === r && (r = l.fileNumber), r = r.replace("%s", a), t = r
                                }
                            }
                            s.text(t.replace(/.+[\\\/]/, "")), "" === t ? (s.text(o), d.removeClass("changed")) : d.addClass("changed")
                        }).on("focus.styler", function () {
                            d.addClass("focused")
                        }).on("blur.styler", function () {
                            d.removeClass("focused")
                        }).on("click.styler", function () {
                            d.removeClass("focused")
                        })
                    };
                    n(), i.on("refresh", function () {
                        i.off(".styler").parent().before(i).remove(), n()
                    })
                } else if (i.is('input[type="number"]')) {
                    var c = function () {
                        var s = new t,
                            l = e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({
                                id: s.id,
                                title: s.title
                            }).addClass(s.classes).data(s.data);
                        i.after(l).prependTo(l).wrap('<div class="jq-number__field"></div>'), i.is(":disabled") && l.addClass("disabled");
                        var o, a, d, r = null, n = null;
                        void 0 !== i.attr("min") && (o = i.attr("min")), void 0 !== i.attr("max") && (a = i.attr("max")), d = void 0 !== i.attr("step") && e.isNumeric(i.attr("step")) ? Number(i.attr("step")) : Number(1);
                        var c = function (t) {
                            var s, l = i.val();
                            e.isNumeric(l) || (l = 0, i.val("0")), t.is(".minus") ? s = Number(l) - d : t.is(".plus") && (s = Number(l) + d);
                            var r = (d.toString().split(".")[1] || []).length;
                            if (r > 0) {
                                for (var n = "1"; n.length <= r;) n += "0";
                                s = Math.round(s * n) / n
                            }
                            e.isNumeric(o) && e.isNumeric(a) ? s >= o && a >= s && i.val(s) : e.isNumeric(o) && !e.isNumeric(a) ? s >= o && i.val(s) : !e.isNumeric(o) && e.isNumeric(a) ? a >= s && i.val(s) : i.val(s)
                        };
                        l.is(".disabled") || (l.on("mousedown", "div.jq-number__spin", function () {
                            var t = e(this);
                            c(t), r = setTimeout(function () {
                                n = setInterval(function () {
                                    c(t)
                                }, 40)
                            }, 350)
                        }).on("mouseup mouseout", "div.jq-number__spin", function () {
                            clearTimeout(r), clearInterval(n)
                        }).on("mouseup", "div.jq-number__spin", function () {
                            i.change()
                        }), i.on("focus.styler", function () {
                            l.addClass("focused")
                        }).on("blur.styler", function () {
                            l.removeClass("focused")
                        }))
                    };
                    c(), i.on("refresh", function () {
                        i.off(".styler").closest(".jq-number").before(i).remove(), c()
                    })
                } else if (i.is("select")) {
                    var f = function () {
                        function d(t) {
                            t.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (t) {
                                var s = null;
                                "mousewheel" == t.type ? s = -1 * t.originalEvent.wheelDelta : "DOMMouseScroll" == t.type && (s = 40 * t.originalEvent.detail), s && (t.stopPropagation(), t.preventDefault(), e(this).scrollTop(s + e(this).scrollTop()))
                            })
                        }
    
                        function r() {
                            for (var e = 0; e < f.length; e++) {
                                var t = f.eq(e), s = "", i = "", o = "", a = "", d = "", r = "", n = "", c = "", u = "",
                                    p = "disabled",
                                    v = "selected sel disabled";
                                t.prop("selected") && (i = "selected sel"), t.is(":disabled") && (i = p), t.is(":selected:disabled") && (i = v), void 0 !== t.attr("id") && "" !== t.attr("id") && (a = ' id="' + t.attr("id") + l.idSuffix + '"'), void 0 !== t.attr("title") && "" !== f.attr("title") && (d = ' title="' + t.attr("title") + '"'), void 0 !== t.attr("class") && (n = " " + t.attr("class"), u = ' data-jqfs-class="' + t.attr("class") + '"');
                                var m = t.data();
                                for (var g in m) "" !== m[g] && (r += " data-" + g + '="' + m[g] + '"');
                                i + n !== "" && (o = ' class="' + i + n + '"'), s = "<li" + u + r + o + d + a + ">" + t.html() + "</li>", t.parent().is("optgroup") && (void 0 !== t.parent().attr("class") && (c = " " + t.parent().attr("class")), s = "<li" + u + r + ' class="' + i + n + " option" + c + '"' + d + a + ">" + t.html() + "</li>", t.is(":first-child") && (s = '<li class="optgroup' + c + '">' + t.parent().attr("label") + "</li>" + s)), h += s
                            }
                        }
    
                        function n() {
                            var a = new t, n = "", c = i.data("placeholder"), u = i.data("search"),
                                p = i.data("search-limit"),
                                v = i.data("search-not-found"), m = i.data("search-placeholder"), g = i.data("z-index"),
                                b = i.data("smart-positioning");
                            void 0 === c && (c = l.selectPlaceholder), void 0 !== u && "" !== u || (u = l.selectSearch), void 0 !== p && "" !== p || (p = l.selectSearchLimit), void 0 !== v && "" !== v || (v = l.selectSearchNotFound), void 0 === m && (m = l.selectSearchPlaceholder), void 0 !== g && "" !== g || (g = l.singleSelectzIndex), void 0 !== b && "" !== b || (b = l.selectSmartPositioning);
                            var y = e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select" style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').css({
                                display: "inline-block",
                                position: "relative",
                                zIndex: g
                            }).attr({id: a.id, title: a.title}).addClass(a.classes).data(a.data);
                            i.css({margin: 0, padding: 0}).after(y).prependTo(y);
                            var C = e("div.jq-selectbox__select", y), x = e("div.jq-selectbox__select-text", y),
                                w = f.filter(":selected");
                            r(), u && (n = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + m + '"></div><div class="jq-selectbox__not-found">' + v + "</div>");
                            var q = e('<div class="jq-selectbox__dropdown" style="position: absolute">' + n + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + h + "</ul></div>");
                            y.append(q);
                            var _ = e("ul", q), j = e("li", q), k = e("input", q),
                                S = e("div.jq-selectbox__not-found", q).hide();
                            j.length < p && k.parent().hide(), "" === f.first().text() && f.first().is(":selected") && c !== !1 ? x.text(c).addClass("placeholder") : x.text(w.text());
                            var T = 0, N = 0;
                            if (j.css({display: "inline-block"}), j.each(function () {
                                var t = e(this);
                                t.innerWidth() > T && (T = t.innerWidth(), N = t.width())
                            }), j.css({display: ""}), x.is(".placeholder") && x.width() > T) x.width(x.width()); else {
                                var P = y.clone().appendTo("body").width("auto"), A = P.outerWidth();
                                P.remove(), A == y.outerWidth() && x.width(N)
                            }
                            T > y.width() && q.width(T), "" === f.first().text() && "" !== i.data("placeholder") && j.first().hide(), i.css({
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%",
                                opacity: 0
                            });
                            var D = y.outerHeight(!0), H = k.parent().outerHeight(!0) || 0, I = _.css("max-height"),
                                z = j.filter(".selected");
                            if (z.length < 1 && j.first().addClass("selected sel"), void 0 === j.data("li-height")) {
                                var K = j.outerHeight();
                                c !== !1 && (K = j.eq(1).outerHeight()), j.data("li-height", K)
                            }
                            var M = q.css("top");
                            if ("auto" == q.css("left") && q.css({left: 0}), "auto" == q.css("top") && (q.css({top: D}), M = D), q.hide(), z.length && (f.first().text() != w.text() && y.addClass("changed"), y.data("jqfs-class", z.data("jqfs-class")), y.addClass(z.data("jqfs-class"))), i.is(":disabled")) return y.addClass("disabled"), !1;
                            C.click(function () {
                                if (e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")), i.focus(), !o) {
                                    var t = e(window),
                                        s = j.data("li-height"),
                                        a = y.offset().top,
                                        r = t.height() - D - (a - t.scrollTop()),  // Высота окна - высота селекта - (отступ селекта от верха экрана с учетом прокрутки) = расстояние до низа экрана
                                        n = i.data("visible-options");

                                    if ($(this).closest(".simplebar-scroll-content").length) {
                                        var z = $(this).closest(".simplebar-scroll-content");
                                        r = z.height() - D - (a - z.offset().top);
                                    }
                                    void 0 !== n && "" !== n || (n = l.selectVisibleOptions);
                                    var c = 5 * s, h = s * n;
                                    n > 0 && 6 > n && (c = h), 0 === n && (h = "auto");
                                    var u = function () {
                                        /// раскрывается вниз
                                        q.height("auto").css({bottom: "auto", top: M});
                                        var e = function () {
                                            _.css("max-height", Math.floor((r - 20 - H) / s) * s)
                                        };
                                        e(), _.css("max-height", h), "none" != I && _.css("max-height", I), r < q.outerHeight() + 20 && e()
                                    }, p = function () {
                                        /// раскрывается вверх
                                        q.height("auto").css({top: "auto", bottom: M});
                                        var e = function () {
                                            _.css("max-height", Math.floor((a - t.scrollTop() - 20 - H) / s) * s)
                                        };
                                        e(), _.css("max-height", h), "none" != I && _.css("max-height", I), a - t.scrollTop() - 20 < q.outerHeight() + 20 && e()
                                    };
                                    b === !0 || 1 === b ? r > c + H + 20 ? (u(), y.removeClass("dropup").addClass("dropdown")) : (p(), y.removeClass("dropdown").addClass("dropup")) : b === !1 || 0 === b ? r > c + H + 20 && (u(), y.removeClass("dropup").addClass("dropdown")) : (q.height("auto").css({
                                        bottom: "auto",
                                        top: M
                                    }), _.css("max-height", h), "none" != I && _.css("max-height", I)), y.offset().left + q.outerWidth() > t.width() && q.css({
                                        left: "auto",
                                        right: 0
                                    }), e("div.jqselect").css({zIndex: g - 1}).removeClass("opened"), y.css({zIndex: g}), q.is(":hidden") ? (e("div.jq-selectbox__dropdown:visible").hide(), q.show(), y.addClass("opened focused"), l.onSelectOpened.call(y)) : (q.hide(), y.removeClass("opened dropup dropdown"), e("div.jq-selectbox").filter(".opened").length && l.onSelectClosed.call(y)), k.length && (k.val("").keyup(), S.hide(), k.keyup(function () {
                                        var t = e(this).val();
                                        j.each(function () {
                                            e(this).html().match(new RegExp(".*?" + t + ".*?", "i")) ? e(this).show() : e(this).hide()
                                        }), "" === f.first().text() && "" !== i.data("placeholder") && j.first().hide(), j.filter(":visible").length < 1 ? S.show() : S.hide()
                                    })), j.filter(".selected").length && ("" === i.val() ? _.scrollTop(0) : (_.innerHeight() / s % 2 !== 0 && (s /= 2), _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() / 2 + s))), d(_)
                                }
                            }), j.hover(function () {
                                e(this).siblings().removeClass("selected")
                            });
                            var O = j.filter(".selected").text();
                            j.filter(":not(.disabled):not(.optgroup)").click(function () {
                                i.focus();
                                var t = e(this), s = t.text();
                                if (!t.is(".selected")) {
                                    var o = t.index();
                                    o -= t.prevAll(".optgroup").length, t.addClass("selected sel").siblings().removeClass("selected sel"), f.prop("selected", !1).eq(o).prop("selected", !0), O = s, x.text(s), y.data("jqfs-class") && y.removeClass(y.data("jqfs-class")), y.data("jqfs-class", t.data("jqfs-class")), y.addClass(t.data("jqfs-class")), i.change()
                                }
                                q.hide(), y.removeClass("opened dropup dropdown"), l.onSelectClosed.call(y)
                            }), q.mouseout(function () {
                                e("li.sel", q).addClass("selected")
                            }), i.on("change.styler", function () {
                                x.text(f.filter(":selected").text()).removeClass("placeholder"), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), f.first().text() != j.filter(".selected").text() ? y.addClass("changed") : y.removeClass("changed")
                            }).on("focus.styler", function () {
                                y.addClass("focused"), e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
                            }).on("blur.styler", function () {
                                y.removeClass("focused")
                            }).on("keydown.styler keyup.styler", function (e) {
                                var t = j.data("li-height");
                                "" === i.val() ? x.text(c).addClass("placeholder") : x.text(f.filter(":selected").text()), j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"), 38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which || ("" === i.val() ? _.scrollTop(0) : _.scrollTop(_.scrollTop() + j.filter(".selected").position().top)), 40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which || _.scrollTop(_.scrollTop() + j.filter(".selected").position().top - _.innerHeight() + t), 13 == e.which && (e.preventDefault(), q.hide(), y.removeClass("opened dropup dropdown"), l.onSelectClosed.call(y))
                            }).on("keydown.styler", function (e) {
                                32 == e.which && (e.preventDefault(), C.click())
                            }), s.registered || (e(document).on("click", s), s.registered = !0)
                        }
    
                        function c() {
                            var s = new t, l = e('<div class="jq-select-multiple jqselect"></div>').css({
                                display: "inline-block",
                                position: "relative"
                            }).attr({id: s.id, title: s.title}).addClass(s.classes).data(s.data);
                            i.css({margin: 0, padding: 0}).after(l), r(), l.append("<ul>" + h + "</ul>");
                            var o = e("ul", l).css({
                                    position: "relative",
                                    "overflow-x": "hidden",
                                    "-webkit-overflow-scrolling": "touch"
                                }), a = e("li", l).attr("unselectable", "on"), n = i.attr("size"), c = o.outerHeight(),
                                u = a.outerHeight();
                            void 0 !== n && n > 0 ? o.css({height: u * n}) : o.css({height: 4 * u}), c > l.height() && (o.css("overflowY", "scroll"), d(o), a.filter(".selected").length && o.scrollTop(o.scrollTop() + a.filter(".selected").position().top)), i.prependTo(l).css({
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%",
                                opacity: 0
                            }), i.is(":disabled") ? (l.addClass("disabled"), f.each(function () {
                                e(this).is(":selected") && a.eq(e(this).index()).addClass("selected")
                            })) : (a.filter(":not(.disabled):not(.optgroup)").click(function (t) {
                                i.focus();
                                var s = e(this);
                                if (t.ctrlKey || t.metaKey || s.addClass("selected"), t.shiftKey || s.addClass("first"), t.ctrlKey || t.metaKey || t.shiftKey || s.siblings().removeClass("selected first"), (t.ctrlKey || t.metaKey) && (s.is(".selected") ? s.removeClass("selected first") : s.addClass("selected first"), s.siblings().removeClass("first")), t.shiftKey) {
                                    var l = !1, o = !1;
                                    s.siblings().removeClass("selected").siblings(".first").addClass("selected"), s.prevAll().each(function () {
                                        e(this).is(".first") && (l = !0)
                                    }), s.nextAll().each(function () {
                                        e(this).is(".first") && (o = !0)
                                    }), l && s.prevAll().each(function () {
                                        return e(this).is(".selected") ? !1 : void e(this).not(".disabled, .optgroup").addClass("selected")
                                    }), o && s.nextAll().each(function () {
                                        return e(this).is(".selected") ? !1 : void e(this).not(".disabled, .optgroup").addClass("selected")
                                    }), 1 == a.filter(".selected").length && s.addClass("first")
                                }
                                f.prop("selected", !1), a.filter(".selected").each(function () {
                                    var t = e(this), s = t.index();
                                    t.is(".option") && (s -= t.prevAll(".optgroup").length), f.eq(s).prop("selected", !0)
                                }), i.change()
                            }), f.each(function (t) {
                                e(this).data("optionIndex", t)
                            }), i.on("change.styler", function () {
                                a.removeClass("selected");
                                var t = [];
                                f.filter(":selected").each(function () {
                                    t.push(e(this).data("optionIndex"))
                                }), a.not(".optgroup").filter(function (s) {
                                    return e.inArray(s, t) > -1
                                }).addClass("selected")
                            }).on("focus.styler", function () {
                                l.addClass("focused")
                            }).on("blur.styler", function () {
                                l.removeClass("focused")
                            }), c > l.height() && i.on("keydown.styler", function (e) {
                                38 != e.which && 37 != e.which && 33 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected").position().top - u), 40 != e.which && 39 != e.which && 34 != e.which || o.scrollTop(o.scrollTop() + a.filter(".selected:last").position().top - o.innerHeight() + 2 * u)
                            }))
                        }
    
                        var f = e("option", i), h = "";
                        if (i.is("[multiple]")) {
                            if (a || o) return;
                            c()
                        } else n()
                    };
                    f(), i.on("refresh", function () {
                        i.off(".styler").parent().before(i).remove(), f()
                    })
                } else i.is(":reset") && i.on("click", function () {
                    setTimeout(function () {
                        i.closest("form").find("input, select").trigger("refresh")
                    }, 1)
                })
            }, destroy: function () {
                var t = e(this.element);
                t.is(":checkbox") || t.is(":radio") ? (t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove(), t.closest("label").add('label[for="' + t.attr("id") + '"]').off(".styler")) : t.is('input[type="number"]') ? t.removeData("_" + i).off(".styler refresh").closest(".jq-number").before(t).remove() : (t.is(":file") || t.is("select")) && t.removeData("_" + i).off(".styler refresh").removeAttr("style").parent().before(t).remove()
            }
        }, e.fn[i] = function (s) {
            var l = arguments;
            if (void 0 === s || "object" == typeof s) return this.each(function () {
                e.data(this, "_" + i) || e.data(this, "_" + i, new t(this, s))
            }).promise().done(function () {
                var t = e(this[0]).data("_" + i);
                t && t.options.onFormStyled.call()
            }), this;
            if ("string" == typeof s && "_" !== s[0] && "init" !== s) {
                var o;
                return this.each(function () {
                    var a = e.data(this, "_" + i);
                    a instanceof t && "function" == typeof a[s] && (o = a[s].apply(a, Array.prototype.slice.call(l, 1)))
                }), void 0 !== o ? o : this
            }
        }, s.registered = !1
    });
}

render()

var tableMain = document.querySelector('.table__main')
var countPass = 1;

function addNewPeoplePedestrian() {
    countPass += 1;
    template = $("#admissionPedestrianTmpl").html();
    if(!template) {return false}
    var compiled = _.template(template);

    $('.jsAdmissionPedestrianPeople').append(compiled({
        countPass: countPass
    }))
    setTimeout(function() {
        $('input').focus(function(){
            $(this).parents('.input-place').addClass('focused');
        });

        $('input').blur(function(){
            if(!$.trim(this.value).length) {
                $(this).removeClass('filled');
                $(this).parents('.input-place').removeClass('focused');
            } else {
                $(this).addClass('filled');
            }
        });
        $('[name="phone"], [name="chief_number"]').inputmask({
            mask: "+(7)999-999-99-99",
            showMaskOnHover: false,
            greedy: false
        });
        $('select, input').styler();
    }, 200)

    $('input[name ="birth_date"]').datepicker({
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
    })

    $('input[name ="passport_date"]').datepicker({
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
    })
}

function removeNewPeoplePedestrian() {
    if($(tableMain).find('.table__block').length==1){
        return;
    }
    else{
        countPass -= 1;
        $(".jsAdmissionPedestrianPeople .table__block:last-child").remove()
        setTimeout(function() {
            $('select, input').styler();
        }, 200)
    }
}


$('#addNewPeoplePedestrian').on('click',function() {
    addNewPeoplePedestrian();
})

$('#removeNewPeoplePedestrian').on('click',function(){
    removeNewPeoplePedestrian();
});


function parseTemplateFromFileContent(value) {
    return value.split(/\n\n/g).map(function(part) {
        return part.split(/\n/g).reduce(function(data, line) {
            var a = line.split(/:/).map(function(x) { return x.trim(); });
            var fieldName = a[0], fieldValue = a[1];
            if (fieldName) {
                data[fieldName.toLowerCase()] = fieldValue;
            }
            return data;
        }, {});
    }).filter(function(x) { return Object.keys(x).length; });
}


function updateFormFromDataList(template, mapping) {
    for (var i = 0; i < template.length - countPass; ++i) {
        addNewPeoplePedestrian();
    }
    var MAPPING = {};
    for (var key in mapping) {
        mapping[key.toLowerCase()] = mapping[key];
    }

    for (var i = 0; i < template.length; ++i) {
        var data = template[i];
        for (var propName in data) {
            propName = propName.toLowerCase()
            var value = data[propName];
            var fieldName = mapping[propName];
            if (!fieldName || !value) {
                continue;
            }

            if (fieldName == "phone" || fieldName == "chief_number") {
                value = value.substr(value.length - 10, value.length);
            }


            var $el = $("[name=\"" + fieldName + "\"]");
            $el = $el.length > 1 ? $($el[i]) : $el;
            if ($el.is("textarea")) {
                $el.text(value);
            } else if ($el.is("select")) {
                $el.find("option").filter(function() {
                    if ($(this).html().toLowerCase() == value.toLowerCase()) {
                        $el.val($(this).attr("value"));
                        $el.trigger('refresh');
                    }
                });
            } else {
                $el.val(value);
            }

            $el.closest(".input-place").addClass("focused");
        }
    }
}


function getFileContentFromInput(input, cb) {
    var reader = new FileReader();
    reader.onload = function() {
        cb(reader.result);
    }
    reader.readAsText(input.files[0]);
}


$('#templateForFillAdmissionPedestrianForm').on('change', function() {
    var mapping = {
        "Наименование компании": "legal_entity_name",
        "ФИО руководителя": "chief_full_name",
        "Телефон руководителя": "chief_number",
        "ИНН": "inn",
        "Дата допуска": "date",
        "Цель посещения": "visit_purpose",
        "Пункт расопряжения провительства": "order_point",
        "Фамилия": "surname",
        "Имя": "name",
        "Отчество": "patronymic",
        "Дата рождения": "birth_date",
        "Место рождения": "birth_place",
        "Должность": "recipient_position",
        "Серия паспорта": "passport_series",
        "Номер паспорта": "passport_number",
        "Дата выдачи паспорта": "passport_date",
        "Кем выдан паспорт": "passport_place",
        "Электронная почта": "email",
        "Контактный телефон": "phone",
        "Адрес регистрации": "registration_address",
        "Фактический адрес": "factual_address",
    }

    getFileContentFromInput(this, function(content) {
        updateFormFromDataList(parseTemplateFromFileContent(content), mapping);
    });
});

$('#templateForFillAdmissionForm').on('change', function() {
    var mapping = {
        "Наименование компании": "legal_entity_name",
        "ФИО руководителя": "chief_full_name",
        "Телефон руководителя": "chief_number",
        "ИНН": "inn",
        "Дата допуска": "date",
        "Цель посещения": "visit_purpose",
        "Пункт расопряжения провительства": "order_point",
        "Фамилия": "surname",
        "Имя": "name",
        "Отчество": "patronymic",
        "Должность": "recipient_position",
        "Серия паспорта": "passport_series",
        "Номер паспорта": "passport_number",
        "Дата выдачи паспорта": "passport_date",
        "Кем выдан паспорт": "passport_place",
        "Электронная почта": "email",
        "Контактный телефон": "phone",
        "Тип автомобиля": "car_type",
        "Марка автомобиля": "car_brand",
        "Модель автомобиля": "car_model",
        "Гос. номер автомобиля": "car_number",
        "Цвет автомобиля": "car_color"
    }

    getFileContentFromInput(this, function(content) {
        updateFormFromDataList(parseTemplateFromFileContent(content), mapping);
    });
});


$('#addNewPeople').on('click',function() {
    countPass += 1;
    template = $("#admissionTmpl").html();
    if(!template) {return false}
    var compiled = _.template(template);

    $('.jsAdmissionPeople').append(compiled({
        countPass: countPass
    }))

    setTimeout(function() {
        $('input').focus(function(){
            $(this).parents('.input-place').addClass('focused');
        });
        
        $('input').blur(function(){
            if(!$.trim(this.value).length) {
                $(this).removeClass('filled');
                $(this).parents('.input-place').removeClass('focused');
            } else {
                $(this).addClass('filled');
            }
        });
        $('[name="phone"], [name="chief_number"]').inputmask({
            mask: "+(7)999-999-99-99",
            showMaskOnHover: false,
            greedy: false
        });
        $('select, input').styler();
    }, 200)

    $('input[name ="birth_date"]').datepicker({
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
        })  

    $('input[name ="passport_date"]').datepicker({
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
        })
})

$('#removeNewPeople').on('click',function(){
    if($(tableMain).find('.table__block').length==1){
        return;
    }
    else{
        countPass -= 1;
        $(".jsAdmissionPeople .table__block:last-child").remove()
        setTimeout(function() {
            $('select, input').styler();
        }, 200)
    }
});

//$('.form-input.jsMultidatespicker').on('blur', function(){
//    const datepickerVal= $(this).val()
//    const dateArray = datepickerVal.split(",")
//
//    const date = new Date()
//    //today in string and date formats
//    const todayYear = date.getFullYear().toString()
//    const todayMonth = Number(date.getMonth()+1).toString()
//    const todayDay = date.getDate().toString()
//    const todayStr = todayDay.concat(`.0${todayMonth}.`,todayYear)
//    let todayParts = todayStr.split('.').reverse()
//    let todayDate = new Date(todayParts[0], todayParts[1] - 1, todayParts[2]).toDateString()
//
//    //tomorrow in string and date formats
//    let tomorrowDate = new Date(todayDate)
//    tomorrowDate.setDate(tomorrowDate.getDate() + 1)
//    tomorrowYear = tomorrowDate.getFullYear().toString()
//    tomorrowMonth = Number(tomorrowDate.getMonth()+1).toString()
//    tomorrowDay = tomorrowDate.getDate().toString()
//    tomorrowStr = tomorrowDay.concat(`.0${tomorrowMonth}.`,tomorrowYear)
//
//
//    const validDates = dateArray.map((item,index)=> {
//        item = item.trim()
//        let parts = item.split('.').reverse()
//        let mydate = new Date(parts[0], parts[1] - 1, parts[2]).toDateString();
//
//        if(todayDate > mydate || ( (item.substring(6,10) - date.getFullYear().toString()) > 1)) {
//            if(index === 1){
//                item = tomorrowStr
//            }
//            else {
//                item = todayStr
//            }
//        }
//        else {
//            item = item.substring(0,10)
//        }
//        return item;
//    })
//    $(this).val(validDates.join(", "))
//})




/*! jQuery UI - v1.12.1 - 2018-07-18
* http://jqueryui.com
* Includes: keycode.js, widgets/datepicker.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,n)}function n(){t.datepicker._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function o(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.ui=t.ui||{},t.ui.version="1.12.1",t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.extend(t.ui,{datepicker:{version:"1.12.1"}});var a;t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return o(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,a){var r,l,h,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),o(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(l=document.documentElement.clientWidth,h=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+c,h/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),a===n&&(a=null))},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,a,r,l,h=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):h?"all"===i?t.extend({},h.settings):this._get(h,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),h&&(this._curInst===h&&this._hideDatepicker(),a=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(h,"min"),l=this._getMinMaxDate(h,"max"),o(h.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(h.settings.minDate=this._formatDate(h,r)),null!==l&&void 0!==n.dateFormat&&void 0===n.maxDate&&(h.settings.maxDate=this._formatDate(h,l)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),h),this._autoSize(h),this._setDate(h,a),this._updateAlternate(h),this._updateDatepicker(h)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(i){if(i=i.target||i,"input"!==i.nodeName.toLowerCase()&&(i=t("input",i.parentNode)[0]),!t.datepicker._isDisabledDatepicker(i)&&t.datepicker._lastInput!==i){var s,n,a,r,l,h,c;s=t.datepicker._getInst(i),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),a=n?n.apply(i,[i,s]):{},a!==!1&&(o(s.settings,a),s.lastVal=null,t.datepicker._lastInput=i,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(i.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(i),t.datepicker._pos[1]+=i.offsetHeight),r=!1,t(i).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),l={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),l=t.datepicker._checkOffset(s,l,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:l.left+"px",top:l.top+"px"}),s.inline||(h=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",e(t(i))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?s.dpDiv.show(h,t.datepicker._get(s,"showOptions"),c):s.dpDiv[h||"show"](h?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))}},_updateDatepicker:function(e){this.maxRows=4,a=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),o=s[1],r=17,l=e.dpDiv.find("."+this._dayOverClass+" a");l.length>0&&n.apply(l.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),o>1&&e.dpDiv.addClass("ui-datepicker-multi-"+o).css("width",r*o+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),h=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>l&&l>n?Math.abs(i.left+n-l):0),i.top-=Math.min(i.top,i.top+o>h&&h>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,l=0,h=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(l).match(o);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];return i.substr(l,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],l+=s.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+l},x=function(){if(i.charAt(l)!==e.charAt(n))throw"Unexpected literal at position "+l;l++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",u,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(i.length>l&&(a=i.substr(l),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,l=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},h=function(t,e,i){var s=""+e;if(l(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return l(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||l("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=h("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=h("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=h("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=l("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),l=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,h=l.exec(i);h;){switch(h[2]||"d"){case"d":case"D":r+=parseInt(h[1],10);break;case"w":case"W":r+=7*parseInt(h[1],10);break;case"m":case"M":a+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}h=l.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,l,h,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,T,I,M,P,S,N,H,z,A,O,E,W,F,L,R=new Date,Y=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),B=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),X=this._get(t,"stepMonths"),$=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),J=this._getMinMaxDate(t,"min"),Q=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),Q)for(e=this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth()-U[0]*U[1]+1,Q.getDate())),e=J&&J>e?J:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-X,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+X,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:Y,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",h=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(B?l:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(B?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),T=" ui-corner-all",I="",$){if(I+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:I+=" ui-datepicker-group-first",T=" ui-corner-"+(B?"right":"left");break;case U[1]-1:I+=" ui-datepicker-group-last",T=" ui-corner-"+(B?"left":"right");break;default:I+=" ui-datepicker-group-middle",T=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&0===k?B?o:s:"")+(/all|right/.test(T)&&0===k?B?s:o:"")+this._generateMonthYearHeader(t,Z,te,J,Q,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)P=(w+c)%7,M+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[P]+"'>"+p[P]+"</span></th>";for(I+=M+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),N=(this._getFirstDayOfMonth(te,Z)-c+7)%7,H=Math.ceil((N+S)/7),z=$?this.maxRows>H?this.maxRows:H:H,this.maxRows=z,A=this._daylightSavingAdjust(new Date(te,Z,1-N)),O=0;z>O;O++){for(I+="<tr>",E=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(A)+"</td>":"",w=0;7>w;w++)W=m?m.apply(t.input?t.input[0]:null,[A]):[!0,""],F=A.getMonth()!==Z,L=F&&!v||!W[0]||J&&J>A||Q&&A>Q,E+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(A.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===A.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+W[1]+(A.getTime()===G.getTime()?" "+this._currentClass:"")+(A.getTime()===Y.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+A.getMonth()+"' data-year='"+A.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":L?"<span class='ui-state-default'>"+A.getDate()+"</span>":"<a class='ui-state-default"+(A.getTime()===Y.getTime()?" ui-state-highlight":"")+(A.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+A.getDate()+"</a>")+"</td>",A.setDate(A.getDate()+1),A=this._daylightSavingAdjust(A);I+=E+"</tr>"}Z++,Z>11&&(Z=0,te++),I+="</tbody></table>"+($?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=I}y+=x}return y+=h,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var l,h,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";
        if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(l=s&&s.getFullYear()===i,h=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!l||c>=s.getMonth())&&(!h||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker});