$('#add_user').submit(function(event){
    alert("Data inserted succesfully")
})

$('#update_user').submit(function(event){
    event.preventDefault();


    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    var request = {
        'url': `http://localhost:3000/api/users/${data.id}`,
        'method': 'PUT',
        'data':data
    }
})

$.ajax(request).done(function(response){
    alert('Data updated succesfully')
})

if(window.location.pathname == '/') {
    $ondelete = $('.table tbody td a.delete');
    $ondelete.click(function(){
        var id = $(this).attr('data-id')

        var request = {
            'url': `http://localhost:3000/api/users/${data.id}`,
            'method': 'DELETE',
        }

        if(confirm('Do you really want to delete this record')){
            $.ajax(request).done(function(response){
                alert('Data deleted succesfully');
                location.reload()
            })
        }
    })
}