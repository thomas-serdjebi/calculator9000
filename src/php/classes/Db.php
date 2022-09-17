<?php

class Database {

    protected $pdo;

    function __construct() {

        try{
            $pdo = new PDO("mysql:host=localhost;dbname=calculator9000", "root", "");
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
            if ($pdo) {
                $this->pdo = $pdo;
            }
           
        }  catch(PDOException $e){
            echo "Erreur : connexion échouée " . $e->getMessage();
        } ;


    }

    function echoleur(){
        echo " ECHOOO";
    }

}












?>