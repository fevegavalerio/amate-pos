.PHONY: create-db-config
create-db-config:
	kubectl delete configmap bootstrap-db -n default --ignore-not-found
	kubectl create configmap bootstrap-db \
	  --from-file=bootstrap.sql=./sql/bootstrap.sql \
	  -n default

.PHONY: deploy-db
deploy-db: create-db-config
	kubectl apply -n default -f k8s/postgres-deployment.yaml

.PHONY: deploy-db-client
deploy-db-client:
	kubectl apply -n default -f k8s/postgres-client-pod.yaml

.PHONY: delete-all-db
delete-all-db:
	kubectl delete -n default -f k8s/postgres-deployment.yaml || true
	kubectl delete -n default -f k8s/postgres-client-pod.yaml || true
	kubectl delete -n default configmap bootstrap-db || true