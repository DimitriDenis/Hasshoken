// File: /hasshoken/src/types/combatTechnique.ts

/**
 * Énumération des types de techniques de combat
 */
export enum TechniqueType {
    FRAPPE = 'Frappe',
    PROJECTION = 'Projection',
    COUP_SPECIAL = 'Coup Spécial',
    TECHNIQUE_SECRETE = 'Technique Secrète',
    ATTAQUE_ELEMENTAIRE = 'Attaque Élémentaire',
    TECHNIQUE_SURVIE = 'Technique de Survie'
  }
  
  /**
   * Énumération des éléments de combat
   */
  export enum CombatElement {
    FEU = 'Feu',
    EAU = 'Eau',
    TERRE = 'Terre',
    AIR = 'Air',
    LUMIERE = 'Lumière',
    TENEBRES = 'Ténèbres',
    FOUDRE = 'Foudre',
    GLACE = 'Glace',
    NATURE = 'Nature'
  }
  
  /**
   * Énumération des styles de combat
   */
  export enum CombatStyle {
    ARTS_MARTIAUX = 'Arts Martiaux',
    NINJA = 'Ninja',
    SAMOURAI = 'Samouraï',
    BOXE = 'Boxe',
    KARATE = 'Karaté',
    KUNG_FU = 'Kung-fu',
    CATCH = 'Catch',
    COMBAT_MYSTIQUE = 'Combat Mystique'
  }
  
  /**
   * Énumération des niveaux d'intensité
   */
  export enum IntensityLevel {
    LEGERE = 'Légère',
    MOYENNE = 'Moyenne',
    PUISSANTE = 'Puissante',
    EXTREME = 'Extrême',
    DEVASTATRICE = 'Dévastatrice',
    SURHUMAINE = 'Surhumaine'
  }
  
  /**
   * Interface pour une technique de combat
   */
  export interface CombatTechnique {
    /**
     * Identifiant unique de la technique
     */
    id: string;
  
    /**
     * Nom de la technique
     */
    name: string;
  
    /**
     * Description détaillée de la technique
     */
    description: string;
  
    /**
     * Type de technique
     */
    type: TechniqueType;
  
    /**
     * Élément associé à la technique
     */
    element: CombatElement;
  
    /**
     * Style de combat
     */
    style: CombatStyle;
  
    /**
     * Niveau d'intensité de la technique
     */
    intensity: IntensityLevel;
  
    /**
     * Puissance estimée de la technique (0-100)
     */
    power: number;
  
    /**
     * Risque ou difficulté d'exécution (0-100)
     */
    risk: number;
  
    /**
     * Tags ou mots-clés supplémentaires
     */
    tags?: string[];
  
    /**
     * Date de création de la technique
     */
    createdAt: Date;
  }
  
  /**
   * Type pour la configuration de génération de techniques
   */
  export interface TechniqueGeneratorConfig {
    /**
     * Nombre de techniques à générer
     */
    count?: number;
  
    /**
     * Filtres optionnels pour la génération
     */
    filters?: {
      type?: TechniqueType[];
      element?: CombatElement[];
      style?: CombatStyle[];
      minPower?: number;
      maxRisk?: number;
    };
  }
  
  /**
   * Type pour le résultat de génération de techniques
   */
  export type TechniqueGenerationResult = {
    techniques: CombatTechnique[];
    generatedAt: Date;
  };