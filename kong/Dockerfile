FROM kong/kong-gateway:latest
USER root
RUN apt-get update && apt-get install -y unzip git
RUN git clone https://github.com/Trade-Arcade-Inc/infra-kong-plugin-jwt-claims-headers/ \
    && cd infra-kong-plugin-jwt-claims-headers/jwt-claims-headers \
    && luarocks make
ENV KONG_PLUGINS="jwt,jwt-claims-headers"
USER kong