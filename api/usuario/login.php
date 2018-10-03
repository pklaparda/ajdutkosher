<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/Usuario.php';
  
  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate usuario object
  $usuario = new Usuario($db);

  // Get raw usuario data
  $data = json_decode(file_get_contents("php://input"));
  
  $usuario->username = $data->username;
  $usuario->password = $data->password;

  // Create categoria
  if($usuario->login()) {
    echo json_encode(
      array('message' => 'bienvenido!', 'access' => true)
    );
  } else {
    echo json_encode(
      array('message' => 'Acceso no autorizado, revise usuario y password', 'access' => false)
    );
  }

