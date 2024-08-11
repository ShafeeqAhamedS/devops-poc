# Define a null_resource to run local-exec provisioner commands
resource "null_resource" "install_node" {
  # Use local-exec provisioner to execute commands on the local machine
  provisioner "local-exec" {
    command = <<-EOF
      @echo off
      choco install nodejs --version=18.20.3 -y
      echo node -v
    EOF

  }
}

# Define an output to confirm that Node.js has been installed
output "node_version" {
  value = "NodeJS successfully installed its version is 18.20.3"

  # Ensure the output is only generated after the Node.js installation is complete
  depends_on = [ null_resource.install_node ]
}