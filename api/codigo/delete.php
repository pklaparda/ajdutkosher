<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Codigo.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate codigo object
  $codigo = new Codigo($db);

  // Get raw codigo data
  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $codigo->id = $data->id;

  // Delete codigo
  if($codigo->delete()) {
    echo json_encode(
      array('message' => 'El Codigo fue dado de baja')
    );
  } else {
    echo json_encode(
      array('message' => 'Ocurrió un error al dar de baja el codigo')
    );
  }

