#!/bin/bash

sudo cp AdvancedReactBoilerplate*.service /lib/systemd/system/
sudo useradd nodejs >/dev/null 2>&1
sudo systemctl daemon-reload
