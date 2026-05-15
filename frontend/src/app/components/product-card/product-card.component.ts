import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../services/item.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="image-container">
        <div class="image-slider">
          <img *ngFor="let img of item.images" [src]="img" [alt]="item.name" loading="lazy">
        </div>
        <div class="badges">
          <span class="badge new">New</span>
        </div>
      </div>
      <div class="card-content">
        <h3 class="product-title">{{ item.name }}</h3>
        <p class="product-desc">{{ item.description }}</p>
        <div class="card-footer">
          <button class="btn-primary">View Details</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background-color: var(--card-bg);
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }

    .image-container {
      position: relative;
      width: 100%;
      height: 250px;
      overflow: hidden;
      background-color: #f1f5f9;
    }

    .image-slider {
      display: flex;
      width: 300%; /* 3 images */
      height: 100%;
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .image-slider img {
      width: 33.333%;
      height: 100%;
      object-fit: cover;
    }

    /* Animate on hover through the 3 images */
    .card:hover .image-slider {
      animation: slideImages 6s infinite alternate;
    }

    @keyframes slideImages {
      0%, 25% { transform: translateX(0); }
      35%, 65% { transform: translateX(-33.333%); }
      75%, 100% { transform: translateX(-66.666%); }
    }

    .badges {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    .badge {
      background-color: var(--primary-color);
      color: #fff;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .card-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .product-title {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: var(--text-main);
      transition: color 0.3s ease;
    }

    .card:hover .product-title {
      color: var(--primary-color);
    }

    .product-desc {
      color: var(--text-muted);
      font-size: 0.95rem;
      margin-bottom: 1.5rem;
      flex-grow: 1;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .card-footer {
      margin-top: auto;
    }

    .btn-primary {
      width: 100%;
      background-color: var(--primary-color);
      color: #fff;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1rem;
      transition: var(--transition);
    }

    .btn-primary:hover {
      background-color: var(--primary-hover);
      transform: scale(1.02);
    }
  `]
})
export class ProductCardComponent {
  @Input() item!: Item;
}
