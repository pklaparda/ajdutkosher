<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Codigo.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog codigo object
  $codigo = new Codigo($db);

  // Get raw codigoed data
  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $codigo->id = $data->id;

  $codigo->nombre = $data->nombre;
  $codigo->codigo = $data->codigo;
  $codigo->descripcion = $data->descripcion;

  // Update codigo
  if($codigo->put()) {
    echo json_encode(
      array('message' => 'Codigo actualizado')
    );
  } else {
    echo json_encode(
      array('message' => 'Codigo no actualizado')
    );
  }

