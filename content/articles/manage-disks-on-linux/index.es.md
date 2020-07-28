+++
template = "page.html"
title = "Gestión de discos y particiones en linux"
date =  2019-07-27
draft = false
tags = ["tech", "computer"]
lang = "es"
+++


# Lista de particiones y discos del sistema  lsblk

`lsblk` enumera las diferentes particiones y discos del sistema con sus identificadores en forma de dendograma.

```
lsblk
```

#  Montar un disco

Es necesario crear un directorio que sirva de punto de montaje para el disco a montar. El comando `mount` monta el disco en el punto de montaje.

```
sudo mkdir /{el nombre del directorio del punto de montaje}
sudo mount /dev/{el nombre del disco} /{el nombre del directorio del punto de montaje}
```

# Quitar un disco

El comando `umount` se usa para desmontar un disco en el sistema. Simplemente especifique el ID del disco o el nombre del punto de montaje para desmontar el disco.

```
sudo umount /dev/sdb
```

# Montar un disco de forma permanente


El sistema puede ser instruido para montar los discos automáticamente. Esta información sobre los discos montados está disponible en el archivo `/etc/fstab`

```
cat /etc/fstab
```

Para añadir un nuevo disco para ser montado permanentemente, simplemente edite el archivo `/etc/fstab`.

```
sudo vi /etc/fstab
```
fstab es una matriz de 6 columnas donde cada fila describe un disco o partición y su punto de montaje.

1. **Device** 
2. **Mount point**
3. **File system type**
4. **Options**
5. **Backup operation**
6. **File system check order**

Cuando fstab está bien escrito, debes probar los montajes automáticos para usar el comando :

```
sudo mount -a
```

Si este comando funciona, entonces es posible reiniciar el sistema.

```
sudo reboot
```
