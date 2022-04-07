//click show the select country option
$('#country-select').click(() => {
    $('#list-option-countries').toggle(200);
});

//click choose country
$('#option-1').click(() => {
    $('#content-select').empty();

    //show the select country
    $('#content-select').append(`
        <div class="country-option">
            <img class="flag-option" src="./images/flag-asutralia.png" alt="flag-asutralia">
            <span class="name-country-option">Australia</span>
        </div>
    `);

    //hide the select country options
    $('#list-option-countries').toggle(200);
});

$('#option-2').click(() => {
    $('#content-select').empty();

    //show the select country
    $('#content-select').append(`
    <div class="country-option">
        <img class="flag-option" src="./images/flag-vietnam.png" alt="flag-vietnam">
        <span class="name-country-option">Vietnam</span>
    </div>
    `);

    //hide the select country options
    $('#list-option-countries').toggle(200);
});

//click to show menu
$('#icon-show-menu').click(() => {
    if ($(window).width() <= 700) {
        $('#col-menu').toggle(200);
        if ($('#content-icon-show-menu').hasClass('hide')) {
            $('#content-icon-show-menu').removeClass('hide');
            $('#content-icon-show-menu').addClass('icon-show-menu');
            $('#content-icon-close-menu').removeClass('icon-show-menu');
            $('#content-icon-close-menu').addClass('hide');
        } else {
            $('#content-icon-show-menu').removeClass('icon-show-menu');
            $('#content-icon-show-menu').addClass('hide');
            $('#content-icon-close-menu').removeClass('hide');
            $('#content-icon-close-menu').addClass('icon-show-menu');
        }
    }
});

$('.top-menu li').click(() => {
    if ($(window).width() <= 700) {
        $('#col-menu').toggle(200);
        $('#content-icon-show-menu').removeClass('hide');
        $('#content-icon-show-menu').addClass('icon-show-menu');
        $('#content-icon-close-menu').removeClass('icon-show-menu');
        $('#content-icon-close-menu').addClass('hide');
    }
});