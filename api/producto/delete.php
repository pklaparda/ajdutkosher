<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: DELETE');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Producto.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate producto object
  $producto = new Producto($db);

  // Get raw producto data
  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $producto->id = $data->id;

  // Delete producto
  if($producto->delete()) {
    echo json_encode(
      array('message' => 'El Producto fue dado de baja')
    );
  } else {
    echo json_encode(
      array('message' => 'Ocurrió un error al dar de baja el producto')
    );
  }

