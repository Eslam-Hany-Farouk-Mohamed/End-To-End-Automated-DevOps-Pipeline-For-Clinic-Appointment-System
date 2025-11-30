#! /bin/bash

# Update & Upgrade
sudo apt update -y
sudo apt upgrade -y

# Install dependencies
sudo apt install software-properties-common -y

# Add Ansible PPA
sudo add-apt-repository --yes --update ppa:ansible/ansible

# Install Ansible
sudo apt install ansible -y
