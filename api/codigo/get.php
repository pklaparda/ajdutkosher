<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../../config/Database.php';
  include_once '../../models/Codigo.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate codigo object
  $codigo = new Codigo($db);

  // codigo query
  $result = $codigo->get();
  // Get row count
  $num = $result->rowCount();

  // Check if any codigos
  if($num > 0) {
    // Codigos array
    $codigos_arr = array();
    // $codigos_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $codigo_item = array(
        'id' => $id,
        'nombre' => $nombre,
        'codigo' => $codigo,
        'descripcion' => $descripcion,
        'fechaUltimaModificacion' => $fechaUltimaModificacion,
        'fechaBaja' => $fechaBaja
      );

      // Push to "data"
      array_push($codigos_arr, $codigo_item);
      // array_push($codigos_arr['data'], $codigo_item);
    }

    // Turn to JSON & output
    echo json_encode($codigos_arr);

  } else {
    // No Codigos
    echo json_encode(
      array('message' => 'No hay Codigos existentes')
    );
  }
