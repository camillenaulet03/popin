<?php header('Content-Type: text/html; charset=utf-8');

//Récupération des valeurs
$mail = $_POST['mail'];

//Définition des paramètres de connexion
$dsn = 'mysql:host=localhost;dbname=email';
$username = 'root';
$password = '';

//Connexion à la base de données
try
    {
        $bdd = new PDO($dsn, $username, $password);
        $bdd->exec('SET NAMES utf8');
    }
catch (Exception $e)
{
die('Erreur : ' . $e->getMessage());
}

//Préparation de l'envoi des données vers la base de données
$req = $bdd->prepare("INSERT INTO email (email) VALUES ('$mail')");

//Envoi des données vers la base de données
$req->execute(array(
'mail' => $mail
));

if ($req->rowCount()) {
    echo 'ok';
} else {
    echo 'no';
}