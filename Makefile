.PHONY: make 
make: 
	docker build -t rahoyo-porfolio .

.PHONY: run
run:
	docker run -p 3000:3000 rahoyo-porfolio

.PHONY: build-production
build-production: ## Build the production docker image.
	docker compose -f docker/production/docker-compose.yml build

.PHONY: start-production
start-production: ## Start the production docker container.
	docker compose -f docker/production/docker-compose.yml up -d

.PHONY: stop-production
stop-production: ## Stop the production docker container.
	docker compose -f docker/production/docker-compose.yml down
