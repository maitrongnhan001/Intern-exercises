//click show the select country option
$('#country-select').click(() => {
    if ($('#list-option-countries').hasClass('hide')) {
        $('#list-option-countries').removeClass('hide');
        $('#list-option-countries').addClass('show');
    } else {
        $('#list-option-countries').removeClass('show');
        $('#list-option-countries').addClass('hide');
    }
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
    $('#list-option-countries').removeClass('show');
    $('#list-option-countries').addClass('hide');
})

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
    $('#list-option-countries').removeClass('show');
    $('#list-option-countries').addClass('hide');
})