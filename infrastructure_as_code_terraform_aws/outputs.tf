output "master_ip" {
  value = aws_instance.master.public_ip
}

output "worker1_ip" {
  value = aws_instance.worker_node_1.public_ip
}

output "worker2_ip" {
  value = aws_instance.worker_node_2.public_ip
}

output "management_ip" {
  value = aws_instance.management.public_ip
}