-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  jeu. 09 avr. 2020 à 09:30
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ICAM_2022_bdd4`
--

-- --------------------------------------------------------

--
-- Structure de la table `4_2_critiques`
--

CREATE TABLE `4_2_critiques` (
  `id_critique` int(11) NOT NULL,
  `note` tinyint(4) NOT NULL,
  `commentaire` text NOT NULL,
  `source` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `4_2_critiques`
--

INSERT INTO `4_2_critiques` (`id_critique`, `note`, `commentaire`, `source`) VALUES
(1, 4, 'Ce second opus est encore meilleur que le premier sorti en 2014. Le scénario cosigné Philippe de Chauveron et Guy Laurent est particulièrement bien écrit. Les répliques fusent. Les rebondissements sont multiples.', 'Le Figaro'),
(2, 4, 'Le gros carton du premier film a surpris toute l\'équipe, aujourd\'hui ravie de se retrouver en famille - tout comme nous qui retrouvons l\'humour décalé de Chantal Lauby et de toute la bande.', 'Femme Actuelle'),
(3, 3, 'Cinq ans après un premier film vu en salle par 12 millions de spectateurs, Philippe de Chauveron en propose une suite plus enlevée.', 'Le Monde'),
(4, 2, 'Qu’est-ce qu’on a encore fait au bon Dieu ? s’avère beaucoup moins inspiré que son aîné et malgré les efforts surhumains déployés par Chantal Lauby et Christian Clavier (plus patriote que jamais), le concept semble déjà bien usé.', 'Première'),
(5, 3, 'La mécanique dramatique et vaudevillesque bien huilée fonctionne sans trop de ratés.\r\n\r\n', 'Dernières Nouvelles d\'Alsace');

-- --------------------------------------------------------

--
-- Structure de la table `4_2_films`
--

CREATE TABLE `4_2_films` (
  `id_film` int(11) NOT NULL,
  `titre` varchar(128) NOT NULL,
  `date_sortie` date NOT NULL,
  `realisateur` varchar(64) NOT NULL,
  `synopsis` text NOT NULL,
  `affiche` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `4_2_films`
--

INSERT INTO `4_2_films` (`id_film`, `titre`, `date_sortie`, `realisateur`, `synopsis`, `affiche`) VALUES
(1, 'Mon bébé', '2019-03-13', 'Lisa Azuelos', 'Héloïse est mère de trois enfants. Jade, sa \"petite dernière\", vient d’avoir dix-huit ans et va bientôt quitter le nid pour continuer ses études au Canada.\r\nAu fur et à mesure que le couperet du baccalauréat et du départ de Jade se rapproche, et dans le stress que cela représente, Héloïse se remémore leurs souvenirs partagés, ceux d’une tendre et fusionnelle relation mère-fille, et anticipe ce départ en jouant les apprenties cinéastes avec son IPhone, de peur que certains souvenirs ne lui échappent...\r\nElle veut tellement profiter de ces derniers moments ensemble, qu’elle en oublierait presque de vivre le présent, dans la joie et la complicité qu’elle a toujours su créer avec sa fille, \"son bébé\".', 'monbébé.'),
(2, 'Rebelles', '2019-03-13', 'Allan Mauduit', 'Sans boulot ni diplôme, Sandra, ex miss Nord-Pas-de-Calais, revient s\'installer chez sa mère à Boulogne-sur-Mer après 15 ans sur la Côte d\'Azur. Embauchée à la conserverie locale, elle repousse vigoureusement les avances de son chef et le tue accidentellement. Deux autres filles ont été témoins de la scène. Alors qu\'elles s\'apprêtent à appeler les secours, les trois ouvrières découvrent un sac plein de billets dans le casier du mort. Une fortune qu\'elles décident de se partager. C\'est là que leurs ennuis commencent...', 'rebelles'),
(3, 'Le chant du loup', '2019-03-20', 'Antonin Baudry', 'Un jeune homme a le don rare de reconnaître chaque son qu’il entend. A bord d’un sous-marin nucléaire français, tout repose sur lui, l’Oreille d’Or.\r\nRéputé infaillible, il commet pourtant une erreur qui met l’équipage en danger de mort. Il veut retrouver la confiance de ses camarades mais sa quête les entraîne dans une situation encore plus dramatique.\r\nDans le monde de la dissuasion nucléaire et de la désinformation, ils se retrouvent tous pris au piège d’un engrenage incontrôlable.', 'chantdul'),
(4, 'Qu\'est ce qu\'on a encore fait au bon dieu ?', '2019-01-30', 'Philippe de Chauveron', 'Le retour des familles Verneuil et Koffi au grand complet !\r\nClaude et Marie Verneuil font face à une nouvelle crise.\r\nLeurs quatre gendres, Rachid, David, Chao et Charles sont décidés à quitter la France avec femmes et enfants pour tenter leur chance à l’étranger.\r\nIncapables d’imaginer leur famille loin d’eux, Claude et Marie sont prêts à tout pour les retenir.\r\nDe leur côté, les Koffi débarquent en France pour le mariage de leur fille. Eux non plus ne sont pas au bout de leurs surprises… ', 'bondieu.');

-- --------------------------------------------------------

--
-- Structure de la table `4_2_salles`
--

CREATE TABLE `4_2_salles` (
  `id_salle` int(11) NOT NULL,
  `numero` tinyint(4) NOT NULL,
  `nombre_places` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `4_2_salles`
--

INSERT INTO `4_2_salles` (`id_salle`, `numero`, `nombre_places`) VALUES
(1, 4, 56),
(2, 3, 88),
(3, 1, 126),
(4, 2, 110);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `4_2_critiques`
--
ALTER TABLE `4_2_critiques`
  ADD PRIMARY KEY (`id_critique`);

--
-- Index pour la table `4_2_films`
--
ALTER TABLE `4_2_films`
  ADD PRIMARY KEY (`id_film`);

--
-- Index pour la table `4_2_salles`
--
ALTER TABLE `4_2_salles`
  ADD PRIMARY KEY (`id_salle`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `4_2_critiques`
--
ALTER TABLE `4_2_critiques`
  MODIFY `id_critique` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `4_2_films`
--
ALTER TABLE `4_2_films`
  MODIFY `id_film` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `4_2_salles`
--
ALTER TABLE `4_2_salles`
  MODIFY `id_salle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
