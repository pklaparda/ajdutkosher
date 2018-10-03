<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Marca.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate marca object
  $marca = new Marca($db);

  // Get raw marca data
  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $marca->id = $data->id;

  // Delete marca
  if($marca->delete()) {
    echo json_encode(
      array('message' => 'La Marca fue dada de baja')
    );
  } else {
    echo json_encode(
      array('message' => 'Ocurrió un error al dar de baja la marca')
    );
  }

