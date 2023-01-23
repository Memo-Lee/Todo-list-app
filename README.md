# Dinamik Todo App


## Backendde kullanılan kütüphaneler ve uygulamalar.
  
- Uygulamalar:  Docker, Redis, MongoDB Compass, Postman  
  
- Libraries:
    "accesscontrol": "^2.2.1",  
    "bcrypt": "^5.0.1",  
    "boom": "^7.3.0",  
    "cors": "^2.8.5",  
    "dotenv": "^8.2.0",  
    "express": "^4.17.1",  
    "express-rate-limit": "^5.2.6",  
    "express-redis-cache": "^1.1.3",  
    "ioredis": "^4.26.0",  
    "joi": "^17.4.0",  
    "jsonwebtoken": "^8.5.1",  
    "mongoose": "^5.12.3",  
    "nodemon": "^2.0.20",  
    "rate-limit-redis": "^2.1.0",  
    "sucrase": "^3.18.1"  

## Frontendde kullanılan kütüphaneler ve hooks.
    "@chakra-ui/react": "^2.4.9",  
    "@emotion/react": "^11.10.4",  
    "@emotion/styled": "^11.10.4",  
    "@tanstack/react-query": "^4.2.3",  
    "@tanstack/react-query-devtools": "^4.2.3",  
    "@testing-library/jest-dom": "^5.16.5",  
    "@testing-library/react": "^13.4.0",  
    "@testing-library/user-event": "^13.5.0",  
    "antd": "^5.1.6",  
    "axios": "^1.2.3",  
    "formik": "^2.2.9",  
    "framer-motion": "^7.2.1",  
    "moment": "^2.29.4",  
    "react": "^18.2.0",  
    "react-dom": "^18.2.0",  
    "react-image-gallery": "^1.2.9",  
    "react-query": "^3.39.2",  
    "react-router-dom": "^6.7.0",  
    "react-scripts": "5.0.1",  
    "web-vitals": "^2.1.4",  
    "yup": "^0.32.11"  


## Backend Ayağa Kaldırma
- Docker uygulamasını indirin
- Mongodb ve Redis'i yükleyebilmek için backend içerisindeki *docker-compose.yml* dosyası çalıştırılmalıdır.( Bilgisayarınızda docker ve compose yüklü olmalıdır. [Docker indirmek ve bilgi almak için tıklayın](https://docs.docker.com/get-docker/ "Docker Web Site"))
 
Bunun için backend dizinine gidilerek docker-compose up komutu çalıştırışlır.

- `docker-compose up -d`


- backend dizininde .env dosyası oluşturulur ve içerisine gerekli bilgiler girilir. (Örnek aşağıda yer almaktadır.)
```
MONGO_URI=mongodb://localhost:27017
JWT_SECRET=sdgkMKEVlm3v23kl_n423vGG3b_TVnm234xnv23x
JWT_REFRESH_SECRET=rerv1jv15v1CVBnasd23jnv13123nvrqwr23
```

- Mongodb compass uygulamasında Yeni bir db oluşturulur. ([MongoDb Compass İndirmek için tıklayın](https://studio3t.com/download/ "İndirmek için tıklayın"))

- mongodb://localhost:27017 adresine bağlantı kurulur.

- Create Database diyerek "test" isimli bir database oluşturulur ve bir collection girilir. Ardından  assets dosyasındaki json dosyaları sıra ile eklenir.

<img width="1544" alt="Ekran Resmi 2022-11-17 01 52 39" src="https://user-images.githubusercontent.com/88403704/202311785-1623e38c-9b3d-4306-9313-2f7576ee867d.png">

- Bu işlemin ardından "Add Data -> Import File" diyerek backend dizininde yer alan assets klasöründeki json dosyalarını ilgili collectionlara eklenir.

<img width="1544" alt="Ekran Resmi 2022-11-17 01 54 35" src="https://user-images.githubusercontent.com/88403704/202312099-535b8142-fbbb-4597-b34f-5fb1dd4163a7.png">

- backend dizininde `yarn dev` & `npm run dev`  komutu çalıştırarak backend ayağa kaldırılır.
<img width="652" alt="Ekran Resmi 2022-11-17 01 57 07" src="https://user-images.githubusercontent.com/88403704/202312661-914784e9-5939-4143-bf52-12eb07ca4646.png">

- http://localhost:4000/ adresinde istek atarak backend'in ayakta olduğunu doğrulayabilirsiniz.

## Frontend Ayağa Kaldırma
- client dizinine giderek  `npm install` ile *node_modules* indirilir.
- Daha sonra `yarn start` veya `npm start` komutu ile react projesi ayağa kaldırılır.  
    
    
    
## Projenin Görüntüleri
<img  width="1000" height="500" alt="Ekran Resmi 2022-11-17 01 57 07" src="https://github.com/Memo-Lee/todo-app/blob/main/client/public/img/homepage.png">
<img  width="1000" height="500" alt="Ekran Resmi 2022-11-17 01 57 07" src="https://github.com/Memo-Lee/todo-app/blob/main/client/public/img/register.png">
<img  width="1000" height="500" alt="Ekran Resmi 2022-11-17 01 57 07" src="https://github.com/Memo-Lee/todo-app/blob/main/client/public/img/profile.png">
<img  width="1000" height="500" alt="Ekran Resmi 2022-11-17 01 57 07" src="https://github.com/Memo-Lee/todo-app/blob/main/client/public/img/todos.png">
<img  width="1000" height="500" alt="Ekran Resmi 2022-11-17 01 57 07" src="https://github.com/Memo-Lee/todo-app/blob/main/client/public/img/todos.png">
<img  width="1000" height="500" alt="Ekran Resmi 2022-11-17 01 57 07" src="https://github.com/Memo-Lee/todo-app/blob/main/client/public/img/edit.png">
<img  width="1000" height="500" alt="Ekran Resmi 2022-11-17 01 57 07" src="https://github.com/Memo-Lee/todo-app/blob/main/client/public/img/create.png">
