// File: /hasshoken/src/main.ts
import './styles.css'
import { TechniqueGenerator } from './data/techniqueData'
import { 
  CombatTechnique, 
  TechniqueType, 
  CombatElement 
} from './types/combatTechnique'

class TechniqueGeneratorUI {
  private techniqueContainer: HTMLElement
  private generateButton: HTMLButtonElement
  private saveButton: HTMLButtonElement
  private shareButton: HTMLButtonElement
  private countSelect: HTMLSelectElement
  private typeSelect: HTMLSelectElement
  private elementSelect: HTMLSelectElement
  private techniqueActionsContainer: HTMLElement

  constructor() {
    this.initializeElements()
    this.bindEvents()
  }

  private initializeElements() {
    this.techniqueContainer = document.getElementById('technique-generator')!
    this.generateButton = document.getElementById('generate-technique') as HTMLButtonElement
    this.saveButton = document.getElementById('save-techniques') as HTMLButtonElement
    this.shareButton = document.getElementById('share-techniques') as HTMLButtonElement
    this.countSelect = document.getElementById('technique-count') as HTMLSelectElement
    this.typeSelect = document.getElementById('technique-type') as HTMLSelectElement
    this.elementSelect = document.getElementById('technique-element') as HTMLSelectElement
    this.techniqueActionsContainer = document.getElementById('technique-actions')!
  }

  private bindEvents() {
    this.generateButton.addEventListener('click', () => this.generateTechniques())
    this.saveButton.addEventListener('click', () => this.saveTechniques())
    this.shareButton.addEventListener('click', () => this.shareTechniques())
  }

  private generateTechniques() {
    const count = parseInt(this.countSelect.value)
    const type = this.typeSelect.value as TechniqueType | ''
    const element = this.elementSelect.value as CombatElement | ''

    let techniques = TechniqueGenerator.generateTechniques(count)

    // Filtrer par type si sélectionné
    if (type) {
      techniques = techniques.filter(t => t.type === type)
    }

    // Filtrer par élément si sélectionné
    if (element) {
      techniques = techniques.filter(t => t.element === element)
    }

    // Réafficher les techniques si aucun résultat
    if (techniques.length === 0) {
      techniques = TechniqueGenerator.generateTechniques(count)
    }

    this.displayTechniques(techniques)
  }

  private displayTechniques(techniques: CombatTechnique[]) {
    // Vider le conteneur précédent
    this.techniqueContainer.innerHTML = ''

    // Afficher chaque technique
    techniques.forEach(technique => {
      const techniqueElement = document.createElement('div')
      techniqueElement.classList.add('technique-card', 'animate-fade-in')
      techniqueElement.innerHTML = `
        <h2 class="text-2xl font-bold gradient-text mb-2">${technique.name}</h2>
        <p class="text-gray-600 mb-4">${technique.description}</p>
        <div class="grid grid-cols-2 gap-2 text-sm">
          <p><strong>Type :</strong> ${technique.type}</p>
          <p><strong>Élément :</strong> ${technique.element}</p>
          <p><strong>Style :</strong> ${technique.style}</p>
          <p><strong>Intensité :</strong> ${technique.intensity}</p>
          <p><strong>Puissance :</strong> ${technique.power}/100</p>
          <p><strong>Risque :</strong> ${technique.risk}/100</p>
        </div>
        <div class="mt-4">
          <strong>Tags :</strong> 
          <span class="text-sm text-gray-500">
            ${technique.tags?.join(', ') || 'Aucun'}
          </span>
        </div>
      `
      this.techniqueContainer.appendChild(techniqueElement)
    })

    // Afficher les boutons d'actions
    this.techniqueActionsContainer.style.display = 'block'
  }

  private saveTechniques() {
    // TODO: Implémenter la sauvegarde des techniques
    alert('Fonctionnalité de sauvegarde à venir !')
  }

  private shareTechniques() {
    // TODO: Implémenter le partage des techniques
    alert('Fonctionnalité de partage à venir !')
  }
}

// Initialiser l'interface utilisateur une fois le DOM chargé
document.addEventListener('DOMContentLoaded', () => {
  new TechniqueGeneratorUI()
});