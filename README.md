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
npx create-nx-workspace ts-multi-shl-siep-demo-nx --preset=apps --workspace-type=integrated --nx-cloud=false
```

2. Open the VSC

```
cd ts-multi-shl-siep-demo-nx
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
nx g @nx/angular:host host-angular --remotes=microfront-angular --addTailwind=true --dynamic --style=scss
```

- React
```
nx g @nx/react:host host-react --remotes=microfront-react --addTailwind=true --style=scss
```

5. To add more MF related to our host, use this command.

- Angular
```
nx g @nx/angular:remote microfront-angular-two --addTailwind=true --port=4202 --style=scss --host=host-angular
```

- React
```
nx g @nx/react:remote microfront-react-two --addTailwind=true --port=4302 --style=scss --host=host-react
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
