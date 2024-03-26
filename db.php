     <?php
 $name=$_POST['name'];
$email=$_POST['email'];
 $message=$_POST['message'];

 $conn = new mysqli('localhost','root','','w1');
if($conn->connect_error){
     die('Connect Failed :'.$conn->connect_error);
 }
 else{
     $stmt = $conn->prepare("(insert into contact form(name, email, message)
     values(?,?,?)");
     $stmt->bind_param("sss", $name, $email, $message);
     $execval =$stmt->execute();
     echo $execval;
    echo "Contact Details sent succesfully";
    $stmt->close();
     $conn->close();
}




