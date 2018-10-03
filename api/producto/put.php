<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Producto.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog producto object
  $producto = new Producto($db);

  // Get raw productoed data
  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $producto->id = $data->id;

  $producto->descripcion = $data->descripcion;
  $producto->marcaId = $data->marcaId;
  $producto->categoriaId = $data->categoriaId;
  $producto->codigoArr = $data->codigos;

  // Update producto
  if($producto->put()) {
    echo json_encode(
      array('message' => 'Producto actualizado')
    );
  } else {
    echo json_encode(
      array('message' => 'Producto no actualizado')
    );
  }

