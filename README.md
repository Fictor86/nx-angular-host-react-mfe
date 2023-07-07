# Nx + Angular-arrchitects demo-project

## Introduction 
First project with **Nx** for **Shell** + **MicroFrontends** implementation, demo with **Angular** + **React** and **Angular-architects**

## Getting Started

```
npm install
npx nx run ts-multi-shl-siep-demo-nx:serve
```

## Steps to create this proyect in cmd
1. Create an empty Monorepo workspace named _ts-multi-shl-siep-demo-nx_

```
npx create-nx-workspace ts-multi-shl-siep-host --preset=apps --workspace-type=integrated --nx-cloud=false
```

2. Open the VSC

```
cd ts-multi-shl-siep-host
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

4. Create the host named _ts-ng-shl-siep-host/ts-rt-shl-siep-host_ and one remote with dynamic charge _ts-ng-mff-siep-login/ts-rt-mff-siep-form_.

- Angular
```
nx g @nx/angular:host ts-ng-shl-siep-host --remotes=ts-ng-mff-siep-login --dynamic --style=scss
```

- React
```
nx g @nx/react:host ts-rt-shl-siep-host --remotes=ts-rt-mff-siep-form --style=scss
```

5. To add more MF related to our host, use this command.

- Angular
```
nx g @nx/angular:remote ts-ng-mff-siep-cart --style=scss --host=ts-ng-shl-siep-host
```

- React
```
nx g @nx/react:remote ts-rt-mff-siep-home --style=scss --host=ts-rt-shl-siep-host
```

6. Create Shared Library

```
npx nx generate @nx/js:library utils --unitTestRunner=jest --directory=shared --publishable --importPath=@ts-multi-shl-siep/shared/utils --no-interactive
```

7. Launch the project.
	
- Angular
```
npx nx run ts-ng-shl-siep-host:serve
```

- React
```
npx nx run ts-rt-shl-siep-host:serve
```

8. If we see an error, update the migrations with _nx migrate latest_ and do _npm install_

```
nx migrate latest
```

```
npm install
```

9. Relaunch the project.

- Angular
```
npx nx run ts-ng-shl-siep-host:serve
```

- React
```
npx nx run ts-rt-shl-siep-host:serve
```
