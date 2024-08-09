# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Help to do the below stuff 

React Project Preparation:
Ensured the React project has a build script in package.json to compile the app.

Terraform Configuration:
crreate a  Terraform configuration that installs dependencies, build and start deploy using serve command 

Jenkins Freestyle Project Setup:
Create a new Freestyle project in Jenkins for continuous integration and deployment.
Initialize Terraform configuration using terraform init.
Apply Terraform configuration using terraform apply -auto-approve.

Keep in mind that I have a windows laptop that i'm using to do this entire thing, make sure that all the commands that you're giving are related to windows and not linux
ChatGPT
Let's go through each part of your setup step-by-step. Since you're on a Windows laptop, we'll make sure all commands and instructions are appropriate for Windows.

1. React Project Preparation
Ensure your package.json has a build script defined. Here’s how you can check and set it up:

Open your package.json file (located in the root of your React project).

Look for the "scripts" section. You should see something like this:

json
Copy code
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
If the "build" script is missing, add it as shown above. This script uses react-scripts build to compile the React app.

2. Terraform Configuration
Create a Terraform configuration file to install dependencies, build, and deploy your React app. You can use a main.tf file with the following content:

Create a directory for your Terraform configuration if you haven't already. For example, C:\terraform\react-app.

Create a file named main.tf in this directory with the following content:

hcl
Copy code
provider "local" {}

resource "null_resource" "build_and_deploy" {
  provisioner "local-exec" {
    command = <<EOT
    npm install
    npm run build
    npx serve -s build
    EOT
  }
}
npm install installs the project dependencies.
npm run build compiles the React app.
npx serve -s build serves the build directory.
Ensure you have the serve package installed globally if you plan to use it:

Open Command Prompt or PowerShell and run:

powershell
Copy code
npm install -g serve
3. Jenkins Freestyle Project Setup
Now, let’s set up Jenkins to use your Terraform configuration. Follow these steps:

Create a new Freestyle project in Jenkins:

Open Jenkins in your web browser.
Click on New Item.
Enter a name for your project.
Select Freestyle project and click OK.
Configure the build steps:

Source Code Management: If you have a Git repository, configure it here. Otherwise, you can skip this step.

Build Environment: If you need to configure any build environment settings, do it here. For now, we’ll proceed with the build steps.

Build Steps:

Click on Add build step.
Choose Execute Windows batch command.
Add the following commands:

batch
Copy code
cd C:\terraform\react-app
terraform init
terraform apply -auto-approve
This will initialize your Terraform configuration and apply it.

Save the configuration:

Click Save.
Build the project:

Go to your project in Jenkins and click Build Now.
Notes:
Ensure you have Terraform installed on your Windows machine. If not, download it from the Terraform website and follow their installation instructions.
Ensure you have Node.js installed and available in your PATH. You can download it from the Node.js website.
Make sure Jenkins has permissions to access the directories and run commands.
With these steps, you should be able to prepare your React project, set up Terraform for deployment, and configure Jenkins to automate the process.

initiate a pull command in Jenkins everytime before terraform init to use the latest version
ChatGPT
To ensure Jenkins pulls the latest version of your code before running Terraform commands, you can configure your Jenkins Freestyle project to include a Git pull step before initializing Terraform. Here’s how you can adjust your Jenkins job configuration to include this step:

Updating Jenkins Freestyle Project Configuration
Open your Jenkins Freestyle project:

Go to your Jenkins dashboard.
Click on the name of the project you want to configure.
Configure your project:

Click on Configure on the left sidebar.
Add Source Code Management (if not already configured):

Under Source Code Management, select Git.
Enter your repository URL and credentials if needed.
Make sure the branch you want to build is selected.
Add a build step to pull the latest code:

Scroll down to the Build section.
Click Add build step.
Choose Execute Windows batch command.
Add the following commands to pull the latest code and prepare for the Terraform process:

batch
Copy code
REM Navigate to the project directory
cd C:\path\to\your\project

REM Pull the latest code from the Git repository
git pull origin main

REM Navigate to the Terraform directory
cd C:\terraform\react-app

REM Initialize Terraform
terraform init

REM Apply Terraform configuration
terraform apply -auto-approve
Replace C:\path\to\your\project with the path to your Git repository on the Jenkins server and main with the branch you are using if different.

Save the configuration:

Click Save.
Build the project:

Go to your project and click Build Now.
Important Notes:
Ensure Git is installed and configured on the machine where Jenkins is running.
Verify Jenkins user permissions: The Jenkins user or service account needs to have the necessary permissions to execute Git commands and access the directory.
Check the Git repository URL: Make sure the repository URL and branch name in the git pull command match your setup.
By adding these steps to your Jenkins Freestyle project, you ensure that the latest code is pulled from your Git repository before executing Terraform commands, thereby keeping your deployment up-to-date with the most recent code changes.