var taskListData = [];
var itemListData = [];

function populateTaskTable() {
    var tableTaskContent = '';

    $.getJSON('/chores', function(data) {
        $.each(data, function(){
            console.log(data);
            tableTaskContent += '<a href="#" class="list-group-item">';
            tableTaskContent += '<i class="fa fa-comment fa-fw"></i> ' + this.name;
            tableTaskContent += '<span class="pull-right text-muted small"><em>';
            tableTaskContent += 'Last Done by ' + this.lastPerson + ' at ' + this.lastDate;
            tableTaskContent += '</em> </span> </a>'
            $('#taskTable').append(tableTaskContent);
        });
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