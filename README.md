# Nx + Angular-arrchitects demo-project

## Introduction 
First project with Nx for Shell+MicroFrontends implementation, demo with Angular + React and Angular-architects

## Getting Started
1.	npm install
2.	npx nx run ourHostName:serve

## Steps to create this proyect in cmd
1. Create an empty Monorepo workspace named _ts-multi-shl-siep-host_.
  1. 1. npx create-nx-workspace ts-multi-shl-siep-host --preset=apps --workspace-type=integrated --nx-cloud=false

2. Open the VSC
	2. 1. cd ts-multi-shl-siep-host
	2. 2. code .

3. Install Dependencies.
	3. 1. Angular
          npm install --save-dev @nx/angular
	3. 2. React
          npm install --save-dev @nx/react

4. Create the host named _ts-ng-shl-siep-host/ts-rt-shl-siep-host_ and one remote with dynamic charge _ts-ng-mff-siep-login/ts-rt-mff-siep-form_.
	4. 1. Angular
          nx g @nx/angular:host ts-ng-shl-siep-host --remotes=ts-ng-mff-siep-login --dynamic --style=scss
	4. 2. React
          nx g @nx/react:host ts-rt-shl-siep-host --remotes=ts-rt-mff-siep-form --style=scss

5. To add more MF related to our host, use this command.
	5. 1. Angular
          nx g @nx/angular:remote ts-ng-mff-siep-cart --style=scss --host=ts-ng-shl-siep-host
	5. 2. React
          nx g @nx/react:remote ts-rt-mff-siep-home --style=scss --host=ts-rt-shl-siep-host

6. Create Shared Library
	6. 1. npx nx generate @nx/js:library utils --unitTestRunner=jest --directory=shared --publishable --importPath=@ts-multi-shl-siep/shared/utils --no-interactive

7. Launch the project.
	7. 1. Angular
          npx nx run ts-ng-shl-siep-host:serve
	7. 2. React
          npx nx run ts-rt-shl-siep-host:serve

8. If we see an error, update the migrations and do _npm install_
 	8. 1. nx migrate latest
	8. 2. npm install
	
9. Relaunch the project.
	9. 1. Angular
          npx nx run ts-ng-shl-siep-host:serve
	9. 2. React
          npx nx run ts-rt-shl-siep-host:serve
