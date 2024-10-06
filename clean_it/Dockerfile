FROM openjdk:17.0.2-jdk-slim-buster

RUN apt-get update; apt-get install -y fontconfig libfreetype6


# Add a volume pointing to /tmp
VOLUME /tmp

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Set the working directory to /app
WORKDIR /app

# We make four distinct layers so if there are application changes the library layers can be re-used
COPY  target/app.jar/ /app

# Run the jar file
ENTRYPOINT ["java","-jar","app.jar"]