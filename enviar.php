<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'php/Exception.php';
require 'php/PHPMailer.php';
require 'php/SMTP.php';

$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                          //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'cvehicular.bioin@gmail.com';                     //SMTP username
    $mail->Password   = 'Pez123asd';                                  //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('cvehicular.bioin@gmail.com', 'Contacto');
    $mail->addAddress('cvehicular.bioin@gmail.com', 'Contactador');     //Add a recipient
  

    

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $nombre;
    $mail->Body    = "Numero: ".$telefono."<br>"."Correo electronico: ".$correo."<br>"."Mensaje: ".$mensaje;
    $mail->AltBody = 'nolose';

    $mail->send();
  
  header("location: index.html");
  
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}