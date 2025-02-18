// File: /hasshoken/src/data/techniqueData.ts
import { 
    CombatTechnique, 
    TechniqueType, 
    CombatElement, 
    CombatStyle, 
    IntensityLevel 
  } from '../types/combatTechnique';
  
  import { v4 as uuidv4 } from 'uuid';
  
  /**
   * Générateur de techniques de combat
   */
  export class TechniqueGenerator {
    /**
     * Génère une technique de combat aléatoire
     * @returns Une technique de combat générée
     */
    static generateTechnique(): CombatTechnique {
      return {
        id: uuidv4(),
        name: this.generateTechniqueName(),
        description: this.generateTechniqueDescription(),
        type: this.getRandomEnum(TechniqueType),
        element: this.getRandomEnum(CombatElement),
        style: this.getRandomEnum(CombatStyle),
        intensity: this.getRandomEnum(IntensityLevel),
        power: this.generateRandomNumber(30, 90),
        risk: this.generateRandomNumber(10, 70),
        tags: this.generateTags(),
        createdAt: new Date()
      };
    }
  
    /**
     * Génère plusieurs techniques de combat
     * @param count Nombre de techniques à générer
     * @returns Un tableau de techniques de combat
     */
    static generateTechniques(count: number = 3): CombatTechnique[] {
      return Array.from({ length: count }, () => this.generateTechnique());
    }
  
    /**
     * Génère un nom de technique aléatoire
     * @returns Un nom de technique
     */
    private static generateTechniqueName(): string {
      const prefixes = [
        'Poing du', 'Griffe de', 'Souffle du', 'Fureur du', 
        'Esprit du', 'Technique du', 'Éclair du', 'Rage du'
      ];
      const suffixes = [
        'Dragon', 'Tonnerre', 'Vent', 'Montagne', 
        'Phoenix', 'Tigre', 'Serpent', 'Héros', 
        'Cosmos', 'Tempête'
      ];
  
      return `${this.getRandomItem(prefixes)} ${this.getRandomItem(suffixes)}`;
    }
  
    /**
     * Génère une description de technique aléatoire
     * @returns Une description de technique
     */
    private static generateTechniqueDescription(): string {
      const descriptions = [
        'Une technique redoutable qui surprend l\'adversaire.',
        'Une attaque qui combine force et précision.',
        'Une technique transmise de génération en génération.',
        'Un mouvement qui défie les lois de la physique.',
        'Une méthode de combat qui allie puissance et élégance.'
      ];
  
      return this.getRandomItem(descriptions);
    }
  
    /**
     * Génère des tags aléatoires pour la technique
     * @returns Un tableau de tags
     */
    private static generateTags(): string[] {
      const allTags = [
        'Rapide', 'Puissant', 'Technique', 'Défensif', 
        'Offensif', 'Surprenant', 'Précis', 'Dangereux'
      ];
  
      const tagCount = this.generateRandomNumber(1, 3);
      return Array.from({ length: tagCount }, () => this.getRandomItem(allTags));
    }
  
    /**
     * Sélectionne un élément aléatoire dans un enum
     * @param enumObj L'enum à utiliser
     * @returns Un élément aléatoire de l'enum
     */
    private static getRandomEnum<T extends Record<string, string>>(enumObj: T): T[keyof T] {
        const values = Object.values(enumObj) as Array<T[keyof T]>;
        return this.getRandomItem(values);
      }
  
    /**
     * Sélectionne un élément aléatoire dans un tableau
     * @param array Le tableau à utiliser
     * @returns Un élément aléatoire du tableau
     */
    private static getRandomItem<T>(array: T[]): T {
      return array[Math.floor(Math.random() * array.length)];
    }
  
    /**
     * Génère un nombre aléatoire dans une plage donnée
     * @param min Valeur minimale
     * @param max Valeur maximale
     * @returns Un nombre aléatoire
     */
    private static generateRandomNumber(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  
  // Exemple d'utilisation
  export const sampleTechniques = TechniqueGenerator.generateTechniques(5);