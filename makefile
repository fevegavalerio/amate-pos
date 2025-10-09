.PHONY: deploy-db
deploy-db:
	kubectl apply -n default -f k8s/postgres-deployment.yaml
	kubectl apply -n default -f k8s/postgres-service.yaml
	kubectl apply -n default -f k8s/postgres-ingress.yaml
	kubectl apply -f https://kind.sigs.k8s.io/examples/ingress/deploy-ingress-nginx.yaml

.PHONY: delete-all-db
delete-all-db:
	kubectl delete -n default -f k8s/postgres-deployment.yaml || true
	kubectl delete -n default -f k8s/postgres-client-pod.yaml || true
	kubectl delete -n default -f k8s/postgres-service.yaml || true
	kubectl delete -n default -f k8s/postgres-ingress.yaml || true
	kubectl delete -n default configmap bootstrap-db || true

.PHONY: deploy-db-client
deploy-db-client:
	kubectl apply -n default -f k8s/postgres-client-pod.yaml

.PHONY: create-cluster
create-cluster:
	kind create cluster --config=k8s/kind-config.yaml
