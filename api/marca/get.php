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

  // marca query
  $result = $marca->get();
  // Get row count
  $num = $result->rowCount();

  // Check if any marcas
  if($num > 0) {
    // Marcas array
    $marcas_arr = array();
    // $marcas_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $marca_item = array(
        'id' => $id,
        'nombre' => $nombre,
        //'body' => html_entity_decode($body),
        'fechaUltimaModificacion' => $fechaUltimaModificacion,
        'fechaBaja' => $fechaBaja
      );

      // Push to "data"
      array_push($marcas_arr, $marca_item);
      // array_push($marcas_arr['data'], $marca_item);
    }

    // Turn to JSON & output
    echo json_encode($marcas_arr);

  } else {
    // No Marcas
    echo json_encode(
      array('message' => 'No hay Marcas existentes')
    );
  }
