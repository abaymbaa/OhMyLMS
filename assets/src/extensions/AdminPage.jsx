import { createElement } from '@wordpress/element';

/**
 * Shared frame for SDK admin pages so they match the native screens: title row with optional
 * description and actions, then content. Styles live in assets/css/admin-ui.css and read the
 * design tokens, so pages follow the colors and font chosen under Settings → Design.
 */
export function AdminPage({ title, description, actions, className = '', children }) {
  return (
    <section className={`ohmylms-ext-page ${className}`.trim()}>
      <header className="ohmylms-ext-header">
        <div>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
        {actions && <div className="ohmylms-ext-actions">{actions}</div>}
      </header>
      {children}
    </section>
  );
}

/** White content card; an optional heading. */
export function AdminCard({ title, className = '', children }) {
  return (
    <div className={`ohmylms-ext-card ${className}`.trim()}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
