<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Marca.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog marca object
  $marca = new Marca($db);

  // Get raw marcaed data
  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $marca->id = $data->id;

  $marca->nombre = $data->nombre;

  // Update marca
  if($marca->put()) {
    echo json_encode(
      array('message' => 'Marca actualizada')
    );
  } else {
    echo json_encode(
      array('message' => 'Marca no actualizada')
    );
  }

