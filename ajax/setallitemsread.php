<?php
/**
* ownCloud - News app
*
* @author Bernhard Posselt
* Copyright (c) 2012 - Bernhard Posselt <nukeawhale@gmail.com>
* 
* This file is licensed under the Affero General Public License version 3 or later.
* See the COPYING-README file
* 
*/

// Check if we are a user
OCP\JSON::checkLoggedIn();
OCP\JSON::checkAppEnabled('news');
OCP\JSON::callCheck();

$feedId = $_POST['feedId'];

$itemMapper = new OCA\News\ItemMapper();
$items = $itemMapper->findAllStatus($feedId, OCA\News\StatusFlag::Unread);

// FIXME: maybe there is a way to set all items read in the
// FeedMapper instead of iterating through every item and updating as 
// necessary
foreach($items as $item){
    $item->setRead();
    $success = $itemMapper->update($item);
}

$l = OC_L10N::get('news');

if(!$success) {
    OCP\JSON::error(array('data' => array('message' => $l->t('Error setting all items as read.'))));
    OCP\Util::writeLog('news','ajax/setallitemsread.php: Error setting all items as read of feed '. $feedId, OCP\Util::ERROR);
    exit();
}

//TODO: replace the following with a real success case. see contact/ajax/createaddressbook.php for inspirations
OCP\JSON::success(array('data' => array('feedId' => $feedId )));

