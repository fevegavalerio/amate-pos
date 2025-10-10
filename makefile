.PHONY: create-db-config
create-db-config:
	kubectl delete configmap bootstrap-db -n default --ignore-not-found
	kubectl create configmap bootstrap-db \
	  --from-file=bootstrap.sql=./sql/bootstrap.sql \
	  -n default

.PHONY: deploy-db
deploy-db: create-db-config
	kubectl apply -n default -f k8s/postgres-deployment.yaml
	kubectl apply -n default -f k8s/postgres-service.yaml
	kubectl apply -f https://kind.sigs.k8s.io/examples/ingress/deploy-ingress-nginx.yaml

.PHONY: deploy-db-client
deploy-db-client:
	kubectl apply -n default -f k8s/postgres-client-pod.yaml

.PHONY: delete-all-db
delete-all-db:
	kubectl delete -n default -f k8s/postgres-deployment.yaml || true
	kubectl delete -n default -f k8s/postgres-client-pod.yaml || true
	kubectl delete -n default -f k8s/postgres-service.yaml || true
	kubectl delete -n default configmap bootstrap-db || true

.PHONY: deploy-db-client
deploy-db-client:
	kubectl apply -n default -f k8s/postgres-client-pod.yaml

.PHONY: create-cluster
create-cluster:
	kind create cluster --config=k8s/kind-config.yaml

.PHONY: delete-cluster
delete-cluster:
	kind delete cluster || true

