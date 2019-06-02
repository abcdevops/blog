FROM ruby:2.4.5-alpine3.8

LABEL maintainer="Tarun Jangra <tarun.jangra@hotmail.com>"
ENV LANG C.UTF-8

RUN \
echo "http://dl-4.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories

RUN set -ex \
    \
	&& apk add --no-cache --virtual .build-jekyll build-base binutils-gold \
        curl g++ gcc gnupg libgcc linux-headers make tar zip


RUN set -ex \
    \
	&& apk --update add readline libxml2  libxslt libxml2-utils \
       python zlib  yaml fontforge libffi nginx aspell aspell-en  \
       graphviz gnuplot libcurl curl readline-dev libxml2-dev \
       zlib-dev libxslt-dev yaml-dev libffi-dev openssl zlib \
       libressl libressl-dev libc6-compat openblas-dev dpkg lapack-dev


RUN set -ex \
    \
	&&  mkdir -p /home/jekyll && \
        addgroup -Sg 1000 jekyll && \
        adduser -SG jekyll -u 1000 -s /bin/sh -h /home/jekyll jekyll && \
        chown jekyll:jekyll /home/jekyll && \
        echo 'jekyll ALL=NOPASSWD:ALL' >> /etc/sudoers && \
        mkdir /home/jekyll/www && \
        chown jekyll:jekyll /home/jekyll/www
 
    
 #INSTALL JAVA8
# add a simple script that can auto-detect the appropriate JAVA_HOME value
# based on whether the JDK or only the JRE is installed
RUN { \
		echo '#!/bin/sh'; \
		echo 'set -e'; \
		echo; \
		echo 'dirname "$(dirname "$(readlink -f "$(which javac || which java)")")"'; \
	} > /usr/local/bin/docker-java-home \
	&& chmod +x /usr/local/bin/docker-java-home
ENV JAVA_HOME /usr/lib/jvm/java-1.8-openjdk/jre
ENV PATH $PATH:/usr/lib/jvm/java-1.8-openjdk/jre/bin:/usr/lib/jvm/java-1.8-openjdk/bin
ENV JAVA_VERSION 8u191
ENV JAVA_ALPINE_VERSION 8.191.12-r0

RUN set -ex \
	&& apk add --no-cache openjdk8-jre="$JAVA_ALPINE_VERSION" \
	&& [ "$JAVA_HOME" = "$(docker-java-home)" ] 


RUN set -ex \
    \
    && apk add --no-cache --virtual .build-jekyll xz

 #INSTALL NoteJS
 ENV NODE_VERSION 8.15.0

 # gpg keys listed at https://github.com/nodejs/node#release-keys
RUN set -ex \
    \
	&& addgroup -g 1001 node \
    && adduser -u 1001 -G node -s /bin/sh -D node \
    && for key in \
    94AE36675C464D64BAFA68DD7434390BDBE9B9C5 \
    FD3A5288F042B6850C66B31F09FE44734EB7990E \
    71DCFD284A79C3B38668286BC97EC7A07EDE3FC1 \
    DD8F2338BAE7501E3DD5AC78C273792F7D83545D \
    C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8 \
    B9AE9905FFD7803F25714661B63B535A4C206CA9 \
    77984A986EBC2AA786BC0F66B01FBB92821C587A \
    8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600 \
    4ED778F539E3634C779C87C6D7062848A1AB005C \
    A48C2BEE680E841632CD4E44F07496B3EB3C1762 \
    B9E2F5981AA6E0CD28160D9FF13993A75599653C \
  ; do \
      gpg --batch --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys "$key" || \
      gpg --batch --keyserver hkp://ipv4.pool.sks-keyservers.net --recv-keys "$key" || \
      gpg --batch --keyserver hkp://pgp.mit.edu:80 --recv-keys "$key" ; \
    done \
    && curl -fsSLO --compressed "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION.tar.xz" \
    && curl -fsSLO --compressed "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc" \
    && gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc \
    && grep " node-v$NODE_VERSION.tar.xz\$" SHASUMS256.txt | sha256sum -c - \
    && tar -xf "node-v$NODE_VERSION.tar.xz" \
    && cd "node-v$NODE_VERSION" \
    && ./configure \
    && make -j$(getconf _NPROCESSORS_ONLN) \
    && make install \
    && cd .. \
    && rm -Rf "node-v$NODE_VERSION" \
    && rm "node-v$NODE_VERSION.tar.xz" SHASUMS256.txt.asc SHASUMS256.txt

ENV YARN_VERSION 1.12.3

RUN set -ex \
    \
    && for key in \
    6A010C5166006599AA17F08146C2130DFD2497F5 \
  ; do \
      gpg --batch --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys "$key" || \
      gpg --batch --keyserver hkp://ipv4.pool.sks-keyservers.net --recv-keys "$key" || \
      gpg --batch --keyserver hkp://pgp.mit.edu:80 --recv-keys "$key" ; \
    done \
    && curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
    && curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz.asc" \
    && gpg --batch --verify yarn-v$YARN_VERSION.tar.gz.asc yarn-v$YARN_VERSION.tar.gz \
    && mkdir -p /opt \
    && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
    && ln -s /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
    && ln -s /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
    && rm yarn-v$YARN_VERSION.tar.gz.asc yarn-v$YARN_VERSION.tar.gz 


ADD install_cmake.sh /tmp/install_cmake.sh
ADD install_sfnt2woff.sh /tmp/install_sfnt2woff.sh
ADD install_tidy.sh /tmp/install_tidy.sh
ADD install_plantuml.sh /tmp/install_plantuml.sh

WORKDIR /home/jekyll/www

# #Install Aditional packages for jekyll
RUN set -ex \
    \
	&& /tmp/install_cmake.sh \
       /tmp/install_sfnt2woff.sh \
       /tmp/install_tidy.sh 

# to make nginx pid file while running
RUN \
mkdir /run/nginx

#RUN apk del .build-jekyll

ADD giwww.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /var/cache/apk/* && rm -rf /tmp/install*
