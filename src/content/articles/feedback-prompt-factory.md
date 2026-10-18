---
title: "Retour d'expérience de la Prompt Factory."
date: 2026-10-18
description: "Un retour d'expérience sur mon utilisation des agents IAs"
category: tech
tags: ["ai", "vibe-coding", "productivity", "feedback"]
draft: false
lang: "fr"
ai: true
---

## Du joujou à l’outil quotidien

L’année dernière, j’ai commencé à intégrer sérieusement les agents IA dans mon workflow de développement. J’avais déjà touché à Copilot un peu avant, mais le vrai déclic, ça a été Cursor puis Claude Code.

Au début, des petits prompts, et j’étais bluffé. C’est vite devenu mon joujou quotidien. Je gagnais déjà pas mal de temps et d’efficacité, tout en restant totalement maître de mon code.

## Bienvenue dans la *Prompt Factory*

Puis les modèles sont devenus de plus en plus performants. Le *harness*, c’est-à-dire tout ce qu’on met autour de l’agent (instructions, outils, règles, garde-fous), est devenu de plus en plus élaboré. Je suis entré dans la boucle du *vibe coding* : on décrit ce qu’on veut, l’agent écrit, et on ne regarde plus vraiment le code. Je faisais confiance à l’IA. Peut-être trop.

Résultat, une avalanche de lignes de code, de MR, de nouvelles features. Je faisais tourner plusieurs agents en parallèle. Bref, ça dégueulait de code. Je n’étais plus maître de mon code, mais j’étais content : le produit avançait.

## La fatigue

Les MR devenaient trop grosses, parce que j’étais de plus en plus gourmand. Et je commençais à ressentir une vraie fatigue de l’IA. Je m’amusais à dire « Retour à la *Prompt Factory* », mais la blague cachait un vrai malaise : j’en étais arrivé à ne même plus relire les MR de façon rigoureuse.

Cette fatigue pesait. J’ai compris que j’allais dans le mur. Je voulais faire 10 000 trucs parce que je m’en croyais capable, et je me sentais débordé. Il fallait que ça change.

Je lisais en continu les retours d’autres développeurs et d’influenceurs. Je cherchais du feedback, mais je n’avais pas de mentor à ce moment-là. Mes seules sources d’inspiration, c’étaient les réseaux et des collègues et amis, qui faisaient comme moi. On avançait ensemble dans le flou, avec des usages étrangement similaires, sans même s’être concertés.

Une chose était claire : je devais redevenir maître de ce que je faisais, et maîtriser techniquement mon produit de A à Z.

## Bluffant en surface

Mon premier échec, c’est la migration d’une application cliente vers une stack ultra moderne. Je pensais pouvoir la migrer facilement, en un temps record.

Sur le papier, la méthode tenait la route :

1. cartographier l’application et prendre du recul ;
2. lister toutes les fonctionnalités existantes, et les améliorations à faire au passage ;
3. écrire des plans pour que des agents migrent l’application en autonomie ;
4. lancer d’autres agents pour cartographier les points techniques ;
5. garder l’ancienne application dans notre monorepo, pour que les agents puissent faire des allers-retours entre l’ancien et le neuf.

Et la migration est partie.

Une fois tous les plans exécutés et quelques ajustements faits, c’était visuellement bluffant. On avait bien repéré quelques coquilles ici et là, mais sur le parcours principal, RAS.

C’est en rentrant en profondeur dans l’application que ça s’est gâté : des coquilles dans tous les sens, des mini-régressions, des wordings différents, des erreurs inconnues. Les écrans étaient là ; certains comportements, non. J’étais extrêmement déçu de ce que je montrais.

J’ai donc repris l’application écran par écran, en la confrontant à l’ancienne. Les agents auditaient, et moi je vérifiais chaque constat avant de corriger. Objectif : revenir iso-fonctionnel, en mieux. Ça m’a coûté du temps et de l’énergie. Mais au final, je reste gagnant sur cette migration, en temps total et surtout en apprentissage. C’est elle qui m’a fait consolider mon usage des agents et le harness que je leur mets à disposition.

## Les tests comme contrat

Ma fierté, c’est la migration de la seconde application de ce même client. Il fallait l’aligner sur la même stack technique et le même design system que la première. Cette fois, j’avais un harness bien plus complet, et surtout une autre stratégie.

Pas question de revivre la première migration. L’idée est de figer le comportement de l’ancienne application sous forme de tests, puis rejouer ces tests sur la nouvelle. Si les résultats sont identiques sur les scénarios couverts, j’ai enfin une base concrète pour comparer les deux applications.

Concrètement :

- toutes les requêtes que l’ancienne application envoyait au serveur ont été figées, puis comparées à celles de la nouvelle, rôle par rôle, mutations comprises ;
- les règles de validation de chaque formulaire ont été transcrites, puis rejouées sur les nouveaux formulaires ;
- chaque écran a été passé au crible pour chaque rôle, avec captures et contrôle d’accessibilité.

On s’est appuyés sur des tests de caractérisation (*characterization testing*), une approche décrite par Michael Feathers dans *Working Effectively with Legacy Code*. Le principe : observer ce que fait réellement l’ancienne application et l’enregistrer dans des tests, pour repérer les changements de comportement pendant la réécriture.

Et ça a payé. Les tests ont fait remonter de vraies régressions (écritures, validations trop laxistes, droits d’accès), corrigées avant même la recette. Par exemple : Sur un formulaire, laisser un champ vide dans la nouvelle application effaçait la valeur existante, alors que l’ancienne la conservait. Visuellement, rien ne permettait de voir la différence. La comparaison des requêtes l’a fait ressortir. Je ne vais pas mentir : quelques coquilles sont quand même passées, surtout du wording et une poignée de bugs de saisie. Mais vraiment rien à voir avec la première fois.

## Et aujourd’hui ?

En discutant avec un ami, il m’a proposé un workflow que j’ai adopté depuis et que je teste encore. Je travaille sur une tâche principale, vraiment dans le code. En parallèle, un agent secondaire améliore l’application en tâche de fond (bump de packages, refacto, optimisations…). Il tourne dans un *worktree* isolé.

Je digère ainsi quelques MR de peu de lignes, que je relis et assimile vraiment. Le produit est plus robuste, et je suis de nouveau impliqué techniquement, chose que j’avais un peu perdue au fil de l’eau.

Je suis redevenu maître de mon code.
