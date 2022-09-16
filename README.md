# seedaogov
SeeDAO 市政厅治理后台, 使用 Vue2 + Express (Nodejs)

## Frontend

在 `client` 中

```sh
cd client
npm install
npm run serve
```

要部署时请删除 `public/` 并重新建置一份前端 `/client/dist` 并往上移后重新命名为 `pbulic/`:
```sh
cd client
npm run build
```
## Backend

在 `server` 中

```sh
npm install
npm run start

## Windows
npm run start:ps
```
