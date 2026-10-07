import { createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button, Dashicon, Dropdown, MenuGroup, MenuItem } from '@wordpress/components';

/**
 * The "Add Content" button of the right pane, like the course builder's. `items` are
 * `{key, title, info, onClick}`; picking one closes the menu and runs it.
 */
export function AddContentMenu({ label, items, disabled }) {
  return (
    <Dropdown
      className="ohmylms-ws-add-content-wrap"
      popoverProps={{ placement: 'bottom-start', className: 'ohmylms-ws-popover' }}
      renderToggle={({ isOpen, onToggle }) => (
        <Button
          variant="secondary"
          className="ohmylms-ws-add-content"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          disabled={disabled}
        >
          <Dashicon icon="plus-alt2" />
          {__('Add Content', 'ohmylms')}
        </Button>
      )}
      renderContent={({ onClose }) => (
        <MenuGroup label={label}>
          {items.map((item) => (
            <MenuItem
              key={item.key}
              info={item.info}
              onClick={() => {
                onClose();
                item.onClick();
              }}
            >
              {item.title}
            </MenuItem>
          ))}
        </MenuGroup>
      )}
    />
  );
}
