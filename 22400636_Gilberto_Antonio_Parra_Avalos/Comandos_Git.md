1. Comando: git init
Descripcion: 
Inicializa un nuevo repositorio Git en el directorio actual.
Ejemplo de caso de uso:
Crear un repositorio para comenzar a controlar las versiones de un nuevo proyecto.
2. Comando: git clone https://github.com/usuario/proyecto.git
Descripción:
Copia un repositorio remoto a la computadora local.
Ejemplo de caso de uso:
Descargar un proyecto existente de GitHub para trabajar en él.
3. Comando: Git Status 
git status
Descripción:
Muestra el estado actual de los archivos dentro del repositorio.
Ejemplo de caso de uso:
Ver qué archivos han sido modificados antes de realizar un commit.
### 4. Comando:Git Add
git add archivo.txt
Descripción:
Agrega archivos al área de preparación (staging).
Ejemplo de caso de uso:
Preparar cambios para incluirlos en el siguiente commit.
5.Comando:Git Commit
git commit -m "Se agregó una nueva función"
Descripción:
Guarda los cambios preparados en el historial del repositorio.

Ejemplo de caso de uso:
Registrar una nueva versión del proyecto después de realizar modificaciones.
 6.Comando: Git Log
git log
Descripción:
Muestra el historial de commits realizados.
Ejemplo de caso de uso:
Revisar quién realizó cambios y cuándo fueron realizados.

 7. Comando:Git Diff
git diff
Descripción:
Muestra las diferencias entre versiones de archivos.
Ejemplo de caso de uso:
Verificar los cambios realizados antes de hacer un commit.

Comando:8. Git Branch
git branch desarrollo
Descripción:
Crea, lista o elimina ramas.
Ejemplo de caso de uso:
Crear una rama para desarrollar una nueva funcionalidad sin afectar la principal.



9.Comando: git checkout desarrollo

Descripción:
Permite cambiar entre ramas o restaurar archivos.

Ejemplo de caso de uso:
Cambiar a una rama específica para continuar trabajando.

10.Comando: git switch main

Descripción:
Cambia de una rama a otra utilizando una sintaxis más moderna.

Ejemplo de caso de uso:
Volver a la rama principal después de terminar una tarea.

11.Comando: git merge desarrollo

Descripción:
Combina los cambios de una rama con otra.

Ejemplo de caso de uso:
Integrar una funcionalidad terminada en la rama principal.

12.Comando: git pull origin main

Descripción:
Descarga y fusiona cambios desde un repositorio remoto.

Ejemplo de caso de uso:
Actualizar la copia local con los cambios realizados por otros colaboradores.

13.Comando: git push origin main

Descripción:
Envía los commits locales al repositorio remoto.

Ejemplo de caso de uso:
Subir cambios a GitHub para compartirlos con el equipo.

14.Comando: git fetch origin

Descripción:
Descarga cambios del repositorio remoto sin fusionarlos.

Ejemplo de caso de uso:
Revisar actualizaciones antes de integrarlas al proyecto local.

15.Comando: git remote -v

Descripción:
Muestra o administra los repositorios remotos asociados.

Ejemplo de caso de uso:
Verificar la dirección del repositorio remoto configurado.

16.Comando: git rm archivo.txt

Descripción:
Elimina archivos del repositorio y del sistema de archivos.

Ejemplo de caso de uso:
Borrar archivos que ya no son necesarios en el proyecto.

17.Comando: git mv viejo.txt nuevo.txt

Descripción:
Mueve o renombra archivos dentro del repositorio.

Ejemplo de caso de uso:
Cambiar el nombre de un archivo manteniendo su historial de versiones.

18.Comando: git reset archivo.txt

Descripción:
Deshace cambios en el área de preparación o en commits.

Ejemplo de caso de uso:
Quitar un archivo agregado por error al área de preparación.

19.Comando: git revert a1b2c3d

Descripción:
Revierte los cambios de un commit creando uno nuevo.

Ejemplo de caso de uso:
Deshacer una modificación errónea sin eliminar el historial del proyecto.

20.Comando: git stash

Descripción:
Guarda temporalmente cambios sin necesidad de hacer un commit.

Ejemplo de caso de uso:
Pausar el trabajo actual para cambiar de rama y retomarlo después.
