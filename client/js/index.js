// $(document).ready(function() {
//     $.ajax({
//         url: "http://localhost:3000/api/users/decode",
//         type: "POST",
//         data: {
//             token: localStorage.getItem("token")
//         },
//         success: function(result) {
//             // localStorage.setItem("email", result.email)
//             if (result.name == "TokenExpiredError") {
//                 // swal("Expired Login")
//                 window.location.href = "http://localhost:8080/login.html"
//             } else if (result.name == false) {
//                 // swal("Invalid Login")
//                 window.location.href = "http://localhost:8080/login.html"
//             } else if (result.name == "JsonWebTokenError") {
//                 window.location.href = "http://localhost:8080/login.html"
//             } else {
//                 document.querySelector("#register").innerHTML = ""
//                 document.querySelector("#login").innerHTML = `<a id="logout" onclick="logout()" href="#" >Logout</a>`
//             }
//         }
//
//
//     })
//
//
// })
//
// function logout() {
//     localStorage.clear()
//     window.location.href = "http://localhost:8080/login.html"
// }
//
// $(document).ready(function() {
//     if (localStorage.getItem("email")) {
//         swal({
//             title: "Welcome",
//             text: localStorage.getItem("email"),
//             timer: 2000,
//             showConfirmButton: false
//         });
//     }
// })
//
//
// function showData() {
//     document.getElementById("listData").innerHTML = ""
//     var tampung = `
//     <div class="ui container containerTOP">
//         <div class="boxTodos">
//             <form class="ui form">
//                 <div class="field">
//                     <label>Title</label>
//                     <input id="title" type="text" name="title" placeholder="Title">
//                 </div>
//                 <div class="Todos">
//                     <label>Content</label>
//                     <textarea id="content" placeholder="Article" rows="3"></textarea>
//                 </div>
//
//             </form>
//             <div class="submitTodo five ui buttons">
//                 <button onclick="addArticle()" class="positive ui button">Add New</button>
//             </div>
//
//         </div>
//         <br>
//         <table class="ui celled table">
//             <thead>
//                 <tr>
//                     <th>Title</th>
//                     <th>Content</th>
//                     <th id="action">Action</th>
//                 </tr>
//             </thead>
//             <tbody id="listtodo">
//
//             </tbody>
//             <tfoot class="full-width">
//                 <tr>
//                     <!-- <th></th> -->
//                     <th colspan="4">
//                         <div class="buttonStatus">
//                             <div class="ui buttons">
//                                 <button onclick="warningAction('remove')" class="ui red button">Remove</button>
//                                 <div class="or"></div>
//                                 <button onclick="warningAction('update')" class="ui positive button">Update</button>
//                             </div>
//                         </div>
//                     </th>
//                 </tr>
//             </tfoot>
//         </table>
//
//
//         <div class="ui modal update">
//             <i class="close icon"></i>
//             <div class="header">
//                 Form Update Memo
//             </div>
//             <form class="ui form formUpdate">
//                 <input type="hidden" id="idUpdate" placeholder="Title">
//                 <div class="field">
//                     <input type="text" id="titleUpdate" placeholder="Title">
//                 </div>
//                 <div class="field">
//                     <textarea id="descriptionUpdate" placeholder="Description" rows="3"></textarea>
//                 </div>
//                 <div class="field">
//                   <input id="datepickerSearch" type="text" name="date" placeholder="02/09/2017">
//                 </div>
//             </form>
//             <div class="actions">
//                 <div onclick="runningUpdate()" class="ui positive right labeled icon button">
//                     Update
//                     <i class="checkmark icon"></i>
//                 </div>
//             </div>
//         </div>
//
//         <div class="ui modal read">
//             <i class="close icon"></i>
//             <div class="header">
//                 "Memo" Details
//             </div>
//             <form class="ui form formUpdate">
//                 <div class="field">
//                     <h1 id="titleRead"></h1>
//                 </div>
//                 <div class="field">
//                     <p id="descriptionRead"></p>
//                 </div>
//                 <div class="field">
//                   <p id="datepickerRead"></p>
//                 </div>
//             </form>
//             <div class="actions">
//                 <div class="ui positive right labeled icon button">
//                     Done
//                     <i class="checkmark icon"></i>
//                 </div>
//             </div>
//         </div>
//     </div>`
//
//
//     $("#listData").append(tampung)
//     // showDataAll()
//
//     $(function() {
//         $("#listtodo").sortable();
//         $("#listtodo").disableSelection();
//     });
//     $(function() {
//         $("#datepicker").datepicker();
//     });
//     $(function() {
//         $("#datepickerSearch").datepicker();
//     });
//     $(function() {
//         $("#datepickerUpdate").datepicker();
//     });
// }
// function addArticle() {
//     if ($("#title").val() == "" || $("#content").val() == "" ) {
//         swal("Warning !", "Silahkan ISI FORM")
//     } else {
//         $.ajax({
//             url: "http://localhost:3000/api/articles",
//             type: "POST",
//             data: {
//                 title: $("#title").val(),
//                 content: $("#content").val(),
//             },
//             success: function(result) {
//                 if (result) {
//                     tampung = `     <tr id="trID${result._id}">
//                                       <td id="idTitle${result._id}">${result.title}</td>
//                                       <td id="idDescription${result._id}">${result.content}</input>
//                                       <td class="collapsing">
//                                           <div class="ui fitted checkbox">
//                                             <input id="${result._id}" type="checkbox"><label name="actioncheck"></label>
//                                           </div>
//                                       </td>
//                                   </tr>`
//                     $("#listtodo").prepend(tampung)
//                     $("#title").val('')
//                     $("#Content").val('')
//                 }
//             }
//         })
//
//     }
//
// }
//
// function checkList() {
//     var listId = $("#listtodo tr td.collapsing div input")
//     for (var i = 0; i < listId.length; i++) {
//         var id = $(listId[i]).attr("id")
//         if ($(`#${id}`).is(':checked')) {
//             return true
//         }
//     }
//     return false
// }
// //
// function warningAction(input) {
//     if (checkList() && input == "remove") {
//         swal({
//                 title: "Are you sure?",
//                 text: "Data will be remove",
//                 type: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#DD6B55",
//                 confirmButtonText: "Yes, delete it!",
//                 closeOnConfirm: false
//             },
//             function() {
//                 checkAction(input)
//                 swal("Deleted!", "Your Data has been deleted.", "success");
//             })
//     } else if (checkList() && input == "update") {
//         $('.ui.modal.update').modal('show');
//         checkAction(input)
//     } else if (checkList() && input == "complete") {
//         $('.ui.modal.read').modal('show');
//         checkAction(input)
//     } else {
//         swal("Warning !", "Silahkan Tandai List Data")
//     }
// }
// //
// function checkAction(input) {
//     var arrId = []
//     var listId = $("#listtodo tr td.collapsing div input")
//     for (var i = 0; i < listId.length; i++) {
//         var id = $(listId[i]).attr("id")
//         if ($(`#${id}`).is(':checked')) {
//             if (input == "remove") {
//                 document.getElementById(`trID${id}`).innerHTML = ""
//                 arrId.push(id)
//             } else if (input == "update") {
//                 $('#idUpdate').val(`${id}`)
//                 $('#titleUpdate').val($(`#idTitle${id}`).text())
//                 $('#descriptionUpdate').val($(`#idDescription${id}`).text())
//                 $('#datepickerUpdate').val($(`#idDatepicker${id}`).text())
//                 break;
//             } else {
//                 document.querySelector("h1#titleRead").innerHTML = $(`#idTitle${id}`).text()
//                 document.querySelector("p#descriptionRead").innerHTML = $(`#idDescription${id}`).text()
//                 document.querySelector("p#datepickerRead").innerHTML = date.localDate(new Date($(`#idDatepicker${id}`).text()))
//                 break;
//             }
//         }
//     }
//     deleteTodos(arrId)
//
// }
// //
// function runningUpdate() {
//     var id = $('#idUpdate').val()
//     var title = $('#titleUpdate').val()
//     var description = $('#descriptionUpdate').val()
//     var status = $('#datepickerUpdate').val()
//     if (title == "" || description == "" || status == "") {
//         alert("Warning !", "Jangan Kosongkan Form Upadate")
//     } else {
//         $.ajax({
//             url: "http://localhost:3000/update",
//             type: "PUT",
//             data: {
//                 id: id,
//                 letter: title,
//                 frequency: description,
//                 date: status
//             },
//             success: function(result) {
//                 tampung = `     <tr id="trID${result._id}">
//                                     <td id="idTitle${result._id}">${result.letter}</td>
//                                     <td id="idDescription${result._id}">${result.frequency}</td>
//                                     <td id="idDatepicker${result._id}">${date.localDate(new Date(result.date))}</td>
//                                     <td class="collapsing">
//                                         <div class="ui fitted checkbox">
//                                             <input id="${result._id}" type="checkbox"><label name="actioncheck"></label>
//                                         </div>
//                                     </td>
//                                 </tr>`
//                 document.getElementById(`trID${result._id}`).innerHTML = tampung
//             }
//         });
//     }
// }
// //
// function deleteTodos(arrId) {
//     $.ajax({
//         url: "http://localhost:3000/delete",
//         type: "DELETE",
//         data: {
//             arrId: JSON.stringify(arrId)
//         },
//         success: function(result) {
//             return result
//         }
//     });
//
// }
