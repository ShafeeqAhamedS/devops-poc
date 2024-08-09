provider "local" {}

resource "null_resource" "build_and_deploy" {
  provisioner "local-exec" {
    command = <<EOT
    cd C:\Users\shafe\Downloads\testing && npm install && npm run build && npx serve -s build
    EOT
  }
}
