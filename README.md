# Guestbook Application

This is a simple Guestbook application built using **Node.js**, **Express**, and **Kubernetes**. The application allows users to submit messages, which are displayed on the homepage. It is designed to demonstrate Kubernetes features like **Deployments**, **Horizontal Pod Autoscaling (HPA)**, **Rolling Updates**, and **Rollbacks**.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Prerequisites](#prerequisites)
4. [Setup and Deployment](#setup-and-deployment)
5. [Tasks and Screenshots](#tasks-and-screenshots)
6. [Contributing](#contributing)
7. [License](#license)

---

## Project Overview
The Guestbook application consists of a web front end where users can submit messages. The application is containerized using Docker and deployed on a local Kubernetes cluster using Minikube. Key features include:
- **Horizontal Pod Autoscaling (HPA)**: Automatically scales the number of pods based on CPU utilization.
- **Rolling Updates**: Updates the application to a new version without downtime.
- **Rollbacks**: Reverts to a previous version if needed.

---

## Technologies Used
- **Frontend**: HTML, CSS
- **Backend**: Node.js, Express
- **Containerization**: Docker
- **Orchestration**: Kubernetes, Minikube
- **Load Testing**: `hey` (HTTP load generator)

---

## Prerequisites
Before running the project, ensure you have the following installed:
1. **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
2. **Minikube**: [Install Minikube](https://minikube.sigs.k8s.io/docs/start/)
3. **kubectl**: [Install kubectl](https://kubernetes.io/docs/tasks/tools/)
4. **Node.js**: [Install Node.js](https://nodejs.org/)

---

## Setup and Deployment

### Step 1: Clone the Repository
```bash
git clone https://github.com/aboumehdi57/guestbook-app.git
cd guestbook-app
