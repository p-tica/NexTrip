# ---------- build stage ----------
FROM gradle:8.7-jdk21-alpine AS builder
WORKDIR /workspace

# Copy build files and preload dependencies
COPY gradle gradle
COPY gradlew settings.gradle* build.gradle* ./

# 👇 This just preloads the dependency cache (optional but useful)
RUN ./gradlew --no-daemon build --dry-run || true

# Copy source and build the fat jar
COPY src src
RUN ./gradlew --no-daemon clean bootJar -x test

# ---------- runtime stage ----------
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=builder /workspace/build/libs/*.jar app.jar

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s CMD \
  wget -qO- http://localhost:8080/actuator/health | grep '"status":"UP"' || exit 1

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
