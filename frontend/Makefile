run:
	docker build -t tracking:latest .
	docker run -d -p 8080:8080 --name tracking tracking:latest
stop:
	docker stop tracking