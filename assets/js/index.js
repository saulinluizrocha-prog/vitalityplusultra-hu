const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'],monthMin = ['','','','','','','','','','','',''],days = ['vasárnap','hétfő','kedd','szerda','csütörtök','péntek','szombat'],daysMin = ['','','','','','',''],seasons = ['tél','tavasz','nyár','ősz'];function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {const _counterLength = 60;for (let counter = 0; counter < _counterLength; counter++) {innerDate(counter, 'date-');innerDate(counter, 'date')} function innerDate(counter, dateType) {let newCounter;dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000, _localDate = new Date(Date.now() + (newCounter * _msInDay)), _day = _localDate.getDate(), _month = _localDate.getMonth() + 1, _year = _localDate.getFullYear(); const dayDefault = addZero(_day), monthDefault = addZero(_month), defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter, nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) {const dateFormat = nodeList[i].dataset.format;dateFormat !== undefined && dateFormat !== ''? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)): nodeList[i].innerHTML = defaultDate} } function changeFormat(_day, _month, _year, format, counter) { let innerFormat = format; const testFormat = ["dd","mm","yyyy","monthFull","year"], dateFormat = { dd: _day, mm: addZero(_month), yyyy: _year, monthFull: getMonthName(_month, monthsName, false), year: getYearWithCounter(_year, counter), }; for (let i = 0; i < testFormat.length; i++) { let string = testFormat[i]; let regExp = new RegExp(string); innerFormat = innerFormat.replace(regExp, dateFormat[string]); } return innerFormat.split(' ').join(' ') } function getMonthName(_month, monthsName, bigFirstLetter, counter) { const monthCounter = !!counter ? counter : 0; let month; _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter; _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter; return changeFirstLetter(bigFirstLetter, monthsName[month - 1]) } function getYearWithCounter(year, counter) {return year + counter} function addZero(numb){return numb<10?'0'+numb:numb} function changeFirstLetter(isBig,str){return isBig&&str&&str.length>0?str[0].toUpperCase()+str.slice(1):str} }if (document.body.classList.contains('ev-date')) {document.addEventListener("DOMContentLoaded", function () {postDate(days, daysMin, months, monthMin, seasons)});}
function main() {
    // var c = window.country_code;
    // var d = $(".text__location");
    // if (c == "KZ") {
    //     d.text("Казахстане")
    // }

    function a() {
        var i = 0;
        $(".tabs__question .text__block").each(function () {
            var j = 0;
            $(this).find(":input").each(function () {
                if ($(this).is(":checked")) {
                    if (!$(this).hasClass("nosum")) {
                        j += $(this).val() * 1
                    }
                }
            });
            i += j
        });
        var h = i;
        if (h >= 0 && h < 10) {
            $(".popup__test-1").show();
            $(".block3 .first__window").hide();
            $(".block3 .second__window").show()
        } else {
            if (h > 9 && h < 19) {
                $(".popup__test-2").show();
                $(".block3 .first__window").hide();
                $(".block3 .second__window").show()
            } else {
                if (h > 18) {
                    $(".popup__test-3").show();
                    $(".block3 .first__window").hide();
                    $(".block3 .second__window").show()
                }
            }
        }
    }
    $(".popup__test .popup-close").click(function () {
        $(".popup__test").hide()
    });
    $(".popup__layer").click(function () {
        $(".popup__test").hide()
    });
    $(".popup__test .popup-btn").click(function () {
        $(".popup__test").hide()
    });
    var e = 0;
    $(".question__next").on("click", function (h) {
        h.preventDefault();
        var i = false;
        $(".tabs__question-active .text__block").each(function () {
            if (i) {
                return
            }
            if ($(this).find("input:checked").length == 0) {
                i = true
            }
        });
        if (i) {
            alert("Zodpovězte si všechny  otázky")
        } else {
            e++;
            $(".tabs__list .list__item").removeClass("active");
            $(".tabs__list .list__item").eq(e).addClass("active");
            $(".tabs__question").removeClass("tabs__question-active");
            $(".tabs__question").eq(e).addClass("tabs__question-active")
        }
    });
    $(".question__result-btn").on("click", function (h) {
        h.preventDefault();
        var i = false;
        $(".tabs__question-active .text__block").each(function () {
            if (i) {
                return
            }
            if ($(this).find("input:checked").length == 0) {
                i = true
            }
        });
        if (i) {
            alert("Zodpovězte si všechny  otázky")
        } else {
            a()
        }
    });
    $(".block8 .list__item").click(function () {
        var h = $(this).index();
        $(".content__block__right").removeClass("block__right-active");
        $(".content__block__right").eq(h).addClass("block__right-active");
        if ($(window).width() < "1024") {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(".content__block__right").eq(h).removeClass("block__right-active")
            } else {
                $(".list__item").removeClass("active");
                $(this).addClass("active")
            }
        } else {
            $(".list__item").removeClass("active");
            $(this).addClass("active")
        }
    });
    $(".review__open").click(function () {
        $(this).toggleClass("is-open").parent().find(".review__text").toggleClass("is-show")
    });
    $(".block11__reviews").slick({
        slidesToShow: 3,
        fade: false,
        variableWidth: true,
        speed: 200,
        centerMode: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                centerMode: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $(".block11__reviews").on("beforeChange", function (i, h, k, j) {
        $(".review__open").removeClass("is-open").parent().find(".review__text").removeClass("is-show")
    });

    $(".js-close, .js-overlay").click(function (e) {
        e.preventDefault();
        $(".popup-container").hide()
    });


    $(".btn-open").click(function () {
        $(".popup-container-1").show(),
            // $(".popup-container-1").mouseup(function (i) {
            //   var h = $(".popup-container");
            //   0 === h.has(i.target).length && (h.hide(), $(".popup-block-second").removeClass("active"), $(".popup-block-first").addClass("active"), $(".popup-review").val(""))
            // })
            $(".popup-block-second").removeClass("active"), $(".popup-block-first").addClass('active')
    }),
        $(".popup-btn").click(function () {
            if($(".popup-review").val().length > 5) {
                (
                    $(".popup-block-second").addClass("active"),
                        $(".popup-block-first").removeClass('active'),
                        $(".popup__textarea").removeClass("error")
                )
            } else {
                console.log(1)
                $(".popup__textarea").addClass("error")
            }
        }), $(".popup-close").click(function () {
        $(".popup-container").hide(), $(".popup-review").val(""), $(".popup-block-second").removeClass("active"), $(".popup-block-first").removeClass("active")
    });
    $(".block7__slider2").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        asNavFor: ".block7__slider1",
        touchMove: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $(".block7__slider1").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        asNavFor: ".block7__slider2",
        dots: false,
        touchMove: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true
            }
        }]
    });
    let slider1 = $(".slider__tabs");

    function f(i, h) {
        i.on("init", function () {
            setTimeout(function () {
                i.addClass("is-ready")
            }, 100)
        });
        i.not(".slick-initialized").slick(h)
    }

    function g(h) {
        if (h.hasClass("slick-initialized")) {
            h.slick("unslick")
        }
    }

    function b() {
        var h = ($(window).width()) < 768;
        if (h) {
            f(slider1, {
                adaptiveHeight: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: true,
                variableWidth: true,
                centerMode: true
            })
        } else {
            g(slider1)
        }
    }
    b();
    $(window).on("resize", b)
}


