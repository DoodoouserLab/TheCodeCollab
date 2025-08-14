<?php
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Initialize variables and sanitize inputs
    $name = strip_tags(trim($_POST["name"] ?? ''));
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"] ?? ''));
    
    // Initialize error array
    $errors = [];
    
    // Validate inputs
    if (empty($name)) {
        $errors['name'] = "Name is required";
    }
    
    if (empty($email)) {
        $errors['email'] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Invalid email format";
    }
    
    if (empty($message)) {
        $errors['message'] = "Message is required";
    }
    
    // If no errors, process the form
    if (empty($errors)) {
        $recipient = "your-email@example.com"; // REPLACE WITH YOUR EMAIL
        $subject = "New Contact Form Submission from $name";
        
        // Build email content
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
        
        // Build headers
        $email_headers = "From: $name <$email>\r\n";
        $email_headers .= "Reply-To: $email\r\n";
        $email_headers .= "MIME-Version: 1.0\r\n";
        $email_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        // Send email
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Success - redirect to thank you page
            header("Location: thank-you.html");
            exit;
        } else {
            $errors['system'] = "Oops! Something went wrong and we couldn't send your message.";
        }
    }
    
    // If there are errors, return to form with error messages
    // Store errors in session to display on redirect
    session_start();
    $_SESSION['form_errors'] = $errors;
    $_SESSION['form_data'] = $_POST;
    header("Location: ".$_SERVER['HTTP_REFERER']."#footer");
    exit;
}
?>
