## Docker контейнер
Для создания образа (``tracking:latest``):
```bash
docker build -t tracking:latest .
```
Последующее создания контейнера (``tracking``) на основе этого образа (``tracking:latest``):
```
docker run -d -p 8080:8080 --name tracking tracking:latest
```