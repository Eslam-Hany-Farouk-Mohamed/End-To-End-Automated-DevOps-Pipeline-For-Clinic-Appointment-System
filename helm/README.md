# Clinic Appointment System Helm Chart

This Helm chart deploys the Clinic Appointment System, including Frontend, Backend, Dashboard, and MongoDB.

## Prerequisites

- Kubernetes 1.19+
- Helm 3.2.0+

## Installing the Chart

To install the chart with the release name `clinic-appointment-system`:

```bash
helm install clinic-appointment-system ./clinic-appointment-system
```

## Uninstalling the Chart

To uninstall/delete the `clinic-appointment-system` deployment:

```bash
helm uninstall clinic-appointment-system
```

## Configuration

The following table lists the configurable parameters of the chart and their default values.

| Parameter | Description | Default |
|-----------|-------------|---------|
| `backend.replicaCount` | Number of backend replicas | `1` |
| `backend.image.repository` | Backend image repository | `docker.io/shahaly/hospital-mern-stack-backend` |
| `backend.image.tag` | Backend image tag | `latest` (overridden by value file) |
| `frontend.replicaCount` | Number of frontend replicas | `1` |
| `frontend.image.repository` | Frontend image repository | `docker.io/shahaly/hospital-mern-stack-frontend` |
| `dashboard.replicaCount` | Number of dashboard replicas | `1` |
| `dashboard.image.repository` | Dashboard image repository | `docker.io/shahaly/hospital-mern-stack-dashboard` |
| `mongo.replicaCount` | Number of mongo replicas | `1` |
| `ingress.enabled` | Enable Ingress | `false` |

## Ingress

Access the application via:
- Frontend: `http://localhost:30080/`
- API: `http://localhost:30080/api`
- Dashboard: `http://localhost:30080/dashboard`

(Using the NodePort service for Ingress Controller)
