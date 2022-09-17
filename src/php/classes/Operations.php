<?php
    require_once('db.php');

    class Operations extends Database  {

        public $data;

        function insertResult($data){
            $sql = "INSERT INTO results (operation, result) VALUES (:operation, :result)";
            $insert = $this->pdo->prepare($sql);
            $insert->execute($data);
          
        }

        function getResults() {
            $sql = "SELECT * FROM results";
            $get_results = $this->pdo->prepare($sql);
            $get_results->setFetchMode(PDO::FETCH_OBJ);
            $get_results->execute();

            return $results = $get_results->fetchAll();
        }

    }

    
?>






