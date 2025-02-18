// File: /hasshoken/src/main.ts
import './styles.css'
import { TechniqueGenerator } from './data/techniqueData'

document.addEventListener('DOMContentLoaded', () => {
  const techniqueContainer = document.getElementById('technique-generator')
  
  if (techniqueContainer) {
    // Générer 3 techniques
    const techniques = TechniqueGenerator.generateTechniques(3)
    
    // Afficher les techniques
    techniqueContainer.innerHTML = techniques.map(technique => `
      <div class="card mb-4 p-4 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-bold text-combat-primary">${technique.name}</h2>
        <p class="text-gray-600 mb-2">${technique.description}</p>
        <div class="grid grid-cols-2 gap-2">
          <p><strong>Type :</strong> ${technique.type}</p>
          <p><strong>Élément :</strong> ${technique.element}</p>
          <p><strong>Style :</strong> ${technique.style}</p>
          <p><strong>Intensité :</strong> ${technique.intensity}</p>
          <p><strong>Puissance :</strong> ${technique.power}</p>
          <p><strong>Risque :</strong> ${technique.risk}</p>
        </div>
        <div class="mt-2">
          <strong>Tags :</strong> ${technique.tags?.join(', ') || 'Aucun'}
        </div>
      </div>
    `).join('')
  }
});