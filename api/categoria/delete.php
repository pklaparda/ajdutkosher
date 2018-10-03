<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Categoria.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate categoria object
  $categoria = new Categoria($db);

  // Get raw categoria data
  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $categoria->id = $data->id;

  // Delete categoria
  if($categoria->delete()) {
    echo json_encode(
      array('message' => 'La Categoria fue dada de baja')
    );
  } else {
    echo json_encode(
      array('message' => 'Ocurrió un error al dar de baja la categoria')
    );
  }

