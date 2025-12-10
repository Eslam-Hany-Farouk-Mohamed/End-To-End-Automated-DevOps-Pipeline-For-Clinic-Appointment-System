# End To End Automated DevOps Pipeline For Clinic Appointment System

A project under the supervision of **Digital Egypt Pioneers Initiative**.
This project aims to build a fully automated DevOps pipeline for deploying, managing, and monitoring a **Clinic Appointment System** using modern DevOps tools and cloud technologies.

---

![DevOps Cycle](https://upload.wikimedia.org/wikipedia/commons/0/05/Devops-toolchain.svg)

---

## 👥 Team Members
- Eslam Hany Farouk Mohamed **(Team Leader)**
- Abdallah Wael Saeid Elshahaly
- Moataz Kamal Mohamed Hassan
- Yahya Mostafa Yahya Emam
- Mariam Sayed Nabil Ali

---

## 📌 Project Overview
- The project aims to build a**reliable, scalable, and fully automated CI/CD pipeline** for deploying a **Clinic Appointment System**.
- The system will be deployed on **AWS Cloud** using **Terraform**, containerized using **Docker**, orchestrated using **Kubernetes**, and configured using **Ansible**.
- Monitoring and alerting will be implemented using **Prometheus**, while the entire pipeline will be automated using **GitHub Actions** and custom **Bash scripts**. 

---

## 🎯 Project Objectives
- Automating the entire build → deploy → monitor workflow with minimal manual work.
- Deploying the Clinic Appointment System on AWS using Infrastructure as Code (Terraform).
- Containerizing all application components using Docker.
- Managing and orchestrating containers using Kubernetes clusters.
- Implementing configuration management using Ansible.
- Enabling continuous integration and continuous delivery using GitHub Actions.
- Providing real-time monitoring, metrics collection, and alerting using Prometheus.
- Ensuring scalability, reliability, and fault tolerance for the application.
---

## 📂 Project Scope
- **Infrastructure as Code**: Provisioning EC2 instances, VPC, networking, and Kubernetes clusters using Terraform.
- **Configuration Management**: Using Ansible to install Docker, configure Kubernetes (kubeadm), and prepare nodes.
- **Containerization**: Package the Clinic Appointment System into Docker images and store them in a container registry.
- **Orchestration**: Deploy and manage application workloads on a Kubernetes cluster.
- **Automation**: Build a complete CI/CD pipeline using GitHub Actions.
- **Monitoring**: Deploy Prometheus to collect system and application performance metrics.
- **Scripting**: Use Bash scripts for automation tasks and pipeline triggers.
- **Scalability**: Ensure the system can handle high traffic and large numbers of appointment requests efficiently.  

---

## 🧩 Application architecture

flowchart LR
%% External
subgraph client["External Access"]
browser["Browser / REST Client"]
end


%% Infrastructure as Code
subgraph iac["Infrastructure as Code (Terraform on AWS)"]
terraform["Terraform\nmain.tf, variables.tf, providers.tf\nCreates VPC, subnets, EC2 nodes, security groups, IAM"]
end


%% AWS Nodes
subgraph aws["AWS EC2 Nodes"]
mgmt_node["Management / Monitoring Node\n(ansible, prometheus, grafana)"]
master_node["K8s Control Plane (Master)\n(kubeadm / kubelet)"]
worker1_node["K8s Worker Node 1"]
worker2_node["K8s Worker Node 2"]
end


%% Configuration Management
subgraph cm["Configuration Management (Ansible)"]
inventory["Inventory (hosts)"]
playbook["playbooks/install_docker.yml\nplaybooks/configure_k8s.yml"]
end


%% Kubernetes cluster
subgraph k8s["Kubernetes Cluster (namespace: clinic)"]
k8s_api["Kubernetes API / etcd"]


subgraph fe["Frontend Tier"]
dep_frontend["Deployment: hospital-frontend-deployment\n(React + Nginx)\nreplicas: 2"]
svc_frontend["Service: hospital-frontend-svc (LoadBalancer)\nport 80 -> target 80"]
dep_dashboard["Deployment: hospital-dashboard-deployment\n(React + Nginx)\nreplicas: 2"]
svc_dashboard["Service: hospital-dashboard-svc (LoadBalancer)\nport 80 -> target 80"]
end


subgraph be["Backend Tier"]
dep_backend["Deployment: hospital-backend-deployment\n(Node.js / Express)\nreplicas: 3\nexposes /metrics"]
svc_backend["Service: hospital-backend-svc (ClusterIP)\nport 5000"]
end


subgraph db["Stateful Services"]
dep_mongo["StatefulSet: mongo\nPVC: mongo-pvc (persistent)\ncontainer: mongo"]
svc_mongo["Service: mongo-svc (ClusterIP)\nport 27017"]
end


%% Internal APIs / Connections
api_user["/api/v1/user/*\n(login, register, roles)"]
api_appointment["/api/v1/appointment/*\n(book, list, update)"]
api_message["/api/v1/message/*"]
metrics_link["/metrics (Prometheus) — backend pods"]
end


%% Monitoring
subgraph mon["Monitoring (Mgmt node)"]
prom["Prometheus\n(scrapes backend /metrics, node_exporter, mongodb_exporter)"]
graf["Grafana\n(Dashboards)"]
nodeexp["node_exporter (host metrics)"]
mongoexp["mongodb_exporter (DB metrics)"]
end


class dep_frontend,dep_dashboard,dep_backend,dep_mongo k8slayer
---
## ⚙ AWS architecture
![DevOps Cycle](./aws_arc.jpg)
---

## 🗓 Team Roles & Responsibilities
https://drive.google.com/file/d/19IGdDwkpUju2mAEF3QMG9_NSNMJXQR9_/view?usp=sharing
---
