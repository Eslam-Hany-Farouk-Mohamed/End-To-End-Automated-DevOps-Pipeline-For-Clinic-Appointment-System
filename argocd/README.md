# Argo CD Application for Clinic Appointment System

This directory contains the Argo CD Application manifest to deploy the Clinic Appointment System using Helm.

## Prerequisites

- Argo CD installed on the Kubernetes cluster.
- `kubectl` configured to access the cluster.

## Deployment

To deploy the application to Argo CD:

```bash
kubectl apply -f argocd-app.yaml
```

## Verify Status

Check the application status in Argo CD UI or via CLI:

```bash
argocd app get clinic-appointment-system
```

## Syncing

The application is configured to sync automatically (`selfHeal` and `prune` enabled).
