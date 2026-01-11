# 🐾 PawsPalConnect DevOps Task

PawsPalConnect is a Node.js-based pet adoption dashboard built to demonstrate a complete DevOps lifecycle. This project covers automated CI/CD pipelines, containerization with Docker, and orchestration using Kubernetes.

## 🚀 Key Features
- **Automated CI/CD:** Multi-stage pipeline using GitHub Actions.
- **Containerization:** Production-ready Docker image using Alpine Linux for a small footprint.
- **Kubernetes Ready:** Full manifest suite including Deployments, Services, ConfigMaps, and Secrets.
- **Self-Healing:** Integrated Liveness and Readiness probes.
- **High Availability:** Scaled with multiple replicas and Rolling Update strategy.

---

📁 Project Structure

PAWSPAL-DEVOPS-TASK/
├── .github/workflows/ci.yml   # CI/CD Pipeline
├── k8s/                       # Kubernetes Manifests
│   ├── config.yaml            # ConfigMap & Secret
│   └── deployment.yaml        # Deployment & Service
├── app.js                     # Main App & Dashboard UI
├── app.test.js                # Unit Tests
├── Dockerfile                 # Container Configuration
├── package.json               # Project Dependencies
└── README.md                  # Documentation

---

1. 🛠️ HOW TO RUN

npm install

npm start

Access at: http://localhost:3000
---


2. Docker

docker build -t pawspal-app .

docker run -p 3000:3000 pawspal-app

---

3. kubernetes
   
  kubectl apply -f k8s/config.yaml
  
  kubectl apply -f k8s/deployment.yaml

  ---

⛓️ CI/CD Pipeline Details
   The pipeline is defined in .github/workflows/ci.yml and triggers on every push to the main branch.

   Test Stage: Runs npm test and eslint to ensure code quality and functionality.
    Build Stage: Builds the Docker image to verify containerization.
   Deploy (Validation) Stage: Uses Kubeconform to validate Kubernetes manifests against official schemas without needing a live cluster.


☸️ Kubernetes Design Decisions
       RollingUpdate: Set to ensure zero-downtime deployments.
       Resource Management: Configuration is externalized into ConfigMaps (for environments) and Secrets (for sensitive data) to keep the application code portable.
  Health Checks:
  Liveness Probe: Monitors if the app is alive; restarts the container if it crashes.
  Readiness Probe: Ensures the app is fully loaded before sending user traffic.
   

