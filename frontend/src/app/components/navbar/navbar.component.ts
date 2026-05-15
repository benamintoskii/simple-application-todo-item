import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar">
      <div class="nav-content">
        <a href="#" class="logo">
          <span class="icon">🛍️</span>
          <span class="text">LimeStore</span>
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: var(--nav-bg);
      box-shadow: var(--shadow-sm);
      position: sticky;
      top: 0;
      z-index: 100;
      padding: 1rem 2rem;
    }

    .nav-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-main);
      transition: var(--transition);
    }

    .logo:hover {
      transform: scale(1.05);
    }

    .logo .text {
      background: linear-gradient(45deg, var(--primary-color), #22c55e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-link {
      color: var(--text-muted);
      font-weight: 500;
      position: relative;
      padding-bottom: 0.25rem;
      transition: var(--transition);
    }

    .nav-link:hover, .nav-link.active {
      color: var(--text-main);
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-color);
      transition: var(--transition);
    }

    .nav-link:hover::after, .nav-link.active::after {
      width: 100%;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none; /* In a real app, we'd add a hamburger menu */
      }
    }
  `]
})
export class NavbarComponent {}
