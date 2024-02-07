# Nx + Angular-arrchitects demo-project

## Introduction 
First project with **Nx** for **Shell** + **MicroFrontends** implementation, demo with **Angular** + **React** and **Angular-architects**

## This project can be started via npx or with docker-compose

### Npx Started 

```
npm install
```

```
npx nx run host-angular:serve
```

### Docker Started 

```
docker-compose up --build
```

## Steps to create this proyect in cmd
1. Create an empty Monorepo workspace named _nx-angular-host-react-mfe_

```
npx create-nx-workspace nx-angular-host-react-mfe --preset=apps --workspace-type=integrated
```

2. Open the VSC

```
cd nx-angular-host-react-mfe
```

```
code .
```

3. Install Dependencies.

- Angular
```
npm install --save-dev @nx/angular
```

- React
```
npm install --save-dev @nx/react
```

4. Create the host named _host-angular/host-react_ and one remote with dynamic charge _microfront-angular/microfront-react_.

- Angular
```
nx g @nx/angular:host host-angular --remotes=microfront-angular --dynamic --style=scss
```

- React
```
nx g @nx/react:host host-react --remotes=microfront-react --style=scss
```

5. To add more MF related to our host, use this command.

- Angular
```
nx g @nx/angular:remote microfront-angular-two --port=4202 --style=scss --host=host-angular
```

- React
```
nx g @nx/react:remote microfront-react-two --port=4302 --style=scss --host=host-react
```

6. Create Shared Library

```
npx nx generate @nx/js:library utils --unitTestRunner=jest --directory=shared --publishable --importPath=@ts-multi-shl-siep/shared/utils --no-interactive
```

7. Launch the project.
	
- Angular
```
npx nx run host-angular:serve
```

- React
```
npx nx run host-react:serve
```

8. If we see an error, redo _npm install_

```
npm install
```

9. Relaunch the project.

- Angular
```
npx nx run host-angular:serve
```

- React
```
npx nx run host-react:serve
```
