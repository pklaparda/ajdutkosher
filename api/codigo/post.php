<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
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

  $codigo->nombre = $data->nombre;
  $codigo->codigo = $data->codigo;
  $codigo->descripcion = $data->descripcion;

  // Create codigo
  if($codigo->post()) {
    echo json_encode(
      array('message' => 'Codigo creado')
    );
  } else {
    echo json_encode(
      array('message' => 'Codigo no creado')
    );
  }

