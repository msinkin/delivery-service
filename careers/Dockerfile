# Берём образ rust 
FROM rust AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# В рабочей директории создаём hello world проект
RUN cargo init

# Копируем в этот проект манифест файлы с указание зависимостей
COPY Cargo.toml Cargo.lock .

# Скачиваем и компилируем только зависимости проекта
# Используя --mount=type=cache при следующем запуске зависимости уже будут скачаны и скомпилированы
RUN --mount=type=cache,target=/usr/local/cargo/registry cargo build --release

# Удаляем сгенерированную папку с исходным кодом hello world
RUN rm -r ./src

# Копируем исходный код в контейнер
COPY src/ ./src

# Обновление даты изменения точки входа
RUN touch ./src/main.rs

# Компилируем только исходный код приложения
RUN --mount=type=cache,target=/usr/local/cargo/registry cargo build --release

# Берём образ debian linux
FROM debian:bullseye-slim

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем скомпилированный файл
COPY --from=builder /app/target/release/actix ./actix

# Указываем точку входа тоесть наш сервер
ENTRYPOINT ["./actix"]