function Reviews() {
    // console.log('reviews');
    var inputFile = $('.js-input-file');
    var inputPhoto = $('.js-photo');
    var inputLoad = $('.js-load');
    var inputAge = $('.js-input-age');
    var reviewsForm = $('.js-reviews-form');


    var reviewsInputText = $('.reviews-input-text');
    var reviewsInputTextarea = $('.reviews-form__textarea');
    var reviewsInputTextareaJS = document.querySelector('.reviews-form__textarea');

    var inputAgeWrap = $('.r-form__wrap-input--years');
    var inputPlaceWrap = $('.input--place');


    var reviewsInputsWrap = $('.reviews-form__field-wrap');
    function loadImage() {
        inputFile.change(function (e) {
            var file = e.target.files[0];
            if (!file) {
                return;
            }
            var urlFile = window.URL.createObjectURL(file);
            var loadText = inputLoad.data('text');
            inputLoad.text("".concat(loadText));
            inputPhoto.css('background', "url(\"".concat(urlFile, "\") no-repeat center"));
            inputPhoto.css('backgroundSize', 'cover');
        });
    };


    inputAge.on('keyup', function () {
        if (Number($(this).val().slice(0, 2)) > 17 && Number($(this).val().slice(0, 2)) < 91) {
            inputAgeWrap.addClass('valid');
            inputAgeWrap.removeClass('invalid');
        } else {
            inputAgeWrap.addClass('invalid');
            inputAgeWrap.removeClass('valid');
        }
    });




    reviewsInputText.on('keyup', function () {
        var that = this;
        setTimeout(function () {
            var res = /[^a-zA-Zа-яА-ЯїЇєЄіІёЁ ]/g.exec(that.value);
            that.value = that.value.replace(res, '');


            if (that.value.replace(res, '').length < 2) {

                that.parentElement.classList.add('invalid');
                that.parentElement.classList.remove('valid');
            } else {
                that.parentElement.classList.remove('invalid');
                that.parentElement.classList.add('valid');
            }
        }, 0);
    });

    inputPlaceWrap.on('keyup', function () {
        var that = this;
        setTimeout(function () {
            var res = /[^a-zA-Zа-яА-ЯїЇєЄіІёЁ ]/g.exec(that.value);
            that.value = that.value.replace(res, '');


            if (that.value.replace(res, '').length < 2) {

                that.parentElement.classList.add('invalid');
                that.parentElement.classList.remove('valid');
            } else {
                that.parentElement.classList.remove('invalid');
                that.parentElement.classList.add('valid');
            }
        }, 0);
    });




    reviewsInputTextareaJS.addEventListener('input', function () {
        var that = this;

        if (that.value.length < 5) {
            that.parentElement.classList.add('invalid');
            that.parentElement.classList.remove('valid');
        } else {
            that.parentElement.classList.remove('invalid');
            that.parentElement.classList.add('valid');
        }
    })

    function submitForm() {
        var counter = 0;
        reviewsForm.submit(function (e) {
            e.preventDefault();

            if (Number(inputAge.val()) > 17 && Number(inputAge.val()) < 91 && reviewsInputTextarea.val().length !== 0 && inputPlaceWrap.val().length !== 0 && inputPlaceWrap.val().length !== 0) {
                e.preventDefault();

                reviewsInputsWrap.removeClass('invalid');
                reviewsInputsWrap.removeClass('valid');
                $('.reviews-form__star').removeClass('filled');

                $('.r-popup__title').text('Köszönjük! Visszajelzését elküldtük moderációra');
                counter = 1;
                reviewsForm.css('display', 'none');


            } else {
                reviewsInputsWrap.each(function (i) {
                    if (!reviewsInputsWrap[i].classList.contains('valid')) {
                        reviewsInputsWrap[i].classList.add('invalid');
                    }
                });
                e.preventDefault();
            }

        });
        $('.reviews__btn').on('click', function () {
            if (counter === 1) {
                $('.r-popup__title').text('Köszönjük visszajelzését, visszajelzése moderáción van');
            }
        });
    };
    loadImage();
    submitForm();
}

Reviews();

if (document.documentElement.clientWidth < 480) {
    window.addEventListener("scroll", function () {
        return setTimeout(main, 1000)
    }, {
        once: true,
        passive: true
    })
} else {
    main()
};