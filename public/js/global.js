
function populateChoreTable() {
    var tableChoreContent = '';
    var totalChoreAmount = 0;

    $.getJSON('/chores', function(data) {
        $.each(data, function(){
            tableChoreContent += '<a href="#" class="list-group-item">';
            tableChoreContent += '<i class="fa fa-list fa-fw"></i> ' + this.name;
            tableChoreContent += '<span class="pull-right text-muted small"><em>';
            tableChoreContent += 'Last Done by ' + this.lastPerson + ' at ' + this.lastDate;
            tableChoreContent += '</em> </span> </a>';
            totalChoreAmount++;
        });
        $('#choreTable').append(tableChoreContent);
        $('#totalChoreAmount').append(totalChoreAmount);
    });
}

function populateItemTable() {
    var tableItemContent = '';
    var totalItemAmount = 0;

    $.getJSON('/items', function(data2) {
        $.each(data2, function(){
            tableItemContent += '<a href="#" class="list-group-item">';
            tableItemContent += '<i class="fa fa-shopping-cart fa-fw"></i> ' + this.name;
            tableItemContent += '<span class="pull-right text-muted small"><em>';
            tableItemContent += 'Bought last by ' + this.lastPerson + ' at ' + this.lastDate;
            tableItemContent += '</em> </span> </a>';
            totalItemAmount++;
        });
        $('#itemTable').append(tableItemContent);
        $('#totalItemAmount').append(totalItemAmount);
    });
}

function populateBillTable() {
    var tableBillContent = '';
    var totalBillAmount = 0;

    $.getJSON('/bills', function(data) {
        $.each(data, function(){
            tableBillContent += '<a href="#" class="list-group-item">';
            tableBillContent += '<i class="fa fa-money fa-fw"></i> ' + this.name;
            tableBillContent += '<span class="pull-right text-muted small"><em>';
            tableBillContent += '$' + this.amount;
            tableBillContent += '</em> </span> </a>';
            totalBillAmount+=this.amount;
        });
        $('#billTable').append(tableBillContent);
        $('#totalBillAmount').append('$');
        $('#totalBillAmount').append(totalBillAmount);
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

populateChoreTable();
populateItemTable();
populateBillTable();