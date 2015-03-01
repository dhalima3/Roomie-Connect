
function populateTaskTable() {
    var tableTaskContent = '';

    $.getJSON('/chores', function(data) {
        $.each(data, function(){
            tableTaskContent += '<a href="#" class="list-group-item">';
            tableTaskContent += '<i class="fa fa-list fa-fw"></i> ' + this.name;
            tableTaskContent += '<span class="pull-right text-muted small"><em>';
            tableTaskContent += 'Last Done by ' + this.lastPerson + ' at ' + this.lastDate;
            tableTaskContent += '</em> </span> </a>'
        });
        $('#taskTable').append(tableTaskContent);
    });
}

function populateItemTable() {
    var tableItemContent = '';

    $.getJSON('/items', function(data2) {
        $.each(data2, function(){
            tableItemContent += '<a href="#" class="list-group-item">';
            tableItemContent += '<i class="fa fa-shopping-cart fa-fw"></i> ' + this.name;
            tableItemContent += '<span class="pull-right text-muted small"><em>';
            tableItemContent += 'Bought last by ' + this.lastPerson + ' at ' + this.lastDate;
            tableItemContent += '</em> </span> </a>'
        });
        $('#itemTable').append(tableItemContent);
    });
}

function populateBillTable() {
    var tableBillContent = '';

    $.getJSON('/bills', function(data) {
        $.each(data, function(){
            tableBillContent += '<a href="#" class="list-group-bill">';
            tableBillContent += '<i class="fa fa-money fa-fw"></i> ' + this.name;
            tableBillContent += '<span class="pull-right text-muted small"><em>';
            tableBillContent += '$' + this.amount;
            tableBillContent += '</em> </span> </a>'
        });
        $('#billTable').append(tableBillContent);
    });
}
// var tableEntry = '
// <a href="#" class="list-group-item">
//     <i class="fa fa-comment fa-fw"></i> New Comment
//     <span class="pull-right text-muted small"><em>4 minutes ago</em>
//     </span>
// </a>'

//No need to call document.ready because Javascript file is already included in 
//the end!  It's never going to call document.ready!!!

populateTaskTable();
populateItemTable();
populateBillTable();