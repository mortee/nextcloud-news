#!/usr/bin/env bats

# This only works with NC 26

load "helpers/settings"
load "../test_helper/bats-support/load"
load "../test_helper/bats-assert/load"

TESTSUITE="Update"

@test "[$TESTSUITE] Job status" {
  run ./occ news:updater:job
  
  [ "$status" -eq 0 -o "$status" -eq 2 ]
}

@test "[$TESTSUITE] Job reset" {
  run ./occ news:updater:job --reset
  
  assert_success
}