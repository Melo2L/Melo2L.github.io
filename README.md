# DevOps Portfolio AWS

Production-ready DevOps portfolio deployed on AWS using Infrastructure as Code, containerization, CI/CD automation, and secure cloud networking.

Live site: https://melo-devops.com/

---

## Project Overview

This project represents a real-world DevOps portfolio environment designed to demonstrate practical cloud engineering and automation skills rather than a simple static website deployment.

Key objectives:

- Infrastructure provisioning using Terraform
- Automated container deployment via CI/CD
- Secure HTTPS delivery using Cloudflare
- Reverse proxy architecture with Nginx
- Cloud hosting on AWS EC2
- Production-style DevOps workflow

---

## Architecture

Cloudflare (DNS + SSL)  
↓  
Nginx Reverse Proxy (AWS EC2)  
↓  
Docker Container (Portfolio Application)  
↓  
Infrastructure provisioned via Terraform  

This architecture ensures secure traffic handling, isolated application runtime, and automated infrastructure management.

---

## Technology Stack

### Cloud Infrastructure

- AWS EC2 (Compute environment)
- AWS ECR (Container registry)
- AWS Systems Manager (Remote deployment)
- Elastic IP for stable public access
- Security Groups for network control

### DevOps and Automation

- Terraform (Infrastructure as Code)
- GitHub Actions (CI/CD pipeline)
- Docker containerization
- Automated remote deployment workflow

### Networking and Security

- Cloudflare DNS and SSL (Full Strict mode)
- Origin SSL certificate installed on server
- HTTPS enforcement
- Nginx reverse proxy configuration

### Application Layer

- React frontend
- TypeScript
- Tailwind CSS styling

---

## CI/CD Pipeline

The deployment workflow is fully automated:

1. Code pushed to GitHub repository
2. GitHub Actions builds Docker image
3. Image pushed to AWS ECR
4. AWS Systems Manager executes remote deployment
5. Container updated automatically on EC2
6. Cloudflare handles HTTPS delivery

No manual server interaction is required.

---

## Infrastructure as Code

Terraform is used to provision and manage:

- EC2 compute instance
- Container registry (ECR)
- IAM roles for Systems Manager access
- Security Groups
- Networking configuration

This approach ensures consistency, reproducibility, and scalability.

---

## Security Configuration

Security measures implemented:

- Cloudflare Full (Strict) SSL configuration
- Origin certificate installed on EC2
- Container exposed only via localhost binding
- Public access restricted through Nginx proxy
- Automatic HTTP to HTTPS redirection

This setup follows common production security practices.

---

## Future Improvements

Planned enhancements include:

- Blue/Green zero-downtime deployments
- CloudWatch monitoring and alerting
- External uptime monitoring integration
- Restricting access strictly to Cloudflare IP ranges
- Auto-scaling configuration
- Enhanced observability stack

---

## Author

Alisson Melo  
DevOps Engineer Student | Cloud Infrastructure and Automation Focus  

GitHub: https://github.com/Melo2L  
Portfolio: https://melo-devops.com/

---

## Purpose of This Project

This portfolio was built to demonstrate hands-on DevOps capabilities including:

- Infrastructure automation
- CI/CD pipeline design
- Secure cloud deployment
- Production-ready architecture practices
- End-to-end DevOps workflow implementation
