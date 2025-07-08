FROM openjdk:21
WORKDIR /app

# Copy the correct JAR file from target directory
COPY target/sqlix-0.0.1-SNAPSHOT.jar /app/sqlix-0.0.1-SNAPSHOT.jar

EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "/app/sqlix-0.0.1-SNAPSHOT.jar"]