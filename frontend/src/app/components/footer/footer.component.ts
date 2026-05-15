import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>LimeStore</h3>
          <p>Modern MEAN stack application demo.</p>
        </div>
        <div class="footer-section">
          <h4>Links</h4>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 LimeStore. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--footer-bg);
      color: #fff;
      padding: 3rem 2rem 1rem;
      margin-top: 4rem;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 2rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 2rem;
    }

    .footer-section h3 {
      color: var(--primary-color);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .footer-section h4 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .footer-section p {
      color: #94a3b8;
    }

    .footer-section a {
      display: block;
      color: #94a3b8;
      margin-bottom: 0.5rem;
      transition: var(--transition);
    }

    .footer-section a:hover {
      color: var(--primary-color);
      transform: translateX(5px);
    }

    .footer-bottom {
      text-align: center;
      padding-top: 1.5rem;
      color: #64748b;
      font-size: 0.9rem;
    }
  `]
})
export class FooterComponent {}
