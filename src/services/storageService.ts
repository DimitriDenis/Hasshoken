// File: /hasshoken/src/services/storageService.ts
import { CombatTechnique } from '../types/combatTechnique';

export class StorageService {
  private static STORAGE_KEY = 'hasshoken_techniques';

  /**
   * Sauvegarde les techniques dans le localStorage
   * @param techniques Liste des techniques à sauvegarder
   */
  static saveTechniques(techniques: CombatTechnique[]): void {
    try {
      // Récupérer les techniques existantes
      const savedTechniques = this.getSavedTechniques();
      
      // Ajouter les nouvelles techniques
      const updatedTechniques = [
        ...savedTechniques,
        ...techniques
      ];

      // Limiter à 50 techniques maximum
      const limitedTechniques = updatedTechniques.slice(-50);

      // Sauvegarder dans le localStorage
      localStorage.setItem(
        this.STORAGE_KEY, 
        JSON.stringify(limitedTechniques)
      );
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des techniques', error);
    }
  }

  /**
   * Récupère les techniques sauvegardées
   * @returns Liste des techniques sauvegardées
   */
  static getSavedTechniques(): CombatTechnique[] {
    try {
      const savedData = localStorage.getItem(this.STORAGE_KEY);
      return savedData ? JSON.parse(savedData) : [];
    } catch (error) {
      console.error('Erreur lors de la récupération des techniques', error);
      return [];
    }
  }

  /**
   * Supprime une technique spécifique
   * @param techniqueId ID de la technique à supprimer
   */
  static removeTechnique(techniqueId: string): void {
    try {
      const savedTechniques = this.getSavedTechniques();
      const updatedTechniques = savedTechniques.filter(
        technique => technique.id !== techniqueId
      );

      localStorage.setItem(
        this.STORAGE_KEY, 
        JSON.stringify(updatedTechniques)
      );
    } catch (error) {
      console.error('Erreur lors de la suppression de la technique', error);
    }
  }

  /**
   * Supprime toutes les techniques sauvegardées
   */
  static clearSavedTechniques(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('Erreur lors de la suppression des techniques', error);
    }
  }

  /**
   * Vérifie si le localStorage est disponible
   * @returns Booléen indiquant si le localStorage est disponible
   */
  static isStorageAvailable(): boolean {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch (error) {
      return false;
    }
  }
}