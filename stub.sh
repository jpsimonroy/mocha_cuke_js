#!/bin/bash

flag=$1

stop(){
	echo "Stopping stubs..."
	ps -ef | grep "stubby" | grep -v grep | awk '{print $2}' | xargs kill
}

start(){
	echo "Starting stubs..."
	stubby --admin 5555 --stubs 5554 --data stub/endpoints.yml  2&> stub.log &	
}

restart(){
	stop
	start
}
case $flag in 
	start) start;;
	stop) stop;;
	restart) restart;; 
	*) restart;;
esac
