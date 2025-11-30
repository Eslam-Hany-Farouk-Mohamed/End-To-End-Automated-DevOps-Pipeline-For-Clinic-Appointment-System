data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "available" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }
}

# --- Master Node ---
resource "aws_instance" "master" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  key_name               = "depi-k8s"
  vpc_security_group_ids = [aws_security_group.k8s_sg.id]
  subnet_id              = data.aws_subnets.available.ids[0]
  
  tags = { Name = "depi-k8s-master" }
  user_data = file("${path.module}/scripts/master.sh")
}

# --- Worker Node 1 ---
resource "aws_instance" "worker_node_1" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  key_name               = "depi-k8s"
  vpc_security_group_ids = [aws_security_group.k8s_sg.id]
  subnet_id              = data.aws_subnets.available.ids[0]

  tags = { Name = "depi-worker-node1" }
  user_data = file("${path.module}/scripts/worker1.sh")
}

# --- Worker Node 2 ---
resource "aws_instance" "worker_node_2" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  key_name               = "depi-k8s"
  vpc_security_group_ids = [aws_security_group.k8s_sg.id]
  subnet_id              = data.aws_subnets.available.ids[1]

  tags = { Name = "depi-worker-node2" }
  user_data = file("${path.module}/scripts/worker2.sh")
}

# --- Management Server ---
resource "aws_instance" "management" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t3.micro"
  key_name               = "depi-k8s"
  vpc_security_group_ids = [aws_security_group.k8s_sg.id]
  subnet_id              = data.aws_subnets.available.ids[0]

  tags = { Name = "Management-Server" }
  user_data = file("${path.module}/scripts/management.sh")
}