.PHONY: deploy-db
deploy-db:
	kubectl apply -n default -f k8s/postgres-deployment.yaml

.PHONY: delete-all-db
delete-all-db:
	kubectl delete -n default -f k8s/postgres-deployment.yaml || true
	kubectl delete -n default -f k8s/postgres-client-pod.yaml || true
	kubectl delete -n default configmap bootstrap-db || true

.PHONY: deploy-db-client
deploy-db-client:
	kubectl apply -n default -f k8s/postgres-client-pod.yaml