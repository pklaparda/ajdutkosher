<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/Producto.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate producto object
  $producto = new Producto($db);

  // Get ID
  $producto->id = isset($_GET['id']) ? $_GET['id'] : die();

  // Get producto
  $producto->getId();

  // Create array
  $producto_arr = array(
    'id' => $producto->id,
    'descripcion' => $producto->descripcion,
    'marca' => $producto->marca,
    'categoria' => $producto->categoria,
    'codigoStr' => $producto->codigoStr,
    'fechaUltimaModificacion' => $producto->fechaUltimaModificacion,
    'fechaBaja' => $producto->fechaBaja,
  );

  // Make JSON
  print_r(json_encode($producto_arr));