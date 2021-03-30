$(document).ready(function() {
    /* su kien show popup */
    $('#btn-add-user').off('click').on('click', function() {
        $('#modal-id').modal('show');
    });
    /* su kin them moi user */
    $('#btnSave').click(function(event) {
        var first_name = $('#txtfirtName').val();
        var last_name = $('#txtLastName').val();
        var email = $('#txtEmail').val();
        var user = { firstName: first_name, lastName: last_name, email: email };
        event.preventDefault();
        $.ajax({
            type: "post",
            url: "/api/users",
            data: JSON.stringify(user),
            contentType: "application/json",
            success: function(response) {
                console.log(response);
                if (response != null) {
                    alert("thêm thành công");
                    $(document).ready(function() {
                        $.ajax({
                            type: "GET",
                            url: "/",
                            dataType: "html",
                        }).done(function(ketqua) {
                            window.$('#modal-id').modal('hide');
                            window.location.reload(true);
                        });
                    });
                    /*   $(document).ready(function() {
                          $.ajax({
                              type: "GET",
                              url: "/",
                              dataType: "html",
                          }).done(function(ketqua) {
                              window.$('#modal-id').modal('hide');
                              $('#saveUser').trigger('reset');
                              $('#main-user').html(ketqua);
                          });
                      }); */
                }
            },
            error: function() {
                alert("thêm thất bại");
            }
        });
    });
});