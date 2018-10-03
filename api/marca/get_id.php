<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/Marca.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate marca object
  $marca = new Marca($db);

  // Get ID
  $marca->id = isset($_GET['id']) ? $_GET['id'] : die();

  // Get marca
  $marca->getId();

  // Create array
  $marca_arr = array(
    'id' => $marca->id,
    'nombre' => $marca->nombre,
    'fechaUltimaModificacion' => $marca->fechaUltimaModificacion,
    'fechaBaja' => $marca->fechaBaja,
  );

  // Make JSON
  print_r(json_encode($marca_arr));