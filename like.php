<?php
/**
 * This is just an example implementation!
 * Please create your own script.
 */
$id     = $_POST['id'];
$ip     = $_SERVER['REMOTE_ADDR'];
$likes  = explode(',', file_get_contents('./likes.txt'));
switch($_POST['action']) {
    case 'vote': {
        if(in_array($id . '@' . $ip, $likes)) {
            echo json_encode(array('error' => 'You have already liked that post!'));
        } else {
            $fp = fopen('./likes.txt', 'ab');
            fwrite($fp, $id . '@' . $ip . ",");
            fclose($fp);
            $count = 1;
            foreach($likes as $like) {
                $parts = explode('@', $like);
                if($parts[0] == $id) {
                    $count++;
                }
            }
            echo json_encode(array('message' => 'Thanks for the like!', 'count' => $count));
        }
    } break;
    case 'count': {
        $count = 0;
        foreach($likes as $like) {
            $parts = explode('@', $like);
            if($parts[0] == $id) {
                $count++;
            }
        }
        echo json_encode(array('count' => $count));
    } break;
}