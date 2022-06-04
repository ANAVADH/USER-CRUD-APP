$("#add_user").submit(function(event){
    alert("User Added");
})


// $("#update_user").submit(function(event){
// event.preventDefault()

// var unindexed_array =$(this).serializeArray();
// console.log(unindexed_array);
// })



$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = { }

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
    


    var request = {
        "url" : `http://localhost:5000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})
