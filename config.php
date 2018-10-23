<?php



$args = array( 
            'name' => 'yourtutor',
            'username' => 'root',
            'password' => '',
            'server' => 'localhost',
            'port' => 3306,
            'type' => 'mysql',
            'table_blacklist' => array('cache', 'passwords'),
            'column_blacklist' => array('password_hint'),
);

register_db_api( 'facility-inspections', $args );

