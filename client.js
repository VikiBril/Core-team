module.exports = `

<!DOCTYPE html>
<html lang="en">
<head>
\t
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Task Manger</title>
<!-- Boostrap Links-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

 <!-- Style css -->
 <link rel="stylesheet" href="./Style.css" />
<script>
var sendRequest = function () {
  var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:3030/boards", requestOptions)
  .then(response => response.text())
  .then(result => {
    // document.getElementById("main").innerHTML = result;
     var r = new Array(), j = -1;
     for (var key=0, size=result.length; key<size; key++){
         r[++j] ='<tr><td>';
         r[++j] = result[key][0];
         r[++j] = '</td><td class="whatever1">';
         r[++j] = result[key][1];
         r[++j] = '</td><td class="whatever2">';
         r[++j] = result[key][2];
         r[++j] = '</td></tr>';
     }
     $('#dataTable').html(r.join('')); 
    console.log(result);
  })
  .catch(error => console.log('error', error));
}</script>
</head>
<body>
<button onClick="sendRequest()">send request</button>
<h3>result:</h3>
<p id="main"></p>
    <div id="dataTable">
    </div>
    <div class="container">
\t\t<div class="table-responsive">
\t\t\t<div class="table-wrapper">
\t\t\t\t<div class="table-title">
\t\t\t\t\t<div class="row">
\t\t\t\t\t\t<div class="col-xs-6">
\t\t\t\t\t\t\t<h2>Task<b>Manager</b></h2>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="col-xs-6">
\t\t\t\t\t\t\t<button onclick="sendRequest()">send request</button>
\t\t\t\t\t\t\t<a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New Board</span></a>
\t\t\t\t\t\t\t<a href="#" class="btn btn-primary"><i class="material-icons">&#xE24D;</i> <span>Export to CSV</span></a>
\t\t\t\t\t\t\t<a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Delete</span></a>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t<table class="table table-striped table-hover">
\t\t\t\t\t<thead>
\t\t\t\t\t\t<tr >
\t\t\t\t\t\t\t<th>
\t\t\t\t\t\t\t\t<span class="custom-checkbox">
\t\t\t\t\t\t\t\t\t<input type="checkbox" id="selectAll">
\t\t\t\t\t\t\t\t\t<label for="selectAll"></label>
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t</th>
\t\t\t\t\t\t\t<th>BoardsID</th>
\t\t\t\t\t\t\t<th>BoardsName</th>
\t\t\t\t\t\t</tr>
\t\t\t\t\t</thead>
\t\t\t\t\t<tbody id="tbody" class="tbody">
\t\t\t\t\t\t<tr role="button" data-href="./index.html">
\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t<span class="custom-checkbox">
\t\t\t\t\t\t\t\t\t<input type="checkbox" id="checkbox1" name="options[]" value="1">
\t\t\t\t\t\t\t\t\t<label for="checkbox1"></label>
\t\t\t\t\t\t\t\t</span>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t\t <td>03248</td>
\t\t\t\t\t\t\t<td>R&D</td>
\t\t\t\t\t\t\t<td>
\t\t\t\t\t\t\t\t<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
\t\t\t\t\t\t\t\t<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
\t\t\t\t\t\t\t</td>
\t\t\t\t\t\t</tr>
\t\t\t\t\t</tbody>
\t\t\t\t</table>
\t\t\t\t<script src="main.js"></script>
\t\t\t</div>
\t\t</div>
    </div>
\t<!-- Edit Modal HTML -->
\t<div id="addEmployeeModal" class="modal fade">
\t\t<div class="modal-dialog">
\t\t\t<div class="modal-content">
\t\t\t\t<form>
\t\t\t\t\t<div class="modal-header">
\t\t\t\t\t\t<h4 class="modal-title">Add Boards</h4>
\t\t\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="modal-body">
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>IDBoards</label>
\t\t\t\t\t\t\t<input type="text" class="form-control" required>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>BoardsName</label>
\t\t\t\t\t\t\t<input type="text" class="form-control" required>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="modal-footer">
\t\t\t\t\t\t<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
\t\t\t\t\t\t<input type="submit" class="btn btn-success" value="Add">
\t\t\t\t\t</div>
\t\t\t\t</form>
\t\t\t</div>
\t\t</div>
\t</div>
\t<!-- Edit Modal HTML -->
\t<div id="editEmployeeModal" class="modal fade">
\t\t<div class="modal-dialog">
\t\t\t<div class="modal-content">
\t\t\t\t<form>
\t\t\t\t\t<div class="modal-header">
\t\t\t\t\t\t<h4 class="modal-title">Edit Boards</h4>
\t\t\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="modal-body">
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>IDBoards</label>
\t\t\t\t\t\t\t<input type="text" class="form-control" required>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="form-group">
\t\t\t\t\t\t\t<label>BoardsName</label>
\t\t\t\t\t\t\t<input type="text" class="form-control" required>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="modal-footer">
\t\t\t\t\t\t<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
\t\t\t\t\t\t<input type="submit" class="btn btn-info" value="Save">
\t\t\t\t\t</div>
\t\t\t\t</form>
\t\t\t</div>
\t\t</div>
\t</div>
\t<!-- Delete Modal HTML -->
\t<div id="deleteEmployeeModal" class="modal fade">
\t\t<div class="modal-dialog">
\t\t\t<div class="modal-content">
\t\t\t\t<form>
\t\t\t\t\t<div class="modal-header">
\t\t\t\t\t\t<h4 class="modal-title">Delete Boards</h4>
\t\t\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="modal-body">
\t\t\t\t\t\t<p>Are you sure you want to delete these Records?</p>
\t\t\t\t\t\t<p class="text-warning"><small>This action cannot be undone.</small></p>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="modal-footer">
\t\t\t\t\t\t<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
\t\t\t\t\t\t<input type="submit" class="btn btn-danger" value="Delete">
\t\t\t\t\t</div>
\t\t\t\t</form>
\t\t\t</div>
\t\t</div>
\t</div>
\t<!--<script src="http://localhost:3030/main.js"></script>-->
</body>
</html>
`;
