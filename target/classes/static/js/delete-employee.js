function deleteData(id) {
    $.ajax({
        type: "delete",
        url: "/api/users/" + id,
        data: id,
        contentType: "application/json",
        success: function(response) {
            console.log(response);
            $(document).ready(function() {
                $.ajax({
                    type: "GET",
                    url: "/",
                    dataType: "html",
                }).done(function(ketqua) {
                    window.location.reload(true);
                });
            });
        },
        error: function() {
            alert("Xoa ban ghi co" + id + " khong thanh cong");
        }

    });
}
$(document).ready(function() {
    //xoa all checkbox
    $('#checkall').change(function() {
        if (this.checked) {
            $('#table-employee input').each(function() {
                $(this).prop('checked', true);
            });
        } else {
            $('#table-employee input').each(function() {
                $(this).prop('checked', false);
            });
        }
    });
    //xoa 1 checkbox
    $('#xoa-employee').click(function() {
        $('#table-employee > tbody input:checked').each(function() {
            var ma_user = $(this).val();
            var This = $(this);
            This.closest("tr").remove();
            $.ajax({
                url: "/api/users/delete",
                type: "get",
                data: {
                    userId: ma_user,
                },
                success: function(value) {
                    This.closest("tr").remove();
                }
            });
        });
    });
});