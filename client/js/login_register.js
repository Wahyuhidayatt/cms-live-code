function register() {
    if ($("#name").val() == "" || $("#email").val() == "" || $("#password").val() == "") {
        swal("Isi dulu")
    } else {
        $.ajax({
            url: "http://localhost:3000/api/users/register",
            type: "POST",
            data: {
                name: $("#name").val(),
                email: $("#email").val(),
                password: $("#password").val()
            },
            success: function(result) {
                if (result) {
                    window.location.href = "http://localhost:8080/login.html"
                }
            }
        });
    }
}

$(document).ready(function() {

  $.ajax({
      url: "http://localhost:3000/api/users/decode",
      type: "POST",
      data:{
          token: localStorage.getItem("token")
      },
      success: function(result) {
        if (result.username == "TokenExpiredError") {
          swal("Expired Login")
        }else if(result.username == false){
          swal("Invalid Login")
        }else if(result.username == "JsonWebTokenError"){

        }else{
          // window.location.href = "http://localhost:8080/login.html"
        }
      }
  })
})


function login() {
    localStorage.setItem("email", $("#email").val())
    if ($("#email").val() == "" || $("#password").val() == "") {
        swal("Lengkapi Form Login")
    } else {
        $.ajax({
            url: "http://localhost:3000/api/users/login",
            type: "POST",
            data: {
                email: $("#email").val(),
                password: $("#password").val()
            },
            success: function(result) {
                if (result.status) {
                    localStorage.setItem("token",result.token)
                    window.location.replace("http://localhost:8080/home.html")
                }else{
                  swal(result.msg)
                }
            }
        });
    }
}
