function showData(id) {
    $.ajax({
        type: "get",
        url: "/api/users/" + id,
        data: id,
        contentType: "application/json",
        dataType: 'json',
        success: function(response) {
            $('#txtId1').val(response.id)
            $('#txtfirtName1').val(response.firstName);
            $('#txtLastName1').val(response.lastName);
            $('#txtEmail1').val(response.email);
            // console.log(response);
            $('#modal-update-id').modal('show');
        }
    });
}

function updateUser(id, user) {
    $.ajax({
        type: "put",
        url: "/api/users/" + id,
        data: JSON.stringify(user),
        contentType: "application/json",
        success: function(response) {
            if (response != null) {
                alert("sua thành công");
                //$('#modal-id').modal('hide');
                $(document).ready(function() {
                    $.ajax({
                        type: "GET",
                        url: "/",
                        dataType: "html",
                    }).done(function(ketqua) {
                        $('#modal-update-id').modal('hide');
                        window.location.reload(true);
                    });
                });
            }
            console.log(response);
        }
    });
}
$(document).ready(function() {
    //validate form update users
    $('#updateUser').submit(function(event) {
        var id = $('#txtId1').val();
        var first_name = $('#txtfirtName1').val();
        if (first_name == "") {
            $('#firstname1').text('firstname khong duoc bo trong');
        }
        var last_name = $('#txtLastName1').val();
        if (last_name == "") {
            $('#lastname1').text('lastname khong duoc bo trong');
        }
        var email = $('#txtEmail1').val();
        if (email == "") {
            $('#email1').text('email khong duoc bo trong');
        }
        var user = { firstName: first_name, lastName: last_name, email: email };
        event.preventDefault();
        updateUser(id, user);
    });

});