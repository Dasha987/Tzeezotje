<?php

    $username   = isset($_POST['username']) ? $_POST['username'] : '';
    $email      = isset($_POST['email']) ? $_POST['email'] : '';

    $ok = true;
    $messages = array();

    if ( !isset($username) || empty($username) ) {
        $ok = false;
        $messages[] = 'Username cannot be empty!';
    }

    if ( !isset($email) || empty($email) ) {
        $ok = false;
        $messages[] = 'Email cannot be empty!';
    }

    if ($ok) {
        if ($username === 'dcode' && $email === 'dcode') {
            $ok = true;
            $messages[] = 'Successful reserve!';
        } 
    }

    echo json_encode(
        array(
            'ok' => $ok,
            'messages' => $messages
        )
    );

?>
