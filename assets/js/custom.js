//Custom Scripts
$(document).ready( function() {

	var showMenu = false;

    $('.header__movil__menu').on("click", function(){
        $(".submenu").slideToggle();
        showMenu = !showMenu;
        if(showMenu == true){
            $('.header__movil__menu img').attr('src', '/img/close.svg');
        }else{
            $('.header__movil__menu img').attr('src', '/img/menu.svg');
        }
    });

    $(window).resize(function(){
        if( $(window).width() > 767){
            $(".submenu").hide();
            $('.header__movil__menu img').attr('src', '/img/menu.svg');
        }
    });

    $(".open-chat").on("click", function(){
        $crisp.push(["do", "chat:open"])
    });

    $(".header__nav__item__link").on("click", function(){
        $(".header__nav__item__link").removeClass("current");

        $(this).addClass("current");
    });

    //efect logos random
    var randomLogos;
    var elementsLogos = [
        {
            href: 'http://cecaff11.refereepro.com/',
            src: 'cliente1.jpg',
            title: 'CECAFF 11'
        },
        {
            href: 'http://ligapremiumo2.refereepro.com/',
            src: 'cliente2.jpg',
            title: 'Liga Premium 02'
        },
        {
            href: 'http://www.ligaumh.com/mod/soccer/index.aspx',
            src: 'cliente3.jpg',
            title: 'Liga UMH'
        },
        {
            href: 'http://scoolgames.refereepro.com/',
            src: 'cliente4.jpg',
            title: 'school games'
        },
        {
            href: 'http://ligacecaff.com/',
            src: 'cliente5.jpg',
            title: 'CECAFF'
        },
        {
            href: 'http://ligalasjuntas.refereepro.com/',
            src: 'cliente6.jpg',
            title: 'Liga las juntas'
        },
        {
            href: 'https://web.asdeporte.com/',
            src: 'cliente7.jpg',
            title: 'ASDeporte'
        },
        {
            href: 'http://copatigres2018.refereepro.com/',
            src: 'cliente8.jpg',
            title: 'Torneo Internacional de academias Tigres'
        },
        {
            href: 'http://jetsports.refereepro.com/',
            src: 'cliente9.jpg',
            title: 'Jetsports marketing'
        },
        {
            href: 'http://www.atlasfc.com.mx/',
            src: 'cliente11.jpg',
            title: 'Atlas FC'
        },
        {
            href: 'http://deportivoarenapremier.refereepro.com/',
            src: 'cliente12.jpg',
            title: 'Deportivo Arena Premier'
        },
        {
            href: 'http://internationalcup.refereepro.com/',
            src: 'cliente13.jpg',
            title: 'International CUP'
        },
        {
            href: 'http://cecaffcumbres.refereepro.com/',
            src: 'cliente14.jpg',
            title: 'CECAFF Cumbres'
        },
        {
            href: 'http://cecaffvallealto.refereepro.com/',
            src: 'cliente15.jpg',
            title: 'CECAFF Valle Alto'
        },
        {
            href: 'http://copaatlas.refereepro.com/',
            src: 'cliente17.jpg',
            title: 'Copa Atlas'
        },
        {
            href: 'http://copacecaff.refereepro.com/',
            src: 'cliente18.jpg',
            title: 'Copa CECAFF'
        },
        {
            href: 'http://cecaffsanpedro.refereepro.com/',
            src: 'cliente19.jpg',
            title: 'CECAFF San Pedro'
        },
        {
            href: 'http://ligadestaca.refereepro.com/',
            src: 'cliente22.jpg',
            title: 'Liga Destaca'
        },
        {
            href: 'http://elchefutbolsala.refereepro.com/',
            src: 'cliente23.jpg',
            title: 'Elche Fútbol Sala'
        },
        {
            href: 'https://mexmf.rsportz.com/',
            src: 'cliente24.jpg',
            title: 'Federación Mexicana de Minifutbol'
        },
        {
            href: 'http://ligadefutbolbase.refereepro.com/',
            src: 'cliente26.jpg',
            title: 'Liga de futbol base'
        },
        {
            href: 'http://interligasdelbajio.refereepro.com/',
            src: 'cliente27.jpg',
            title: 'Interligas del bajío'
        },
        {
            href: 'https://www.loginsport.com/player/home',
            src: 'cliente28.jpg',
            title: 'Login Sport'
        },
        {
            href: 'http://ligapapascach.refereepro.com/',
            src: 'cliente29.jpg',
            title: 'Liga de Papás del Anáhuac Chapalita'
        },
        {
            href: 'http://ligapolitecnico.refereepro.com/',
            src: 'cliente30.jpg',
            title: 'Liga Politécnico Coras A.C.'
        },
        {
            href: 'http://ligapremiertepepan.refereepro.com/',
            src: 'cliente31.jpg',
            title: 'Liga Santa María Tepepan'
        },
        {
            href: 'http://unidaddeportiva95.refereepro.com/',
            src: 'cliente33.jpg',
            title: 'Unidad Deportiva 95'
        },
        {
            href: 'http://fu7bolxtremo.refereepro.com/',
            src: 'cliente34.jpg',
            title: 'Fu7bol Xtremo Querétaro'
        },
        {
            href: 'http://laligaqueretaro.refereepro.com/',
            src: 'cliente35.jpg',
            title: 'La liga querétaro'
        }
    ];

    function logos(min, max) {
        if (max > 0) {
            var rept = 0;
            var end = 0;
            arraynum = [];
            while (rept != -1) {
                for (var i = 1; i <= max; i++) {
                    var numaleatorio = Math.floor(Math.random() * (max + 1));
                    if (arraynum.indexOf(numaleatorio) < 0 && numaleatorio != 0) {
                        arraynum.push(numaleatorio);
                        end++;
                    }
                    end == max ? rept = -1 : false;
                }
            }
        }
        return arraynum;
    }

    if ($(window).width() > 767){
        var pathclients = "./img/clients/";
        setInterval(function () {
            randomLogos = logos(1, 29);
            $('.stats__icons--top > a:nth-child(3)').attr("href", elementsLogos[randomLogos[1]].href).attr("target", "_blank");
            $('.stats__icons--top > a:nth-child(3) img').attr("src", pathclients+elementsLogos[randomLogos[1]].src).css({
                'animation': 'logo .6s 1 linear'
            });
            setTimeout(function () {
                $('.stats__icons--bottom > a:nth-child(7)').attr("href", elementsLogos[randomLogos[2]].href).attr("target", "_blank");
                $('.stats__icons--bottom > a:nth-child(7) img').attr("src", pathclients+elementsLogos[randomLogos[2]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 3000)
            setTimeout(function () {
                $('.stats__icons--top > a:nth-child(1)').attr("href", elementsLogos[randomLogos[3]].href).attr("target", "_blank");
                $('.stats__icons--top > a:nth-child(1) img').attr("src", pathclients+elementsLogos[randomLogos[3]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 6000)
            setTimeout(function () {
                $('.stats__icons--bottom > a:nth-child(3)').attr("href", elementsLogos[randomLogos[4]].href).attr("target", "_blank");
                $('.stats__icons--bottom > a:nth-child(3) img').attr("src", pathclients+elementsLogos[randomLogos[4]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 9000)
            setTimeout(function () {
                $('.stats__icons--top > a:nth-child(7)').attr("href", elementsLogos[randomLogos[5]].href).attr("target", "_blank");
                $('.stats__icons--top > a:nth-child(7) img').attr("src", pathclients+elementsLogos[randomLogos[5]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 12000)
            setTimeout(function () {
                $('.stats__icons--bottom > a:nth-child(1)').attr("href", elementsLogos[randomLogos[6]].href).attr("target", "_blank");
                $('.stats__icons--bottom > a:nth-child(1) img').attr("src", pathclients+elementsLogos[randomLogos[6]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 15000)
            setTimeout(function () {
                $('.stats__icons--top > a:nth-child(5)').attr("href", elementsLogos[randomLogos[7]].href).attr("target", "_blank");
                $('.stats__icons--top > a:nth-child(5) img').attr("src", pathclients+elementsLogos[randomLogos[7]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 18000)
            setTimeout(function () {
                $('.stats__icons--bottom > a:nth-child(5)').attr("href", elementsLogos[randomLogos[8]].href).attr("target", "_blank");
                $('.stats__icons--bottom > a:nth-child(5) img').attr("src", pathclients+elementsLogos[randomLogos[8]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 21000)
            setTimeout(function () {
                $('.stats__icons--top > a:nth-child(8)').attr("href", elementsLogos[randomLogos[9]].href).attr("target", "_blank");
                $('.stats__icons--top > a:nth-child(8) img').attr("src", pathclients+elementsLogos[randomLogos[9]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 24000)
            setTimeout(function () {
                $('.stats__icons--bottom > a:nth-child(2)').attr("href", elementsLogos[randomLogos[10]].href).attr("target", "_blank");
                $('.stats__icons--bottom > a:nth-child(2) img').attr("src", pathclients+elementsLogos[randomLogos[10]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 27000)
            setTimeout(function () {
                $('.stats__icons--top > a:nth-child(2)').attr("href", elementsLogos[randomLogos[11]].href).attr("target", "_blank");
                $('.stats__icons--top > a:nth-child(2) img').attr("src", pathclients+elementsLogos[randomLogos[11]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 30000)
            setTimeout(function () {
                $('.stats__icons--bottom > a:nth-child(6)').attr("href", elementsLogos[randomLogos[12]].href).attr("target", "_blank");
                $('.stats__icons--bottom > a:nth-child(6) img').attr("src", pathclients+elementsLogos[randomLogos[12]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 33000)
            setTimeout(function () {
                $('.stats__icons--top > a:nth-child(6)').attr("href", elementsLogos[randomLogos[13]].href).attr("target", "_blank");
                $('.stats__icons--top > a:nth-child(6) img').attr("src", pathclients+elementsLogos[randomLogos[13]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 36000)
            setTimeout(function () {
                $('.stats__icons--bottom > a:nth-child(4)').attr("href", elementsLogos[randomLogos[14]].href).attr("target", "_blank");
                $('.stats__icons--bottom > a:nth-child(4) img').attr("src", pathclients+elementsLogos[randomLogos[14]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 39000)
            setTimeout(function () {
                $('.stats__icons--top > a:nth-child(4)').attr("href", elementsLogos[randomLogos[15]].href).attr("target", "_blank");
                $('.stats__icons--top > a:nth-child(4) img').attr("src", pathclients+elementsLogos[randomLogos[15]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 42000)
            setTimeout(function () {
                $('.stats__icons--bottom > a:nth-child(8)').attr("href", elementsLogos[randomLogos[16]].href).attr("target", "_blank");
                $('.stats__icons--bottom > a:nth-child(8) img').attr("src", pathclients+elementsLogos[randomLogos[16]].src).css({
                    'animation': 'logo .6s 1 linear'
                });
            }, 45000)
            setTimeout(function () {
                $('.stats__icons > a img').removeAttr('style');
            }, 46000)
        }, 48000)
    }
    
    //silider
    if ($(".home").length > 0) {
        var slider = $('.stats .owl-carousel');
        slider.owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 7000,
            autoplaySpeed: 1000,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    slideBy: 1
                },
                1023: {
                    items: 2,
                    slideBy: 2
                }
            }
        });

        $('.stats__testimonial__arrow--left').click(function () {
            slider.trigger('prev.owl.carousel');
        });

        $('.stats__testimonial__arrow--right').click(function () {
            slider.trigger('next.owl.carousel');
        });
    }

    //btn-demo
    $('.btn-demo').on('click', function(){
        $('#perfil1').attr('checked', true);
        $('#organizer').addClass("profile__visible");
        $('#refere').removeClass("profile__visible");
        $('#member').removeClass("profile__visible");
        $('#follower').removeClass("profile__visible");
    });

    //btn-referee
    $('.btn-referee').on('click', function(){
        $('#perfil2').attr('checked', true);
        $('#organizer').removeClass("profile__visible");
        $('#refere').addClass("profile__visible");
        $('#member').removeClass("profile__visible");
        $('#follower').removeClass("profile__visible");
    });

     //btn-member
    $('.btn-member').on('click', function(){
        $('#perfil3').attr('checked', true);
        $('#organizer').removeClass("profile__visible");
        $('#refere').removeClass("profile__visible");
        $('#member').addClass("profile__visible");
        $('#follower').removeClass("profile__visible");
    });

    //Control de perfiles en formulario
    $('#perfil1').on('change', function(){
        $("input[name=perfil]").parent().removeClass("on");
        $("input[name=perfil]").parent().addClass("off");

        if ($(this).is(':checked')) {
            $(this).parent().addClass("on");
            $(this).parent().removeClass("off");

            $('#organizer').addClass("profile__visible");
            $('#refere').removeClass("profile__visible");
            $('#member').removeClass("profile__visible");
            $('#follower').removeClass("profile__visible");
        }
    });
    $('#perfil2').on('change', function () {
        $("input[name=perfil]").parent().removeClass("on");
        $("input[name=perfil]").parent().addClass("off");

        if ($(this).is(':checked')) {
            $(this).parent().addClass("on");
            $(this).parent().removeClass("off");

            $('#refere').addClass("profile__visible");
            $('#organizer').removeClass("profile__visible");
            $('#member').removeClass("profile__visible");
            $('#follower').removeClass("profile__visible");
        }
    });
    $('#perfil3').on('change', function () {
        $("input[name=perfil]").parent().removeClass("on");
        $("input[name=perfil]").parent().addClass("off");

        if ($(this).is(':checked')) {
            $(this).parent().addClass("on");
            $(this).parent().removeClass("off");

            $('#member').addClass("profile__visible");
            $('#refere').removeClass("profile__visible");
            $('#organizer').removeClass("profile__visible");
            $('#follower').removeClass("profile__visible");
        }
    });
    $('#perfil4').on('change', function () {
        $("input[name=perfil]").parent().removeClass("on");
        $("input[name=perfil]").parent().addClass("off");

        if ($(this).is(':checked')) {
            $(this).parent().addClass("on");
            $(this).parent().removeClass("off");

            $('#follower').addClass("profile__visible");
            $('#refere').removeClass("profile__visible");
            $('#organizer').removeClass("profile__visible");
            $('#member').removeClass("profile__visible");
        }
    });
    $('#perfil5').on('change', function () {
        $("input[name=perfil]").parent().removeClass("on");
        $("input[name=perfil]").parent().addClass("off");

        if ($(this).is(':checked')) {
            $(this).parent().addClass("on");
            $(this).parent().removeClass("off");

            $('.contact__form__hide').removeClass("profile__visible");
        }
    });

	$('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            var topHeight = 48;

            $(".submenu").hide();
            $('.header__movil__menu img').attr('src', '/img/menu.svg');

            if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top - topHeight
                }, 1000);
                return false;
            }

        }
    });

    //Animaciones en scroll
    $(window).scroll(function(event){

        var st = $(this).scrollTop();

        var sectionWhatIs = $(".what-is").offset().top - $(this).height() * .85;
        var sectionRef = $(".ref").offset().top - $(this).height() + 150;
        var sectionCm = $(".cm").offset().top - $(this).height() * .5;
        var sectionFans = $(".fans").offset().top - $(this).height() * .5;
        var sectionHowWorksVideo = $(".how-works__player").offset().top - 200;

        var whatIsCircle = $(".what-is__logos").offset().top - 345;
        var whatIsStartDevice = $(".what-is__start__devices").offset().top -100;

        var logo1 = $(".what-is__description__circle__box--top");
        var logo2 = $(".what-is__description__circle__box--right");
        var logo3 = $(".what-is__description__circle__box--left");

        if (st > 80) {
            if( ! $(".header").hasClass('fixed') ){
                $(".header").addClass('fixed');
            }
        } else {
            $(".header").removeClass('fixed');
        }

        if(st > sectionWhatIs){
            $(".section-video-banner").addClass("visible");
        }else{
            $(".section-video-banner").removeClass("visible");
        }

        if(st > sectionRef){
            $(".section-how-works-ref").addClass("visible");
        }else{
            $(".section-how-works-ref").removeClass("visible");
        }

        if(st > sectionCm){
            $(".section-ref-cm").addClass("visible");
        }else{
            $(".section-ref-cm").removeClass("visible");
        }

        if(st > sectionFans){
            $(".section-cm-fans").addClass("visible");
        }else{
            $(".section-cm-fans").removeClass("visible");
        }

        if(st > whatIsCircle){     

            //$(".what-is__logos").addClass("onmove");
            //Falta animación de logos
        }else{
            //$(".what-is__logos").removeClass("onmove");
        }

        if(st > sectionHowWorksVideo){     
            //$(".what-is__logos").addClass("onmove");
            //Falta animación de logos
        }else{
            //$(".what-is__logos").removeClass("onmove");
        }

        if ($(window).width() > 1023) {

            var elemento3 = $(".ref").offset().top - $(this).height() + 150;
            var elemento4 = $(".cm").offset().top - 500;
            var elemento5 = $(".fans").offset().top - 500;
            var elemento6 = $(".stats").offset().top;
            var footer = $(".footer").offset().top;

             //var animations svg 1
            var svg1 = document.querySelector('#svg-ref__path');
            var pathLength1 = svg1.getTotalLength();
            svg1.style.strokeDasharray = pathLength1 + ' ' + pathLength1;
            svg1.style.strokeDashoffset = pathLength1;
            //svg1.getBoundingClientRect();
            //svg 2
            var svg2 = document.querySelector('#animation-svg2-path');
            var pathLength2 = svg2.getTotalLength();
            svg2.style.strokeDasharray = pathLength2 + ' ' + pathLength2;
            svg2.style.strokeDashoffset = pathLength2;
            svg2.getBoundingClientRect();
            //svg3
            var svg3 = document.querySelector('#animation-svg3-path');
            var pathLength3 = svg3.getTotalLength();
            svg3.style.strokeDasharray = pathLength3 + ' ' + pathLength3;
            svg3.style.strokeDashoffset = pathLength3;
            svg3.getBoundingClientRect();
            var scrollPercentage;
            var drawLength;

            if(st > elemento3){

               scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) - 0.2510233496684924;
                drawLength = (pathLength1 * scrollPercentage) * 12;
                svg1.style.strokeDashoffset = pathLength1 - drawLength;
                if (scrollPercentage >= 0.99) {
                    svg1.style.strokeDasharray = "none";
                } else {
                    svg1.style.strokeDasharray = pathLength1 + ' ' + pathLength1;
                }

            }

            if(st > elemento4){
                scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) - 0.417272462925269;
                drawLength = (pathLength2 * scrollPercentage) * 15;
                svg2.style.strokeDashoffset = pathLength2 - drawLength;
                if (scrollPercentage >= 0.99) {
                    svg2.style.strokeDasharray = "none";
                } else {
                    svg2.style.strokeDasharray = pathLength2 + ' ' + pathLength2;
                }
            }
            if(st > elemento5){
                scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) - 0.5662692643210235;
                drawLength = (pathLength3 * scrollPercentage) * 15;
                svg3.style.strokeDashoffset = pathLength3 - drawLength;
                if (scrollPercentage >= 0.99) {
                    svg3.style.strokeDasharray = "none";
                } else {
                    svg3.style.strokeDasharray = pathLength3 + ' ' + pathLength3;
                }
            }

            if(st > footer){
                $(".header").hide();
            }else{
                $(".header").show();
            }
        }
    });

    //Envio de formulario
    $("#send-form").on("click", function (event) {
        var respuesta = grecaptcha.getResponse();
        var isValidate = false;

        var form = $(".contact__form");

        form.find("#send-form").hide();
        form.find(".contact__loading").show();

        var selector = $("#form-contact");

        selector.validate({
            rules: {
                name: { required: true },
                email: { required: true, email: true },
                city: { required: true },
                country: { required: true }
            },
            messages: {
                name: { required: "" },
                email: { required: "", email: "Hay un error en el formato de este correo" },
                city: { required: "" },
                country: { required: "" }
            }
        });

        var statusProfile = true;

        if( $("#organizer").hasClass("profile__visible") ){
            if( $("#organization").val() == ''){
                $("#organization").addClass("error");
                statusProfile = false;
            }else{
                $("#organization").removeClass("error");
            }

            if( !$('input:radio[name=duration]').is(':checked') ){
                $(".radio-duration-msg").show();
                statusProfile = false;
            }else{
                $(".radio-duration-msg").hide();
            }

            if( !$('input:radio[name=teams]').is(':checked') ){
                $(".radio-teams-msg").show();
                statusProfile = false;
            }else{
                $(".radio-teams-msg").hide();
            }
        }
        if( $("#refere").hasClass("profile__visible") ){
            if( $("#organization_refere").val() == ''){
                $("#organization_refere").addClass("error");
                statusProfile = false;
            }else{
                $("#organization_refere").removeClass("error");
            }

            if( !$('input:radio[name=refere_teams]').is(':checked') ){
                $(".radio-refere-teams-msg").show();
                statusProfile = false;
            }else{
                $(".radio-refere-teams-msg").hide();
            }

        }
        if( $("#member").hasClass("profile__visible") ){
            if( $("#organization_member").val() == ''){
                $("#organization_member").addClass("error");
                statusProfile = false;
            }else{
                $("#organization_member").removeClass("error");
            }

        }
        if( $("#follower").hasClass("profile__visible") ){
            if( $("#organization_follower").val() == ''){
                $("#organization_follower").addClass("error");
                statusProfile = false;
            }else{
                $("#organization_follower").removeClass("error");
            }
            if( $("#message_follower").val() == ''){
                $("#message_follower").addClass("error");
                statusProfile = false;
            }else{
                $("#message_follower").removeClass("error");
            }
        }

        isValidate = selector.valid() && statusProfile;

        if(isValidate) {
            if (respuesta != "" && respuesta != undefined) {
                
                var postdata = {
                    profile : $('input:radio[name=perfil]:checked').val(),
                    name : $("#name").val(),
                    city : $("#city").val(),
                    email : $("#email").val(),
                    country : $("#country").val(),
                    phone : $("#phone").val(),
                    organization: $("#organization").val(),
                    organization_duration : $('input:radio[name=duration]:checked').val(),
                    organization__teams : $('input:radio[name=teams]:checked').val(),
                    organization__message : $('#message_organizer').val(),
                    referee_organization: $("#organization_refere").val(),
                    referee_teams : $('input:radio[name=refere_teams]:checked').val(),
                    referee_message : $('#message_refere').val(),
                    member_organization: $("#organization_member").val(),
                    member_message : $('#message_member').val(),
                    follower_organization: $("#organization_follower").val(),
                    follower_message : $('#message_follower').val()
                };

                $.ajax({
                    url: form.attr("action"),
                    type: 'POST',
                    data: postdata,
                    success: function (result) {

                        var json = JSON.parse(result);

                        if (json.status == 'error') {
                           form.find(".retro").addClass("error").html("Ocurrio un error en el intento de envío");

                        }else {
                            form.find(".thank-you").show();
                            clearForm();
                        }

                        form.find("#send-form").show();
                        form.find(".contact__loading").hide();
                        grecaptcha.reset();
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        form.find("#send-form").show();
                        form.find(".contact__loading").hide();
                        form.find(".retro").addClass("error").html("Ocurrio un error en el intento de envío");
                        grecaptcha.reset();
                    }
                });
            } else {
                form.find("#send-form").show();
                form.find(".contact__loading").hide();
                form.find(".retro").addClass("error").html("Indique en la casilla que No es un robot");
            }
        } else {
            //Mostrar mensaje de error
            form.find("#send-form").show();
            form.find(".contact__loading").hide();
            form.find(".retro").addClass("error").html("Ingrese todos los datos requeridos");
        }
    });
    
    //Formato custom del selector
    $('select').select2({
        placeholder: 'Nombre de la organización (ej. Copa Chivas, Liga Córdica...)',
        templateResult: formatLeague
    });

    //Animacion de texto en footer
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 1px solid #1A1B1F}";
        document.body.appendChild(css);
    };

});

function formatLeague(league) {
    if (!league.id) {
        return league.text;
    }

    var $league = $(
        '<div class="select__item flexbox align-middle align-justify"><div class="selector__item__text"><img src="'+league.element.dataset.src+'" />' + league.text + '</div><div class="selector__item__icon"></div></div>'
    );
    return $league;
};

function clearForm() {
    $("input[type=text]").val('');
    $("textarea").val('');
    $("input:radio").removeAttr("checked");
}

var onloadCallback = function() {
    grecaptcha.render('captcha', {
      'sitekey' : '6Lel2YEUAAAAAFDzNKsZKu7Wf4ZYI84IOJUCBQVd',
      'theme' : 'dark'
    });
};