# DevOps Portfolio AWS

Production-ready DevOps portfolio deployed on AWS using Infrastructure as Code, CI/CD automation, containerization, and secure cloud networking practices.

Live website: https://melo-devops.com/

---

## Project Overview

This project represents a real-world DevOps portfolio designed to demonstrate practical cloud engineering, automation, and production deployment practices.

The goal was not simply to build a personal website, but to create a complete DevOps environment including:

- Cloud infrastructure provisioning
- Automated CI/CD pipelines
- Containerized deployment
- Security-first networking configuration
- Production-style deployment workflow

The project reflects hands-on DevOps practices aligned with modern industry standards.

---

## Architecture

Cloudflare (DNS + SSL termination)  
↓  
AWS EC2 Instance  
↓  
Nginx Reverse Proxy  
↓  
Docker Container (Portfolio Application)  
↓  
Infrastructure provisioned via Terraform  

This architecture ensures:

- Secure HTTPS delivery
- Isolation of application runtime
- Infrastructure reproducibility
- Automated deployment workflow

---

## Technology Stack

### Cloud Infrastructure

- AWS EC2 (compute environment)
- AWS ECR (container registry)
- AWS Systems Manager – SSM (remote deployment)
- Elastic IP for stable DNS mapping
- Security Groups for network control

### Infrastructure as Code

- Terraform provisioning:
  - EC2 instance
  - ECR repository
  - IAM role for SSM
  - Security Groups
  - Networking configuration

This guarantees reproducibility and consistent deployments.

### DevOps & CI/CD

- GitHub Actions pipeline automation
- Docker containerization
- Automated build and deployment workflow
- Commit-based image versioning (SHA tagging)

### Networking & Security

- Cloudflare Full Strict SSL mode
- Origin certificate installed on EC2
- HTTPS enforcement
- Reverse proxy via Nginx
- Container exposed only via localhost binding

### Application Layer

- React frontend
- TypeScript
- Tailwind CSS

---

## CI/CD Pipeline

The deployment pipeline follows a structured DevOps workflow:

### Quality Gates (Pre-Deploy)

- ESLint code validation
- TypeScript type checking
- Production build validation
- Dockerfile best practices analysis (Hadolint)
- Container vulnerability scanning (Trivy)
- Automated container smoke test

Deployments are blocked if any quality or security check fails.

---

### Container Build & Versioning

Docker images are tagged using:

- `latest` for compatibility
- Commit SHA for traceability and rollback capability

This approach ensures immutable artifacts and reliable deployments.

---

### Automated Deployment Flow

1. Code pushed to GitHub repository
2. CI Quality Gates executed
3. Docker image built and security scanned
4. Image pushed to AWS ECR
5. AWS SSM executes remote deployment on EC2
6. Container updated automatically
7. Cloudflare delivers secure HTTPS traffic

No manual deployment steps are required.

---

## Security Configuration

Implemented security practices include:

- Full Strict SSL via Cloudflare
- Origin certificate on EC2
- Container restricted to localhost exposure
- Reverse proxy managing external access
- Automated vulnerability scanning in CI pipeline
- Immutable container image versioning

This reflects production-oriented DevOps security practices.

---

## Monitoring and Reliability (Next Steps)

Planned improvements include:

- CloudWatch alarms and metrics
- External uptime monitoring
- Zero-downtime deployment strategy
- Security group restriction to Cloudflare IP ranges
- Enhanced observability stack

---

## Technical Decisions

Key decisions made during the project:

- Terraform chosen for Infrastructure as Code reproducibility
- Docker for consistent application runtime
- GitHub Actions for CI/CD simplicity and integration
- AWS SSM instead of SSH for secure remote deployment
- Cloudflare for SSL termination and DNS security
- Commit SHA tagging for artifact traceability

These decisions reflect modern DevOps operational practices.

---

## Author

Alisson Melo  
DevOps Engineer Student | Cloud Infrastructure & Automation Focus  

GitHub: https://github.com/Melo2L  
Portfolio: https://melo-devops.com/

---

## Purpose of This Project

This portfolio demonstrates practical DevOps capabilities including:

- Infrastructure automation
- CI/CD pipeline design
- Container orchestration fundamentals
- Secure cloud deployment practices
- Production-grade environment configuration
- End-to-end DevOps workflow implementation
