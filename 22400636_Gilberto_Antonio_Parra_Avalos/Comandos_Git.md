| Comando        | Descripción                                         | Ejemplo de caso de uso                                                               |
| `git init`     | Inicializa un nuevo repositorio Git en una carpeta. | Crear un repositorio para un proyecto nuevo. `git init`                              |
| `git clone`    | Copia un repositorio remoto a tu computadora.       | Descargar un proyecto de GitHub. `git clone https://github.com/usuario/proyecto.git` |
| `git status`   | Muestra el estado actual del repositorio.           | Ver qué archivos han sido modificados. `git status`                                  |
| `git add`      | Agrega archivos al área de preparación (staging).   | Preparar cambios antes de un commit. `git add archivo.txt`                           |
| `git commit`   | Guarda los cambios preparados en el historial.      | Registrar una nueva versión del proyecto. `git commit -m "Se agregó login"`          |
| `git log`      | Muestra el historial de commits.                    | Revisar cambios realizados anteriormente. `git log`                                  |
| `git diff`     | Muestra diferencias entre archivos o versiones.     | Ver cambios antes de hacer commit. `git diff`                                        |
| `git branch`   | Lista, crea o elimina ramas.                        | Crear una rama para una nueva función. `git branch desarrollo`                       |
| `git checkout` | Cambia de rama o restaura archivos.                 | Cambiar a la rama desarrollo. `git checkout desarrollo`                              |
| `git switch`   | Cambia entre ramas (comando moderno).               | Ir a la rama principal. `git switch main`                                            |
| `git merge`    | Combina cambios de una rama en otra.                | Integrar la rama desarrollo en main. `git merge desarrollo`                          |
| `git pull`     | Descarga y fusiona cambios del repositorio remoto.  | Actualizar el proyecto local. `git pull origin main`                                 |
| `git push`     | Envía cambios al repositorio remoto.                | Subir commits a GitHub. `git push origin main`                                       |
| `git fetch`    | Descarga cambios remotos sin fusionarlos.           | Revisar actualizaciones antes de integrarlas. `git fetch origin`                     |
| `git remote`   | Administra repositorios remotos.                    | Ver repositorios remotos configurados. `git remote -v`                               |
| `git rm`       | Elimina archivos del repositorio y del sistema.     | Borrar un archivo innecesario. `git rm archivo.txt`                                  |
| `git mv`       | Mueve o renombra archivos.                          | Cambiar el nombre de un archivo. `git mv viejo.txt nuevo.txt`                        |
| `git reset`    | Deshace cambios en staging o commits.               | Quitar un archivo del área de preparación. `git reset archivo.txt`                   |
| `git revert`   | Revierte un commit creando uno nuevo.               | Deshacer cambios sin alterar el historial. `git revert a1b2c3d`                      |
| `git stash`    | Guarda temporalmente cambios sin hacer commit.      | Cambiar de rama sin perder trabajo. `git stash`                                      |
