
<?php 
  class Usuario {
    // DB stuff
    private $conn;
    private $table = 'usuario';

    // Properties
    public $id;
    public $username;
    public $password;
    public $fechaBaja;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // login user
    public function login() {
        // Create query
        $query = 'SELECT * FROM ' . $this->table . 
        ' WHERE username = :username and password = :password LIMIT 0,1';

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->username = htmlspecialchars(strip_tags($this->username));
        $this->password = htmlspecialchars(strip_tags($this->password));

        // Bind data
        $stmt->bindParam(':username', $this->username);
        $stmt->bindParam(':password', $this->password);

        // Execute query
        if($stmt->execute()) {
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            return $result;
        }
        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);
        return false;
  }

}