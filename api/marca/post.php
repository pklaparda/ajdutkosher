<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
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

  $marca->nombre = $data->nombre;

  // Create marca
  if($marca->post()) {
    echo json_encode(
      array('message' => 'Marca creada')
    );
  } else {
    echo json_encode(
      array('message' => 'Marca no creada')
    );
  }

