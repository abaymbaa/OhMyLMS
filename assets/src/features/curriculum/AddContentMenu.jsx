import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, Dashicon, Dropdown, MenuGroup, MenuItem } from '@wordpress/components';

const ICONS = {
  skill: 'awards',
  library: 'book',
  attach: 'media-document',
  chapter: 'book-alt',
  topic: 'category',
};

/**
 * The "Add Content" button of the right pane, like the course builder's. `items` are
 * `{key, title, info, onClick}`; picking one closes the menu and runs it.
 */
export function AddContentMenu({ label, items, disabled }) {
  return (
    <Dropdown
      className="ohmylms-ws-add-content-wrap"
      popoverProps={{ placement: 'bottom-end', className: 'ohmylms-ws-content-popover' }}
      renderToggle={({ isOpen, onToggle }) => (
        <Button
          variant="secondary"
          className={`ohmylms-ws-add-content${isOpen ? ' is-open' : ''}`}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          disabled={disabled}
        >
          <Dashicon icon="plus-alt2" aria-hidden="true" />
          {__('Add Content', 'ohmylms')}
          <Dashicon icon="arrow-down-alt2" className="ohmylms-ws-add-chevron" aria-hidden="true" />
        </Button>
      )}
      renderContent={({ onClose }) => (
        <MenuGroup label={label}>
          {items.map((item) => (
            <MenuItem
              key={item.key}
              className="ohmylms-ws-content-option"
              onClick={() => {
                onClose();
                item.onClick();
              }}
            >
              <span className={`ohmylms-ws-content-icon is-${item.key}`} aria-hidden="true">
                <Dashicon icon={ICONS[item.key] || 'plus-alt2'} />
              </span>
              <span className="ohmylms-ws-content-copy">
                <span className="ohmylms-ws-content-title">{item.title}</span>
                <span className="ohmylms-ws-content-info">{item.info}</span>
              </span>
              <Dashicon
                icon="arrow-right-alt2"
                className="ohmylms-ws-content-arrow"
                aria-hidden="true"
              />
            </MenuItem>
          ))}
        </MenuGroup>
      )}
    />
  );
}
