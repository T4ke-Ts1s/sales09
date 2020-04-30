$(function(){

    Data = new Date();
    Data = new Date(Data.getTime() + 1*24*60*60*1000);
    Year = Data.getFullYear();
    Month = Data.getMonth();
    Day = Data.getDate();
    // РџСЂРµРѕР±СЂР°Р·СѓРµРј РјРµСЃСЏС†Р°
    switch (Month)
    {
        case 0: fMonth="ianuarie"; break;
        case 1: fMonth="februarie"; break;
        case 2: fMonth="martie°"; break;
        case 3: fMonth="aprilie"; break;
        case 4: fMonth="mai"; break;
        case 5: fMonth="iunie"; break;
        case 6: fMonth="iulie"; break;
        case 7: fMonth="august"; break;
        case 8: fMonth="septembrie"; break;
        case 9: fMonth="octombrie"; break;
        case 10: fMonth="noiembrie"; break;
        case 11: fMonth="decembrie"; break;
    }
    // Р’С‹РІРѕРґ
    $('.m1-date').html(" "+Day+"&nbsp;"+fMonth+"&nbsp;"+Year+"." );
    // РІС‹РІРѕРґРёС‚ РІ С‚РµРі m1-date
    $('.rev-slider').slick({
        infinite: false,
        autoplay: false,
        dots: false,
        arrows: false,
        fade: false,
        speed: 300,
        slidesToShow: 3,
        prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
        nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>',
        responsive: [
            {
                breakpoint: 959,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
             scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});

