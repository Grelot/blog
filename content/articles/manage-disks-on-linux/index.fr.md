+++
template = "page.html"
title = "La gestion des disques et des partitions sur linux"
date =  2019-07-27
draft = false
description="Commandes sur bash dans un système linux pour la vérification, l'ajout ou la suppression de périphériques de stockage, la création et la suppression de partitions."
tags = ["tech", "computer"]

+++


# Lister les partitions et les disques du systeme lsblk

`lsblk` répertorie les différentes partitions et disques du système avec leurs identifiants sous la forme d'un dendogramme.

```
lsblk
```

# Monter un disque

Il est nécessaire de créer un répertoire qui servira de mount point pour le disque à monter. La commande `mount` monte le disque sur le point de montage.

```
sudo mkdir /{le nom du répertoire qui sert de mount point}
sudo mount /dev/{identifiant du disque} /{le nom du répertoire qui sert de mount point}
```

# Démonter un disque

La commande `umount` permet de démonter un disque sur le système. Il suffit d'indiquer l'identifiant du disque ou le nom du point de montage pour démonter le disque.

```
sudo umount /dev/sdb
```

# Monter un disque de façon permanente


Il est possible de donner au système des instructions pour monter les disques automatiquement. Ces informations à propos des disques montés sont disponibles dans le fichier `/etc/fstab`

```
cat /etc/fstab
```

Pour ajouter un nouveau disque à monter de façon permanente, il suffit de modifier le fichier `/etc/fstab`.

```
sudo vi /etc/fstab
```
fstab est un tableau de 6 colonnes où chaque ligne décrit un disque ou une partition et son point de montage.

1. **Device** spécifie le disque à monter. La plupart des distributions spécifient les partitions par leurs identifiants ou leurs UUID.
2. **Mount point**  spécifie le point de montage où le disque doit être monté. C'est toujours un repertoire vide.
3. **File system type** spécifie le type de système de fichiers du disque *i.e.* ext4
4. **Options** spécifie les options de montage. La plupart des systèmes de fichiers supportent plusieurs options de montage, qui modifient la façon dont le kernel traite le système de fichiers. Il peut y avoir plusieurs options de montage, séparées par des virgules.
5. **Backup operation** a la valeur 1 si `dump` doit faire une sauvegarde, il a la valeur 0 autrement. Utile seulement si `dump` est actif.
6. **File system check order** a la valeur 0 ce qui signifique que `fsck` n'a pas besoin de vérifier ce disque.

Lorsque fstab est bien rempli, il faut tester les montages automatiques avec la commande :
```
sudo mount -a
```

Si cette commande fonctionne, alors il est possible de redémarrer le système. De ma propre expérience, la plupart des erreurs que j'ai eu avec la commande `mount` étaient dûes à un mauvais typage du système de fichier du disque.

```
sudo reboot
```
